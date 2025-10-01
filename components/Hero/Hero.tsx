import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <Image 
        src={IMAGES.heroBackground}
        alt="Onedeli - Giải pháp bán hàng chuyên nghiệp"
        fill
        priority
        className="hero-image"
        sizes="100vw"
      />
    </section>
  );
};

export default Hero;
