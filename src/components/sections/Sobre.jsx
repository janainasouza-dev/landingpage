import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>
        <div className="sobre-content">
          <div className="sobre-text">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e apaixonada por criar soluções completas. 
              Meu foco é construir sistemas escaláveis e bem estruturados, aplicando conceitos como arquitetura 
              de microsserviços e containerização com Docker.
            </p>
            <p>
              Meus projetos principais envolvem gestão para padarias e oficinas mecânicas, onde pude aplicar 
              desde o design da arquitetura até a implementação do frontend e a orquestração com Docker.
            </p>
          </div>
          <div className="sobre-stats">
            <div className="stat-item">
              <span className="stat-number">🏗️ 2</span>
              <span className="stat-label">Projetos completos com arquitetura definida</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">🐳 100%</span>
              <span className="stat-label">Projetos containerizados com Docker</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">📚 5+</span>
              <span className="stat-label">Repositórios de estudo organizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
