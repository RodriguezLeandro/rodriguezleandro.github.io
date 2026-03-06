// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">¡Hola, soy</p>
        <h1 className="hero-name">Leandro Rodriguez</h1>
        <p className="hero-title">Desarrollador Web Full Stack</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-secondary">Contactar</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;