import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';
import './Hero.css';

const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting"> Olá, eu sou a Janaina Souza</p>
            <h1 className="hero-title">Desenvolvedora Full Stack com foco em arquitetura de software</h1>
            <p className="hero-subtitle">
              Transformo problemas em soluções escaláveis usando microsserviços, Docker e boas práticas de desenvolvimento.
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollTo('projetos')} className="btn btn-primary">
                📂 Ver Projetos
              </button>
              <a href="/assets/docs/curriculo.pdf" download className="btn btn-secondary">
                📄 Currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
