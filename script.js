const recentLessons = [
  { title: "Làm quen với Vật Lí", subject: "Vật Lí 10", icon: "⚛️", className: "science", progress: 75, type: "lesson1" },
  { title: "Quy tắc an toàn trong phòng thực hành", subject: "Vật Lí 10", icon: "🦺", className: "math", progress: 48, type: "lesson2" },
  { title: "Tính sai số trong phép đo", subject: "Vật Lí 10", icon: "📏", className: "english", progress: 62, type: "lesson3" }
];

const allLessons = [
  { title: "Bài 1: Làm quen với Vật Lí", subject: "Vật Lí 10", icon: "⚛️", className: "science", type: "lesson1" },
  { title: "Bài 2: Các quy tắc an toàn trong phòng thực hành Vật Lí", subject: "Vật Lí 10", icon: "🦺", className: "math", type: "lesson2" },
  { title: "Bài 3: Thực hành tính sai số trong phép đo. Ghi kết quả đo", subject: "Vật Lí 10", icon: "📏", className: "english", type: "lesson3" }
];

const chapters = [
  { number: "01", title: "Làm quen với Vật Lí", count: "1 bài học", lessons: ["Vật Lí là gì?", "Vai trò của Vật Lí", "Phương pháp nghiên cứu"] },
  { number: "02", title: "An toàn trong phòng thực hành", count: "1 bài học", lessons: ["Trang bị an toàn", "Xử lí dụng cụ", "Các quy tắc cần nhớ"] },
  { number: "03", title: "Sai số và ghi kết quả đo", count: "1 bài học", lessons: ["Sai số phép đo", "Xử lí số liệu", "Ghi kết quả đo"] }
];

