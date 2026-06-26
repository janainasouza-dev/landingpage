import React from 'react';
import './SocialIcon.css';

const SocialIcon = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon">
    {icon}
  </a>
);

export default SocialIcon;
