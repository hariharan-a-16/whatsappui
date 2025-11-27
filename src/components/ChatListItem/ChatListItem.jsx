import React from "react";
import "./ListItem.css"
const ChatListItem = ({ chat, onClick, active }) => {
    return (
        <div
            onClick={onClick}
            className={`chat-item ${active ? "active" : ""}`}
        >
            <img
                src={chat.avatar}
                alt={chat.name}
                className="chat-avatar"
            />
            <div className="chat-info">
                <h4>{chat.name}</h4>
                <p>{chat.messages[chat.messages.length - 1].text}</p>
            </div>
        </div>
    );
};

export default ChatListItem;
