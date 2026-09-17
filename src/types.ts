export type ProductCategory = 
  | 'AI & Technology'
  | 'Productivity'
  | 'Career & Learning'
  | 'Learning'
  | 'Business & Founder Resources'
  | 'Research';

export type ProductFormat = 'PDF' | 'Excel / Google Sheets';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number; // in INR
  category: ProductCategory;
  format: ProductFormat;
  description: string;
  shortDescription: string;
  resourceUrl: string;
  paymentUrl: string | null;
  featured?: boolean;
  highlights: string[];
  whatsIncluded: string[];
  whoIsThisFor: string[];
  theme: {
    gradientFrom: string;
    gradientVia?: string;
    gradientTo: string;
    accentColor: string;
    tagBg: string;
    tagText: string;
    iconName: string;
  };
  visualConcept: string;
  disclaimer?: string;
  fileCountOrMetric?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CategoryFilter = 
  | 'All'
  | 'AI & Technology'
  | 'Productivity'
  | 'Career & Learning'
  | 'Research'
  | 'Business & Founder Resources';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export type PageView = 
  | { type: 'home' }
  | { type: 'store'; initialCategory?: CategoryFilter; initialSearch?: string }
  | { type: 'product'; slug: string }
  | { type: 'about' }
  | { type: 'faq' }
  | { type: 'contact' };
