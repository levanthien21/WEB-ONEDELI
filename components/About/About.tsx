import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="features-header text-center">
          <h2>Hệ sinh thái đối tác uy tín</h2>
          <p className="features-subtitle">Onedeli hợp tác cùng các đối tác tin cậy để mang đến giải pháp toàn diện, an toàn và hiệu quả cho hộ kinh doanh.</p>
        </div>
        <div className="about-partners">
          <div className="about-partner-card" aria-label="ACB">
            <Image src={IMAGES.partnerACB} alt="ACB" width={180} height={72} className="img-responsive" />
          </div>
          <div className="about-partner-card" aria-label="M-invoice">
            <Image src={IMAGES.partnerMinvoice} alt="M-invoice" width={180} height={72} className="img-responsive" />
          </div>
          <div className="about-partner-card" aria-label="Ahamove">
            <Image src={IMAGES.partnerAhamove} alt="Ahamove" width={180} height={72} className="img-responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
