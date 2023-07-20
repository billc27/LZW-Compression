import "../index.css"
import React, { useState } from 'react'

export default function HistorySection() {
    const [chats, setChats] = useState([]);

    const handleNewChat = () => {
        setChats((prevChats) => [...prevChats, `Chatbox ${prevChats.length + 1}`]);
    };

    return (
        <div className="flex flex-col h-screen w-1/5 bg-history-sect-color p-3">
            <div className="p-3 flex-grow-0">
                <button
                className="w-full bg-history-new-calc-color hover:bg-gray-400 text-white font-bold py-2 px-4 rounded border border-white"
                onClick = {handleNewChat}
                >
                + New Calculation
                </button>
            </div>
            <div className="p-3 flex-grow max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrolling-touch">
                {chats.map((chat) => (
                    <div key={chat} className="p-7 bg-history-sect-text-color text-white rounded mb-2"> 
                    {chat}
                    </div>
                ))}
            </div>
         </div>
    )
}