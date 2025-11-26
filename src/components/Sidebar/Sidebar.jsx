import ChatListItem from "../ChatListItem/ChatListItem.jsx";
import "./Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Sidebar({ chats, onSelectChat, selectedChat }) {
  return (
    <>
    <div className="sidebar">
  <div className="sidebar-header">Chats</div>

  <div className="sidebar-search">
    <input type="text" placeholder="Search or start a new chat" />
  </div>

  <div className="chat-list">
    {chats.map(chat => (
      <ChatListItem
        key={chat.id}
        chat={chat}
        onClick={() => onSelectChat(chat)}
        active={selectedChat?.id === chat.id}
      />
    ))}
  </div>
</div>

    </>
  );
}

export default Sidebar;
