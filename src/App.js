import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Highlight from './components/Highlight';
import Skills from './components/Skills';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Highlight />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
