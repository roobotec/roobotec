import React, { useEffect, useRef, useState } from 'react';
import './ChatbotWidget.css';
import { generateChatResponse } from '../services/geminiService';

const initialMessage = { sender: 'bot', text: 'Hi, how can ROOBOTEC help your business today?' };

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typingMessage, setTypingMessage] = useState(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    const messagesElement = messagesRef.current;
    if (!messagesElement) {
      return;
    }

    messagesElement.scrollTo({ top: messagesElement.scrollHeight, behavior: 'smooth' });
  }, [messages, typingMessage]);

  useEffect(() => {
    if (!typingMessage) {
      return undefined;
    }

    if (typingMessage.visibleText.length >= typingMessage.text.length) {
      setMessages((currentMessages) => [...currentMessages, typingMessage.message]);
      setTypingMessage(null);
      return undefined;
    }

    const typingTimer = setTimeout(() => {
      setTypingMessage((currentMessage) => ({
        ...currentMessage,
        visibleText: currentMessage.text.slice(0, currentMessage.visibleText.length + 1),
      }));
    }, 22);

    return () => clearTimeout(typingTimer);
  }, [typingMessage]);

  async function handleSendMessage() {
    const cleanInput = input.trim();
    if (!cleanInput || isLoading || typingMessage) {
      return;
    }

    const userMessage = { sender: 'user', text: cleanInput };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateChatResponse([
        ...newMessages.map((message) => ({ sender: message.sender, text: message.text })),
      ]);

      const botMessage = { sender: 'bot', text: responseText };
      setTypingMessage({ message: botMessage, text: responseText, visibleText: '' });
    } catch (error) {
      const fallback = 'Thank you for your message. Our team will be happy to help you understand the right ROOBOTEC solution for your business.';
      setTypingMessage({ message: { sender: 'bot', text: fallback }, text: fallback, visibleText: '' });
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className="chatbot-widget">
      <div className={`chatbot-panel ${isOpen ? 'chatbot-open' : ''}`}>
        <div className="chatbot-panel-header">
          <div className="chatbot-panel-title">
            <img src={`${process.env.PUBLIC_URL}/BOT.png`} alt="ROOBOTEC AI" className="chatbot-panel-avatar" />
            <div>
              <span className="chatbot-title">ROOBOTEC AI</span>
              <span className="chatbot-status">Online</span>
            </div>
          </div>
          <button className="chatbot-close" aria-label="Close chatbot" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <div ref={messagesRef} className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message-row ${message.sender === 'bot' ? 'bot-row' : 'user-row'}`}>
              <div className={`chatbot-message-bubble ${message.sender === 'bot' ? 'bot-bubble' : 'user-bubble'}`}>
                {message.text}
              </div>
            </div>
          ))}
          {typingMessage && (
            <div className="chatbot-message-row bot-row">
              <div className="chatbot-message-bubble bot-bubble">{typingMessage.visibleText}</div>
            </div>
          )}
          {isLoading && !typingMessage && (
            <div className="chatbot-message-row bot-row">
              <div className="chatbot-message-bubble bot-bubble">
                <span className="chatbot-typing" aria-label="Bot is typing">
                  <span></span><span></span><span></span>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="chatbot-input-row">
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Write your message here...."
            aria-label="Chat message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleInputKeyDown}
            disabled={isLoading || typingMessage}
          />
          <button className="chatbot-send" aria-label="Send message" disabled={isLoading || typingMessage} onClick={handleSendMessage}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 20.5 21 12 3 3.5v6l12 2.5-12 2.5v6z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <button className="chatbot-fab" aria-label="Open chatbot" onClick={() => setIsOpen(!isOpen)}>
        <img src={`${process.env.PUBLIC_URL}/AI Bot.svg`} alt="" className="chatbot-fab-icon" />
      </button>
    </div>
  );
}

export default ChatbotWidget;
