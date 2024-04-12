
import React, { useEffect } from 'react';
import './chatroom.css';



function Chatroom() {

 
    // Sample JSON data representing chat messages
    const chatData = [
        {
            "header": "date1",
            "time": "time1",
            "label": "label1",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "upvotes": "10"
        },
        {
            "header": "date2",
            "time": "time2",
            "label": "label2",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "upvotes": "5"
        },
        {
            "header": "date1",
            "time": "time1",
            "label": "label1",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "upvotes": "10"
        },
        {
            "header": "date2",
            "time": "time2",
            "label": "label2",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "upvotes": "5"
        },
        {
            "header": "date1",
            "time": "time1",
            "label": "label1",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "upvotes": "10"
        },
        {
            "header": "date2",
            "time": "time2",
            "label": "label2",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "upvotes": "5"
        }
    ];

    // Function to dynamically generate chat messages from JSON data
    const generateChatMessages = (data) => {
        return data.map((message, index) => (
            <div key={index} className="Chat">
                <div className="Header">
                    <p>{message.header} {message.time} {message.label}</p>
                </div>
                <h4 className="Body">{message.body}</h4>
                <div className="Footer">
                    <p>{message.upvotes} upvotes</p>
                    <button>Upvote</button>
                </div>
            </div>
        ));
    };

    return (
        <div className="ChatroomPage">
            <h1>Chatroom</h1>
            <div id="chatContainer" className="Chat">
                {generateChatMessages(chatData)}
            </div>
        </div>
    );





}

export default Chatroom;





  


