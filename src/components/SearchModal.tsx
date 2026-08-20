import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { X, Search, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, viewProduct } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 pt-16 md:pt-24">
      {/* Backdrop */}
      <div
        onClick={closeSearch}
        className="fixed inset-0 bg-[#151515]/80 backdrop-blur-xs transition-opacity"
      />

      {/* Modal */}
      <div className="relative bg-[#FFFFFF] border-2 border-[#151515] max-w-2xl w-full brutalist-shadow p-6 z-10">
        <div className="flex items-center justify-between border-b-2 border-[#151515] pb-4 mb-4">
          <div className="flex items-center gap-3 flex-grow">
            <Search className="w-6 h-6 text-[#b30400]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="PRETRAŽI PO IMENU, SKU (npr. STK-001) ILI KATEGORIJI..."
              autoFocus
              className="w-full bg-transparent text-sm md:text-base font-mono-tech uppercase font-bold text-[#151515] placeholder:text-[#6F6F6A] focus:outline-none"
            />
          </div>
          <button
            onClick={closeSearch}
            className="p-1.5 text-[#151515] hover:text-[#b30400] transition-colors cursor-pointer"
            aria-label="Zatvori pretragu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results or Quick Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto space-y-3">
          {searchQuery.trim() === '' ? (
            <div className="py-6 text-center space-y-3">
              <p className="font-mono-tech text-xs text-[#6F6F6A] uppercase">
                POPULARNE PRETRAGE:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['BRUTALIST TEE', 'STICKERS', 'HOODIE', 'CAP', 'ACID WASH'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1.5 bg-[#F5F5F2] hover:bg-[#b30400] hover:text-white border border-[#D4D4D0] font-mono-tech text-xs font-bold uppercase transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center">
              <p className="font-anton text-xl uppercase text-[#151515]">NEMA REZULTATA ZA "{searchQuery}"</p>
              <p className="font-mono-tech text-xs text-[#6F6F6A] mt-2">
                Pokušajte sa nekim drugim terminom poput 'majica', 'stikeri', 'hoodie'.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#D4D4D0]">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    closeSearch();
                    viewProduct(product);
                  }}
                  className="flex items-center gap-4 py-3 hover:bg-[#F5F5F2] px-2 transition-colors cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-[#E7E7E3] border border-[#D4D4D0] overflow-hidden shrink-0">
                    <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[10px] text-[#6F6F6A]">{product.sku}</span>
                      <span className="font-mono-tech text-[10px] uppercase bg-[#E7E7E3] px-1.5 py-0.5">
                        {product.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm uppercase text-[#151515] group-hover:text-[#b30400] transition-colors">
                      {product.name}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono-tech text-sm font-bold text-[#151515]">
                      {product.price.toLocaleString('sr-RS')} RSD
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6F6F6A] group-hover:text-[#b30400] transition-colors" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
