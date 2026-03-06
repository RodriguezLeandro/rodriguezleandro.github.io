// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">Contáctame</h2>
        <p className="contact-intro">
          ¿Tienes una idea o un proyecto en mente? ¡Me encantaría saber de ti!
        </p>
        <div className="contact-details">
          <p>
            <strong className="contact-label">Email:</strong>{' '}
            <a href="mailto:tu.email@example.com" className="contact-link">tu.email@example.com</a>
          </p>
          <p>
            <strong className="contact-label">LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/tuperfil/" target="_blank" rel="noopener noreferrer" className="contact-link">/in/tuperfil</a>
          </p>
          <p>
            <strong className="contact-label">GitHub:</strong>{' '}
            <a href="https://github.com/RodriguezLeandro" target="_blank" rel="noopener noreferrer" className="contact-link">/RodriguezLeandro</a>
          </p>
        </div>
        {/* Aquí podrías añadir un formulario de contacto si lo deseas,
            pero necesitaría un backend o un servicio de terceros como Formspree */}
        {/* <form className="contact-form">
          <input type="text" placeholder="Tu Nombre" required />
          <input type="email" placeholder="Tu Email" required />
          <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
