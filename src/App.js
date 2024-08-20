import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import History from './components/History';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (calculation) => {
    setHistory([...history, calculation]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className="nav-link">Calculator</Link> |
            <Link to="/history" className="nav-link">History</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Calculator addToHistory={addToHistory} />} />
            <Route path="/history" element={<History history={history} onClearHistory={clearHistory} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;