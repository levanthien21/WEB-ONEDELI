import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';


const Pricing: React.FC = () => {
  return (
    <section id="intro" className="pricing section">
      <div className="container">
        <div className="pricing-header text-center">
          <h2>Bảng Giá Của Onedeli</h2>
        </div>
        
        <div className="pricing-content">
          <div className="pricing-images">
            <div className="pricing-image">
              <Image 
                src={IMAGES.pricing1} 
                alt="Bảng giá 1" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
            <div className="pricing-image">
              <Image 
                src={IMAGES.pricing2} 
                alt="Bảng giá 2" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
            <div className="pricing-image">
              <Image 
                src={IMAGES.pricing3} 
                alt="Bảng giá 3" 
                width={300}
                height={200}
                className="img-responsive img-border-radius"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
