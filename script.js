"use strict";

const STORAGE_KEY = "eduvibePhysicsProgress";
const ACCOUNTS_STORAGE_KEY = "eduvibePhysicsAccounts";
const AUTH_SESSION_KEY = "eduvibePhysicsSession";
const PASSWORD_HASH_ITERATIONS = 210000;
const AUTH_CRYPTO_ERROR = "Mã hóa mật khẩu không khả dụng trong trình duyệt này.";
const QUIZ_DURATION_SECONDS = 20 * 60;
const QUIZ_MAX_SCORE = 10;
const MOTION_TRACK_LENGTH_METERS = 150;
const PAGE_IDS = {
  home: "homePage",
  lessons: "lessonsPage",
  lesson: "lessonPage",
  theory: "theoryPage",
  exercises: "exercisePage",
  progress: "progressPage"
};
physicsLessons.forEach(lesson => {
  const bank = physicsQuizExtensions[lesson.id];
  if (!bank) throw new Error(`Thiếu bộ câu hỏi cho bài ${lesson.id}.`);
  const sourceNumbers = new Set();
  lesson.questions = [
    ...lesson.questions,
    ...bank.multipleChoice.map(([question, options, correct, explanation, sourceNumber, illustrationId]) => {
      const item = { question, options, correct, explanation };
      if (sourceNumber !== undefined) {
        if (!Number.isInteger(sourceNumber) || sourceNumber < 1 || sourceNumbers.has(sourceNumber)) {
          throw new Error(`Số câu nguồn của bài ${lesson.id} không hợp lệ hoặc bị trùng.`);
        }
        sourceNumbers.add(sourceNumber);
        item.sourceNumber = sourceNumber;
      }
      if (illustrationId) {
        if (!bank.illustrations || !bank.illustrations[illustrationId]) {
          throw new Error(`Thiếu hình minh họa ${illustrationId} trong bài ${lesson.id}.`);
        }
        item.illustration = bank.illustrations[illustrationId];
      }
      return item;
    })
  ];
  lesson.trueFalse = bank.trueFalse.map(group => ({
    title: group.title,
    statements: group.statements.map(([text, answer, explanation]) => ({ text, answer, explanation }))
  }));
  lesson.shortAnswer = bank.shortAnswer;
  const validQuizStructure = bank.multipleChoiceOnly
    ? lesson.questions.length === 30 && lesson.trueFalse.length === 0 && lesson.shortAnswer.length === 0
    : lesson.questions.length === 15 && lesson.trueFalse.length === 3 &&
      lesson.trueFalse.every(group => group.statements.length === 4) && lesson.shortAnswer.length === 2;
  if (!validQuizStructure) {
    throw new Error(`Bộ câu hỏi của bài ${lesson.id} chưa đủ cấu trúc dự kiến.`);
  }
  if (lesson.questions.some(question => !Array.isArray(question.options) ||
      !Number.isInteger(question.correct) || question.correct < 0 || question.correct >= question.options.length ||
      !question.explanation) ||
      lesson.shortAnswer.some(question => !question.acceptedAnswers.length || !question.expectedAnswer)) {
    throw new Error(`Bộ câu hỏi của bài ${lesson.id} có đáp án hoặc lời giải không hợp lệ.`);
  }
  if (bank.multipleChoiceOnly && (sourceNumbers.size !== 30 ||
      new Set(lesson.questions.map(question => question.question)).size !== 30 ||
      lesson.questions.some(question => question.options.length !== 4))) {
    throw new Error(`Bài ${lesson.id} phải có 30 câu ABCD không trùng số hoặc nội dung.`);
  }
});
const categories = ["Tất cả", ...new Set(physicsLessons.map(lesson => lesson.category))];
const emptyProgress = () => ({ completed: [], bestScores: {}, recent: [], scoreScale: QUIZ_MAX_SCORE });
let progress = loadProgress();
let activeFilter = "Tất cả";
let currentPage = null;
let currentAccount = null;
let currentLesson = null;
let quizAnswers = { multipleChoice: [], trueFalse: [], shortAnswer: [] };
let quizScore = null;
let quizStarted = false;
let quizTimedOut = false;
let quizTimeRemaining = QUIZ_DURATION_SECONDS;
let quizDeadline = null;
let quizStartedAt = null;
let quizElapsedSeconds = 0;
let quizTimerInterval = null;
let motionFrame = null;
let motionElapsed = 0;
let motionDuration = 0;
let motionLastTimestamp = null;
let motionState = "idle";
let motionTimeStep = "0.5";
let noticeTimer = null;

