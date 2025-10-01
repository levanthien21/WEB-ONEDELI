import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { scrollToElement } from '@/utils';
import { IMAGES } from '@/constants';

type HeaderProps = {
  onOpenQuoteModal?: () => void;
};


const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMenuOpen(false);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
  };

  const handleSupportItemClick = (action: string) => {
    setIsSupportDropdownOpen(false);
    setIsMenuOpen(false);
    
    switch (action) {
      case 'download':
        scrollToSection('contact');
        break;
      case 'guide':
        scrollToSection('guide');
        break;
      case 'online-learning':
        // Handle online learning
        break;
      case 'youtube':
        // Handle YouTube videos
        break;
      case 'chat':
        // Handle chat support
        break;
      case 'hotline':
        // Handle hotline
        break;
      default:
        break;
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Trang chủ</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Về Onedeli</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Tính năng</a></li>
                <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Giải pháp</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Bảng giá</a></li>
                <li className={`nav-dropdown ${isSupportDropdownOpen ? 'active' : ''}`}>
                  <button 
                    className="nav-dropdown-toggle"
                    onClick={toggleSupportDropdown}
                    onMouseEnter={() => setIsSupportDropdownOpen(true)}
                  >
                    Hỗ trợ
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <div 
                    className={`dropdown-menu ${isSupportDropdownOpen ? 'active' : ''}`}
                    onMouseLeave={() => setIsSupportDropdownOpen(false)}
                  >
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('download'); }}>Download</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('guide'); }}>Hướng dẫn sử dụng</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('online-learning'); }}>Học Online</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('youtube'); }}>Tài liệu video trên Youtube</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('chat'); }}>Chat hỗ trợ trực tuyến</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('hotline'); }}>Tổng đài hỗ trợ</a>
                  </div>
                </li>
                <li><a href="#programs" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>Tính năng mới</a></li>
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="header-cta hide-mobile">
              <button 
                className="btn btn-secondary"
                onClick={onOpenQuoteModal}
              >
                Báo giá và dùng thử
              </button>
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
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Trang chủ</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Về Onedeli</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Tính năng</a></li>
              <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Giải pháp</a></li>
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Bảng giá</a></li>
              <li className="mobile-dropdown">
                <button 
                  className="mobile-dropdown-toggle"
                  onClick={() => setIsSupportDropdownOpen(!isSupportDropdownOpen)}
                >
                  Hỗ trợ
                  <span className="dropdown-arrow">▼</span>
                </button>
                <div className={`mobile-dropdown-menu ${isSupportDropdownOpen ? 'active' : ''}`}>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('download'); }}>Download</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('guide'); }}>Hướng dẫn sử dụng</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('online-learning'); }}>Học Online</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('youtube'); }}>Tài liệu video trên Youtube</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('chat'); }}>Chat hỗ trợ trực tuyến</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleSupportItemClick('hotline'); }}>Tổng đài hỗ trợ</a>
                </div>
              </li>
              <li><a href="#programs" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>Tính năng mới</a></li>
              <li>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    onOpenQuoteModal?.();
                    setIsMenuOpen(false);
                  }}
                >
                  Báo giá và dùng thử
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
