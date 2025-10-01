import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          {/* Download Section */}
          <div className="download-section">
            <div className="download-container">
              <div className="download-content">
                <div className="download-header">
                  <h2 className="download-title">Onedeli</h2>
                  <h3 className="download-subtitle">CHẠY TỐT TRÊN MỌI THIẾT BỊ</h3>
                  <p className="download-description">
                    Hoạt động ổn định ngay cả khi không có kết nối Internet
                  </p>
                </div>
                
                <div className="download-actions">
                  <button className="download-btn download-btn-primary">
                    <span className="btn-icon">🎯</span>
                    <span className="btn-text">
                      <span className="btn-title">Dùng thử miễn phí</span>
                      <span className="btn-subtitle">Không cần thẻ tín dụng</span>
                    </span>
                  </button>
                  <button className="download-btn download-btn-secondary">
                    <span className="btn-icon">💼</span>
                    <span className="btn-text">
                      <span className="btn-title">Nhận báo giá</span>
                      <span className="btn-subtitle">Tư vấn chuyên nghiệp</span>
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="download-visual">
                {/* Visual elements will be added here */}
                <div style={{
                  width: '300px',
                  height: '200px',
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4a5568',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Laptop & Visual Elements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
