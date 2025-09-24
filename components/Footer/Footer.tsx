import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO, IMAGES } from '@/constants';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-main section section-dark">
        <div className="container">
          <div className="row">
            <div className="col col-6">
              <div className="footer-logo">
                <Image 
                  src={IMAGES.logoWhite} 
                  alt="One Deli" 
                  width={120}
                  height={40}
                  className="footer-logo-img"
                />
              </div>
              
              <div className="footer-info">
                <p>Tên công ty<br /><strong>{COMPANY_INFO.name}</strong></p>
                <p>Địa chỉ<br /><strong>{COMPANY_INFO.address}</strong></p>
              </div>
            </div>
            
            <div className="col col-3">
              <div className="footer-contact">
                <p>Thời gian hỗ trợ<br /><strong>{COMPANY_INFO.supportHours}</strong></p>
                <p>Hotline<br /><strong>{COMPANY_INFO.phone}</strong></p>
                <p>Email Hỗ Trợ<br /><strong>{COMPANY_INFO.email}</strong></p>
                <p>Chính sách chương trình<br /><strong>Điều khoản & Điều kiện U-Point</strong></p>
              </div>
            </div>
            
            <div className="col col-3">
              <div className="footer-legal">
                <p>GCN ĐKDN số<br /><strong>{COMPANY_INFO.businessLicense}</strong></p>
                <p>Cấp ngày<br /><strong>{COMPANY_INFO.issueDate}</strong></p>
                <p>Nơi cấp<br /><strong>{COMPANY_INFO.issuePlace}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-copyright">
            <p>Copyright 2025 © <strong>Onedeli</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
