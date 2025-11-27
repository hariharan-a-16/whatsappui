import React from "react";
import "./ChatWindow.css";
import { useState, useEffect, useRef } from "react";


function ChatWindow({ chat, onSendMessage }) {
    const [messageText, setMessageText] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Auto-scroll to bottom when messages update
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chat]);

if (!chat) {
    return (
        <div className="chat-window-empty">
            <div className="welcome-content">
                <img 
                    src="/wellwhatsapp.png" 
                    alt="logo"
                />
                <h2>WhatsApp for Windows</h2>
                <p>Send and receive messages without keeping your phone online.</p>
                <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
            </div>

            {/* Bottom encryption text */}
            <div className="welcome-footer">
                <i className="bi bi-lock"></i>
                <span>End-to-end encrypted</span>
            </div>
        </div>
    );
}



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

            <div className="messages">
               {chat.messages.map(msg => (
    <div className={`message ${msg.from === "Me" ? "sent" : "received"}`}>
        <p>{msg.text}</p>
        <small>{msg.timestamp}</small>
    </div>
))}

                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;


