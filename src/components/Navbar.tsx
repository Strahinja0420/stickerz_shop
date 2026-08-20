import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Search, ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activePage, setActivePage, totalItems, openCart, openSearch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'POČETNA', page: 'home' as const },
    { label: 'SHOP', page: 'shop' as const },
    { label: 'STIKERI', page: 'shop' as const, category: 'stikeri' },
    { label: 'ODEĆA', page: 'shop' as const, category: 'majice' },
    { label: 'ZA FIRME', page: 'b2b' as const },
    { label: 'O NAMA', page: 'about' as const },
    { label: 'KONTAKT', page: 'contact' as const },
  ];

  const handleNavClick = (page: typeof navLinks[number]['page']) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#b30400] text-white w-full py-1.5 px-4 text-center uppercase font-mono-tech text-xs tracking-widest border-b border-[#D4D4D0] font-bold fixed top-0 z-50">
        BESPLATNA DOSTAVA PREKO 7.000 RSD / 60 €
      </div>

      {/* Main Top Navigation */}
      <header className="fixed top-[29px] left-0 w-full z-40 bg-[#FFFFFF] border-b border-[#D4D4D0] transition-all duration-150">
        <div className="w-full px-4 md:px-12 py-3 flex items-center justify-between">
          
          {/* Mobile Menu Toggle & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#151515] hover:text-[#b30400] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => handleNavClick('home')}
              className="font-anton text-3xl md:text-4xl text-[#b30400] tracking-tighter hover:opacity-85 transition-opacity leading-none"
            >
              STRIKERZ
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-bold text-xs uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`py-2 px-1 transition-colors relative hover:text-[#b30400] cursor-pointer ${
                    isActive
                      ? 'text-[#b30400] border-b-2 border-[#b30400]'
                      : 'text-[#151515]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Icons (Search, Cart) */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={openSearch}
              className="p-2 text-[#151515] hover:text-[#b30400] hover:bg-[#F5F5F2] transition-colors cursor-pointer"
              title="Pretraži proizvode"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={openCart}
              className="p-2 text-[#151515] hover:text-[#b30400] hover:bg-[#F5F5F2] transition-colors relative cursor-pointer"
              title="Vaša korpa"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#b30400] text-white font-mono-tech text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[77px] z-50 bg-[#151515]/70 backdrop-blur-xs md:hidden">
          <div className="w-4/5 max-w-sm h-full bg-[#F5F5F2] border-r-2 border-[#151515] p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-anton text-2xl text-[#b30400] border-b border-[#D4D4D0] pb-3 mb-4">
                NAVIGACIJA
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.page)}
                    className={`text-left py-3 px-3 font-bold text-sm uppercase tracking-wider border-b border-[#D4D4D0]/60 flex items-center justify-between ${
                      activePage === link.page
                        ? 'bg-[#b30400] text-white'
                        : 'text-[#151515] hover:bg-[#E7E7E3]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4D4D0] font-mono-tech text-xs text-[#6F6F6A] space-y-1">
              <p>+381 60 123 45 67</p>
              <p>info@strikerz.rs</p>
              <p className="text-[10px] text-[#151515] font-bold mt-2">© 2026 STRIKERZ BELGRADE</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
