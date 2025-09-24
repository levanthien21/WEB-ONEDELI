import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';


const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <Image 
              src={IMAGES.aboutImage} 
              alt="Về One Deli" 
              width={500}
              height={400}
              className="img-responsive img-border-radius-large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
