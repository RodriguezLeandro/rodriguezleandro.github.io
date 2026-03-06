// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Archivo CSS para este componente

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#hero">Leandro R.</a> {/* Tu nombre */}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#about" className="nav-link">Sobre Mí</a></li>
        <li className="nav-item"><a href="#skills" className="nav-link">Habilidades</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">Proyectos</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;