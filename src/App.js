import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import History from './components/History';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from './redux/historySlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);

  const handleClearHistory = () => {
    dispatch(clearHistory());
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
            <Route path="/" element={<Calculator />} />
            <Route path="/history" element={<History history={history} onClearHistory={handleClearHistory} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
