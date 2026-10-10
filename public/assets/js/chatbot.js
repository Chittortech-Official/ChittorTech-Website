// chatbot.js
window.addEventListener('load', () => {
  // Defer chatbot execution by 2 seconds after page load to improve Core Web Vitals & FCP
  setTimeout(initializeChatbot, 2000);
});

function initializeChatbot() {
  const fab = document.getElementById('chatbot-fab');
  const windowEl = document.getElementById('chatbot-window');
  const overlay = document.getElementById('chatbot-overlay');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const resetBtn = document.getElementById('chatbot-reset-btn');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send-btn');
  const messagesContainer = document.getElementById('chatbot-messages');
  const suggestionsContainer = document.getElementById('chatbot-suggestions');

  let isOpen = false;
  let isLoading = false;
  let messages = [];

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  function parseMarkdown(text) {
    if (!text) return '';
    let html = text
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
      .replace(/<\/ul>\n<ul>/g, '')
      .replace(/\[ACTION:CONTACT\]/g, '<a href="contact-us.php" class="message-action-btn">Contact Us <i class="fas fa-arrow-right"></i></a>')
      .replace(/\[ACTION:DEMO\]/g, '<a href="#" data-bs-toggle="modal" data-bs-target="#trialModal" class="message-action-btn">Request a Demo <i class="fas fa-laptop"></i></a>');
    return `<p>${html}</p>`;
  }

  const defaultGreeting = "Hello! I'm the ChittorTech AI Assistant. How can I help you today?";
  const suggestions = ["What is ChittorTech?", "View Services", "Contact Support"];

  // Initialize
  const savedMessages = localStorage.getItem("chittortech_chat_history");
  if (savedMessages) {
    try {
      messages = JSON.parse(savedMessages);
      if (!Array.isArray(messages) || messages.length === 0) {
        throw new Error("Invalid messages");
      }
    } catch (e) {
      messages = [{ role: 'ai', content: defaultGreeting, isSystem: true, timestamp: new Date().toISOString() }];
    }
  } else {
    messages = [{ role: 'ai', content: defaultGreeting, isSystem: true, timestamp: new Date().toISOString() }];
  }

  function renderMessages() {
    // Clear current messages except the typing indicator if present
    const typingIndicator = messagesContainer.querySelector('.typing');
    messagesContainer.innerHTML = '';
    
    messages.forEach((msg) => {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message ${msg.role}`;
      
      const contentHtml = msg.role === 'ai' ? parseMarkdown(msg.content) : msg.content;
      msgDiv.innerHTML = contentHtml;
      
      const timeSpan = document.createElement('span');
      timeSpan.className = 'msg-time';
      const d = msg.timestamp ? new Date(msg.timestamp) : new Date();
      timeSpan.textContent = formatTime(d);
      msgDiv.appendChild(timeSpan);
      
      if (msg.role === 'ai') {
        const copyBtn = document.createElement('div');
        copyBtn.className = 'msg-copy-btn';
        copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        copyBtn.title = 'Copy message';
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(msg.content);
          copyBtn.innerHTML = '<i class="fas fa-check" style="color: #10b981;"></i>';
          setTimeout(() => { copyBtn.innerHTML = '<i class="far fa-copy"></i>'; }, 2000);
        };
        msgDiv.appendChild(copyBtn);
      }

      messagesContainer.appendChild(msgDiv);
    });

    if (typingIndicator && isLoading) {
      messagesContainer.appendChild(typingIndicator);
    }

    if (messages.length <= 1) {
      renderSuggestions();
    } else {
      if (suggestionsContainer) suggestionsContainer.style.display = 'none';
    }

    scrollToBottom();
  }

  function renderSuggestions() {
    if (!suggestionsContainer) return;
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = 'flex';
    suggestions.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'suggestion-btn';
      btn.innerHTML = `${s} <i class="fas fa-chevron-right"></i>`;
      btn.onclick = () => {
        input.value = s;
        handleSend();
      };
      suggestionsContainer.appendChild(btn);
    });
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      windowEl.classList.add('open');
      overlay.classList.add('open');
      fab.classList.add('active');
      scrollToBottom();
    } else {
      windowEl.classList.remove('open');
      overlay.classList.remove('open');
      fab.classList.remove('active');
    }
  }

  function resetChat() {
    localStorage.removeItem("chittortech_chat_history");
    messages = [{ role: 'ai', content: defaultGreeting, isSystem: true }];
    renderMessages();
  }

  async function handleSend() {
    const text = input.value.trim();
    if (!text || isLoading) return;

    if (suggestionsContainer) suggestionsContainer.style.display = 'none';

    // Add user message
    messages.push({ role: 'user', content: text, timestamp: new Date().toISOString() });
    input.value = '';
    renderMessages();
    
    localStorage.setItem("chittortech_chat_history", JSON.stringify(messages));

    isLoading = true;
    sendBtn.disabled = true;
    
    // Add typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai typing';
    typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    messagesContainer.appendChild(typingDiv);
    scrollToBottom();

    try {
      const response = await fetch("chat_api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.filter(m => !m.isSystem).map(m => ({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error("API Error");
      
      const data = await response.json();
      messages.push({ role: 'ai', content: data.response, timestamp: new Date().toISOString() });
    } catch (e) {
      messages.push({ role: 'ai', content: "I'm sorry, I'm having trouble connecting to the server.", timestamp: new Date().toISOString() });
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      localStorage.setItem("chittortech_chat_history", JSON.stringify(messages));
      renderMessages();
    }
  }

  // Event Listeners
  if (fab) fab.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);
  if (overlay) overlay.addEventListener('click', toggleChat);
  if (resetBtn) resetBtn.addEventListener('click', resetChat);
  
  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  // Initial render
  renderMessages();
}
