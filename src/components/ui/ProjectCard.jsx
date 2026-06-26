import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ▶️ Ver Demo
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            📂 Código Fonte
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