const simulationDefinitions = {
  motion: {
    title: "Thử nghiệm: vận tốc và quãng đường",
    description: "Điều chỉnh vận tốc hoặc thời gian, rồi quan sát vị trí vật trên đường thẳng.",
    visualCaption: `Quỹ đạo mô phỏng ${MOTION_TRACK_LENGTH_METERS} m`,
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
        positionMeters: distance
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
        typeof parsed.bestScores !== "object" || parsed.bestScores === null ||
        Array.isArray(parsed.bestScores)) {
      throw new Error("Dữ liệu tiến độ không đúng định dạng.");
    }
    const validLessonIds = new Set(physicsLessons.map(lesson => lesson.id));
    const storedScoreScale = parsed.scoreScale === QUIZ_MAX_SCORE ? QUIZ_MAX_SCORE : 20;
    const bestScores = Object.keys(parsed.bestScores)
      .filter(id => validLessonIds.has(id))
      .reduce((scores, id) => {
        const score = parsed.bestScores[id];
        if (typeof score === "number" && Number.isFinite(score) && score >= 0) {
          const scoreOnTen = storedScoreScale === QUIZ_MAX_SCORE ? score : score / 2;
          scores[id] = Math.min(QUIZ_MAX_SCORE, Math.round(scoreOnTen * 10) / 10);
        }
        return scores;
      }, {});
    return {
      completed: [...new Set(parsed.completed.filter(id => validLessonIds.has(id)))],
      bestScores,
      recent: [...new Set(parsed.recent.filter(id => validLessonIds.has(id)))].slice(0, 5),
      scoreScale: QUIZ_MAX_SCORE
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
    try {
      localStorage.removeItem(AUTH_SESSION_KEY);
    } catch (cleanupError) {
      console.error("Không thể xóa trạng thái đăng nhập không hợp lệ.", cleanupError);
    }
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

function isMultipleChoiceOnlyQuiz(lesson) {
  return lesson.questions.length > 0 && lesson.trueFalse.length === 0 && lesson.shortAnswer.length === 0;
}

function renderQuiz(lesson) {
  const multipleChoiceOnly = isMultipleChoiceOnlyQuiz(lesson);
  const quizCount = multipleChoiceOnly ? `${lesson.questions.length} câu trắc nghiệm` : "20 mục đánh giá";
  if (!quizStarted && quizScore === null) {
    return `
      <div class="quiz-start-card">
        <span class="quiz-start-icon" aria-hidden="true">⏱</span>
        <div class="quiz-start-copy">
          <span class="section-kicker">Sẵn sàng luyện tập?</span>
          <h3>Bài làm có thời lượng 20 phút</h3>
          <p>${multipleChoiceOnly
    ? `Gồm ${lesson.questions.length} câu trắc nghiệm có trọng số bằng nhau.`
    : "Gồm 15 câu trắc nghiệm, 3 nhóm đúng/sai và 2 câu trả lời ngắn."} Đồng hồ chỉ bắt đầu khi bạn chọn bắt đầu.</p>
        </div>
        <button class="primary-button quiz-start-button" type="button" data-start-quiz>Bắt đầu làm bài</button>
      </div>`;
  }

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
        <legend><span>Trắc nghiệm ${question.sourceNumber || questionIndex + 1}</span>${question.question}</legend>
        ${question.illustration || ""}
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
        <input id="short-answer-${index}" type="number" inputmode="decimal" autocomplete="off"
          data-short-answer-index="${index}" value="${escapeHtml(quizAnswers.shortAnswer[index])}"
          placeholder="Nhập đáp án bằng số" ${quizScore !== null ? "disabled" : ""}>
        ${quizScore !== null ? `<small class="${correct ? "short-correct" : "short-wrong"}">${correct ? "Chính xác." : `Đáp án tham khảo: ${question.expectedAnswer}`}</small>` : ""}
      </label>`;
  }).join("");
  const multipleChoiceSection = lesson.questions.length ? `
    <h3 class="quiz-subheading">A. Trắc nghiệm (${lesson.questions.length} câu)</h3>
    <div class="quiz-questions">${questions}</div>` : "";
  const statementsPerGroup = lesson.trueFalse.length ? lesson.trueFalse[0].statements.length : 0;
  const sameTrueFalseGroupSize = lesson.trueFalse.every(group => group.statements.length === statementsPerGroup);
  const trueFalseCountDetail = sameTrueFalseGroupSize && statementsPerGroup
    ? `, mỗi nhóm ${statementsPerGroup} ý`
    : "";
  const trueFalseSection = lesson.trueFalse.length ? `
    <h3 class="quiz-subheading">B. Đúng / Sai (${lesson.trueFalse.length} nhóm${trueFalseCountDetail})</h3>
    <div class="quiz-questions">${trueFalse}</div>` : "";
  const shortAnswerSection = lesson.shortAnswer.length ? `
    <h3 class="quiz-subheading">C. Trả lời ngắn (${lesson.shortAnswer.length} câu · đáp án bằng số)</h3>
    <div class="short-answer-list">${shortAnswers}</div>` : "";
  const correctCount = lesson.questions.reduce((count, question, index) =>
    count + (question.correct === quizAnswers.multipleChoice[index] ? 1 : 0), 0);
  const result = quizScore === null ? "" : `
    <section class="quiz-result" aria-labelledby="quizResultTitle">
      <h3 id="quizResultTitle" tabindex="-1">Kết quả: ${formatNumber(quizScore)}/10 điểm</h3>
      <p>${quizScore === QUIZ_MAX_SCORE ? "Xuất sắc! Bạn đã nắm chắc các ý chính." : "Bài học đã được ghi nhận. Hãy xem giải thích để củng cố kiến thức."}</p>
      ${multipleChoiceOnly ? `<div class="quiz-result-stats">
        <div><span>Câu đúng</span><strong>${correctCount}/${lesson.questions.length}</strong></div>
        <div><span>Tỉ lệ chính xác</span><strong>${formatNumber(correctCount / lesson.questions.length * 100)}%</strong></div>
        <div><span>Thời gian đã dùng</span><strong>${formatQuizTime(quizElapsedSeconds)}</strong></div>
      </div>` : ""}
      <div class="answer-explanations">
        ${lesson.questions.length ? `<h4>Trắc nghiệm</h4>${lesson.questions.map((question, index) => `<article class="answer-explanation">
          <strong>Câu ${question.sourceNumber || index + 1}: ${question.options[question.correct]}</strong><p>${question.explanation}</p>
        </article>`).join("")}` : ""}
        ${lesson.trueFalse.length ? `<h4>Đúng / Sai</h4>${lesson.trueFalse.map((group, groupIndex) => `<article class="answer-explanation">
          <strong>${group.title}</strong>
          <ul>${group.statements.map((statement, statementIndex) => `<li><b>${String.fromCharCode(97 + statementIndex)}. ${statement.answer ? "Đúng" : "Sai"}:</b> ${statement.explanation}</li>`).join("")}</ul>
        </article>`).join("")}` : ""}
        ${lesson.shortAnswer.length ? `<h4>Trả lời ngắn</h4>${lesson.shortAnswer.map((question, index) => `<article class="answer-explanation">
          <strong>Câu ${index + 1}: ${question.expectedAnswer}</strong><p>${question.explanation}</p>
        </article>`).join("")}` : ""}
      </div>
    </section>`;
  return `
    <div class="quiz-attempt">
      <div class="quiz-attempt-header">
        <div class="quiz-attempt-status">
          <span class="section-kicker">${quizScore === null ? "Đang làm bài" : "Đã kết thúc"}</span>
          <h3>${quizScore === null ? "Tập trung hoàn thành các câu hỏi" : "Kết quả bài tập"}</h3>
        </div>
        <div class="quiz-timer" data-timer-state="${quizTimerState()}" role="timer" aria-label="Thời gian còn lại">
          <span>Thời gian còn lại</span>
          <strong data-quiz-timer>${formatQuizTime(quizTimeRemaining)}</strong>
        </div>
      </div>
      <p class="quiz-timer-message" data-quiz-timer-message data-timer-state="${quizTimerState()}" aria-live="polite">${quizTimerMessage()}</p>
      <div class="quiz-heading">
        <div><span class="section-kicker">Tự kiểm tra</span><h2 id="quizTitle" tabindex="-1">Bạn đã hiểu đến đâu?</h2></div>
        <span class="quiz-count">${quizCount}</span>
      </div>
      <p class="quiz-intro">Câu chưa trả lời được tính 0 điểm. Bạn có thể nộp bài bất cứ lúc nào; hệ thống sẽ tự nộp khi hết giờ.</p>
      ${multipleChoiceSection}
      ${trueFalseSection}
      ${shortAnswerSection}
      <p class="quiz-status" id="quizStatus" role="status"></p>
      ${result}
      <div class="quiz-actions">
        ${quizScore === null
          ? '<button class="primary-button" type="button" data-submit-quiz>Nộp bài</button>'
          : '<button class="secondary-button" type="button" data-retry-quiz>Làm lại</button>'}
      </div>
    </div>
  `;
}

function formatQuizTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function quizTimerState() {
  if (quizTimeRemaining <= 60) return "critical";
  if (quizTimeRemaining <= 300) return "warning";
  return "normal";
}

function quizTimerMessage() {
  if (quizTimedOut) return "Hết giờ! Hệ thống đã tự động nộp bài.";
  if (quizScore !== null) return "Bài đã được nộp. Đồng hồ đã dừng.";
  if (quizTimeRemaining <= 60) return "Còn 1 phút! Hãy hoàn tất và nộp bài.";
  if (quizTimeRemaining <= 300) return `Còn ${Math.ceil(quizTimeRemaining / 60)} phút. Hãy chú ý thời gian.`;
  return "Bài sẽ tự động kết thúc khi đồng hồ về 00:00.";
}

function updateQuizTimerDisplay() {
  const timer = document.querySelector("#quizContainer [data-quiz-timer]");
  if (!timer) return;
  timer.textContent = formatQuizTime(quizTimeRemaining);
  const timerState = quizTimerState();
  timer.closest(".quiz-timer").dataset.timerState = timerState;
  const message = document.querySelector("#quizContainer [data-quiz-timer-message]");
  message.dataset.timerState = timerState;
  const nextMessage = quizTimerMessage();
  if (message.textContent !== nextMessage) message.textContent = nextMessage;
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
    visual = `<div class="sim-motion" data-motion-state="idle">
      <div class="sim-track">
        <span class="sim-track-start">0 m</span>
        <span class="sim-motion-marker" id="motionMarker" aria-hidden="true"><span>●</span></span>
        <span class="sim-track-end">${MOTION_TRACK_LENGTH_METERS} m</span>
      </div>
      <p class="sim-motion-status" data-simulation-status aria-live="polite">Sẵn sàng mô phỏng.</p>
    </div>`;
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
          ${lesson.simulation === "motion" ? `<div class="sim-motion-actions">
            <button class="secondary-button sim-play-button" type="button" data-simulation-play>▶ Chạy mô phỏng</button>
            <button class="secondary-button sim-reset-button" type="button" data-simulation-reset>↺ Đặt lại</button>
          </div>` : ""}
        </div>
      </div>
    </section>`;
}

function lessonRoute(lesson, destination = "") {
  return `#lesson/${encodeURIComponent(lesson.id)}${destination ? `/${destination}` : ""}`;
}

function renderLessonBanner(lesson, headingId) {
  return `
    <header class="lesson-banner">
      <div class="lesson-banner-copy">
        <div class="lesson-breadcrumb">${lesson.category} <span aria-hidden="true">/</span> ${lesson.level}</div>
        <h1 id="${headingId}">${lesson.title}</h1>
        <p>${lesson.summary}</p>
        <div class="lesson-meta"><span>${lesson.duration}</span>
          <span>${isMultipleChoiceOnlyQuiz(lesson) ? `${lesson.questions.length} câu trắc nghiệm · 20 phút` : "20 mục bài tập · 20 phút"}</span>
          ${progress.completed.includes(lesson.id) ? '<span class="completed-badge">Đã hoàn thành</span>' : ""}
        </div>
      </div>
      <span class="lesson-banner-icon" aria-hidden="true">${lesson.icon}</span>
    </header>`;
}

function renderLesson(lesson) {
  document.querySelector("#lessonDetail").innerHTML = `
    ${renderLessonBanner(lesson, "lessonHeading")}
    <div class="lesson-layout lesson-hub-layout">
      <div class="lesson-content lesson-entry-list">
        <a class="lesson-section lesson-entry-card" href="${lessonRoute(lesson, "theory")}">
          <span class="section-kicker">PHẦN A</span>
          <h2>Lý thuyết</h2>
          <p>Khám phá kiến thức, phương pháp và ví dụ của bài học.</p>
          <strong>Mở phần lý thuyết <span aria-hidden="true">→</span></strong>
        </a>
        <a class="lesson-section lesson-entry-card" href="${lessonRoute(lesson, "exercises")}">
          <span class="section-kicker">PHẦN B</span>
          <h2>Bài tập</h2>
          <p>Kiểm tra kiến thức với thang điểm 10 và thời gian làm bài 20 phút.</p>
          <strong>Mở phần bài tập <span aria-hidden="true">→</span></strong>
        </a>
      </div>
      <aside class="lesson-outline" aria-label="Nội dung bài học">
        <strong>Trong bài này</strong>
        <a href="${lessonRoute(lesson, "theory")}">Phần A: Lý thuyết</a>
        <a href="${lessonRoute(lesson, "exercises")}">Phần B: Bài tập</a>
      </aside>
    </div>`;
}

function renderTheoryPage(lesson) {
  const sections = [
    ["lesson-intro", "Mở đầu"],
    ["lesson-goals", "Mục tiêu"],
    ["lesson-core", "Kiến thức cốt lõi"],
    ["lesson-formulas", "Công thức"],
    ["lesson-example", "Ví dụ thực tế"],
    ["lesson-summary", "Tổng kết"]
  ];
  document.querySelector("#theoryDetail").innerHTML = `
    <a class="back-button" href="${lessonRoute(lesson)}">← <span>Quay lại trang bài học</span></a>
    ${renderLessonBanner(lesson, "theoryPageTitle")}
    <div class="lesson-layout theory-layout">
      <div class="lesson-content">
        <header class="learning-area-heading">
          <div><span class="section-kicker">PHẦN A</span><h2>Lý thuyết</h2>
            <p>Đọc và khám phá kiến thức theo nhịp độ của bạn. Phần học này không giới hạn thời gian.</p>
          </div>
        </header>
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
          <div class="lesson-section-heading"><span class="section-kicker">${lesson.guideLabel}</span><h2>${lesson.guideTitle}</h2></div>
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
        ${lesson.simulation ? renderSimulation(lesson) : ""}
        <section class="lesson-section summary-section" id="lesson-summary">
          <div class="lesson-section-heading"><span class="section-kicker">Ghi nhớ</span><h2>Điều cần mang theo</h2></div>
          ${renderObjectives(lesson.summaryPoints)}
        </section>
      </div>
      <aside class="lesson-outline theory-outline" aria-label="Nội dung lý thuyết">
        <strong>Trong phần lý thuyết</strong>
        ${sections.map(([id, label]) => `<a href="${lessonRoute(lesson, `theory/${id}`)}">${label}</a>`).join("")}
        ${lesson.simulation ? `<a href="${lessonRoute(lesson, "theory/lesson-simulation")}">Mô phỏng</a>` : ""}
      </aside>
    </div>`;
  const motionTimeInput = document.querySelector('#theoryDetail [data-sim-input="time"]');
  if (motionTimeInput) {
    motionDuration = Number(motionTimeInput.value);
    motionTimeStep = motionTimeInput.step;
    motionElapsed = 0;
    motionState = "idle";
    updateMotionControls();
  }
  updateSimulation(document.querySelector("#theoryDetail .simulation-card"));
}

function renderExercisePage(lesson) {
  document.querySelector("#exerciseDetail").innerHTML = `
    <a class="back-button" href="${lessonRoute(lesson)}">← <span>Quay lại trang bài học</span></a>
    ${renderLessonBanner(lesson, "exercisePageTitle")}
    <section class="lesson-section exercise-section" aria-labelledby="exerciseHeading">
      <header class="learning-area-heading exercise-area-heading">
        <div><span class="section-kicker">PHẦN B</span><h2 id="exerciseHeading">Bài tập</h2>
          <p>${isMultipleChoiceOnlyQuiz(lesson)
    ? `Kiểm tra kiến thức với ${lesson.questions.length} câu trắc nghiệm. Mỗi lượt làm bài có tối đa 20 phút.`
    : "Kiểm tra kiến thức với 20 mục đánh giá. Mỗi lượt làm bài có tối đa 20 phút."}</p>
        </div>
      </header>
      <div id="quizContainer">${renderQuiz(lesson)}</div>
    </section>`;
  if (quizStarted) updateQuizTimerDisplay();
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
    const outputText = `${formatNumber(value)}${control.unit ? ` ${control.unit}` : ""}`;
    if (output.textContent !== outputText) output.textContent = outputText;
  });
  const result = config.calculate(values);
  const valueElement = container.querySelector("[data-sim-value]");
  const resultText = result.value === null ? "Phản xạ toàn phần" : `${formatNumber(result.value)} ${result.unit}`.trim();
  const detail = container.querySelector("[data-sim-detail]");
  const formula = container.querySelector("[data-sim-formula]");
  if (valueElement.textContent !== resultText) valueElement.textContent = resultText;
  if (detail.textContent !== result.detail) detail.textContent = result.detail;
  if (formula.textContent !== result.formula) formula.textContent = result.formula;
  const marker = container.querySelector("#motionMarker");
  if (marker && typeof result.positionMeters === "number") {
    const positionPercent = Math.min(100, result.positionMeters / MOTION_TRACK_LENGTH_METERS * 100);
    marker.style.setProperty("--motion-progress", `${positionPercent}%`);
  }
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
          <p>${completed ? `Đã hoàn thành${typeof best === "number" ? ` · Điểm tốt nhất ${formatNumber(best)}/10` : ""}` : "Chưa hoàn thành"}</p>
        </div>
        <button class="secondary-button" type="button" data-open-lesson="${lesson.id}">${completed ? "Ôn tập" : "Bắt đầu"}</button>
      </article>`;
  }).join("");
}

function setActiveNavigation(page) {
  const selectedPage = ["lesson", "theory", "exercises"].includes(page) ? "lessons" : page;
  document.querySelectorAll("[data-page]").forEach(button => {
    const selected = button.dataset.page === selectedPage;
    button.classList.toggle("active", selected);
    if (button.matches(".nav-link, .mobile-nav button")) {
      if (selected) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
}

function initializeLesson(lesson) {
  if (currentLesson && currentLesson.id === lesson.id) return;
  if (quizStarted) submitQuiz();
  stopMotion();
  stopQuizTimer();
  currentLesson = lesson;
  quizAnswers = {
    multipleChoice: Array(lesson.questions.length).fill(null),
    trueFalse: lesson.trueFalse.map(group => Array(group.statements.length).fill(null)),
    shortAnswer: Array(lesson.shortAnswer.length).fill("")
  };
  quizScore = null;
  quizStarted = false;
  quizTimedOut = false;
  quizTimeRemaining = QUIZ_DURATION_SECONDS;
  quizStartedAt = null;
  quizElapsedSeconds = 0;
  progress.recent = [lesson.id, ...progress.recent.filter(recentId => recentId !== lesson.id)].slice(0, 5);
  saveProgress();
  currentPage = null;
}

function activatePage(page, scrollToTop = true) {
  if (!PAGE_IDS[page]) return;
  stopMotion();
  const pageChanged = currentPage !== page;
  currentPage = page;
  Object.entries(PAGE_IDS).forEach(([name, id]) => {
    document.querySelector(`#${id}`).classList.toggle("active", name === page);
  });
  setActiveNavigation(page);
  if (page === "home") renderHome();
  if (page === "lessons") renderLessons();
  if (page === "progress") renderProgress();
  if (page === "lesson" && (pageChanged || !document.querySelector("#lessonDetail").hasChildNodes())) {
    renderLesson(currentLesson);
  }
  if (page === "theory" && (pageChanged || !document.querySelector("#theoryDetail").hasChildNodes())) {
    renderTheoryPage(currentLesson);
  }
  if (page === "exercises" && (pageChanged || !document.querySelector("#exerciseDetail").hasChildNodes())) {
    renderExercisePage(currentLesson);
  }
  if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateToHash(hash) {
  if (window.location.hash === hash) {
    renderCurrentRoute();
    return;
  }
  window.location.hash = hash;
}

