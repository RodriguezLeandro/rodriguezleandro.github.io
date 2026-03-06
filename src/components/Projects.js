// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    title: 'E-commerce React',
    description: 'Plataforma de comercio electrónico construida con React y Redux, con carrito de compras y autenticación de usuarios.',
    image: 'https://via.placeholder.com/300x200/007bff/ffffff?text=Proyecto+1', // Placeholder
    demoLink: '#',
    repoLink: 'https://github.com/RodriguezLeandro/Portfolio', // Reemplaza con tus enlaces
  },
  {
    id: 2,
    title: 'Blog Personal con Node.js',
    description: 'Sistema de blog con backend en Node.js/Express y base de datos MongoDB. Incluye CRUD para posts.',
    image: 'https://via.placeholder.com/300x200/28a745/ffffff?text=Proyecto+2', // Placeholder
    demoLink: '#',
    repoLink: 'https://github.com/RodriguezLeandro/Portfolio',
  },
  {
    id: 3,
    title: 'App de Tareas (React Native)',
    description: 'Aplicación móvil de lista de tareas desarrollada con React Native. Funcionalidad de añadir, editar y eliminar tareas.',
    image: 'https://via.placeholder.com/300x200/ffc107/333333?text=Proyecto+3', // Placeholder
    demoLink: '#',
    repoLink: 'https://github.com/RodriguezLeandro/Portfolio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo">Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-repo">Repositorio</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
