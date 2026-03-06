// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js',
    'Express.js', 'MongoDB', 'SQL', 'Git', 'GitHub', 'RESTful APIs',
    'Responsive Design', 'Webpack', 'Figma (Básico)'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
