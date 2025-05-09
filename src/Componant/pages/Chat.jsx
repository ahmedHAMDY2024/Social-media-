import '../style/Chat.css'
import { useState } from "react";
function Chat() {
    const [messages, setMessages] = useState(["Welcome to chat!"]);
    const [input, setInput] = useState("");
  
    const sendMessage = () => {
      if (input.trim()) {
        setMessages([...messages, input]);
        setInput("");
      }
    };
  
    return (
        <div className="chat-container">
          <h1>Chat</h1>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <p key={idx}>💬 {msg}</p>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      );
      
  }
  
export default Chat