import React from "react";
import './Hero.css'
import armel from '../assets/armel.jpg'
  
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bonjour, je suis <span>Ghislain ARMEL</span></h1>
        <h2>Développeur Web & Mobile</h2>
        <p>Spécialisé en React Native,React js, Node.js, PostgreSQL, MySQL et MongoDB.</p>
        <button>Voir mes projets</button>
      </div>
      <img
        src={armel}
        alt="Photo de Ghislain Armel"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;
