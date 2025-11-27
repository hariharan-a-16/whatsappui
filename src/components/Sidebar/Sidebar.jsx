import ChatListItem from "../ChatListItem/ChatListItem.jsx";
import "./Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Sidebar({ chats, onSelectChat, selectedChat }) {
  return (
    <>
   <div className="sidebar">

  <div className="sidebar-top-icons">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      className="sidebar-logo"
    />

    <div className="sidebar-right-icons">
      <i className="bi bi-people-fill"></i>
      <i className="bi bi-broadcast"></i>
      <i className="bi bi-chat-left-text"></i>
      <i className="bi bi-dash-circle"></i>
      <i className="bi bi-gear"></i>
    </div>
  </div>

  <div className="sidebar-header">Chats</div>

  <div className="sidebar-search">
    <input type="text" placeholder="Search or start a new chat" />
  </div>
      {/* Filter chips */}
      <div className="sidebar-filters">
        <button className="chip active">All</button>
        <button className="chip">Unread</button>
        <button className="chip">Favourites</button>
        <button className="chip">Groups</button>
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
