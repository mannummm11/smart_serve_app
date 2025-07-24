import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GetStartedPage from './pages/GetStartedPage';
import CandidateResultsPage from './pages/CandidateResultsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/candidate-results" element={<CandidateResultsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;