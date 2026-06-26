import React from 'react';
import { projetos } from '../../constants/projetos';
import ProjectCard from '../ui/ProjectCard';
import './Projetos.css';

const Projetos = () => {
  return (
    <section className="projetos" id="projetos">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projetos-grid">
          {projetos.map(projeto => (
            <ProjectCard key={projeto.id} {...projeto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
