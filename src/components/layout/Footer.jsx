import React from 'react';
import SocialIcon from '../ui/SocialIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">© 2026 Janaina Souza. Feito com 💜 e código.</p>
          <div className="footer-social">
            <SocialIcon 
              href="https://linkedin.com/in/janaina" 
              icon="🔗" 
              label="LinkedIn"
            />
            <SocialIcon 
              href="https://github.com/janaina" 
              icon="🐙" 
              label="GitHub"
            />
            <SocialIcon 
              href="mailto:janaina@email.com" 
              icon="✉️" 
              label="E-mail"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
