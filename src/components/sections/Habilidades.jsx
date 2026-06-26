import React from 'react';
import { habilidades } from '../../constants/habilidades';
import './Habilidades.css';

const Habilidades = () => {
  return (
    <section className="habilidades" id="habilidades">
      <div className="container">
        <h2 className="section-title">Tecnologias que domino</h2>
        <div className="habilidades-grid">
          {habilidades.map((categoria, index) => (
            <div key={index} className="habilidade-categoria">
              <h3>{categoria.nome}</h3>
              <div className="habilidade-items">
                {categoria.items.map((item, idx) => (
                  <span key={idx} className="habilidade-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
