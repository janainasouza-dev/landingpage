import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';
import './Header.css';

const Header = () => {
  const scrollTo = useScrollTo();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">Janaina Souza</div>
          <nav className="nav-menu">
            <ul>
              <li><button onClick={() => scrollTo('sobre')}>Sobre</button></li>
              <li><button onClick={() => scrollTo('projetos')}>Projetos</button></li>
              <li><button onClick={() => scrollTo('habilidades')}>Habilidades</button></li>
              <li><button onClick={() => scrollTo('contato')}>Contato</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
