import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
