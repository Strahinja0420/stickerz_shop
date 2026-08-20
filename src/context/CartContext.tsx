import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageType } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedSize?: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, delta: number, selectedSize?: string, selectedColor?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  totalItems: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  remainingForFreeShipping: number;
  
  // Navigation
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  selectedProduct: Product;
  setSelectedProduct: (p: Product) => void;
  viewProduct: (p: Product) => void;

  // Modals
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  
  isSizeGuideOpen: boolean;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 7000; // RSD (~60 EUR)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize default cart with 2 items as seen in the mockups
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Brutalist Tee
      quantity: 1,
      selectedSize: 'M',
      selectedColor: 'BLACK'
    },
    {
      product: PRODUCTS[1], // Urban Pack Stickers
      quantity: 2,
      selectedSize: 'SET OD 10',
      selectedColor: 'DEFAULT'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product: Product, quantity = 1, selectedSize = 'M', selectedColor = 'BLACK') => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, quantity, selectedSize, selectedColor }];
      }
    });

    showToast(`Dodato u korpu: ${product.name}`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedSize?: string, selectedColor?: string) => {
    setCart(prev => prev.filter(item => {
      if (item.product.id !== productId) return true;
      if (selectedSize && item.selectedSize !== selectedSize) return true;
      if (selectedColor && item.selectedColor !== selectedColor) return true;
      return false;
    }));
  };

  const updateQuantity = (productId: string, delta: number, selectedSize?: string, selectedColor?: string) => {
    setCart(prev => {
      return prev.map(item => {
        const match = item.product.id === productId &&
          (!selectedSize || item.selectedSize === selectedSize) &&
          (!selectedColor || item.selectedColor === selectedColor);

        if (match) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const viewProduct = (p: Product) => {
    setSelectedProduct(p);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        subtotal,
        totalItems,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingProgress,
        remainingForFreeShipping,
        activePage,
        setActivePage,
        selectedProduct,
        setSelectedProduct,
        viewProduct,
        quickViewProduct,
        openQuickView: (p) => setQuickViewProduct(p),
        closeQuickView: () => setQuickViewProduct(null),
        isSizeGuideOpen,
        openSizeGuide: () => setIsSizeGuideOpen(true),
        closeSizeGuide: () => setIsSizeGuideOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
