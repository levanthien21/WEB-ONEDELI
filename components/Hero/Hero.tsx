import React from 'react';
import { IMAGES } from '@/constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <img 
        src={IMAGES.heroBackground} 
        alt="Onedeli - Giải pháp bán hàng chuyên nghiệp" 
        className="hero-image"
      />
      
    </section>
  );
};

export default Hero;
