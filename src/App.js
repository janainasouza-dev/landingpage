import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Sobre from './components/sections/Sobre';
import Projetos from './components/sections/Projetos';
import Habilidades from './components/sections/Habilidades';
import Contato from './components/sections/Contato';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
