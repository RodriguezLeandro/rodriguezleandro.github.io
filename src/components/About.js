// src/components/About.js
import React from 'react';
import './About.css';
// import yourProfilePic from '../assets/your-profile-pic.jpg'; // Descomenta y ajusta la ruta si tienes una imagen

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">Sobre Mí</h2>
        {/* Descomenta y ajusta la ruta si tienes una imagen */}
        {/* <img src={yourProfilePic} alt="Tu foto de perfil" className="profile-pic" /> */}
        <p className="about-text">
          Soy un desarrollador web Full Stack apasionado por construir soluciones innovadoras y eficientes.
          Con experiencia en [Menciona tus tecnologías principales, ej. React, Node.js, Express, MongoDB], disfruto
          transformando ideas complejas en interfaces de usuario intuitivas y sistemas backend robustos.
          Siempre estoy aprendiendo nuevas tecnologías y buscando desafíos que me permitan crecer profesionalmente.
        </p>
        <p className="about-text">
          Mi enfoque principal es la creación de experiencias de usuario fluidas y la optimización del rendimiento,
          asegurando que cada proyecto no solo sea funcional, sino también escalable y fácil de mantener.
        </p>
      </div>
    </section>
  );
};

export default About;
