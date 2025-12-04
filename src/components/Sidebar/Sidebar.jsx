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
         <h3>Whatapp</h3>
          <img className="sidebar-logo"  />
          <div className="sidebar-right-icons">
            <i class="bi bi-plus-square"></i>
           <i class="bi bi-three-dots-vertical"></i>
      
          </div>
        </div>
        <div className="sidebar-search">
        <i className="bi bi-search"></i>
  <input type="text"placeholder="Ask Meta AI or Search" />
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
