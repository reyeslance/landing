import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
 
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Footer />
      <switch>
        <Routes path="/" exact component={Home} />
      </switch>
      </Router>
    </>
    
  );
}

export default App;
