// Application constants

export const COMPANY_INFO = {
  name: 'CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ SEN VÀNG',
  address: '1191/19/3B Lê Văn Lương, Ấp 2, Xã Phước Kiển, Huyện Nhà Bè, Thành phố Hồ Chí Minh, Việt Nam',
  phone: '091 255 17 12',
  email: 'hotro@senvangsolutions.com',
  businessLicense: '0314516229',
  issueDate: '13/07/2017',
  issuePlace: 'Phòng đăng ký kinh doanh - Sở Kế hoạch & Đầu tư TP Hồ Chí Minh',
  supportHours: '8AM - 22H Hàng Ngày'
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Trang Chủ', href: '#home' },
  { id: 'about', label: 'Về One Deli', href: '#about' },
  { id: 'programs', label: 'Chương Trình Ưu Đãi', href: '#programs' },
  { id: 'guide', label: 'Hướng Dẫn Sử Dụng', href: '#guide' },
  { id: 'intro', label: 'Giới Thiệu', href: '#intro' },
  { id: 'features', label: 'Tính Năng', href: '#features' }
];

export const FEATURES = [
  {
    id: 'simple-ui',
    title: 'Giao diện đơn giản',
    description: 'Ai cũng dễ dàng sử dụng'
  },
  {
    id: 'secure-system',
    title: 'Hệ thống bảo mật cao',
    description: 'An toàn cho dữ liệu kinh doanh'
  },
  {
    id: 'all-in-one',
    title: 'Quản lý toàn diện',
    description: 'Đơn hàng, tồn kho, doanh thu trong một ứng dụng'
  },
  {
    id: 'support-team',
    title: 'Hỗ trợ tận tâm',
    description: 'Đội ngũ hỗ trợ người dùng nhanh chóng, tận tâm'
  }
];

export const IMAGES = {
  // Logos
  logo: '/images/logos/logo-onedeli-3.png',
  logoWhite: '/images/logos/logo-onedeli-white.png',
  
  // Hero - Using placeholder
  heroBackground: 'https://via.placeholder.com/1920x1080/4A90E2/FFFFFF?text=One+Deli+Hero',
  
  // Sections - Using placeholders
  aboutImage: 'https://via.placeholder.com/500x400/7ED321/FFFFFF?text=About+One+Deli',
  program1: 'https://via.placeholder.com/300x200/F5A623/FFFFFF?text=Program+1',
  program2: 'https://via.placeholder.com/300x200/50E3C2/FFFFFF?text=Program+2',
  feature1: 'https://via.placeholder.com/300x200/BD10E0/FFFFFF?text=Feature+1',
  feature2: 'https://via.placeholder.com/300x200/B8E986/FFFFFF?text=Feature+2',
  pricing1: 'https://via.placeholder.com/300x200/9013FE/FFFFFF?text=Pricing+1',
  pricing2: 'https://via.placeholder.com/300x200/417505/FFFFFF?text=Pricing+2',
  pricing3: 'https://via.placeholder.com/300x200/FF6900/FFFFFF?text=Pricing+3',
  
  // Icons - Using placeholders
  appStore: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=App+Store',
  googlePlay: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Google+Play',
  checkmark: 'https://via.placeholder.com/24x24/00D084/FFFFFF?text=✓',

  // Partners - Using placeholders
  partnerACB: 'https://via.placeholder.com/200x80/0047AB/FFFFFF?text=ACB',
  partnerMinvoice: 'https://via.placeholder.com/200x80/FF6F00/FFFFFF?text=M-invoice',
  partnerAhamove: 'https://via.placeholder.com/200x80/FF3B30/FFFFFF?text=Ahamove'
};

export const APP_LINKS = {
  appStore: IMAGES.appStore,
  googlePlay: IMAGES.googlePlay
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0
};

export const SCROLL_THRESHOLD = 50;

export const FORM_VALIDATION = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  phone: {
    required: true,
    pattern: /^(0|\+84)[3-9][0-9]{8}$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  message: {
    required: false,
    maxLength: 500
  }
};
