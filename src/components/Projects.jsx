import React from "react";
import "./projects.css"; // <-- fichier CSS à créer
import crud from '../assets/crud.PNG'

const Projects = () => {
  const projects = [
    {
      title: "Operation CRUD",
      desc: "Projet complet en React et Node.js avec PostgreSQL.",
      image: {crud},
      github: "https://github.com/since33337/cathy",
      demo: "https://cathy-y1j5-ddz4tflbq-cathys-projects-d856d899.vercel.app/",
    },
    {
      title: "Blog",
      desc: "Application de blog avec gestion des articles.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/blog",
      demo: "https://blog-demo.vercel.app",
    },
    {
      title: "Ecommerce",
      desc: "Site de vente avec panier et interface client.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Dashboard Admin",
      desc: "Interface d’administration avec statistiques.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/admin-dashboard",
      demo: "https://admin-dashboard.vercel.app",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={`Projet ${project.title}`}
              className="project-image"
            />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                Code GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Voir Démo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
