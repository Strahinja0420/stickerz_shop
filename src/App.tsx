/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { B2BPage } from './pages/B2BPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Check } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activePage, toastMessage } = useCart();

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'b2b':
        return <B2BPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#151515] flex flex-col pt-[108px] selection:bg-[#b30400] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#151515] text-white border-2 border-[#b30400] px-4 py-3 font-mono-tech text-xs font-bold uppercase brutalist-shadow flex items-center gap-2.5 transition-all">
          <span className="w-2 h-2 bg-[#1EA85B]"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-grow w-full">
        {renderCurrentPage()}
      </main>

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <QuickViewModal />
      <SizeGuideModal />
      <SearchModal />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
