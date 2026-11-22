"use strict";

const STORAGE_KEY = "eduvibePhysicsProgress";
const ACCOUNTS_STORAGE_KEY = "eduvibePhysicsAccounts";
const AUTH_SESSION_KEY = "eduvibePhysicsSession";
const PASSWORD_HASH_ITERATIONS = 210000;
const AUTH_CRYPTO_ERROR = "Mã hóa mật khẩu không khả dụng trong trình duyệt này.";
const PAGE_IDS = {
  home: "homePage",
  lessons: "lessonsPage",
  lesson: "lessonPage",
  progress: "progressPage"
};
physicsLessons.forEach(lesson => {
  const bank = physicsQuizExtensions[lesson.id];
  if (!bank) throw new Error(`Thiếu bộ câu hỏi cho bài ${lesson.id}.`);
  lesson.questions = [
    ...lesson.questions,
    ...bank.multipleChoice.map(([question, options, correct, explanation]) => ({ question, options, correct, explanation }))
  ];
  lesson.trueFalse = bank.trueFalse.map(group => ({
    title: group.title,
    statements: group.statements.map(([text, answer, explanation]) => ({ text, answer, explanation }))
  }));
  lesson.shortAnswer = bank.shortAnswer;
  if (lesson.questions.length !== 15 || lesson.trueFalse.length !== 3 ||
      lesson.trueFalse.some(group => group.statements.length !== 4) || lesson.shortAnswer.length !== 2) {
    throw new Error(`Bộ câu hỏi của bài ${lesson.id} chưa đủ cấu trúc 15/3×4/2.`);
  }
  if (lesson.questions.some(question => !Array.isArray(question.options) ||
      question.correct < 0 || question.correct >= question.options.length ||
      !question.explanation) ||
      lesson.shortAnswer.some(question => !question.acceptedAnswers.length || !question.expectedAnswer)) {
    throw new Error(`Bộ câu hỏi của bài ${lesson.id} có đáp án hoặc lời giải không hợp lệ.`);
  }
});
const categories = ["Tất cả", ...new Set(physicsLessons.map(lesson => lesson.category))];
const emptyProgress = () => ({ completed: [], bestScores: {}, recent: [] });
let progress = loadProgress();
let activeFilter = "Tất cả";
let currentAccount = null;
let currentLesson = null;
let quizAnswers = { multipleChoice: [], trueFalse: [], shortAnswer: [] };
let quizScore = null;
let motionFrame = null;
let motionStartTimestamp = null;
let noticeTimer = null;

