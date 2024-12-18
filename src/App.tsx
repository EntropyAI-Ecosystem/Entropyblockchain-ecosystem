import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Repository from './components/sections/Repository';
import Laboratory from './components/sections/Laboratory';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <Features />
      <Repository />
      <Laboratory />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;