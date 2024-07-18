import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Mine from './Components/Mine';
import './index.css';

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/mine">Mine</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mine" element={<Mine />} />
        </Routes>
      </div>
    </Router>
  );
}
