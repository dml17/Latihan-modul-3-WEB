

import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Routes>
      <Route exact path="/" element={<Menu />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