const lessonQuestions = {
  lesson1: [
    {
      title: "Đối tượng nghiên cứu của Vật Lí",
      example: "Vật Lí tìm hiểu các dạng vật chất, các hình thức vận động và tương tác trong tự nhiên.",
      question: "Vật Lí chủ yếu nghiên cứu lĩnh vực nào?",
      answers: ["Cấu trúc và quy luật tự nhiên", "Sự phát triển của ngôn ngữ", "Diễn biến lịch sử", "Quy định trong xã hội"],
      correct: 0,
      explanation: "Vật Lí là khoa học tự nhiên nghiên cứu cấu trúc, tính chất, tương tác và vận động của vật chất."
    },
    {
      title: "Phương pháp nghiên cứu",
      example: "Quá trình khoa học thường bao gồm quan sát, đề xuất giả thuyết và kiểm tra bằng thí nghiệm.",
      question: "Thứ tự hợp lí nhất trong nghiên cứu khoa học là:",
      answers: ["Kết luận trước rồi quan sát", "Quan sát - giả thuyết - thí nghiệm - kết luận", "Thí nghiệm - kết luận - quan sát", "Giả thuyết - kết luận - thí nghiệm"],
      correct: 1,
      explanation: "Cần quan sát hiện tượng, đề xuất giả thuyết, thí nghiệm kiểm tra rồi rút ra kết luận."
    },
    {
      title: "Vai trò của mô hình",
      example: "Mô hình đơn giản hóa đối tượng nhưng vẫn giữ được các đặc điểm cơ bản cần nghiên cứu.",
      question: "Mục đích chính của mô hình vật lí là:",
      answers: ["Thay thế hoàn toàn đối tượng thật", "Bỏ qua mọi đặc điểm của đối tượng", "Mô tả đơn giản để nghiên cứu và dự đoán", "Chỉ dùng để trang trí"],
      correct: 2,
      explanation: "Mô hình giúp mô tả hoặc mô phỏng đối tượng và dự đoán hiện tượng một cách thuận tiện."
    }
  ],
  lesson2: [
    {
      title: "Chuẩn bị trước khi thực hành",
      example: "Trước khi bật nguồn, cần kiểm tra dây, thiết bị và thực hiện theo hướng dẫn.",
      question: "Trước khi thí nghiệm có dòng điện, cần làm gì?",
      answers: ["Kiểm tra thiết bị và mạch điện", "Tự nối dây bất kì", "Bật nguồn khi chưa gắn dây", "Chạm tay vào các đầu cực"],
      correct: 0,
      explanation: "Phải kiểm tra nguồn, dây và thiết bị, đồng thời lắp mạch khi nguồn đã tắt theo hướng dẫn."
    },
    {
      title: "Phát hiện thiết bị hỏng",
      example: "Dây rò, vỏ nứt hoặc ổ cắm nóng đều là dấu hiệu không an toàn.",
      question: "Khi phát hiện dây điện bị hỏng, hành động đúng là:",
      answers: ["Tiếp tục dùng để làm thí nghiệm", "Tự sửa bằng vật dẫn điện", "Không dùng và báo giáo viên", "Cuộn dây rồi để trên nguồn"],
      correct: 2,
      explanation: "Thiết bị hỏng có thể gây điện giật hoặc cháy nổ nên phải dừng sử dụng và báo giáo viên."
    },
    {
      title: "Quy tắc trong phòng thực hành",
      example: "Chỉ thực hiện thí nghiệm sau khi đã nghe hướng dẫn và khi giáo viên cho phép.",
      question: "Quy tắc an toàn nào cần tuân thủ?",
      answers: ["Chơi đùa gần dụng cụ", "Thử dụng cụ chưa được hướng dẫn", "Tự ý tháo thiết bị đang hoạt động", "Làm thí nghiệm đúng hướng dẫn"],
      correct: 3,
      explanation: "Cần nghe hướng dẫn, giữ trật tự, dùng đúng dụng cụ và chỉ tắt hoặc tháo thiết bị khi an toàn."
    }
  ],
  lesson3: [
    {
      title: "Khái niệm sai số",
      example: "Sai số là độ lệch giữa giá trị đo và giá trị thực.",
      question: "Sai số trong phép đo là:",
      answers: ["Chênh lệch giữa giá trị đo và giá trị thực", "Đơn vị của đại lượng", "Tên của dụng cụ", "Số lần đo"],
      correct: 0,
      explanation: "Sai số tuyệt đối phản ánh độ lệch giữa giá trị đo được và giá trị thực hoặc giá trị quy ước."
    },
    {
      title: "Ghi kết quả đo",
      example: "Thước có độ chia nhỏ nhất 1 mm, nên sai số dụng cụ là 0,1 cm.",
      question: "Đo chiều dài được 12,5 cm bằng thước có độ chia nhỏ nhất 1 mm. Cách ghi nào phù hợp?",
      answers: ["12,5 cm", "(12,5 ± 0,1) cm", "(12,5 ± 1) cm", "(12,5 ± 0,01) cm"],
      correct: 1,
      explanation: "Đổi 1 mm = 0,1 cm; kết quả ghi kèm sai số dụng cụ là (12,5 ± 0,1) cm."
    },
    {
      title: "Tính sai số tương đối",
      example: "Sai số tương đối là Δd/d × 100%.",
      question: "Kết quả đo d = (12,5 ± 0,1) cm có sai số tương đối là:",
      answers: ["0,08%", "0,8%", "8%", "12,5%"],
      correct: 1,
      explanation: "Sai số tương đối = (0,1/12,5) × 100% = 0,8%, thường ghi gần đúng 0,8%."
    }
  ]
};

const cheers = [
  "Giỏi quá! Bạn thật tuyệt vời!",
  "Chính xác! Tiếp tục phát huy nhé!",
  "Wow, bạn đã làm rất tốt!",
  "Tuyệt cú mèo! Câu trả lời hoàn hảo!",
  "Đúng rồi! Bạn ngày càng giỏi hơn!"
];

const recentContainer = document.querySelector("#recentLessons");
const allLessonsContainer = document.querySelector("#allLessons");
const chapterContainer = document.querySelector("#chapterPreview");

function lessonCard(item) {
  return `<article class="lesson-card" data-open-quiz="${item.type}">
    <div class="lesson-icon ${item.className}">${item.icon}</div>
    <div>
      <p>${item.subject}</p>
      <h3>${item.title}</h3>
      <div class="mini-progress"><span style="width:${item.progress}%"></span></div>
    </div>
  </article>`;
}

recentContainer.innerHTML = recentLessons.map(lessonCard).join("");

