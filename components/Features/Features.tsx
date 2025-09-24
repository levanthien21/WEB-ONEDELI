import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';


const Features: React.FC = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2>Tính Năng Nổi Bật Của Onedeli</h2>
        </div>
        
        <div className="features-content">
          <div className="feature-images">
            <div className="feature-image">
              <Image 
                src={IMAGES.feature1} 
                alt="Tính năng 1" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
            <div className="feature-image">
              <Image 
                src={IMAGES.feature2} 
                alt="Tính năng 2" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
          </div>
          
          <div className="features-cta text-center">
            <a href="#contact" className="btn btn-primary btn-large">
              Tải app ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
