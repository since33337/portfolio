import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
    "PHP", "Python", "Git", "VS Code", "Cloud", "Docker"
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Compétences</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
