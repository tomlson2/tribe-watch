import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ServerDetails from './pages/ServerDetails';
import AccessMore from './pages/AccessMore';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/server/:serverId" element={<ServerDetails />}/>
          <Route path="/more" element={<AccessMore />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
