"use strict";

(() => {
  const STORAGE_KEY = "eduvibeMooMooChat";
  const MAX_SAVED_MESSAGES = 50;
  const MAX_CONTEXT_MESSAGES = 20;
  const REQUEST_TIMEOUT_MS = 45000;
  const WELCOME_MESSAGE = "Chào cậu! Tớ là MooMoo 🐮, trợ lý học tập của cậu đây!\n\nCậu đang gặp khó khăn với bài học nào? Hãy hỏi tớ về Vật lí, nhờ giải thích kiến thức, công thức, bài tập hoặc bất cứ điều gì cậu đang thắc mắc nhé!";
  const SUGGESTIONS = [
    "Giải thích một kiến thức Vật lí.",
    "Giúp tớ giải bài tập.",
    "Giải thích công thức.",
    "Tại sao hiện tượng này xảy ra?",
    "Tạo câu hỏi ôn tập cho tớ."
  ];
  const elements = {
    launcher: document.querySelector("#moomooLauncher"),
    panel: document.querySelector("#moomooPanel"),
    history: document.querySelector("#moomooMessages"),
    suggestions: document.querySelector("#moomooSuggestions"),
    typing: document.querySelector("#moomooTyping"),
    status: document.querySelector("#moomooStatus"),
    form: document.querySelector("#moomooForm"),
    input: document.querySelector("#moomooInput"),
    send: document.querySelector(".moomoo-send"),
    clear: document.querySelector("[data-moomoo-clear]"),
    close: document.querySelector("[data-moomoo-close]")
  };
  let historyWarning = "";
  let messages = loadHistory();
  let activeController = null;
  let requestSequence = 0;
  let isSending = false;

  if (!messages.length) messages = [{ role: "assistant", content: WELCOME_MESSAGE }];
  renderMessages();
  if (!historyWarning) saveHistory();

  function loadHistory() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) throw new Error("Dữ liệu lịch sử không đúng định dạng.");
      return parsed
        .filter(message => message && (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string" &&
          (!message.isError || (message.isError === true && typeof message.retryText === "string")))
        .slice(-MAX_SAVED_MESSAGES)
        .map(message => message.isError
          ? { role: message.role, content: message.content, isError: true, retryText: message.retryText }
          : { role: message.role, content: message.content });
    } catch (error) {
      console.error("Không thể đọc lịch sử MooMoo.", error);
      historyWarning = "Không thể đọc lịch sử chat đã lưu. Cậu vẫn có thể bắt đầu cuộc trò chuyện mới.";
      return [];
    }
  }

  function saveHistory() {
    const savedMessages = messages
      .slice(-MAX_SAVED_MESSAGES)
      .map(message => message.isError
        ? { role: message.role, content: message.content, isError: true, retryText: message.retryText }
        : { role: message.role, content: message.content });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMessages));
      return true;
    } catch (error) {
      console.error("Không thể lưu lịch sử MooMoo.", error);
      setStatus("Không lưu được lịch sử trên thiết bị này. Cuộc trò chuyện vẫn tiếp tục trong phiên hiện tại.", "error");
      return false;
    }
  }

  function setStatus(message, type = "") {
    elements.status.textContent = message;
    elements.status.classList.toggle("visible", message !== "");
    elements.status.classList.toggle("error", type === "error");
    elements.status.classList.toggle("success", type === "success");
  }

  function makeCowAvatar() {
    const avatar = document.createElement("span");
    avatar.className = "moomoo-small-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "🐮";
    return avatar;
  }

  function makeAction(label, action, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.moomooAction = action;
    button.dataset.messageIndex = String(index);
    return button;
  }

  function renderMessages() {
    elements.history.replaceChildren();
    messages.forEach((message, index) => {
      const row = document.createElement("div");
      row.className = `moomoo-message-row ${message.role}${message.isError ? " error" : ""}`;
      if (message.role === "assistant") row.append(makeCowAvatar());

      const content = document.createElement("div");
      content.className = "moomoo-message-content";
      const bubble = document.createElement("div");
      bubble.className = "moomoo-message-bubble";
      bubble.textContent = message.content;
      content.append(bubble);

      if (message.role === "assistant") {
        const actions = document.createElement("div");
        actions.className = "moomoo-message-actions";
        if (message.isError && message.retryText) {
          actions.append(makeAction("Thử lại", "retry", index));
        } else if (!message.isError) {
          actions.append(makeAction("Sao chép", "copy", index));
        }
        if (actions.childElementCount) content.append(actions);
      }

      row.append(content);
      elements.history.append(row);
    });

    const showSuggestions = messages.length === 1 && messages[0].role === "assistant";
    elements.suggestions.replaceChildren();
    elements.suggestions.hidden = !showSuggestions;
    if (showSuggestions) {
      SUGGESTIONS.forEach(suggestion => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "moomoo-suggestion";
        button.dataset.moomooSuggestion = suggestion;
        button.textContent = suggestion;
        elements.suggestions.append(button);
      });
    }
    elements.history.scrollTop = elements.history.scrollHeight;
  }

  function openChat() {
    elements.panel.hidden = false;
    elements.launcher.hidden = true;
    elements.launcher.setAttribute("aria-expanded", "true");
    if (historyWarning) {
      setStatus(historyWarning, "error");
      historyWarning = "";
    }
    window.requestAnimationFrame(() => {
      elements.history.scrollTop = elements.history.scrollHeight;
      elements.input.focus();
    });
  }

  function closeChat() {
    elements.panel.hidden = true;
    elements.launcher.hidden = false;
    elements.launcher.setAttribute("aria-expanded", "false");
    elements.launcher.focus();
  }

  function appendMessage(role, content) {
    messages.push({ role, content });
    messages = messages.slice(-MAX_SAVED_MESSAGES);
    renderMessages();
    saveHistory();
  }

  function addErrorMessage(content, retryText) {
    messages.push({ role: "assistant", content, isError: true, retryText });
    messages = messages.slice(-MAX_SAVED_MESSAGES);
    renderMessages();
    saveHistory();
    setStatus("Tớ chưa trả lời được lần này. Cậu có thể thử lại.", "error");
  }

  function setSending(sending) {
    isSending = sending;
    elements.send.disabled = sending;
    elements.typing.hidden = !sending;
    if (sending) elements.history.scrollTop = elements.history.scrollHeight;
  }

  function apiErrorMessage(error) {
    if (window.location.protocol === "file:") {
      return "MooMoo chưa được nối với AI thật. Hãy chạy website qua HTTP/localhost và triển khai backend POST /api/chat.";
    }
    if (error.message === "not-found") {
      return "Chưa tìm thấy backend AI tại /api/chat. Giao diện đã sẵn sàng; cần triển khai endpoint POST /api/chat.";
    }
    if (error.message === "invalid-response") {
      return "Backend AI chưa trả về đúng định dạng. API cần phản hồi JSON có trường reply dạng văn bản.";
    }
    if (error.name === "AbortError") {
      return "MooMoo đã chờ quá lâu mà chưa nhận được phản hồi. Cậu hãy thử lại nhé.";
    }
    if (error.message.startsWith("http-")) {
      return `Backend AI phản hồi lỗi HTTP ${error.message.slice(5)}. Hãy kiểm tra máy chủ rồi thử lại.`;
    }
    return "Không kết nối được với backend AI. Hãy kiểm tra kết nối hoặc thử lại sau nhé.";
  }

  async function requestReply(retryText) {
    if (isSending) return;
    const sequence = ++requestSequence;
    const controller = new AbortController();
    activeController = controller;
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    const endpoint = typeof window.MOOMOO_API_ENDPOINT === "string"
      ? window.MOOMOO_API_ENDPOINT
      : "/api/chat";

    setStatus("");
    setSending(true);
    try {
      if (window.location.protocol === "file:") throw new Error("file-origin");
      const conversation = messages
        .filter(message => !message.isError)
        .slice(-MAX_CONTEXT_MESSAGES)
        .map(({ role, content }) => ({ role, content }));
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
        signal: controller.signal
      });
      if (sequence !== requestSequence) return;
      if (response.status === 404) throw new Error("not-found");
      if (!response.ok) throw new Error(`http-${response.status}`);

      let payload;
      try {
        payload = await response.json();
      } catch (error) {
        throw new Error("invalid-response");
      }
      if (!payload || typeof payload.reply !== "string" || !payload.reply.trim()) {
        throw new Error("invalid-response");
      }
      if (sequence === requestSequence) appendMessage("assistant", payload.reply.trim());
    } catch (error) {
      if (sequence === requestSequence) {
        console.warn("MooMoo không nhận được câu trả lời từ backend.", error);
        addErrorMessage(apiErrorMessage(error), retryText);
      }
    } finally {
      window.clearTimeout(timeout);
      if (sequence === requestSequence) {
        activeController = null;
        setSending(false);
      }
    }
  }

  async function sendMessage() {
    if (isSending) return;
    const content = elements.input.value.trim();
    if (!content) {
      setStatus("Cậu hãy nhập câu hỏi trước nhé.");
      elements.input.focus();
      return;
    }
    elements.input.value = "";
    resizeInput();
    setStatus("");
    appendMessage("user", content);
    await requestReply(content);
  }

  function startNewConversation() {
    requestSequence += 1;
    if (activeController) activeController.abort();
    activeController = null;
    setSending(false);
    messages = [{ role: "assistant", content: WELCOME_MESSAGE }];
    renderMessages();
    setStatus("Đã bắt đầu cuộc trò chuyện mới.", "success");
    saveHistory();
  }

  function resizeInput() {
    elements.input.style.height = "auto";
    elements.input.style.height = `${Math.min(elements.input.scrollHeight, 112)}px`;
  }

  elements.launcher.addEventListener("click", openChat);
  elements.close.addEventListener("click", closeChat);
  elements.clear.addEventListener("click", startNewConversation);
  elements.form.addEventListener("submit", event => {
    event.preventDefault();
    void sendMessage();
  });
  elements.input.addEventListener("input", resizeInput);
  elements.input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      elements.form.requestSubmit();
    }
  });
  elements.panel.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const suggestion = target.closest("[data-moomoo-suggestion]");
    if (suggestion) {
      elements.input.value = suggestion.dataset.moomooSuggestion;
      resizeInput();
      elements.input.focus();
      setStatus("Gợi ý đã được thêm vào ô chat.");
      return;
    }

    const action = target.closest("[data-moomoo-action]");
    if (!action) return;
    const message = messages[Number(action.dataset.messageIndex)];
    if (!message) return;
    if (action.dataset.moomooAction === "retry" && message.retryText) {
      messages.splice(Number(action.dataset.messageIndex), 1);
      renderMessages();
      void requestReply(message.retryText);
      return;
    }
    if (action.dataset.moomooAction === "copy") {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        setStatus("Trình duyệt không hỗ trợ sao chép tự động. Cậu có thể chọn và sao chép câu trả lời.", "error");
        return;
      }
      navigator.clipboard.writeText(message.content).then(() => {
        setStatus("Đã sao chép câu trả lời.", "success");
      }).catch(error => {
        console.error("Không thể sao chép câu trả lời MooMoo.", error);
        setStatus("Không thể sao chép tự động. Cậu hãy thử chọn và sao chép nội dung.", "error");
      });
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !elements.panel.hidden &&
        !document.querySelector("#authDialog").open) closeChat();
  });
})();
