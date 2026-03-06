// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Leandro Rodriguez. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