const simulationDefinitions = {
  motion: {
    title: "Thử nghiệm: vận tốc và quãng đường",
    description: "Điều chỉnh vận tốc hoặc thời gian, rồi quan sát vị trí vật trên đường thẳng.",
    visualCaption: "Quỹ đạo mô phỏng 100 m",
    controls: [
      { key: "speed", label: "Vận tốc", min: 0, max: 15, step: 0.5, value: 3, unit: "m/s" },
      { key: "time", label: "Thời gian", min: 0, max: 10, step: 0.5, value: 4, unit: "s" }
    ],
    calculate(values) {
      const distance = values.speed * values.time;
      return {
        value: distance,
        unit: "m",
        formula: "s = v · t",
        detail: `Sau ${formatNumber(values.time)} s, vật đi được ${formatNumber(distance)} m nếu vận tốc không đổi.`,
        positionPercent: Math.min(100, distance)
      };
    }
  },
  force: {
    title: "Thử nghiệm: khối lượng và gia tốc",
    description: "Thay đổi lực kéo và khối lượng để thấy cùng một lực tạo gia tốc khác nhau.",
    visualCaption: "Gia tốc của vật",
    controls: [
      { key: "force", label: "Hợp lực", min: 0, max: 40, step: 1, value: 12, unit: "N" },
      { key: "mass", label: "Khối lượng", min: 1, max: 20, step: 0.5, value: 4, unit: "kg" }
    ],
    calculate(values) {
      const acceleration = values.force / values.mass;
      return {
        value: acceleration,
        unit: "m/s²",
        formula: "a = ΣF / m",
        detail: `Với hợp lực ${formatNumber(values.force)} N tác dụng lên vật ${formatNumber(values.mass)} kg.`,
        positionPercent: Math.min(100, acceleration * 5)
      };
    }
  },
  energy: {
    title: "Thử nghiệm: độ cao và thế năng",
    description: "Nâng vật lên cao hơn hoặc đổi khối lượng để quan sát thế năng trọng trường.",
    visualCaption: "Thế năng trọng trường",
    controls: [
      { key: "mass", label: "Khối lượng", min: 0.5, max: 10, step: 0.5, value: 2, unit: "kg" },
      { key: "height", label: "Độ cao", min: 0, max: 20, step: 0.5, value: 1.5, unit: "m" }
    ],
    calculate(values) {
      const potentialEnergy = values.mass * 9.8 * values.height;
      return {
        value: potentialEnergy,
        unit: "J",
        formula: "Wₜ = m · g · h (g = 9,8 m/s²)",
        detail: `Chọn mặt đất làm mốc thế năng; vật ở độ cao ${formatNumber(values.height)} m.`,
        positionPercent: Math.min(100, values.height * 5)
      };
    }
  },
  momentum: {
    title: "Thử nghiệm: khối lượng và động lượng",
    description: "Điều chỉnh khối lượng và vận tốc để so sánh động lượng của vật.",
    visualCaption: "Động lượng theo chiều chuyển động",
    controls: [
      { key: "mass", label: "Khối lượng", min: 0.1, max: 10, step: 0.1, value: 0.5, unit: "kg" },
      { key: "speed", label: "Tốc độ", min: 0, max: 20, step: 0.5, value: 4, unit: "m/s" }
    ],
    calculate(values) {
      const momentum = values.mass * values.speed;
      return {
        value: momentum,
        unit: "kg·m/s",
        formula: "p = m · v",
        detail: "Động lượng tăng khi khối lượng hoặc tốc độ tăng; hướng p cùng hướng vận tốc.",
        positionPercent: Math.min(100, momentum * 2)
      };
    }
  },
  circular: {
    title: "Thử nghiệm: tốc độ và quỹ đạo tròn",
    description: "Quan sát gia tốc hướng tâm khi thay đổi tốc độ hoặc bán kính quỹ đạo.",
    visualCaption: "Gia tốc hướng vào tâm",
    controls: [
      { key: "speed", label: "Tốc độ", min: 0, max: 15, step: 0.5, value: 6, unit: "m/s" },
      { key: "radius", label: "Bán kính", min: 0.5, max: 10, step: 0.5, value: 3, unit: "m" }
    ],
    calculate(values) {
      const acceleration = values.speed ** 2 / values.radius;
      return {
        value: acceleration,
        unit: "m/s²",
        formula: "aₕₜ = v² / r",
        detail: `Gia tốc hướng tâm luôn hướng vào tâm; với dữ kiện này có độ lớn ${formatNumber(acceleration)} m/s².`,
        positionPercent: Math.min(100, acceleration * 2)
      };
    }
  },
  gravity: {
    title: "Thử nghiệm: khối lượng và trọng lượng",
    description: "Đổi khối lượng hoặc gia tốc trọng trường để so sánh trọng lượng.",
    visualCaption: "Lực hút của Trái Đất",
    controls: [
      { key: "mass", label: "Khối lượng", min: 0.5, max: 50, step: 0.5, value: 5, unit: "kg" },
      { key: "gravity", label: "Gia tốc trọng trường", min: 1, max: 12, step: 0.1, value: 9.8, unit: "m/s²" }
    ],
    calculate(values) {
      const weight = values.mass * values.gravity;
      return {
        value: weight,
        unit: "N",
        formula: "P = m · g",
        detail: `Vật có khối lượng ${formatNumber(values.mass)} kg ở nơi có g = ${formatNumber(values.gravity)} m/s².`,
        positionPercent: Math.min(100, weight)
      };
    }
  },
  wave: {
    title: "Thử nghiệm: tần số, bước sóng và tốc độ",
    description: "Thay đổi tần số hoặc bước sóng để theo dõi tốc độ truyền sóng.",
    visualCaption: "Hai chu kì sóng liên tiếp",
    controls: [
      { key: "frequency", label: "Tần số", min: 0.5, max: 10, step: 0.5, value: 5, unit: "Hz" },
      { key: "wavelength", label: "Bước sóng", min: 0.2, max: 4, step: 0.1, value: 0.8, unit: "m" },
      { key: "amplitude", label: "Biên độ", min: 0.2, max: 2, step: 0.1, value: 1, unit: "m" }
    ],
    calculate(values) {
      const waveSpeed = values.frequency * values.wavelength;
      return {
        value: waveSpeed,
        unit: "m/s",
        formula: "v = f · λ",
        detail: `Tần số ${formatNumber(values.frequency)} Hz và bước sóng ${formatNumber(values.wavelength)} m.`,
        amplitude: values.amplitude,
        wavelength: values.wavelength
      };
    }
  },
  circuit: {
    title: "Thử nghiệm: điện áp và điện trở",
    description: "Dùng nguồn điện áp thấp trong mô hình để quan sát định luật Ohm.",
    visualCaption: "Mạch điện mô phỏng",
    controls: [
      { key: "voltage", label: "Hiệu điện thế", min: 1, max: 24, step: 1, value: 12, unit: "V" },
      { key: "resistance", label: "Điện trở", min: 1, max: 30, step: 0.5, value: 6, unit: "Ω" }
    ],
    calculate(values) {
      const current = values.voltage / values.resistance;
      return {
        value: current,
        unit: "A",
        formula: "I = U / R",
        detail: `Với U = ${formatNumber(values.voltage)} V và R = ${formatNumber(values.resistance)} Ω.`,
        positionPercent: Math.min(100, current * 12)
      };
    }
  },
  magnetism: {
    title: "Thử nghiệm: lực từ lên dây dẫn",
    description: "Mô hình dây vuông góc với từ trường để khảo sát lực từ.",
    visualCaption: "Dây dẫn đặt vuông góc từ trường",
    controls: [
      { key: "field", label: "Cảm ứng từ", min: 0, max: 1, step: 0.05, value: 0.2, unit: "T" },
      { key: "current", label: "Cường độ dòng điện", min: 0, max: 10, step: 0.5, value: 3, unit: "A" },
      { key: "length", label: "Chiều dài dây", min: 0.1, max: 2, step: 0.1, value: 0.5, unit: "m" }
    ],
    calculate(values) {
      const force = values.field * values.current * values.length;
      return {
        value: force,
        unit: "N",
        formula: "F = B · I · l (dây vuông góc từ trường)",
        detail: "Khi dây vuông góc với đường sức từ, lực từ đạt giá trị lớn nhất với các dữ kiện đã chọn.",
        positionPercent: Math.min(100, force * 50)
      };
    }
  },
  optics: {
    title: "Thử nghiệm: tia sáng khúc xạ",
    description: "Thay đổi góc tới và chiết suất để quan sát tia sáng đổi hướng.",
    visualCaption: "Mặt phân cách hai môi trường",
    controls: [
      { key: "n1", label: "Chiết suất môi trường 1", min: 1, max: 2, step: 0.1, value: 1, unit: "" },
      { key: "n2", label: "Chiết suất môi trường 2", min: 1, max: 2, step: 0.1, value: 1.5, unit: "" },
      { key: "angle", label: "Góc tới", min: 0, max: 80, step: 1, value: 30, unit: "°" }
    ],
    calculate(values) {
      const sine = values.n1 * Math.sin(values.angle * Math.PI / 180) / values.n2;
      if (sine > 1) {
        return {
          value: null,
          unit: "",
          formula: "n₁ · sin i = n₂ · sin r",
          detail: "Không có tia khúc xạ trong môi trường 2 ở góc này: xảy ra phản xạ toàn phần.",
          positionPercent: 100
        };
      }
      const refractionAngle = Math.asin(sine) * 180 / Math.PI;
      return {
        value: refractionAngle,
        unit: "°",
        formula: "n₁ · sin i = n₂ · sin r",
        detail: `Tia khúc xạ tạo góc ${formatNumber(refractionAngle)}° với pháp tuyến.`,
        positionPercent: Math.min(100, refractionAngle)
      };
    }
  }
};

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return emptyProgress();
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.completed) || !Array.isArray(parsed.recent) ||
        typeof parsed.bestScores !== "object" || parsed.bestScores === null) {
      throw new Error("Dữ liệu tiến độ không đúng định dạng.");
    }
    return {
      completed: parsed.completed.filter(id => physicsLessons.some(lesson => lesson.id === id)),
      bestScores: Object.keys(parsed.bestScores)
        .filter(id => physicsLessons.some(lesson => lesson.id === id))
        .reduce((scores, id) => {
          scores[id] = parsed.bestScores[id];
          return scores;
        }, {}),
      recent: parsed.recent.filter(id => physicsLessons.some(lesson => lesson.id === id)).slice(0, 5)
    };
  } catch (error) {
    console.error("Không thể đọc tiến độ đã lưu.", error);
    window.addEventListener("DOMContentLoaded", () => {
      showNotice("Không đọc được tiến độ cũ. Bạn có thể tiếp tục học và tạo tiến độ mới trên thiết bị này.");
    }, { once: true });
    return emptyProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Không thể lưu tiến độ học tập.", error);
    showNotice("Trình duyệt không lưu được tiến độ. Nội dung hiện tại vẫn dùng được trong phiên này.");
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 }).format(value);
}

