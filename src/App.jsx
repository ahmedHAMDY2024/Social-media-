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
      <div className="contaner">
      <div className="adds">
        <h1>adds</h1>
      </div>
      <div className="pagesContent">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </div>
      <div className="masseges">
        <h1>masseges</h1>
      </div>
      </div>
    </Router>
    </>
  );
}

export default App;