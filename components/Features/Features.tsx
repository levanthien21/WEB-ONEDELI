import React from 'react';
import { FEATURES } from '@/constants';

const Icon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'einvoice':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="2" width="14" height="20" rx="2" stroke="#2352C4" strokeWidth="1.6"/>
          <path d="M7 7h6M7 11h6M7 15h4" stroke="#0195FE" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M17 8l4 4-4 4" stroke="#2352C4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'inventory':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7h18M5 7v11a2 2 0 002 2h10a2 2 0 002-2V7" stroke="#2352C4" strokeWidth="1.6"/>
          <rect x="9" y="11" width="6" height="6" rx="1" stroke="#0195FE" strokeWidth="1.6"/>
        </svg>
      );
    case 'revenue':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 20V6" stroke="#2352C4" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M7 14l3-3 3 2 4-5" stroke="#00B807" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 20h18" stroke="#2352C4" strokeWidth="1.6"/>
        </svg>
      );
    case 'orders':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 6h18M6 6l1.2 10.5A2 2 0 009.2 18h5.6a2 2 0 001.99-1.5L18 6" stroke="#2352C4" strokeWidth="1.6"/>
          <circle cx="10" cy="20" r="1.6" fill="#0195FE"/>
          <circle cx="15" cy="20" r="1.6" fill="#0195FE"/>
        </svg>
      );
    case 'loyalty':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21s-7-4.35-7-9a4 4 0 017-2 4 4 0 017 2c0 4.65-7 9-7 9z" stroke="#FF6B6B" strokeWidth="1.6"/>
        </svg>
      );
    case 'mobile':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="8" y="2" width="8" height="20" rx="2" stroke="#2352C4" strokeWidth="1.6"/>
          <circle cx="12" cy="18" r="1.2" fill="#0195FE"/>
        </svg>
      );
    case 'reminder':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 10a6 6 0 1112 0c0 5 2 5 2 6H4c0-1 2-1 2-6z" stroke="#2352C4" strokeWidth="1.6"/>
          <path d="M10 20h4" stroke="#0195FE" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case 'devices':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="6" width="14" height="10" rx="2" stroke="#2352C4" strokeWidth="1.6"/>
          <path d="M10 20h8a2 2 0 002-2v-1" stroke="#0195FE" strokeWidth="1.6"/>
        </svg>
      );
    case 'payments':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="#2352C4" strokeWidth="1.6"/>
          <rect x="4" y="9" width="16" height="3" fill="#0195FE"/>
        </svg>
      );
    case 'analytics':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 20V10M10 20V6M16 20v-8M22 20H2" stroke="#2352C4" strokeWidth="1.6"/>
        </svg>
      );
    case 'staff':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="7" r="3" stroke="#2352C4" strokeWidth="1.6"/>
          <path d="M5 20c1.5-3 4-5 7-5s5.5 2 7 5" stroke="#0195FE" strokeWidth="1.6"/>
        </svg>
      );
    case 'promo':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 12l5-9 5 9-5 9-5-9z" stroke="#2352C4" strokeWidth="1.6"/>
          <circle cx="12" cy="12" r="2" fill="#0195FE"/>
        </svg>
      );
    case 'debt':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 6h16v12H4z" stroke="#2352C4" strokeWidth="1.6"/>
          <path d="M8 10h8M8 14h5" stroke="#0195FE" strokeWidth="1.6"/>
        </svg>
      );
    case 'omnichannel':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="#2352C4" strokeWidth="1.6"/>
          <path d="M12 4v16M4 12h16" stroke="#0195FE" strokeWidth="1.6"/>
        </svg>
      );
    default:
      return <span aria-hidden>✔️</span>;
  }
};


const Features: React.FC = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2>Các tính năng cho Onedeli</h2>
          <p className="features-subtitle">Bộ công cụ đầy đủ giúp hộ kinh doanh vận hành bán hàng dễ dàng, hiệu quả và miễn phí.</p>
        </div>
        
        <div className="features-content">
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.id} className="feature-card" aria-label={f.title}>
                <div className="feature-icon-wrap">
                  <Icon name={f.id} />
                </div>
                <div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