function renderLessons(items) {
  allLessonsContainer.innerHTML = items.map(item => `
    <article class="library-card" data-type="${item.type}">
      <div class="lesson-icon ${item.className}">${item.icon}</div>
      <div><p>${item.subject}</p><h3>${item.title}</h3></div>
      <button class="start-button" data-open-quiz="${item.type}">Bắt đầu học</button>
    </article>`).join("");
}
renderLessons(allLessons);

chapterContainer.innerHTML = chapters.map((chapter, index) => `
  <article class="chapter ${index === 0 ? "open" : ""}">
    <button class="chapter-summary">
      <span class="chapter-number">${chapter.number}</span>
      <span><strong>${chapter.title}</strong><small>${chapter.count}</small></span>
      <span class="chapter-count">${chapter.lessons.length} bài</span>
      <svg class="chapter-chevron" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>
    </button>
    <div class="chapter-lessons">
      ${chapter.lessons.map((lesson, lessonIndex) => `<button class="chapter-lesson" data-open-quiz="lesson${index + 1}"><span>${lessonIndex + 1}</span><strong>${lesson}</strong></button>`).join("")}
    </div>
  </article>`).join("");

document.querySelectorAll(".chapter-summary").forEach(button => {
  button.addEventListener("click", () => button.closest(".chapter").classList.toggle("open"));
});

function showLoader() {
  const loader = document.querySelector("#pageLoader");
  loader.classList.remove("done");
  window.setTimeout(() => loader.classList.add("done"), 850);
}

function navigateTo(pageName) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.querySelector(`#${pageName}Page`).classList.add("active");
  document.querySelectorAll(".nav-link, .mobile-nav button").forEach(button => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });
  showLoader();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const profileMenu = document.querySelector("#profileMenu");
  if (profileMenu) profileMenu.classList.remove("open");
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    navigateTo(button.dataset.page);
  });
});

function getInitials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "HV";
  return words.length === 1
    ? words[0].slice(0, 2).toUpperCase()
    : (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function applyProfile(profile) {
  const initials = getInitials(profile.name);
  document.querySelector("#accountAvatar").firstChild.textContent = initials;
  document.querySelector("#accountName").textContent = profile.name;
  document.querySelector("#accountSchool").textContent = `${profile.school} • Lớp 10`;
  document.querySelector("#fullNameInput").value = profile.name;
  document.querySelector("#schoolInput").value = profile.school;
  document.querySelector("#heroName").textContent = profile.name;
  document.querySelector("#toastAvatar").textContent = initials;
  document.querySelector("#toastName").textContent = `Xin chào, ${profile.name}!`;
}

const savedProfile = JSON.parse(localStorage.getItem("eduvibeProfile") || "null");
if (savedProfile && savedProfile.name && savedProfile.school) {
  applyProfile(savedProfile);
}

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector("#pageLoader").classList.add("done"), 900);
  if (savedProfile) {
    window.setTimeout(() => document.querySelector("#welcomeToast").classList.add("show"), 1150);
    window.setTimeout(() => document.querySelector("#welcomeToast").classList.remove("show"), 6500);
  } else {
    window.setTimeout(() => document.querySelector("#profileModal").classList.add("open"), 900);
    document.body.style.overflow = "hidden";
  }
});
document.querySelector("#closeWelcome").addEventListener("click", () => {
  document.querySelector("#welcomeToast").classList.remove("show");
});

document.querySelector("#profileForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#profileNameInput").value.trim();
  const school = document.querySelector("#profileSchoolInput").value.trim();
  const error = document.querySelector("#profileError");
  if (!name || !school) {
    error.textContent = "Vui lòng nhập đầy đủ tên và trường.";
    return;
  }
  const profile = { name, school };
  localStorage.setItem("eduvibeProfile", JSON.stringify(profile));
  applyProfile(profile);
  document.querySelector("#profileModal").classList.remove("open");
  document.body.style.overflow = "";
  document.querySelector("#welcomeToast").classList.add("show");
  window.setTimeout(() => document.querySelector("#welcomeToast").classList.remove("show"), 6500);
});

document.querySelector("#fullNameInput").addEventListener("input", event => {
  document.querySelector("#accountName").textContent = event.target.value;
  document.querySelector("#heroName").textContent = event.target.value || "bạn";
});

document.querySelector("#schoolInput").addEventListener("input", event => {
  document.querySelector("#accountSchool").textContent = event.target.value;
});

