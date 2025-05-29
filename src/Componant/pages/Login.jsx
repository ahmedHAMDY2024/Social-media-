import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../UserAuthContext";
import '../style/login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [style, setStyle] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (username && password) {
      login(username); // set user in context
      setStyle('none');
      navigate("/Home");
    } else {
      alert("Please enter username and password.");
    }
  };

  return (
    <div className="login-container" style={{ display: style }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="login-input"
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <button
        className="signup-button"
        style={{ marginTop: "12px", background: "#28a745" }}
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
  );
}

export default Login;