# One Deli Landing Page - Next.js

Landing page cho ứng dụng One Deli được xây dựng với Next.js và TypeScript.

## 🚀 Tính năng

- **Next.js 14** với TypeScript
- **Responsive Design** - Tối ưu cho mọi thiết bị
- **Image Optimization** - Sử dụng Next.js Image component
- **SEO Friendly** - Meta tags và cấu trúc tối ưu
- **Performance** - Code splitting và lazy loading tự động

## 📁 Cấu trúc dự án

```
├── components/          # React components
│   ├── About/
│   ├── Contact/
│   ├── Features/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Pricing/
│   ├── Programs/
│   └── ScrollToTop/
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Trang chủ
├── styles/             # Global CSS
│   └── globals.css
├── types/              # TypeScript types
├── utils/              # Utility functions
├── hooks/              # Custom hooks
├── constants/          # App constants
├── public/             # Static assets
│   └── images/logos/
└── next.config.js      # Next.js config
```

## 🛠️ Cài đặt và chạy

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```
Truy cập: http://localhost:3000

### Build production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 🎨 Công nghệ sử dụng

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS3 với responsive design
- **Images**: Next.js Image optimization
- **Icons**: Placeholder images từ via.placeholder.com

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Cấu hình

### Path Aliases
- `@/components/*` → `./components/*`
- `@/pages/*` → `./pages/*`
- `@/styles/*` → `./styles/*`
- `@/types/*` → `./types/*`
- `@/utils/*` → `./utils/*`
- `@/hooks/*` → `./hooks/*`
- `@/constants/*` → `./constants/*`

### Image Domains
- `localhost` (local development)
- `via.placeholder.com` (placeholder images)

## 📄 Các trang

- **/** - Trang chủ với tất cả sections
- **/404** - Trang lỗi 404

## 🎯 Sections

1. **Header** - Navigation và logo
2. **Hero** - Banner chính với CTA
3. **About** - Giới thiệu về One Deli
4. **Programs** - Chương trình ưu đãi
5. **Features** - Tính năng nổi bật
6. **Pricing** - Bảng giá
7. **Contact** - Form đăng ký tư vấn
8. **Footer** - Thông tin công ty

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📞 Liên hệ

- **Công ty**: CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ SEN VÀNG
- **Hotline**: 091 255 17 12
- **Email**: hotro@senvangsolutions.com
- **Địa chỉ**: 1191/19/3B Lê Văn Lương, Ấp 2, Xã Phước Kiển, Huyện Nhà Bè, TP.HCM

---

© 2025 One Deli - Giải pháp bán hàng chuyên nghiệp
