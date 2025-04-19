import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componant/pages/Home";
import Profile from "./Componant/pages/Profile";
import Navbar from "./Componant/Navpar";
import CreatePost from "./Componant/pages/Create_Poste";
import Chat from "./Componant/pages/Chat";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;