document.querySelectorAll("#filterChips button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#filterChips button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    renderLessons(filter === "all" ? allLessons : allLessons.filter(item => item.type === filter));
  });
});

document.querySelector("#lessonSearch").addEventListener("input", event => {
  const term = event.target.value.toLowerCase();
  renderLessons(allLessons.filter(item => `${item.title} ${item.subject}`.toLowerCase().includes(term)));
});

const modal = document.querySelector("#quizModal");
const answersContainer = document.querySelector("#answers");
const feedback = document.querySelector("#answerFeedback");
let currentQuestion = 0;
let selectedAnswer = null;
let cheerIndex = 0;
let awaitingNext = false;
let currentLesson = "lesson1";
let currentQuestions = lessonQuestions.lesson1;

function renderQuestion() {
  const item = currentQuestions[currentQuestion];
  selectedAnswer = null;
  awaitingNext = false;
  document.querySelector("#checkAnswer").textContent = "Kiểm tra đáp án";
  document.querySelector("#quizSubject").textContent = `Vật Lí 10 • Bài ${currentLesson.slice(-1)}`;
  document.querySelector("#questionNumber").textContent = `Câu ${currentQuestion + 1}/${currentQuestions.length}`;
  document.querySelector("#quizTitle").textContent = item.title;
  document.querySelector("#exampleBox p").textContent = item.example;
  document.querySelector("#quizProgress").style.width = `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;
  feedback.className = "answer-feedback";
  feedback.textContent = "";
  answersContainer.innerHTML = item.answers.map((answer, index) => `
    <button class="answer-option" data-answer="${index}">
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${answer}</span>
    </button>`).join("");
  answersContainer.querySelectorAll(".answer-option").forEach(button => {
    button.addEventListener("click", () => {
      if (feedback.classList.contains("show")) return;
      selectedAnswer = Number(button.dataset.answer);
      answersContainer.querySelectorAll(".answer-option").forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
}

function openQuiz(lessonType) {
  currentQuestion = 0;
  currentLesson = lessonType || "lesson1";
  currentQuestions = lessonQuestions[currentLesson];
  renderQuestion();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open-quiz]");
  if (trigger) openQuiz(trigger.dataset.openQuiz);
});

function closeQuiz() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
document.querySelector("#quizClose").addEventListener("click", closeQuiz);
document.querySelector(".quiz-backdrop").addEventListener("click", closeQuiz);
document.querySelector("#skipButton").addEventListener("click", closeQuiz);

document.querySelector("#checkAnswer").addEventListener("click", () => {
  if (awaitingNext) {
    if (currentQuestion < currentQuestions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      closeQuiz();
    }
    return;
  }

  if (selectedAnswer === null) {
    feedback.textContent = "Hãy chọn một đáp án trước nhé!";
    feedback.className = "answer-feedback show wrong";
    return;
  }

  const item = currentQuestions[currentQuestion];
  if (selectedAnswer === item.correct) {
    feedback.textContent = cheers[cheerIndex % cheers.length];
    cheerIndex++;
    feedback.className = "answer-feedback show correct";
    answersContainer.querySelectorAll(".answer-option").forEach((button, index) => {
      if (index === item.correct) button.classList.add("correct");
    });
    celebrate();
    document.querySelector("#checkAnswer").textContent = currentQuestion < currentQuestions.length - 1 ? "Câu tiếp theo" : "Hoàn thành";
  } else {
    feedback.textContent = `Chưa chính xác. ${item.explanation}`;
    feedback.className = "answer-feedback show wrong";
    answersContainer.querySelectorAll(".answer-option").forEach((button, index) => {
      if (index === selectedAnswer) button.classList.add("wrong");
      if (index === item.correct) button.classList.add("correct");
    });
    document.querySelector("#checkAnswer").textContent = currentQuestion < currentQuestions.length - 1 ? "Câu tiếp theo" : "Hoàn thành";
  }
  awaitingNext = true;
});

function celebrate() {
  const confetti = document.querySelector("#confetti");
  confetti.innerHTML = "";
  const colors = ["#4d72f6", "#9a78d8", "#ffad70", "#43bd8b", "#f6ca64"];
  for (let i = 0; i < 55; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * .35}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confetti.appendChild(piece);
  }
  window.setTimeout(() => { confetti.innerHTML = ""; }, 1900);
}
