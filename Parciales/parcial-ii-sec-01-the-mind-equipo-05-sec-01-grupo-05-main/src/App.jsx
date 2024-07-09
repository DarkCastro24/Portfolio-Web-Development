import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategorySelector from './components/Selection';
import Quiz from './components/Quiz';
import Review from './components/Review';
import History from './components/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-category" element={<CategorySelector />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/review" element={<Review />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;




