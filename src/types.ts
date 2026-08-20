export type CategoryType = 'all' | 'stikeri' | 'majice' | 'duksevi' | 'kacketi';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'stikeri' | 'majice' | 'duksevi' | 'kacketi';
  price: number;
  originalPrice?: number;
  badge?: string;
  isSoldOut?: boolean;
  images: string[];
  description: string;
  details?: string[];
  materials?: string;
  shippingInfo?: string;
  sizes?: string[];
  colors?: ProductColor[];
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export type PageType = 'home' | 'shop' | 'product-detail' | 'b2b' | 'about' | 'contact' | 'checkout' | 'order-success';

export interface B2BQuoteRequest {
  companyName: string;
  email: string;
  serviceType: string;
  quantity: number;
  message: string;
  fileName?: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  queryType: string;
  message: string;
}

export interface OrderDetails {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
    paymentMethod: string;
  };
  createdAt: string;
}
