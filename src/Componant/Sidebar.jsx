import "./sid.css";
const sidebarMessages = [
    { id: 1, sender: "Sara", text: "Hey there!" },
    { id: 2, sender: "Ali", text: "How are you today?" },
    { id: 3, sender: "ahmed", text: "Don't forget our meeting." }
  ];
  
  function Sidebar() {
    return (
      <div className="sidebar">
        <h3>Messages</h3>
        <ul>
          {sidebarMessages.map(msg => (
            <li key={msg.id}>
              <strong>{msg.sender}</strong>
              <p>{msg.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Sidebar