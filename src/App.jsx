import React, { useState } from 'react';
import './App.css';

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <div className='topbar'>
        <button onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      <main className='container-app'>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
