import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Team from './pages/Team';

function App() {
  return (
    <Router basename={"/"}>
      <Navbar />
      <Routefunction />
      <Footer/>
    </Router>
  )
}

function Routefunction() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      
      <Routes location={location} key={location.key}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    
    </AnimatePresence>
  );
}

export default App;
