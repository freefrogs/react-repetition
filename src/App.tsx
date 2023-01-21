import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Assumptions from './pages/Assumptions';
import Factorial from './pages/Factorial';
import GithubSearch from './pages/GithubSearch';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="section">
          <Routes >
            <Route path="/" element={<Assumptions />} />
            <Route path="/factorial" element={<Factorial />} />
            <Route path="/githubsearch" element={<GithubSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
