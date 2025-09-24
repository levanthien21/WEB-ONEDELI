import React, { useState } from 'react';
import Image from 'next/image';
import { scrollToElement } from '@/utils';
import { IMAGES } from '@/constants';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-main">
          <div className="header-inner container">
            {/* Logo */}
            <div className="logo">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <Image 
                  src={IMAGES.logo} 
                  alt="One Deli" 
                  width={120}
                  height={40}
                  className="header-logo"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="header-nav hide-mobile">
              <ul className="nav-list">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Trang Chủ</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Về One Deli</a></li>
                <li><a href="#programs" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>Chương Trình Ưu Đãi</a></li>
                <li><a href="#guide" onClick={(e) => { e.preventDefault(); scrollToSection('guide'); }}>Hướng Dẫn Sử Dụng</a></li>
                <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Giới Thiệu</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Tính Năng</a></li>
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="header-cta hide-mobile">
              <a 
                href="#contact" 
                className="btn btn-secondary"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Đăng ký tư vấn
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn show-mobile"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Trang Chủ</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Về One Deli</a></li>
              <li><a href="#programs" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>Chương Trình Ưu Đãi</a></li>
              <li><a href="#guide" onClick={(e) => { e.preventDefault(); scrollToSection('guide'); }}>Hướng Dẫn Sử Dụng</a></li>
              <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Giới Thiệu</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Tính Năng</a></li>
              <li>
                <a 
                  href="#contact" 
                  className="btn btn-secondary"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  Đăng ký tư vấn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
