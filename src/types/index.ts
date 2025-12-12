export interface Service {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  slug: string;
  image: string;
  benefits: string[];
  specifications?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  slug: string;
  category: string;
  price: number;
  images: string[];
  specifications: Record<string, string>;
  rating: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

export interface NavItem {
  labelAr: string;
  labelEn: string;
  href: string;
  submenu?: NavItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp?: string;
  address: string;
  city: string;
  country: string;
}
