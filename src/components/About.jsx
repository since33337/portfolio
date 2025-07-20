import React from 'react';
import './About.css'

const About = () => {
  return (
    <section className="about-section">
      <h2>À propos de moi</h2>
      <p>
        Ghislain ARMEL, développeur passionné de technologies web ET mobile, avec une expérience dans le développement fullstack.
      </p>
      <p>
        Email : <a href="mailto:armelsince@gmail.com" className="email-link">armelsince@gmail.com</a>
      </p>
    </section>
  );
}

export default About;
