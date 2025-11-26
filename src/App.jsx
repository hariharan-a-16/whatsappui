import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import "./App.css";


function App() {
  const initialChats = [
    {
      id: 1,
      name: "Alice",
      avatar: "https://i.pravatar.cc/150?img=1",
      messages: [
        { from: "Alice", text: "Hey, how are you?", timestamp: "10:01 AM" },
        { from: "Me", text: "Good, thanks! You?", timestamp: "10:02 AM" },
        { from: "Alice", text: "soluga", timestamp: "10:04 AM" },
      ],
    },
    {
      id: 2,
      name: "Bob",
      avatar: "https://i.pravatar.cc/150?img=2",
      messages: [
        { from: "Bob", text: "Did you finish the report?", timestamp: "9:30 AM" },
        { from: "Me", text: "Almost! Sending it soon.", timestamp: "9:31 AM" },
      ],
    },
    {
      id: 3,
      name: "Charlie",
      avatar: "https://i.pravatar.cc/150?img=3",
      messages: [
        { from: "Charlie", text: "You free this weekend?", timestamp: "11:15 AM" },
        { from: "Me", text: "Yeah, what’s up?", timestamp: "11:16 AM" },
      ],
    },
    {
      id: 4,
      name: "Diana",
      avatar: "https://i.pravatar.cc/150?img=4",
      messages: [
        { from: "Diana", text: "Can you send me the recipe?", timestamp: "2:00 PM" },
        { from: "Me", text: "Sure, one sec!", timestamp: "2:01 PM" },
      ],
    },
    {
      id: 5,
      name: "Ethan",
      avatar: "https://i.pravatar.cc/150?img=5",
      messages: [
        { from: "Ethan", text: "Yo, did you see the match last night?", timestamp: "8:45 AM" },
        { from: "Me", text: "Yeah! That last goal was insane ⚽", timestamp: "8:46 AM" },
      ],
    },
    {
      id: 6,
      name: "Fiona",
      avatar: "https://i.pravatar.cc/150?img=6",
      messages: [
        { from: "Fiona", text: "Where are you now?", timestamp: "3:10 PM" },
        { from: "Me", text: "On the way!", timestamp: "3:11 PM" }
      ]
    },
    {
      id: 7,
      name: "George",
      avatar: "https://i.pravatar.cc/150?img=7",
      messages: [
        { from: "George", text: "Bro, check this meme 😂", timestamp: "7:20 AM" },
        { from: "Me", text: "LOL send more 🤣", timestamp: "7:21 AM" }
      ]
    },
    {
      id: 8,
      name: "Hannah",
      avatar: "https://i.pravatar.cc/150?img=8",
      messages: [
        { from: "Hannah", text: "Call me when you're free", timestamp: "6:55 PM" },
        { from: "Me", text: "Sure, will do", timestamp: "6:57 PM" }
      ]
    },
    {
      id: 9,
      name: "Ian",
      avatar: "https://i.pravatar.cc/150?img=9",
      messages: [
        { from: "Ian", text: "Game tonight?", timestamp: "4:15 PM" },
        { from: "Me", text: "I'm in!", timestamp: "4:16 PM" }
      ]
    },
    {
      id: 10,
      name: "Jenny",
      avatar: "https://i.pravatar.cc/150?img=10",
      messages: [
        { from: "Jenny", text: "Send the notes please", timestamp: "11:50 AM" },
        { from: "Me", text: "Just sent ✅", timestamp: "11:52 AM" }
      ]
    },
    {
      id: 11,
      name: "Kevin",
      avatar: "https://i.pravatar.cc/150?img=11",
      messages: [
        { from: "Kevin", text: "Lunch?", timestamp: "1:10 PM" },
        { from: "Me", text: "Let's go!", timestamp: "1:11 PM" }
      ]
    },
    {
      id: 12,
      name: "Lily",
      avatar: "https://i.pravatar.cc/150?img=12",
      messages: [
        { from: "Lily", text: "Happy Birthday!! 🎉🎂", timestamp: "12:00 AM" },
        { from: "Me", text: "Thank you so much! 😊", timestamp: "12:01 AM" }
      ]
    },
    {
      id: 13,
      name: "Michael",
      avatar: "https://i.pravatar.cc/150?img=13",
      messages: [
        { from: "Michael", text: "Meeting postponed", timestamp: "9:05 AM" },
        { from: "Me", text: "Okay, thanks for update", timestamp: "9:06 AM" }
      ]
    },
    {
      id: 14,
      name: "Nora",
      avatar: "https://i.pravatar.cc/150?img=14",
      messages: [
        { from: "Nora", text: "Can you help me with this code?", timestamp: "10:20 AM" },
        { from: "Me", text: "Sure, send it", timestamp: "10:21 AM" }
      ]
    },
    {
      id: 15,
      name: "Oscar",
      avatar: "https://i.pravatar.cc/150?img=15",
      messages: [
        { from: "Oscar", text: "Movie tonight?", timestamp: "8:15 PM" },
        { from: "Me", text: "Which one?", timestamp: "8:16 PM" }
      ]
    }

  ];
  const DATA_VERSION = "v1.0.0";


  const [chats, setChats] = useState(() => {
    const stored = localStorage.getItem("chats");
    const version = localStorage.getItem("dataVersion");
    if (stored && version === DATA_VERSION) {
      return JSON.parse(stored);
    }

    localStorage.setItem("chats", JSON.stringify(initialChats));
    localStorage.setItem("dataVersion", DATA_VERSION);
    return initialChats;
  });

const [selectedChat, setSelectedChat] = useState(null);


  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);


  const handleSendMessage = (chatId, messageText) => {
    const newMessage = {
      from: "Me",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedChats = chats.map((chat) =>
      chat.id === chatId
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    );

    setChats(updatedChats);
    setSelectedChat(updatedChats.find((chat) => chat.id === chatId));
  };

  return (
    <div className="app-container" style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        chats={chats}
        onSelectChat={setSelectedChat}
        selectedChat={selectedChat}
      />
      <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
