// Common types for the application

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  businessLicense: string;
  issueDate: string;
  issuePlace: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  darkBg: string;
  textDark: string;
  textLight: string;
}

// Component props types
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

// Form types
export interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

// Image types
export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}
