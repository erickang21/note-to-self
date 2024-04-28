import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import CreateEntryPage from './pages/CreateEntry';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="components">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateEntryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
