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
          <div className="hero-text hero-panel fade-in-up">
            <h1 className="hero-title">Onedeli – Giải pháp bán hàng đồng hành cùng hộ kinh doanh</h1>
            <p className="hero-intro">Onedeli được phát triển nhằm hỗ trợ hộ kinh doanh quản lý hoạt động bán hàng một cách dễ dàng, nhanh chóng và hoàn toàn miễn phí.</p>
            <ul className="hero-benefits">
              <li>Xuất hóa đơn điện tử hợp pháp.</li>
              <li>Quản lý đơn hàng mọi lúc, mọi nơi.</li>
              <li>Theo dõi doanh thu rõ ràng và trực quan.</li>
            </ul>
            <p className="hero-closing">Chỉ với một ứng dụng đơn giản, Onedeli giúp bạn tiết kiệm thời gian, giảm chi phí và tập trung vào điều quan trọng nhất: phát triển kinh doanh.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-cta">
                Dùng thử miễn phí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
