const recentLessons = [
  { title: "Phân số và phép chia", subject: "Toán học", icon: "➗", className: "math", progress: 75, type: "math" },
  { title: "Thực vật quang hợp", subject: "Khoa học", icon: "🌿", className: "science", progress: 48, type: "science" },
  { title: "Thì hiện tại đơn", subject: "Tiếng Anh", icon: "ABC", className: "english", progress: 62, type: "english" }
];

const allLessons = [
  { title: "Phân số và phép chia", subject: "Toán học", icon: "➗", className: "math", type: "math" },
  { title: "Số thập phân", subject: "Toán học", icon: "1.5", className: "math", type: "math" },
  { title: "Thực vật quang hợp", subject: "Khoa học", icon: "🌿", className: "science", type: "science" },
  { title: "Chu trình nước", subject: "Khoa học", icon: "💧", className: "science", type: "science" },
  { title: "Thì hiện tại đơn", subject: "Tiếng Anh", icon: "ABC", className: "english", type: "english" }
];

const chapters = [
  { number: "01", title: "Số và phép tính", count: "8 bài học", lessons: ["Ôn tập số tự nhiên", "Phân số cơ bản", "Phép chia phân số"] },
  { number: "02", title: "Hình học vui", count: "6 bài học", lessons: ["Đường thẳng và góc", "Chu vi hình học", "Diện tích hình học"] },
  { number: "03", title: "Đại lượng và đo lường", count: "5 bài học", lessons: ["Đơn vị đo độ dài", "Khối lượng và thời gian", "Tỉ số phần trăm"] }
];

const questions = [
  {
    subject: "Toán học",
    title: "Tìm kết quả của phép tính",
    example: "Ví dụ: 1/2 + 1/2 = 2/2 = 1",
    question: "1/4 + 1/4 bằng bao nhiêu?",
    answers: ["1/8", "1/4", "1/2", "2/8"],
    correct: 2,
    explanation: "Rất chính xác! Hai phân số cùng mẫu số nên cộng tử số: 1 + 1 = 2, giữ nguyên mẫu số 4."
  },
  {
    subject: "Toán học",
    title: "Rút gọn phân số",
    example: "Ví dụ: 4/8 có thể rút gọn bằng cách chia cả tử và mẫu cho 4.",
    question: "Phân số 6/8 rút gọn thành?",
    answers: ["2/4", "3/4", "1/2", "6/4"],
    correct: 1,
    explanation: "Chính xác! Chia cả tử số và mẫu số cho 2: 6 ÷ 2 = 3 và 8 ÷ 2 = 4."
  },
  {
    subject: "Toán học",
    title: "So sánh phân số",
    example: "Ví dụ: 1/2 = 2/4 vì hai phân số bằng nhau.",
    question: "Phân số nào lớn hơn 1/2?",
    answers: ["1/4", "2/5", "3/5", "1/3"],
    correct: 2,
    explanation: "Xuất sắc! 3/5 lớn hơn 1/2 vì 3/5 = 0,6 còn 1/2 = 0,5."
  }
];

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
  return `<article class="lesson-card" data-open-quiz>
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
      <button class="start-button" data-open-quiz>Bắt đầu học</button>
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
      ${chapter.lessons.map((lesson, lessonIndex) => `<button class="chapter-lesson" data-open-quiz><span>${lessonIndex + 1}</span><strong>${lesson}</strong></button>`).join("")}
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
  document.querySelector("#profileMenu").classList.remove("open");
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    navigateTo(button.dataset.page);
  });
});

const profileButton = document.querySelector("#profileButton");
const profileMenu = document.querySelector("#profileMenu");
profileButton.addEventListener("click", () => profileMenu.classList.toggle("open"));
document.addEventListener("click", event => {
  if (!event.target.closest(".profile-wrap")) profileMenu.classList.remove("open");
});

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector("#pageLoader").classList.add("done"), 900);
  window.setTimeout(() => document.querySelector("#welcomeToast").classList.add("show"), 1150);
  window.setTimeout(() => document.querySelector("#welcomeToast").classList.remove("show"), 6500);
});
document.querySelector("#closeWelcome").addEventListener("click", () => {
  document.querySelector("#welcomeToast").classList.remove("show");
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

function renderQuestion() {
  const item = questions[currentQuestion];
  selectedAnswer = null;
  awaitingNext = false;
  document.querySelector("#checkAnswer").textContent = "Kiểm tra đáp án";
  document.querySelector("#quizSubject").textContent = item.subject;
  document.querySelector("#questionNumber").textContent = `Câu ${currentQuestion + 1}/${questions.length}`;
  document.querySelector("#quizTitle").textContent = item.title;
  document.querySelector("#exampleBox p").textContent = item.example;
  document.querySelector("#quizProgress").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
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

function openQuiz() {
  currentQuestion = 0;
  renderQuestion();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open-quiz]");
  if (trigger) openQuiz();
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
    if (currentQuestion < questions.length - 1) {
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

  const item = questions[currentQuestion];
  if (selectedAnswer === item.correct) {
    feedback.textContent = cheers[cheerIndex % cheers.length];
    cheerIndex++;
    feedback.className = "answer-feedback show correct";
    answersContainer.querySelectorAll(".answer-option").forEach((button, index) => {
      if (index === item.correct) button.classList.add("correct");
    });
    celebrate();
    document.querySelector("#checkAnswer").textContent = currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Hoàn thành";
  } else {
    feedback.textContent = `Chưa chính xác. ${item.explanation}`;
    feedback.className = "answer-feedback show wrong";
    answersContainer.querySelectorAll(".answer-option").forEach((button, index) => {
      if (index === selectedAnswer) button.classList.add("wrong");
      if (index === item.correct) button.classList.add("correct");
    });
    document.querySelector("#checkAnswer").textContent = currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Hoàn thành";
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
