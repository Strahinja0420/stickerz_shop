import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Filter, SlidersHorizontal, ArrowUpDown, Check, X, ArrowRight } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { viewProduct, addToCart } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [priceMax, setPriceMax] = useState<number>(7000);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Categories list with counts
  const categories = [
    { id: 'all', label: 'SVI PROIZVODI', count: PRODUCTS.length },
    { id: 'stikeri', label: 'STIKERI', count: PRODUCTS.filter(p => p.category === 'stikeri').length },
    { id: 'majice', label: 'MAJICE', count: PRODUCTS.filter(p => p.category === 'majice').length },
    { id: 'duksevi', label: 'DUKSEVI', count: PRODUCTS.filter(p => p.category === 'duksevi').length },
    { id: 'kacketi', label: 'KAČKETI & OPREMA', count: PRODUCTS.filter(p => p.category === 'kacketi').length },
  ];

  const allSizes = ['S', 'M', 'L', 'XL', 'XXL', 'ONESIZE'];

  // Filtering
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedSize !== 'all' && (!product.sizes || !product.sizes.includes(selectedSize))) {
        return false;
      }
      if (product.price > priceMax) {
        return false;
      }
      if (onlyInStock && product.isSoldOut) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [selectedCategory, selectedSize, priceMax, sortBy, onlyInStock]);

  return (
    <div className="w-full px-4 md:px-12 py-8 md:py-12 max-w-7xl mx-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-8 border-b-2 border-[#151515] pb-6">
        <div className="font-mono-tech text-xs text-[#6F6F6A] uppercase mb-2 flex items-center gap-2">
          <span>POČETNA</span>
          <span>/</span>
          <span className="text-[#151515] font-bold">SHOP KOLEKCIJA</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#151515] m-0">
              SVI PROIZVODI
            </h1>
            <p className="text-xs font-mono-tech text-[#6F6F6A] mt-1">
              PRIKAZANO {filteredProducts.length} OD {PRODUCTS.length} PROIZVODA
            </p>
          </div>

          {/* Sort & Mobile Filter Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 bg-white border border-[#D4D4D0] px-4 py-2 text-xs font-bold font-mono-tech uppercase"
            >
              <Filter className="w-4 h-4 text-[#b30400]" />
              <span>FILTERI</span>
            </button>

            <div className="flex items-center gap-2 bg-white border border-[#D4D4D0] px-3 py-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#6F6F6A]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-mono-tech text-xs font-bold text-[#151515] outline-none uppercase cursor-pointer"
              >
                <option value="default">PODRAZUMEVANO</option>
                <option value="price-asc">CENA: RASTUĆE</option>
                <option value="price-desc">CENA: OPADAJUĆE</option>
                <option value="name">NAZIV (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block md:col-span-3 space-y-6">
          {/* Categories */}
          <div className="border border-[#D4D4D0] bg-white p-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#151515] border-b border-[#D4D4D0] pb-2 mb-3">
              KATEGORIJE
            </h3>
            <ul className="space-y-1.5 font-mono-tech text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left py-1.5 px-2 flex justify-between items-center transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#151515] text-white font-bold'
                        : 'text-[#151515] hover:bg-[#F5F5F2]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] ${selectedCategory === cat.id ? 'text-[#b30400]' : 'text-[#6F6F6A]'}`}>
                      ({cat.count})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="border border-[#D4D4D0] bg-white p-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#151515] border-b border-[#D4D4D0] pb-2 mb-3">
              MAKSIMALNA CENA
            </h3>
            <div className="space-y-3">
              <input
                type="range"
                min={800}
                max={7000}
                step={200}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#b30400] cursor-pointer"
              />
              <div className="flex justify-between items-center font-mono-tech text-xs">
                <span className="text-[#6F6F6A]">800 RSD</span>
                <span className="font-bold text-[#b30400]">{priceMax.toLocaleString('sr-RS')} RSD</span>
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="border border-[#D4D4D0] bg-white p-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#151515] border-b border-[#D4D4D0] pb-2 mb-3">
              VELIČINA
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedSize('all')}
                className={`py-1.5 px-2 font-mono-tech text-xs font-bold border transition-colors cursor-pointer ${
                  selectedSize === 'all'
                    ? 'bg-[#151515] text-white border-[#151515]'
                    : 'bg-white text-[#151515] border-[#D4D4D0] hover:border-[#151515]'
                }`}
              >
                SVE
              </button>
              {allSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-1.5 px-2 font-mono-tech text-xs font-bold border transition-colors cursor-pointer ${
                    selectedSize === size
                      ? 'bg-[#151515] text-white border-[#151515]'
                      : 'bg-white text-[#151515] border-[#D4D4D0] hover:border-[#151515]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* In Stock toggle */}
          <div className="border border-[#D4D4D0] bg-white p-4">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="w-4 h-4 accent-[#b30400] rounded-none cursor-pointer"
              />
              <span className="font-mono-tech text-xs font-bold uppercase text-[#151515]">
                SAMO NA STANJU
              </span>
            </label>
          </div>

          {/* Reset Filters button */}
          {(selectedCategory !== 'all' || selectedSize !== 'all' || priceMax < 7000 || onlyInStock) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSize('all');
                setPriceMax(7000);
                setOnlyInStock(false);
              }}
              className="w-full py-2.5 bg-[#E7E7E3] hover:bg-[#D4D4D0] text-[#151515] font-mono-tech text-xs font-bold uppercase transition-colors"
            >
              RESETUJ SVE FILTERE
            </button>
          )}
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-[#D4D4D0] p-12 text-center space-y-3">
              <h3 className="font-anton text-2xl uppercase text-[#151515]">NEMA PROIZVODA ZA IZABRANE FILTERE</h3>
              <p className="text-xs text-[#6F6F6A] max-w-sm mx-auto">
                Pokušajte da promenite raspon cena ili kategoriju.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSize('all');
                  setPriceMax(7000);
                  setOnlyInStock(false);
                }}
                className="mt-2 bg-[#b30400] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                OBRIŠI FILTERE
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col border border-[#D4D4D0] bg-white hover:border-[#151515] transition-all duration-200 hover:shadow-md"
                >
                  {/* Image container */}
                  <div
                    onClick={() => viewProduct(product)}
                    className="relative aspect-[4/5] bg-[#E7E7E3] overflow-hidden border-b border-[#D4D4D0] flex items-center justify-center cursor-pointer"
                  >
                    {product.badge && product.badge !== 'NOVO' && (
                      <span
                        className={`absolute top-3 left-3 text-white font-mono-tech text-[10px] px-2 py-1 tracking-wider uppercase font-bold z-10 ${
                          product.badge.includes('%') || product.badge === 'SALE'
                            ? 'bg-[#b30400]'
                            : product.badge === 'RASPRODATO'
                            ? 'bg-[#6F6F6A]'
                            : 'bg-[#151515]'
                        }`}
                      >
                        {product.badge === 'SALE' && product.originalPrice
                          ? `-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%`
                          : product.badge}
                      </span>
                    )}

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                        product.isSoldOut ? 'opacity-40 grayscale' : ''
                      }`}
                    />

                    {/* Quick action buttons on hover */}
                    {!product.isSoldOut && (
                      <div className="absolute bottom-0 left-0 w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product, 1, product.sizes?.[0] || 'M');
                          }}
                          className="w-full bg-[#b30400] text-white font-bold text-xs py-3 hover:bg-[#151515] uppercase transition-colors tracking-wider cursor-pointer shadow-sm"
                        >
                          DODAJ U KORPU
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col gap-1 flex-grow">
                    <div className="flex justify-between items-start">
                      <span className="font-mono-tech text-[#6F6F6A] text-xs">{product.sku}</span>
                      <div className="flex items-baseline gap-1.5">
                        {product.originalPrice && (
                          <span className="font-mono-tech text-xs text-[#6F6F6A] line-through">
                            {product.originalPrice.toLocaleString('sr-RS')}
                          </span>
                        )}
                        <span className="font-bold text-xs text-[#151515]">
                          {product.price.toLocaleString('sr-RS')} RSD
                        </span>
                      </div>
                    </div>

                    <h3
                      onClick={() => viewProduct(product)}
                      className="font-bold text-sm text-[#151515] uppercase truncate hover:text-[#b30400] transition-colors cursor-pointer mt-1"
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-[#151515]/60 backdrop-blur-xs"
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-white p-6 overflow-y-auto space-y-6">
              <div className="flex justify-between items-center border-b border-[#D4D4D0] pb-3">
                <h3 className="font-anton text-2xl uppercase text-[#151515]">FILTERI</h3>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-6 h-6 text-[#151515]" />
                </button>
              </div>

              {/* Mobile categories */}
              <div>
                <h4 className="font-bold text-xs uppercase text-[#151515] mb-2">KATEGORIJA</h4>
                <div className="space-y-1">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCategory(c.id);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`w-full text-left py-2 px-2 text-xs font-mono-tech ${
                        selectedCategory === c.id ? 'bg-[#151515] text-white font-bold' : 'text-[#151515]'
                      }`}
                    >
                      {c.label} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile apply button */}
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-[#b30400] text-white py-3 font-bold text-xs uppercase"
              >
                PRIMENI FILTERE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
