import React, { useState } from 'react';
import Image from 'next/image';
import { ContactFormData } from '@/types';
import { isValidEmail, isValidPhone } from '@/utils';
import { COMPANY_INFO, FEATURES, APP_LINKS } from '@/constants';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký tư vấn! Chúng tôi sẽ liên hệ lại sớm nhất.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="contact section section-dark">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="contact-info">
              <h2>Tải Onedeli<br />ngay hôm nay!</h2>
              <p>Khởi động kinh doanh chuyên nghiệp ngay hôm nay</p>
              <p>Onedeli – Giải pháp bán hàng đến từ thương hiệu {COMPANY_INFO.name}</p>
              <p><strong>Với nền tảng công nghệ vững chắc từ Golden Lotus, Onedeli mang đến:</strong></p>
              
              <ul className="features-list">
                {FEATURES.map((feature) => (
                  <li key={feature.id}>✅ {feature.title}, {feature.description}</li>
                ))}
              </ul>
              
              <h3><strong>Tải ứng dụng Onedeli ngay</strong></h3>
              
              <div className="download-buttons">
                <div className="download-btn">
                  <Image src={APP_LINKS.appStore} alt="App Store" width={120} height={40} className="download-icon" />
                </div>
                <div className="download-btn">
                  <Image src={APP_LINKS.googlePlay} alt="Google Play" width={120} height={40} className="download-icon" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col col-6">
            <div className="contact-form-container">
              <h2 className="form-title">ĐĂNG KÝ TƯ VẤN</h2>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ Tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="Nhập số điện thoại"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Nhập địa chỉ email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mô tả doanh nghiệp (không bắt buộc)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-textarea"
                    placeholder="Mô tả về doanh nghiệp của bạn..."
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-large form-submit">
                  ĐĂNG KÝ NGAY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
