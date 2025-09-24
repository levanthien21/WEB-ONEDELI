import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';


const Features: React.FC = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2>Hệ sinh thái đối tác uy tín</h2>
        </div>
        
        <div className="features-content">
          {/* Partner Logos */}
          <div className="partners-grid">
            <div className="partner-item" aria-label="ACB">
              <Image
                src={IMAGES.partnerACB}
                alt="ACB"
                width={200}
                height={80}
                className="img-responsive"
              />
            </div>
            <div className="partner-item" aria-label="M-invoice">
              <Image
                src={IMAGES.partnerMinvoice}
                alt="M-invoice"
                width={200}
                height={80}
                className="img-responsive"
              />
            </div>
            <div className="partner-item" aria-label="Ahamove">
              <Image
                src={IMAGES.partnerAhamove}
                alt="Ahamove"
                width={200}
                height={80}
                className="img-responsive"
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
