import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/login.css'

// Login Pagefunction 
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [style,setStyle]=useState('')
    const navigate = useNavigate();
  
    const handleLogin = () => {
      if (username && password) {
        setStyle('none')
        navigate("Home");
      } else {
        alert("Please enter username and password.");
      }
    };
  
    return (
      <div className="login-container" style={{display:style}}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    );
  }
  export default Login