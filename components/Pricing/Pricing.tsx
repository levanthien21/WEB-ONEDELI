import React from 'react';
import Image from 'next/image';
import { IMAGES, MARKETING_IMAGES, PRICING_IMAGES } from '@/constants';


const Pricing: React.FC = () => {
  return (
    <section id="intro" className="pricing section">
      <div className="container">
        <div className="pricing-header text-center">
          <h2>Bảng Giá Của Onedeli</h2>
        </div>
        
        <div className="pricing-content" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {PRICING_IMAGES.map((src, idx) => (
            <div key={src} className="pricing-image" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href={src} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={src}
                  alt={`Bảng giá ${idx + 1}`}
                  width={1100}
                  height={0}
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  style={{ width: '100%', height: 'auto' }}
                  className="img-responsive img-border-radius-large"
                  priority={idx === 0}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
