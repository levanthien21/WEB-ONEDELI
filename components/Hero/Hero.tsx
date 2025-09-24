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
            <div className="hero-eyebrow">Nền tảng</div>
            <h1 className="hero-title">Quản lý bán hàng hợp kênh<br/>đơn giản cho mọi hộ kinh doanh</h1>
            <p className="hero-subtitle">Quản lý bán hàng hợp kênh đơn giản cho mọi hộ kinh doanh.</p>
            <p className="hero-subtitle">Không cần am hiểu công nghệ, bạn vẫn có thể xuất hóa đơn điện tử, quản lý đơn hàng và theo dõi doanh thu chỉ với một ứng dụng duy nhất.</p>
            <p className="hero-subtitle">Onedeli giúp tiết kiệm thời gian, tối ưu chi phí và tập trung vào điều quan trọng nhất – phát triển việc kinh doanh.</p>
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
