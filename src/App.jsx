import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Componant/pages/Home";
import Profile from "./Componant/pages/Profile";
import Navbar from "./Navbar";
import CreatePost from "./Componant/pages/Create_Poste";
import Chat from "./Componant/pages/Chat";
import Sidebar from './Sidebar'
import Login from "./Componant/pages/Login"
import Signup from './Componant/pages/Signup';
import UserAuthContextProvider from "./UserAuthContextProvider";
import { useAuth } from "./UserAuthContext";
import "./Componant/style/App.css";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <AppContent />
      </Router>
    </UserAuthContextProvider>
  );
}

function AppContent() {
  const { user } = useAuth();
  return (
    <>
      {user && <Navbar />}
      <div className="contaner">
        <div className="pagesContent">
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/Home" replace /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/Home" replace /> : <Signup />}
            />
            <Route
              path="/Home"
              element={user ? <Home /> : <Navigate to="/" replace />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/" replace />}
            />
            <Route
              path="/create-post"
              element={user ? <CreatePost /> : <Navigate to="/" replace />}
            />
            <Route
              path="/chat"
              element={user ? <Chat /> : <Navigate to="/" replace />}
            />
          </Routes>
        </div>
        {user && (
          <div className="masseges">
            <Sidebar />
          </div>
        )}
      </div>
    </>
  );
}

export default App;