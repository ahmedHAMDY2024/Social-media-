import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import MessagesPage from './pages/MessagesPage';
import './styles/globals.css';
import './styles/chat.css';
import './styles/messages.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route redirects to messages */}
          <Route path="/" element={<Navigate to="/messages" replace />} />
          
          {/* Messages/Chat routes */}
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:chatId" element={<ChatPage />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/messages" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;