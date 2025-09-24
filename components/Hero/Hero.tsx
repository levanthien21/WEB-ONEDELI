import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';


const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <Image 
          src={IMAGES.heroBackground} 
          alt="One Deli Hero Background" 
          fill
          className="hero-bg-image"
          priority
        />
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text fade-in-up">
            <h1>One Deli</h1>
            <p className="hero-subtitle">
              Giải pháp bán hàng chuyên nghiệp đến từ thương hiệu 
              <br />
              Công ty Cổ phần Giải pháp Công nghệ Sen Vàng
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary btn-large">
                Đăng ký tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
