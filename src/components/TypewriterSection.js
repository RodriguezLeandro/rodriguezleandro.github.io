import React, { useState, useEffect } from 'react';
import './TypewriterSection.css';

const TYPING_SPEED = 70; // Velocidad de escritura en milisegundos por caracter
const CURSOR_BLINK_SPEED = 800; // Velocidad de parpadeo del cursor

const TypewriterSection = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeoutId); // Limpiar timeout al desmontar o re-renderizar
    } else {
      setIsTypingComplete(true); // La escritura ha terminado
    }
  }, [charIndex, text]); // Se ejecuta cada vez que charIndex o text cambian

  return (
    <section id="presentation" className="typewriter-section">
      <div className="typewriter-content">
        <p className="typed-text">
          {displayText}
          <span className={`typewriter-cursor ${isTypingComplete ? 'blink-off' : ''}`}>|</span>
        </p>
      </div>
    </section>
  );
};

export default TypewriterSection;