function normalizeText(value) {
  return value.toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function normalizeAnswer(value) {
  return normalizeText(value.trim()).replace(/−/g, "-").replace(/,/g, ".").replace(/\s+/g, "");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showNotice(message) {
  const notice = document.querySelector("#appNotice");
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add("visible");
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => notice.classList.remove("visible"), 4200);
}

function readAccounts() {
  let serialized;
  try {
    serialized = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
  } catch (error) {
    throw new Error("Không thể đọc dữ liệu tài khoản từ bộ nhớ trình duyệt.");
  }
  if (!serialized) return [];

  let accounts;
  try {
    accounts = JSON.parse(serialized);
  } catch (error) {
    throw new Error("Dữ liệu tài khoản trong trình duyệt không hợp lệ.");
  }
  if (!Array.isArray(accounts) || accounts.some(account =>
    !account || typeof account.id !== "string" ||
    typeof account.displayName !== "string" ||
    typeof account.email !== "string" ||
    typeof account.salt !== "string" ||
    typeof account.passwordHash !== "string")) {
    throw new Error("Dữ liệu tài khoản trong trình duyệt không đúng định dạng.");
  }
  return accounts;
}

function saveAccounts(accounts) {
  try {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
  } catch (error) {
    throw new Error("Không thể lưu tài khoản. Hãy kiểm tra dung lượng hoặc quyền lưu trữ của trình duyệt.");
  }
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return window.btoa(binary);
}

function base64ToBytes(value) {
  const binary = window.atob(value);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function derivePasswordHash(password, salt) {
  if (!window.crypto || !window.crypto.subtle) throw new Error(AUTH_CRYPTO_ERROR);
  const key = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await window.crypto.subtle.deriveBits({
    name: "PBKDF2",
    salt,
    iterations: PASSWORD_HASH_ITERATIONS,
    hash: "SHA-256"
  }, key, 256);
  return new Uint8Array(hash);
}

function equalBytes(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

function setAuthMessage(formName, message, type = "error") {
  const messageId = formName === "loginForm" ? "loginMessage" : "registerMessage";
  const element = document.querySelector(`#${messageId}`);
  element.textContent = message;
  element.classList.toggle("success", type === "success");
  element.classList.toggle("error", type === "error" && message !== "");
}

function setAuthView(view) {
  const isRegister = view === "register";
  document.querySelector("#loginForm").hidden = isRegister;
  document.querySelector("#registerForm").hidden = !isRegister;
  document.querySelector("#authDialogTitle").textContent = isRegister ? "Tạo tài khoản mới" : "Chào mừng trở lại";
  document.querySelector(".auth-dialog-intro p").textContent = isRegister
    ? "Tạo tài khoản để nhận diện hồ sơ học tập của bạn trên thiết bị này."
    : "Đăng nhập để tiếp tục hành trình khám phá Vật lí.";
  document.querySelectorAll("[data-auth-view]").forEach(button => {
    const selected = button.dataset.authView === view;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll("[data-password-toggle]").forEach(button => {
    const input = document.getElementById(button.dataset.passwordToggle);
    input.type = "password";
    button.textContent = "Hiện";
    button.setAttribute("aria-pressed", "false");
  });
  setAuthMessage("loginForm", "");
  setAuthMessage("registerForm", "");
}

function openAuthDialog(view) {
  const dialog = document.querySelector("#authDialog");
  setAuthView(view);
  if (!dialog.open) dialog.showModal();
  const focusTarget = view === "register" ? "#registerName" : "#loginEmail";
  document.querySelector(focusTarget).focus();
}

function renderAccountState() {
  const signedIn = currentAccount !== null;
  document.querySelector("#accountControls").hidden = signedIn;
  document.querySelector("#accountMenu").hidden = !signedIn;
  document.querySelector("#accountName").textContent = signedIn ? currentAccount.displayName : "";
  document.querySelector("#accountAvatar").textContent = signedIn
    ? currentAccount.displayName.slice(0, 1).toLocaleUpperCase("vi")
    : "";
}

function initializeAuth() {
  try {
    const sessionId = localStorage.getItem(AUTH_SESSION_KEY);
    if (sessionId) {
      currentAccount = readAccounts().find(account => account.id === sessionId) || null;
      if (!currentAccount) localStorage.removeItem(AUTH_SESSION_KEY);
    }
  } catch (error) {
    currentAccount = null;
    console.error("Không thể khôi phục trạng thái đăng nhập.", error);
    showNotice(error.message || "Không thể khôi phục trạng thái đăng nhập.");
  }
  renderAccountState();
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function registerAccount() {
  const name = document.querySelector("#registerName").value.trim();
  const email = document.querySelector("#registerEmail").value.trim().toLocaleLowerCase("vi");
  const password = document.querySelector("#registerPassword").value;
  const confirmation = document.querySelector("#registerPasswordConfirm").value;

  if (!name || !email || !password || !confirmation) {
    setAuthMessage("registerForm", "Vui lòng điền đầy đủ các trường.");
    return;
  }
  if (!validEmail(email)) {
    setAuthMessage("registerForm", "Email chưa đúng định dạng. Hãy kiểm tra lại.");
    document.querySelector("#registerEmail").focus();
    return;
  }
  if (password.length < 8) {
    setAuthMessage("registerForm", "Mật khẩu cần có ít nhất 8 ký tự.");
    document.querySelector("#registerPassword").focus();
    return;
  }
  if (password !== confirmation) {
    setAuthMessage("registerForm", "Mật khẩu xác nhận chưa trùng khớp.");
    document.querySelector("#registerPasswordConfirm").focus();
    return;
  }

  try {
    const accounts = readAccounts();
    if (accounts.some(account => account.email === email)) {
      setAuthMessage("registerForm", "Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.");
      document.querySelector("#registerEmail").focus();
      return;
    }
    if (!window.crypto || !window.crypto.getRandomValues) throw new Error(AUTH_CRYPTO_ERROR);
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const passwordHash = await derivePasswordHash(password, salt);
    const id = bytesToBase64(window.crypto.getRandomValues(new Uint8Array(18)));
    accounts.push({
      id,
      displayName: name,
      email,
      salt: bytesToBase64(salt),
      passwordHash: bytesToBase64(passwordHash),
      createdAt: new Date().toISOString()
    });
    saveAccounts(accounts);
    document.querySelector("#registerForm").reset();
    document.querySelector("#loginEmail").value = email;
    document.querySelector("#loginPassword").value = "";
    setAuthView("login");
    setAuthMessage("loginForm", "Đăng ký thành công. Hãy đăng nhập bằng tài khoản vừa tạo.", "success");
  } catch (error) {
    console.error("Không thể đăng ký tài khoản.", error);
    setAuthMessage("registerForm", error.message || "Không thể đăng ký tài khoản lúc này.");
  }
}

async function loginAccount() {
  const email = document.querySelector("#loginEmail").value.trim().toLocaleLowerCase("vi");
  const password = document.querySelector("#loginPassword").value;
  if (!email || !password) {
    setAuthMessage("loginForm", "Vui lòng nhập email và mật khẩu.");
    return;
  }
  if (!validEmail(email)) {
    setAuthMessage("loginForm", "Email chưa đúng định dạng. Hãy kiểm tra lại.");
    document.querySelector("#loginEmail").focus();
    return;
  }

  try {
    const account = readAccounts().find(item => item.email === email);
    if (!account) {
      setAuthMessage("loginForm", "Email hoặc mật khẩu không chính xác.");
      return;
    }
    const actualHash = await derivePasswordHash(password, base64ToBytes(account.salt));
    if (!equalBytes(actualHash, base64ToBytes(account.passwordHash))) {
      setAuthMessage("loginForm", "Email hoặc mật khẩu không chính xác.");
      return;
    }
    try {
      localStorage.setItem(AUTH_SESSION_KEY, account.id);
    } catch (error) {
      throw new Error("Không thể lưu trạng thái đăng nhập trong trình duyệt.");
    }
    currentAccount = account;
    renderAccountState();
    document.querySelector("#authDialog").close();
    document.querySelector("#loginForm").reset();
    showNotice(`Xin chào, ${account.displayName}!`);
  } catch (error) {
    console.error("Không thể đăng nhập.", error);
    setAuthMessage("loginForm", error.message || "Không thể đăng nhập lúc này.");
  }
}

function logoutAccount() {
  try {
    localStorage.removeItem(AUTH_SESSION_KEY);
  } catch (error) {
    console.error("Không thể xóa trạng thái đăng nhập.", error);
    showNotice("Không thể đăng xuất khỏi bộ nhớ trình duyệt. Hãy thử lại.");
    return;
  }
  currentAccount = null;
  renderAccountState();
  showNotice("Bạn đã đăng xuất.");
}

function progressPercent() {
  return Math.round((progress.completed.length / physicsLessons.length) * 100);
}

function lessonCard(lesson, compact) {
  const completed = progress.completed.includes(lesson.id);
  return `
    <button class="lesson-card${compact ? " compact-card" : " library-card"}" type="button" data-open-lesson="${lesson.id}">
      <span class="lesson-icon">${lesson.icon}</span>
      <span class="lesson-card-copy">
        <span class="card-meta">${lesson.category} <span aria-hidden="true">·</span> ${lesson.level}</span>
        <strong>${lesson.title}</strong>
        <span class="card-summary">${lesson.summary}</span>
        <span class="card-footer"><span>${lesson.duration}</span>${completed ? '<span class="completed-badge">Đã hoàn thành</span>' : '<span>Khám phá →</span>'}</span>
      </span>
    </button>`;
}

function renderHome() {
  const percent = progressPercent();
  document.querySelector("#homeProgressRing").style.setProperty("--progress", percent);
  document.querySelector("#homeProgressPercent").textContent = `${percent}%`;
  document.querySelector("#homeCompletedCount").textContent = `${progress.completed.length}/${physicsLessons.length}`;
  document.querySelector("#homeLessonTotal").textContent = `${physicsLessons.length} bài học`;
  const recent = progress.recent.length
    ? progress.recent.slice(0, 3).map(id => physicsLessons.find(lesson => lesson.id === id))
    : physicsLessons.slice(0, 3);
  document.querySelector("#recentLessons").innerHTML = recent.map(lesson => lessonCard(lesson, true)).join("");
  renderChapterPreview();
}

function renderChapterPreview() {
  const container = document.querySelector("#chapterPreview");
  const grouped = categories.slice(1).map(category => {
    const items = physicsLessons.filter(lesson => lesson.category === category);
    return `
      <article class="chapter">
        <button class="chapter-summary" type="button" data-category-nav="${category}">
          <span class="chapter-number">${String(items.length).padStart(2, "0")}</span>
          <span><strong>${category}</strong><small>${items.map(item => item.title).join(" · ")}</small></span>
          <span class="chapter-count">${items.length} chủ đề</span>
          <span class="chapter-chevron" aria-hidden="true">→</span>
        </button>
      </article>`;
  });
  container.innerHTML = grouped.join("");
}

function renderFilters() {
  const container = document.querySelector("#topicFilters");
  container.innerHTML = categories.map(category => `
    <button type="button" class="filter-chip${activeFilter === category ? " active" : ""}"
      data-filter="${category}" aria-pressed="${activeFilter === category}">
      ${category}
    </button>`).join("");
}

function renderLessons() {
  const term = normalizeText(document.querySelector("#lessonSearch").value.trim());
  const filtered = physicsLessons.filter(lesson => {
    const matchesCategory = activeFilter === "Tất cả" || lesson.category === activeFilter;
    const searchable = normalizeText(`${lesson.title} ${lesson.summary} ${lesson.category} ${lesson.intro}`);
    return matchesCategory && (!term || searchable.includes(term));
  });
  const container = document.querySelector("#allLessons");
  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span aria-hidden="true">🔎</span>
        <h2>Chưa tìm thấy chủ đề phù hợp</h2>
        <p>Thử từ khóa khác hoặc xóa bộ lọc để xem toàn bộ bài học.</p>
        <button class="secondary-button" type="button" data-clear-filters>Xóa tìm kiếm và bộ lọc</button>
      </div>`;
  } else {
    container.innerHTML = filtered.map(lesson => lessonCard(lesson, false)).join("");
  }
  renderFilters();
  renderLibraryProgress();
}

function renderLibraryProgress() {
  const count = progress.completed.length;
  document.querySelector("#libraryProgressTitle").textContent = count
    ? `${count} chủ đề đã hoàn thành`
    : "Bắt đầu từ một chủ đề";
  document.querySelector("#libraryProgressText").textContent = `${count} trên ${physicsLessons.length} chủ đề hoàn thành`;
  document.querySelector("#libraryProgressBar").style.width = `${progressPercent()}%`;
}

function renderObjectives(objectives) {
  return `<ul class="objective-list">${objectives.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderQuiz(lesson) {
  const questions = lesson.questions.map((question, questionIndex) => {
    const options = question.options.map((option, optionIndex) => {
      const selected = quizAnswers.multipleChoice[questionIndex] === optionIndex;
      const correct = quizScore !== null && question.correct === optionIndex;
      const incorrect = quizScore !== null && selected && !correct;
      return `
        <button type="button" class="quiz-option${selected ? " selected" : ""}${correct ? " correct" : ""}${incorrect ? " incorrect" : ""}"
          data-quiz-option data-question-index="${questionIndex}" data-option-index="${optionIndex}"
          aria-pressed="${selected}" ${quizScore !== null ? "disabled" : ""}>
          <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span>
        </button>`;
    }).join("");
    return `
      <fieldset class="quiz-question" ${quizScore !== null ? "disabled" : ""}>
        <legend><span>Trắc nghiệm ${questionIndex + 1}</span>${question.question}</legend>
        <div class="quiz-options">${options}</div>
      </fieldset>`;
  }).join("");
  const trueFalse = lesson.trueFalse.map((group, groupIndex) => `
    <fieldset class="tf-group" ${quizScore !== null ? "disabled" : ""}>
      <legend>${group.title}</legend>
      <div class="true-false-list">
        ${group.statements.map((statement, statementIndex) => {
          const selected = quizAnswers.trueFalse[groupIndex][statementIndex];
          const buttons = [true, false].map(answer => {
            const isSelected = selected === answer;
            const isCorrect = quizScore !== null && statement.answer === answer;
            const isIncorrect = quizScore !== null && isSelected && !isCorrect;
            return `<button type="button" class="true-false-option${isSelected ? " selected" : ""}${isCorrect ? " correct" : ""}${isIncorrect ? " wrong" : ""}"
              data-tf-option data-group-index="${groupIndex}" data-statement-index="${statementIndex}" data-tf-value="${answer}"
              aria-pressed="${isSelected}" ${quizScore !== null ? "disabled" : ""}>${answer ? "Đúng" : "Sai"}</button>`;
          }).join("");
          return `<div class="true-false-item" role="group" aria-label="${escapeHtml(statement.text)}"><p><strong>${String.fromCharCode(97 + statementIndex)}.</strong> ${statement.text}</p><div class="true-false-options">${buttons}</div></div>`;
        }).join("")}
      </div>
    </fieldset>`).join("");
  const shortAnswers = lesson.shortAnswer.map((question, index) => {
    const correct = quizScore !== null && isShortAnswerCorrect(question, quizAnswers.shortAnswer[index]);
    return `
      <label class="short-answer-field" for="short-answer-${index}">
        <span><strong>Câu ${index + 1}.</strong> ${question.question}</span>
        <input id="short-answer-${index}" type="text" inputmode="decimal" autocomplete="off"
          data-short-answer-index="${index}" value="${escapeHtml(quizAnswers.shortAnswer[index])}"
          placeholder="Nhập câu trả lời" ${quizScore !== null ? "disabled" : ""}>
        ${quizScore !== null ? `<small class="${correct ? "short-correct" : "short-wrong"}">${correct ? "Chính xác." : `Đáp án tham khảo: ${question.expectedAnswer}`}</small>` : ""}
      </label>`;
  }).join("");
  const result = quizScore === null ? "" : `
    <section class="quiz-result" aria-labelledby="quizResultTitle">
      <h3 id="quizResultTitle" tabindex="-1">Kết quả: ${formatNumber(quizScore)}/20 điểm</h3>
      <p>${quizScore === 20 ? "Xuất sắc! Bạn đã nắm chắc các ý chính." : "Bài học đã được ghi nhận. Hãy xem giải thích để củng cố kiến thức."}</p>
      <div class="answer-explanations">
        <h4>Trắc nghiệm</h4>
        ${lesson.questions.map((question, index) => `<article class="answer-explanation">
          <strong>Câu ${index + 1}: ${question.options[question.correct]}</strong><p>${question.explanation}</p>
        </article>`).join("")}
        <h4>Đúng / Sai</h4>
        ${lesson.trueFalse.map((group, groupIndex) => `<article class="answer-explanation">
          <strong>${group.title}</strong>
          <ul>${group.statements.map((statement, statementIndex) => `<li><b>${String.fromCharCode(97 + statementIndex)}. ${statement.answer ? "Đúng" : "Sai"}:</b> ${statement.explanation}</li>`).join("")}</ul>
        </article>`).join("")}
        <h4>Trả lời ngắn</h4>
        ${lesson.shortAnswer.map((question, index) => `<article class="answer-explanation">
          <strong>Câu ${index + 1}: ${question.expectedAnswer}</strong><p>${question.explanation}</p>
        </article>`).join("")}
      </div>
    </section>`;
  return `
    <div class="quiz-heading">
      <div><span class="section-kicker">Tự kiểm tra</span><h2 id="quizTitle">Bạn đã hiểu đến đâu?</h2></div>
      <span class="quiz-count">20 mục đánh giá</span>
    </div>
    <p class="quiz-intro">Hoàn thành 15 câu trắc nghiệm, 3 nhóm đúng/sai và 2 câu trả lời ngắn. Điểm cùng lời giải sẽ hiện sau khi nộp bài.</p>
    <h3 class="quiz-subheading">A. Trắc nghiệm (15 câu)</h3>
    <div class="quiz-questions">${questions}</div>
    <h3 class="quiz-subheading">B. Đúng / Sai (3 nhóm, mỗi nhóm 4 ý)</h3>
    <div class="quiz-questions">${trueFalse}</div>
    <h3 class="quiz-subheading">C. Trả lời ngắn (2 câu)</h3>
    <div class="short-answer-list">${shortAnswers}</div>
    <p class="quiz-status" id="quizStatus" role="status"></p>
    ${result}
    <div class="quiz-actions">
      ${quizScore === null
        ? '<button class="primary-button" type="button" data-submit-quiz>Nộp bài</button>'
        : '<button class="secondary-button" type="button" data-retry-quiz>Làm lại câu hỏi</button>'}
    </div>`;
}

function isShortAnswerCorrect(question, answer) {
  const normalized = normalizeAnswer(answer);
  return normalized.length > 0 && question.acceptedAnswers.some(accepted => normalizeAnswer(accepted) === normalized);
}

function renderSimulation(lesson) {
  const config = simulationDefinitions[lesson.simulation];
  const controls = config.controls.map(control => `
    <label class="sim-control" for="sim-${control.key}">
      <span>${control.label}<output data-sim-output="${control.key}"></output></span>
      <input id="sim-${control.key}" type="range" min="${control.min}" max="${control.max}" step="${control.step}"
        value="${control.value}" data-sim-input="${control.key}">
    </label>`).join("");
  let visual;
  if (lesson.simulation === "motion") {
    visual = `<div class="sim-motion"><div class="sim-track"><span class="sim-track-start">0 m</span><span class="sim-motion-marker" id="motionMarker" aria-hidden="true">●</span><span class="sim-track-end">100 m</span></div></div>`;
  } else if (lesson.simulation === "wave") {
    visual = `<svg class="wave-visual" viewBox="0 0 360 100" role="img" aria-label="Đồ thị sóng thay đổi theo biên độ và bước sóng"><line x1="0" y1="50" x2="360" y2="50"></line><path id="wavePath" d=""></path><text x="2" y="95">0 m</text><text x="323" y="95">8 m</text></svg>`;
  } else if (lesson.simulation === "optics") {
    visual = `
      <svg class="optics-visual" viewBox="0 0 240 140" role="img" aria-label="Tia tới và tia khúc xạ đổi hướng theo góc">
        <line class="optics-boundary" x1="0" y1="70" x2="240" y2="70"></line>
        <line class="optics-normal" x1="120" y1="4" x2="120" y2="136"></line>
        <path class="optics-incident" id="incidentRay" d=""></path>
        <path class="optics-refracted" id="refractedRay" d=""></path>
        <path class="optics-reflected" id="reflectedRay" d=""></path>
        <circle class="optics-point" cx="120" cy="70" r="4"></circle>
      </svg>`;
  } else {
    visual = `<div class="sim-visual"><span aria-hidden="true">${lesson.icon}</span><small>${config.visualCaption}</small></div>`;
  }
  return `
    <section class="lesson-section simulation-section" id="lesson-simulation" aria-labelledby="simulationTitle">
      <div class="lesson-section-heading"><span class="section-kicker">Mô phỏng tương tác</span><h2 id="simulationTitle">${config.title}</h2></div>
      <p class="section-intro">${config.description}</p>
      <div class="simulation-card" data-sim-type="${lesson.simulation}">
        <div class="sim-controls">${controls}</div>
        <div class="sim-display">
          ${visual}
          <div class="sim-result" aria-live="polite">
            <span>Kết quả mô phỏng</span>
            <strong data-sim-value></strong>
            <p data-sim-detail></p>
            <code data-sim-formula></code>
          </div>
          ${lesson.simulation === "motion" ? '<button class="secondary-button sim-play-button" type="button" data-simulation-play>▶ Chạy mô phỏng</button>' : ""}
        </div>
      </div>
    </section>`;
}

function renderLesson(lesson) {
  currentLesson = lesson;
  quizAnswers = {
    multipleChoice: Array(lesson.questions.length).fill(null),
    trueFalse: lesson.trueFalse.map(group => Array(group.statements.length).fill(null)),
    shortAnswer: Array(lesson.shortAnswer.length).fill("")
  };
  quizScore = null;
  const lessonDetail = document.querySelector("#lessonDetail");
  lessonDetail.innerHTML = `
    <header class="lesson-banner">
      <div class="lesson-banner-copy">
        <div class="lesson-breadcrumb">${lesson.category} <span aria-hidden="true">/</span> ${lesson.level}</div>
        <h1 id="lessonHeading">${lesson.title}</h1>
        <p>${lesson.summary}</p>
        <div class="lesson-meta"><span>${lesson.duration}</span><span>20 mục tự kiểm tra</span>
          ${progress.completed.includes(lesson.id) ? '<span class="completed-badge">Đã hoàn thành</span>' : ""}
        </div>
      </div>
      <span class="lesson-banner-icon" aria-hidden="true">${lesson.icon}</span>
    </header>
    <div class="lesson-layout">
      <div class="lesson-content">
        <section class="lesson-section" id="lesson-intro">
          <div class="lesson-section-heading"><span class="section-kicker">Mở đầu</span><h2>Vật lí trong câu chuyện này</h2></div>
          <p class="section-intro">${lesson.intro}</p>
        </section>
        <section class="lesson-section" id="lesson-goals">
          <div class="lesson-section-heading"><span class="section-kicker">Mục tiêu học tập</span><h2>Sau bài này, bạn có thể</h2></div>
          ${renderObjectives(lesson.objectives)}
        </section>
        <section class="lesson-section" id="lesson-core">
          <div class="lesson-section-heading"><span class="section-kicker">Kiến thức cốt lõi</span><h2>Nắm chắc những ý chính</h2></div>
          <div class="knowledge-cards">${lesson.core.map((item, index) => `
            <article class="knowledge-card"><span class="knowledge-number">0${index + 1}</span><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join("")}</div>
          <div class="physics-insight"><strong>Bản chất hiện tượng</strong><p>${lesson.nature}</p></div>
        </section>
        <section class="lesson-section" id="lesson-formulas">
          <div class="lesson-section-heading"><span class="section-kicker">Công thức và đơn vị SI</span><h2>Công cụ mô tả hiện tượng</h2></div>
          <div class="formula-list">${lesson.formulas.map(formula => `
            <article class="formula-card"><div><h3>${formula.name}</h3><code>${formula.formula}</code></div><p>${formula.note}</p></article>`).join("")}</div>
        </section>
        <section class="lesson-section" id="lesson-example">
          <div class="lesson-section-heading"><span class="section-kicker">Vận dụng</span><h2>Ví dụ có lời giải</h2></div>
          <article class="worked-example">
            <h3>Bài toán</h3><p>${lesson.example.problem}</p>
            <h3>Cách giải</h3><ol>${lesson.example.steps.map(step => `<li>${step}</li>`).join("")}</ol>
            <p class="example-answer"><strong>Kết quả:</strong> ${lesson.example.answer}</p>
          </article>
          <div class="real-life-card"><span aria-hidden="true">🌱</span><p><strong>Gặp trong đời sống</strong>${lesson.practical}</p></div>
        </section>
        ${renderSimulation(lesson)}
        <section class="lesson-section quiz-section" id="lesson-quiz" aria-labelledby="quizTitle">
          <div id="quizContainer">${renderQuiz(lesson)}</div>
        </section>
        <section class="lesson-section summary-section" id="lesson-summary">
          <div class="lesson-section-heading"><span class="section-kicker">Ghi nhớ</span><h2>Điều cần mang theo</h2></div>
          ${renderObjectives(lesson.summaryPoints)}
        </section>
      </div>
      <aside class="lesson-outline" aria-label="Nội dung bài học">
        <strong>Trong bài này</strong>
        <a href="#lesson-intro">Mở đầu</a>
        <a href="#lesson-goals">Mục tiêu</a>
        <a href="#lesson-core">Kiến thức cốt lõi</a>
        <a href="#lesson-formulas">Công thức</a>
        <a href="#lesson-example">Ví dụ thực tế</a>
        <a href="#lesson-simulation">Mô phỏng</a>
        <a href="#lesson-quiz">Tự kiểm tra</a>
        <a href="#lesson-summary">Tổng kết</a>
      </aside>
    </div>`;
  document.querySelector("#lessonPage").classList.add("active");
  updateSimulation();
}

function updateSimulation(container = document.querySelector(".simulation-card")) {
  if (!container) return;
  const type = container.dataset.simType;
  const config = simulationDefinitions[type];
  if (!config) return;
  const values = {};
  config.controls.forEach(control => {
    const input = container.querySelector(`[data-sim-input="${control.key}"]`);
    const output = container.querySelector(`[data-sim-output="${control.key}"]`);
    const value = Number(input.value);
    values[control.key] = value;
    output.textContent = `${formatNumber(value)}${control.unit ? ` ${control.unit}` : ""}`;
  });
  const result = config.calculate(values);
  const valueElement = container.querySelector("[data-sim-value]");
  valueElement.textContent = result.value === null ? "Phản xạ toàn phần" : `${formatNumber(result.value)} ${result.unit}`.trim();
  container.querySelector("[data-sim-detail]").textContent = result.detail;
  container.querySelector("[data-sim-formula]").textContent = result.formula;
  const marker = container.querySelector("#motionMarker");
  if (marker) marker.style.left = `${result.positionPercent}%`;
  const wavePath = container.querySelector("#wavePath");
  if (wavePath) {
    const amplitude = result.amplitude * 17;
    const cycles = 8 / result.wavelength;
    const points = [];
    for (let x = 0; x <= 360; x += 1) {
      const y = 50 - Math.sin((x / 360) * Math.PI * 2 * cycles) * amplitude;
      points.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(1)}`);
    }
    wavePath.setAttribute("d", points.join(" "));
  }
  if (type === "optics") {
    const incidence = values.angle * Math.PI / 180;
    const incidentStart = `${120 - Math.sin(incidence) * 62},${70 - Math.cos(incidence) * 62}`;
    container.querySelector("#incidentRay").setAttribute("d", `M${incidentStart} L120,70`);
    const refractedRay = container.querySelector("#refractedRay");
    const reflectedRay = container.querySelector("#reflectedRay");
    if (result.value === null) {
      refractedRay.setAttribute("d", "");
      reflectedRay.setAttribute("d", `M120,70 L${120 + Math.sin(incidence) * 62},${70 - Math.cos(incidence) * 62}`);
    } else {
      const refraction = result.value * Math.PI / 180;
      refractedRay.setAttribute("d", `M120,70 L${120 + Math.sin(refraction) * 62},${70 + Math.cos(refraction) * 62}`);
      reflectedRay.setAttribute("d", "");
    }
  }
}

function renderProgress() {
  const count = progress.completed.length;
  const percent = progressPercent();
  document.querySelector("#progressSummary").innerHTML = `
    <div class="progress-summary-card">
      <div class="progress-ring" style="--progress: ${percent}"><div class="ring-inner"><strong>${percent}%</strong><span>hoàn thành</span></div></div>
      <div><span class="section-kicker">Tiến độ tổng thể</span><h2>${count} / ${physicsLessons.length} chủ đề</h2>
        <p>${count === physicsLessons.length ? "Bạn đã khám phá hết lộ trình. Hãy ôn lại các bài bất cứ lúc nào." : "Hoàn thành bài tự kiểm tra để ghi nhận một chủ đề đã học."}</p>
      </div>
    </div>`;
  document.querySelector("#progressLessons").innerHTML = physicsLessons.map(lesson => {
    const completed = progress.completed.includes(lesson.id);
    const best = progress.bestScores[lesson.id];
    return `
      <article class="progress-lesson">
        <span class="lesson-icon">${lesson.icon}</span>
        <div class="progress-lesson-copy"><span class="card-meta">${lesson.category} · ${lesson.level}</span><h3>${lesson.title}</h3>
          <p>${completed ? `Đã hoàn thành${typeof best === "number" ? ` · Điểm tốt nhất ${formatNumber(best)}/20` : ""}` : "Chưa hoàn thành"}</p>
        </div>
        <button class="secondary-button" type="button" data-open-lesson="${lesson.id}">${completed ? "Ôn tập" : "Bắt đầu"}</button>
      </article>`;
  }).join("");
}

function setActiveNavigation(page) {
  const selectedPage = page === "lesson" ? "lessons" : page;
  document.querySelectorAll("[data-page]").forEach(button => {
    const selected = button.dataset.page === selectedPage;
    button.classList.toggle("active", selected);
    if (button.matches(".nav-link, .mobile-nav button")) {
      if (selected) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
}

function showPage(page) {
  if (!PAGE_IDS[page]) return;
  stopMotion();
  currentLesson = page === "lesson" ? currentLesson : null;
  Object.entries(PAGE_IDS).forEach(([name, id]) => {
    document.querySelector(`#${id}`).classList.toggle("active", name === page);
  });
  setActiveNavigation(page);
  if (page === "home") renderHome();
  if (page === "lessons") renderLessons();
  if (page === "progress") renderProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLesson(id) {
  const lesson = physicsLessons.find(item => item.id === id);
  if (!lesson) {
    showNotice("Không tìm thấy bài học này. Hãy chọn một chủ đề trong thư viện.");
    return;
  }
  stopMotion();
  progress.recent = [id, ...progress.recent.filter(recentId => recentId !== id)].slice(0, 5);
  saveProgress();
  currentLesson = lesson;
  renderLesson(lesson);
  Object.entries(PAGE_IDS).forEach(([name, pageId]) => {
    document.querySelector(`#${pageId}`).classList.toggle("active", name === "lesson");
  });
  setActiveNavigation("lesson");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function submitQuiz() {
  if (!currentLesson) return;
  const status = document.querySelector("#quizStatus");
  const missingMultipleChoice = quizAnswers.multipleChoice.some(answer => answer === null);
  const missingTrueFalse = quizAnswers.trueFalse.some(group => group.some(answer => answer === null));
  const missingShortAnswer = quizAnswers.shortAnswer.some(answer => answer.trim() === "");
  if (missingMultipleChoice || missingTrueFalse || missingShortAnswer) {
    status.textContent = "Hãy hoàn thành tất cả câu trắc nghiệm, ý đúng/sai và câu trả lời ngắn trước khi nộp bài.";
    status.classList.add("error");
    return;
  }
  const multipleChoiceScore = currentLesson.questions.reduce((score, question, index) =>
    score + (question.correct === quizAnswers.multipleChoice[index] ? 1 : 0), 0);
  const trueFalseCorrectCount = currentLesson.trueFalse.reduce((total, group, groupIndex) =>
    total + group.statements.filter((statement, statementIndex) =>
      statement.answer === quizAnswers.trueFalse[groupIndex][statementIndex]).length, 0);
  const shortAnswerScore = currentLesson.shortAnswer.reduce((total, question, index) =>
    total + (isShortAnswerCorrect(question, quizAnswers.shortAnswer[index]) ? 1 : 0), 0);
  quizScore = Math.round((multipleChoiceScore + trueFalseCorrectCount / 4 + shortAnswerScore) * 100) / 100;
  if (!progress.completed.includes(currentLesson.id)) progress.completed.push(currentLesson.id);
  const previousBest = progress.bestScores[currentLesson.id] || 0;
  progress.bestScores[currentLesson.id] = Math.max(previousBest, quizScore);
  saveProgress();
  document.querySelector("#quizContainer").innerHTML = renderQuiz(currentLesson);
  renderHome();
  renderLibraryProgress();
  document.querySelector("#quizResultTitle").focus();
}

function resetQuiz() {
  if (!currentLesson) return;
  quizAnswers = {
    multipleChoice: Array(currentLesson.questions.length).fill(null),
    trueFalse: currentLesson.trueFalse.map(group => Array(group.statements.length).fill(null)),
    shortAnswer: Array(currentLesson.shortAnswer.length).fill("")
  };
  quizScore = null;
  document.querySelector("#quizContainer").innerHTML = renderQuiz(currentLesson);
}

function stopMotion() {
  if (motionFrame !== null) window.cancelAnimationFrame(motionFrame);
  motionFrame = null;
  motionStartTimestamp = null;
  const playButton = document.querySelector("[data-simulation-play]");
  if (playButton) playButton.textContent = "▶ Chạy mô phỏng";
}

function animateMotion(timestamp) {
  const timeInput = document.querySelector('[data-sim-input="time"]');
  if (!timeInput) {
    stopMotion();
    return;
  }
  if (motionStartTimestamp === null) motionStartTimestamp = timestamp;
  const elapsed = (timestamp - motionStartTimestamp) / 1000;
  timeInput.value = Math.min(Number(timeInput.max), elapsed).toString();
  updateSimulation();
  if (Number(timeInput.value) >= Number(timeInput.max)) {
    stopMotion();
    return;
  }
  motionFrame = window.requestAnimationFrame(animateMotion);
}

function toggleMotion() {
  if (motionFrame !== null) {
    stopMotion();
    return;
  }
  const timeInput = document.querySelector('[data-sim-input="time"]');
  if (!timeInput) return;
  timeInput.value = "0";
  motionStartTimestamp = null;
  const playButton = document.querySelector("[data-simulation-play]");
  playButton.textContent = "Ⅱ Tạm dừng";
  motionFrame = window.requestAnimationFrame(animateMotion);
}

document.addEventListener("click", event => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const authHome = target.closest("[data-auth-home]");
  if (authHome) {
    event.preventDefault();
    document.querySelector("#authDialog").close();
    showPage("home");
    return;
  }
  const openAuthButton = target.closest("[data-open-auth]");
  if (openAuthButton) {
    openAuthDialog(openAuthButton.dataset.openAuth);
    return;
  }
  const authViewButton = target.closest("[data-auth-view]");
  if (authViewButton) {
    setAuthView(authViewButton.dataset.authView);
    return;
  }
  if (target.closest("[data-close-auth]")) {
    document.querySelector("#authDialog").close();
    return;
  }
  const passwordToggle = target.closest("[data-password-toggle]");
  if (passwordToggle) {
    const input = document.getElementById(passwordToggle.dataset.passwordToggle);
    const visible = input.type === "password";
    input.type = visible ? "text" : "password";
    passwordToggle.textContent = visible ? "Ẩn" : "Hiện";
    passwordToggle.setAttribute("aria-pressed", String(visible));
    return;
  }
  if (target.closest("[data-auth-logout]")) {
    logoutAccount();
    return;
  }

  const pageButton = target.closest("[data-page]");
  if (pageButton) {
    showPage(pageButton.dataset.page);
    return;
  }
  const openButton = target.closest("[data-open-lesson]");
  if (openButton) {
    openLesson(openButton.dataset.openLesson);
    return;
  }
  const backButton = target.closest("[data-back-to]");
  if (backButton) {
    showPage(backButton.dataset.backTo);
    return;
  }
  const categoryButton = target.closest("[data-filter]");
  if (categoryButton) {
    activeFilter = categoryButton.dataset.filter;
    renderLessons();
    return;
  }
  const categoryNavButton = target.closest("[data-category-nav]");
  if (categoryNavButton) {
    activeFilter = categoryNavButton.dataset.categoryNav;
    document.querySelector("#lessonSearch").value = "";
    showPage("lessons");
    return;
  }
  if (target.closest("[data-clear-filters]")) {
    activeFilter = "Tất cả";
    document.querySelector("#lessonSearch").value = "";
    renderLessons();
    return;
  }
  const option = target.closest("[data-quiz-option]");
  if (option && quizScore === null && currentLesson) {
    const questionIndex = Number(option.dataset.questionIndex);
    quizAnswers.multipleChoice[questionIndex] = Number(option.dataset.optionIndex);
    document.querySelectorAll(`[data-question-index="${questionIndex}"]`).forEach(button => {
      const selected = button.dataset.optionIndex === String(quizAnswers.multipleChoice[questionIndex]);
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    const status = document.querySelector("#quizStatus");
    status.textContent = "";
    status.classList.remove("error");
    return;
  }
  const trueFalseOption = target.closest("[data-tf-option]");
  if (trueFalseOption && quizScore === null && currentLesson) {
    const groupIndex = Number(trueFalseOption.dataset.groupIndex);
    const statementIndex = Number(trueFalseOption.dataset.statementIndex);
    const answer = trueFalseOption.dataset.tfValue === "true";
    quizAnswers.trueFalse[groupIndex][statementIndex] = answer;
    document.querySelectorAll(`[data-group-index="${groupIndex}"][data-statement-index="${statementIndex}"]`).forEach(button => {
      const selected = button.dataset.tfValue === String(answer);
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    const status = document.querySelector("#quizStatus");
    status.textContent = "";
    status.classList.remove("error");
    return;
  }
  if (target.closest("[data-submit-quiz]")) {
    submitQuiz();
    return;
  }
  if (target.closest("[data-retry-quiz]")) {
    resetQuiz();
    return;
  }
  if (target.closest("[data-simulation-play]")) toggleMotion();
});

document.addEventListener("input", event => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.id === "lessonSearch") renderLessons();
  if (target instanceof HTMLInputElement && target.matches("[data-sim-input]")) updateSimulation(target.closest(".simulation-card"));
  if (target instanceof HTMLInputElement && target.matches("[data-short-answer-index]") && quizScore === null) {
    quizAnswers.shortAnswer[Number(target.dataset.shortAnswerIndex)] = target.value;
    const status = document.querySelector("#quizStatus");
    status.textContent = "";
    status.classList.remove("error");
  }
});

document.addEventListener("change", event => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.matches('[data-sim-input="time"]') && motionFrame !== null) {
    stopMotion();
    updateSimulation();
  }
});

document.querySelector("#loginForm").addEventListener("submit", async event => {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector('[type="submit"]');
  submitButton.disabled = true;
  try {
    await loginAccount();
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("#registerForm").addEventListener("submit", async event => {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector('[type="submit"]');
  submitButton.disabled = true;
  try {
    await registerAccount();
  } finally {
    submitButton.disabled = false;
  }
});

renderHome();
renderFilters();
renderLessons();
renderProgress();
initializeAuth();
