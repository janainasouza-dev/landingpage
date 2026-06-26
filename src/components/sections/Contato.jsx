import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <section className="contato" id="contato">
      <div className="container">
        <h2 className="section-title">Entre em contato</h2>
        <div className="contato-content">
          <p>Vamos conversar sobre seu próximo projeto?</p>
          <a href="mailto:janaina@email.com" className="btn btn-primary">
            📧 Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;
