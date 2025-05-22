import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/Signup.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [style, setStyle] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !password || !confirm) {
      alert("Please fill all fields.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
    setStyle('none');
    navigate("/Home");
  };

  return (
    <div className="signup-container" style={{display: style}}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="signup-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="signup-input"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
        className="signup-input"
      />
      <button className="signup-button" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;