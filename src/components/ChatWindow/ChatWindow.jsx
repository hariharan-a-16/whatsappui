
import React, { useState, useEffect, useRef } from "react";
import "./ChatWindow.css";
import EmojiPicker from "emoji-picker-react"; 

function ChatWindow({ chat, onSendMessage }) {
  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);


  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  // ⭐ Format date for separators
  function formatDate(dateString) {
    if (!dateString) return "";
    const msgDate = new Date(dateString);
    const today = new Date();

    const oneDay = 24 * 60 * 60 * 1000;
    const diff = today - msgDate;

    if (diff < oneDay) return "Today";
    if (diff < 2 * oneDay) return "Yesterday";

    return msgDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  // ⭐ Welcome screen when no chat selected
  if (!chat) {
    return (
      <div className="chat-window-empty">
        <div className="welcome-content">
          <img src="/wellwhatsapp.png" alt="logo" />
          <h2>WhatsApp for Windows</h2>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
        </div>

        <div className="welcome-footer">
          <i className="bi bi-lock"></i>
          <span>End-to-end encrypted</span>
        </div>
      </div>
    );
  }

  // ⭐ Send message
  const handleSend = () => {
    if (messageText.trim() === "") return;
    onSendMessage(chat.id, messageText);
    setMessageText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-window">
      
      {/* ⭐ FULL CHAT HEADER */}
      <div className="chat-header">
        <div className="chat-header-left">
          <img src={chat.avatar} alt="" className="chat-header-avatar" />
          <div>
            <h4>{chat.name}</h4>
            <span>last seen today at 22:17</span>
          </div>
        </div>

        <div className="chat-header-right">
          <i className="bi bi-search"></i>
          <i className="bi bi-telephone"></i>
          <i className="bi bi-camera-video"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      {/* ⭐ MESSAGES + DATE SEPARATORS */}
      <div className="messages">
        {chat.messages.map((msg, index) => {
          const showDate =
            index === 0 ||
            formatDate(chat.messages[index - 1].date) !==
              formatDate(msg.date);

          return (
            <div key={index}>
              {showDate && (
                <div className="date-separator">{formatDate(msg.date)}</div>
              )}

              <div
                className={`message ${
                  msg.from === "Me" ? "sent" : "received"
                }`}
              >
                <p>{msg.text}</p>
                <small>{msg.timestamp}</small>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef}></div>
      </div>

     <div className="chat-input">
  
  {/* ⭐ Emoji Toggle Button */}
  <i 
    className="bi bi-emoji-smile"
    onClick={() => setShowEmoji(!showEmoji)}
    style={{ cursor: "pointer" }}
  ></i>

  {/* ⭐ Emoji Picker Popup */}
  {showEmoji && (
    <div className="emoji-picker-popup">
      <EmojiPicker
        onEmojiClick={(emoji) => {
          setMessageText(prev => prev + emoji.emoji);
        }}
      />
    </div>
  )}

  <input
    type="text"
    value={messageText}
    onChange={(e) => setMessageText(e.target.value)}
    onKeyPress={handleKeyPress}
    placeholder="Type a message..."
  />

  <i className="bi bi-mic"></i>
  <button onClick={handleSend}>Send</button>
</div>

    </div>
  );
}

export default ChatWindow;