function renderCurrentRoute() {
  const parts = window.location.hash.slice(1).split("/");
  if (parts[0] === "lesson") {
    const lesson = physicsLessons.find(item => encodeURIComponent(item.id) === parts[1]);
    const destination = parts[2] || "";
    const validLessonRoute = lesson && (
      (parts.length === 2 && destination === "") ||
      (parts.length === 3 && (destination === "theory" || destination === "exercises")) ||
      (parts.length === 4 && destination === "theory")
    );
    if (!validLessonRoute) {
      showNotice("Không tìm thấy bài học hoặc mục này. Hãy chọn một chủ đề trong thư viện.");
      navigateToHash("#lessons");
      return;
    }

    initializeLesson(lesson);
    const page = destination === "theory" ? "theory" : destination === "exercises" ? "exercises" : "lesson";
    activatePage(page, parts.length !== 4);
    if (page === "theory" && parts[3]) {
      const section = document.getElementById(parts[3]);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (parts.length === 1 && ["home", "lessons", "progress"].includes(parts[0])) {
    activatePage(parts[0]);
    return;
  }
  if (!window.location.hash) {
    activatePage("home");
    return;
  }
  showNotice("Đường dẫn không hợp lệ. Đã quay về thư viện bài học.");
  navigateToHash("#lessons");
}

function showPage(page) {
  if (!["home", "lessons", "progress"].includes(page)) return;
  navigateToHash(`#${page}`);
}

function openLesson(id) {
  const lesson = physicsLessons.find(item => item.id === id);
  if (!lesson) {
    showNotice("Không tìm thấy bài học này. Hãy chọn một chủ đề trong thư viện.");
    return;
  }
  navigateToHash(lessonRoute(lesson));
}

function stopQuizTimer() {
  if (quizTimerInterval !== null) window.clearInterval(quizTimerInterval);
  quizTimerInterval = null;
  quizDeadline = null;
}

function startQuiz() {
  if (!currentLesson || quizStarted || quizScore !== null) return;
  stopQuizTimer();
  quizTimeRemaining = QUIZ_DURATION_SECONDS;
  quizTimedOut = false;
  quizStartedAt = Date.now();
  quizDeadline = quizStartedAt + QUIZ_DURATION_SECONDS * 1000;
  quizElapsedSeconds = 0;
  quizStarted = true;
  document.querySelector("#quizContainer").innerHTML = renderQuiz(currentLesson);
  updateQuizTimerDisplay();
  document.querySelector("#quizTitle").focus();
  quizTimerInterval = window.setInterval(() => {
    if (!quizStarted || quizDeadline === null) {
      stopQuizTimer();
      return;
    }
    quizTimeRemaining = Math.max(0, Math.ceil((quizDeadline - Date.now()) / 1000));
    updateQuizTimerDisplay();
    if (quizTimeRemaining === 0) submitQuiz(true);
  }, 1000);
}

function submitQuiz(timedOut = false) {
  if (!currentLesson || !quizStarted || quizScore !== null) return;
  quizElapsedSeconds = timedOut
    ? QUIZ_DURATION_SECONDS
    : Math.min(QUIZ_DURATION_SECONDS, Math.floor((Date.now() - quizStartedAt) / 1000));
  stopQuizTimer();
  quizStartedAt = null;
  quizStarted = false;
  quizTimedOut = timedOut;

  const multipleChoiceScore = currentLesson.questions.reduce((score, question, index) =>
    score + (question.correct === quizAnswers.multipleChoice[index] ? 1 : 0), 0);
  const trueFalseScore = currentLesson.trueFalse.reduce((total, group, groupIndex) => {
    const correctCount = group.statements.filter((statement, statementIndex) =>
      statement.answer === quizAnswers.trueFalse[groupIndex][statementIndex]).length;
    return total + correctCount / group.statements.length;
  }, 0);
  const shortAnswerScore = currentLesson.shortAnswer.reduce((total, question, index) =>
    total + (isShortAnswerCorrect(question, quizAnswers.shortAnswer[index]) ? 1 : 0), 0);
  const maxRawScore = currentLesson.questions.length + currentLesson.trueFalse.length + currentLesson.shortAnswer.length;
  const rawScore = multipleChoiceScore + trueFalseScore + shortAnswerScore;
  quizScore = Math.round((rawScore / maxRawScore) * 100) / 10;
  if (!progress.completed.includes(currentLesson.id)) progress.completed.push(currentLesson.id);
  const previousBest = progress.bestScores[currentLesson.id] || 0;
  progress.bestScores[currentLesson.id] = Math.max(previousBest, quizScore);
  saveProgress();
  document.querySelector("#quizContainer").innerHTML = renderQuiz(currentLesson);
  renderHome();
  renderLibraryProgress();
  if (document.querySelector("#progressPage").classList.contains("active")) renderProgress();
  document.querySelector("#quizResultTitle").focus();
  if (timedOut && !document.querySelector("#exercisePage").classList.contains("active")) {
    showNotice(`Hết giờ. Kết quả bài tập: ${formatNumber(quizScore)}/10 điểm.`);
  }
}

function resetQuiz() {
  if (!currentLesson || quizScore === null) return;
  stopQuizTimer();
  quizAnswers = {
    multipleChoice: Array(currentLesson.questions.length).fill(null),
    trueFalse: currentLesson.trueFalse.map(group => Array(group.statements.length).fill(null)),
    shortAnswer: Array(currentLesson.shortAnswer.length).fill("")
  };
  quizScore = null;
  quizStarted = false;
  quizTimedOut = false;
  quizTimeRemaining = QUIZ_DURATION_SECONDS;
  quizStartedAt = null;
  quizElapsedSeconds = 0;
  document.querySelector("#quizContainer").innerHTML = renderQuiz(currentLesson);
  document.querySelector("[data-start-quiz]").focus();
}

function stopMotion() {
  if (motionFrame !== null) window.cancelAnimationFrame(motionFrame);
  motionFrame = null;
  motionLastTimestamp = null;
  if (motionState === "running") motionState = "paused";
  updateMotionControls();
}

function updateMotionControls() {
  const playButton = document.querySelector("[data-simulation-play]");
  const resetButton = document.querySelector("[data-simulation-reset]");
  const timeInput = document.querySelector('[data-sim-input="time"]');
  const motionVisual = document.querySelector(".sim-motion");
  const result = document.querySelector(".simulation-card[data-sim-type=\"motion\"] .sim-result");
  const status = document.querySelector("[data-simulation-status]");
  const labels = {
    idle: ["▶ Chạy mô phỏng", "Sẵn sàng mô phỏng."],
    running: ["Ⅱ Tạm dừng", "Mô phỏng đang chạy."],
    paused: ["▶ Tiếp tục", "Mô phỏng đang tạm dừng."],
    completed: ["▶ Chạy lại mô phỏng", "Đã hoàn thành hành trình."]
  };
  const [buttonLabel, statusLabel] = labels[motionState];
  if (playButton) playButton.textContent = buttonLabel;
  if (resetButton) resetButton.disabled = false;
  if (timeInput) timeInput.disabled = motionState === "running";
  if (motionVisual) motionVisual.dataset.motionState = motionState;
  if (result) result.setAttribute("aria-live", motionState === "running" ? "off" : "polite");
  if (status && status.textContent !== statusLabel) status.textContent = statusLabel;
}

function animateMotion(timestamp) {
  const timeInput = document.querySelector('[data-sim-input="time"]');
  if (!timeInput) {
    stopMotion();
    return;
  }
  if (motionLastTimestamp === null) {
    motionLastTimestamp = timestamp;
  } else {
    motionElapsed += Math.max(0, timestamp - motionLastTimestamp) / 1000;
    motionLastTimestamp = timestamp;
  }
  motionElapsed = Math.min(motionDuration, motionElapsed);
  timeInput.value = motionElapsed.toString();
  updateSimulation();
  if (motionElapsed >= motionDuration) {
    motionFrame = null;
    motionLastTimestamp = null;
    motionState = "completed";
    timeInput.step = motionTimeStep;
    updateMotionControls();
    return;
  }
  motionFrame = window.requestAnimationFrame(animateMotion);
}

function toggleMotion() {
  if (motionState === "running") {
    stopMotion();
    return;
  }
  const timeInput = document.querySelector('[data-sim-input="time"]');
  if (!timeInput) return;
  if (motionState !== "paused") {
    motionElapsed = 0;
    timeInput.step = "any";
    timeInput.value = "0";
  }
  if (motionDuration === 0) {
    motionElapsed = 0;
    timeInput.value = "0";
    motionState = "completed";
    timeInput.step = motionTimeStep;
    updateSimulation();
    updateMotionControls();
    return;
  }
  motionLastTimestamp = null;
  motionState = "running";
  updateMotionControls();
  motionFrame = window.requestAnimationFrame(animateMotion);
}

function resetMotion() {
  if (motionFrame !== null) window.cancelAnimationFrame(motionFrame);
  motionFrame = null;
  motionElapsed = 0;
  motionLastTimestamp = null;
  motionState = "idle";
  const timeInput = document.querySelector('[data-sim-input="time"]');
  if (timeInput) {
    timeInput.step = motionTimeStep;
    timeInput.value = "0";
  }
  updateSimulation();
  updateMotionControls();
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
  if (target.closest("[data-start-quiz]")) {
    startQuiz();
    return;
  }
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
  if (target.closest("[data-simulation-reset]")) resetMotion();
});

document.addEventListener("input", event => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.id === "lessonSearch") renderLessons();
  if (target instanceof HTMLInputElement && target.matches('[data-sim-input="time"]') && motionState !== "running") {
    if (motionState === "paused") {
      motionElapsed = Math.min(motionDuration, Number(target.value));
      target.value = motionElapsed.toString();
    } else {
      motionDuration = Number(target.value);
      motionElapsed = 0;
      motionLastTimestamp = null;
      motionState = "idle";
      target.step = motionTimeStep;
      updateMotionControls();
    }
  }
  if (target instanceof HTMLInputElement && target.matches("[data-sim-input]")) updateSimulation(target.closest(".simulation-card"));
  if (target instanceof HTMLInputElement && target.matches("[data-short-answer-index]") && quizScore === null) {
    quizAnswers.shortAnswer[Number(target.dataset.shortAnswerIndex)] = target.value;
    const status = document.querySelector("#quizStatus");
    status.textContent = "";
    status.classList.remove("error");
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden && motionState === "running") stopMotion();
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

document.querySelector("#authDialog").addEventListener("keydown", event => {
  if (event.key === "Escape") {
    event.preventDefault();
    event.currentTarget.close();
  }
});

renderFilters();
initializeAuth();
window.addEventListener("hashchange", renderCurrentRoute);
renderCurrentRoute();
