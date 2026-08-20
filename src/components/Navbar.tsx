import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Search, ShoppingCart, Menu, User, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activePage, setActivePage, totalItems, openCart, openSearch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Početna', page: 'home' as const },
    { label: 'Shop', page: 'shop' as const },
    { label: 'Stikeri', page: 'shop' as const },
    { label: 'Majice', page: 'shop' as const },
    { label: 'Duksevi', page: 'shop' as const },
    { label: 'Za firme', page: 'b2b' as const },
    { label: 'O nama', page: 'about' as const },
  ];

  const handleNavClick = (page: typeof navLinks[number]['page']) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#E10600] text-white w-full fixed top-0 z-50" style={{ height: 32 }}>
        <div
          style={{
            width: 'min(1360px, calc(100% - 64px))',
            margin: 'auto',
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
          }}
        >
          <span>Besplatna dostava preko 60 €</span>
          <span className="hidden sm:block">Custom print / B2B — pošalji upit</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="fixed z-40 w-full border-b border-[#D4D4D0]"
        style={{
          top: 32,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            width: 'min(1360px, calc(100% - 64px))',
            margin: 'auto',
            height: 76,
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: 34,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="site-logo"
            aria-label="STRIKERZ početna"
          >
            STRIKERZ
          </button>

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex justify-center gap-7" aria-label="Glavna navigacija">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`nav-link${activePage === link.page ? ' active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center" style={{ gap: 5 }}>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden"
              style={{
                width: 42, height: 42, border: 0, background: 'transparent',
                display: 'grid', placeItems: 'center', cursor: 'pointer',
              }}
              aria-label="Otvori meni"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search */}
            <button
              onClick={openSearch}
              style={{
                width: 42, height: 42, border: 0, background: 'transparent',
                display: 'grid', placeItems: 'center', cursor: 'pointer',
              }}
              className="hover:bg-[#F5F5F2] transition-colors"
              aria-label="Pretraga"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button
              style={{
                width: 42, height: 42, border: 0, background: 'transparent',
                display: 'grid', placeItems: 'center', cursor: 'pointer',
              }}
              className="hover:bg-[#F5F5F2] transition-colors"
              aria-label="Moj nalog"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              style={{
                width: 42, height: 42, border: 0, background: 'transparent',
                display: 'grid', placeItems: 'center', cursor: 'pointer',
                position: 'relative',
              }}
              className="hover:bg-[#F5F5F2] transition-colors"
              aria-label="Korpa"
            >
              <ShoppingCart className="w-5 h-5" />
              <span
                style={{
                  position: 'absolute',
                  right: 1, top: 1,
                  width: 18, height: 18,
                  borderRadius: '50%',
                  background: '#E10600',
                  color: '#fff',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 9,
                  fontWeight: 900,
                }}
              >
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[600] md:hidden"
          style={{ background: 'rgba(0,0,0,0.62)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <aside
            className="h-full flex flex-col"
            style={{
              width: 'min(320px, 92vw)',
              background: '#fff',
              boxShadow: '0 24px 70px rgba(0,0,0,.18)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer head */}
            <div
              className="flex justify-between items-center border-b border-[#D4D4D0]"
              style={{ padding: '22px 24px' }}
            >
              <span
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 31,
                  textTransform: 'uppercase',
                }}
              >
                Meni
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  width: 42, height: 42, border: '1px solid #D4D4D0',
                  background: '#fff', fontSize: 24, cursor: 'pointer',
                  display: 'grid', placeItems: 'center',
                }}
                aria-label="Zatvori meni"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-auto" style={{ padding: '8px 0' }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className="w-full text-left flex items-center justify-between hover:bg-[#F5F5F2] transition-colors"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    textTransform: 'uppercase',
                    fontSize: 28,
                    padding: '12px 24px',
                    borderBottom: '1px solid #D4D4D0',
                    cursor: 'pointer',
                    background: 'none',
                    color: activePage === link.page ? '#E10600' : '#090909',
                  }}
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              ))}
            </nav>

            {/* Footer info */}
            <div
              className="border-t border-[#D4D4D0]"
              style={{ padding: '16px 24px', fontSize: 10, color: '#6F6F6A' }}
            >
              <p className="font-mono-tech">info@strikerz.rs</p>
              <p className="font-mono-tech mt-1">© 2026 STRIKERZ</p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
