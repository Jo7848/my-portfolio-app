// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Import the Projects component
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects /> {/* Render the Projects component here */}
          <Contact />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;