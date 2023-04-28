import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ServerDetails from './pages/ServerDetails';
import AccessMore from './pages/AccessMore';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/server/:serverId" element={<ServerDetails />}/>
          <Route path="/more" element={<AccessMore />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
