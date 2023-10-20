import React from 'react';
import './style.css';

const Hero = ({ title, subtitle, text }) => {
  return (
    <div className="hero-container">
        <div className='title'>
            <h2 className="hero-subtitle">{subtitle}</h2>
            <h1 className="hero-title">{title}</h1>
        </div>
        <p className="hero-text">{text}</p>
    </div>
  );
};

export default Hero;
