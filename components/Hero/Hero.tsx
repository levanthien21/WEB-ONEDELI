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
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text fade-in-up">
            <div className="hero-eyebrow">Nền tảng bán hàng</div>
            <h1 className="hero-title">Quản lý bán hàng hợp kênh — đơn giản cho hộ kinh doanh</h1>
            <p className="hero-kicker">Onedeli miễn phí, dễ dùng và sẵn sàng đồng hành cùng bạn.</p>
            <ul className="hero-benefits">
              <li>Xuất hóa đơn điện tử nhanh chóng</li>
              <li>Quản lý đơn hàng, kho và doanh thu trên một ứng dụng</li>
              <li>Tiết kiệm thời gian, tối ưu chi phí để tập trung phát triển</li>
            </ul>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-cta">
                Dùng thử miễn phí
                <span className="btn-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
