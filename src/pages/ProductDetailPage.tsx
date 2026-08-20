import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Truck, ShieldCheck, RefreshCw, ChevronDown, ChevronUp, Plus, Minus, ArrowRight, Share2, Check } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { selectedProduct, addToCart, viewProduct, openSizeGuide, setActivePage } = useCart();

  const product = selectedProduct || PRODUCTS[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0]?.name || 'BLACK');
  const [quantity, setQuantity] = useState(1);

  // Accordion states
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setActivePage('checkout');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="w-full px-4 md:px-12 py-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="font-mono-tech text-xs text-[#6F6F6A] uppercase mb-6 flex items-center gap-2">
        <button onClick={() => setActivePage('home')} className="hover:text-[#151515]">POČETNA</button>
        <span>/</span>
        <button onClick={() => setActivePage('shop')} className="hover:text-[#151515]">{product.category.toUpperCase()}</button>
        <span>/</span>
        <span className="text-[#151515] font-bold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left: Product Images Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/5] bg-[#E7E7E3] border-2 border-[#151515] overflow-hidden relative brutalist-shadow">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#b30400] text-white font-mono-tech text-xs px-3 py-1.5 uppercase font-bold tracking-wider">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square border-2 overflow-hidden bg-[#E7E7E3] cursor-pointer transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#b30400] ring-2 ring-[#b30400]/30'
                      : 'border-[#D4D4D0] opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info & Purchase Form */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono-tech text-xs text-[#6F6F6A] font-bold">
                SKU: {product.sku}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 font-mono-tech text-xs text-[#6F6F6A] hover:text-[#151515] cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1EA85B]" />
                    <span className="text-[#1EA85B]">KOPIRANO!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>PODELI</span>
                  </>
                )}
              </button>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl text-[#151515] uppercase tracking-tight leading-none mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-anton text-3xl text-[#b30400]">
                {product.price.toLocaleString('sr-RS')} RSD
              </span>
              {product.originalPrice && (
                <span className="font-mono-tech text-base text-[#6F6F6A] line-through">
                  {product.originalPrice.toLocaleString('sr-RS')} RSD
                </span>
              )}
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-5">
                <span className="font-bold text-xs uppercase text-[#151515] block mb-2">
                  BOJA: <span className="font-mono-tech text-[#6F6F6A] font-normal">{selectedColor}</span>
                </span>
                <div className="flex gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-8 h-8 rounded-none border-2 flex items-center justify-center cursor-pointer ${
                        selectedColor === c.name ? 'border-[#b30400] ring-2 ring-[#b30400]' : 'border-[#D4D4D0]'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {selectedColor === c.name && (
                        <span className={`w-2 h-2 ${c.hex === '#FFFFFF' || c.hex === '#F8F8F8' ? 'bg-black' : 'bg-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-xs uppercase text-[#151515]">
                    VELIČINA: <span className="font-mono-tech text-[#6F6F6A] font-normal">{selectedSize}</span>
                  </span>
                  <button
                    onClick={openSizeGuide}
                    className="font-mono-tech text-xs text-[#b30400] underline hover:text-[#151515] cursor-pointer"
                  >
                    VODIČ ZA VELIČINE
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[48px] h-11 px-3 font-mono-tech text-xs font-bold border-2 transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'bg-[#151515] text-white border-[#151515]'
                          : 'bg-white text-[#151515] border-[#D4D4D0] hover:border-[#151515]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <span className="font-bold text-xs uppercase text-[#151515] block mb-2">KOLIČINA</span>
              <div className="flex items-center w-36 border-2 border-[#151515] bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#151515] hover:bg-[#E7E7E3] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-grow text-center font-mono-tech text-sm font-bold text-[#151515]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#151515] hover:bg-[#E7E7E3] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#b30400] text-white hover:bg-[#151515] py-4 px-8 font-bold text-sm uppercase tracking-wider transition-colors border-2 border-[#b30400] hover:border-[#151515] flex items-center justify-center gap-2 cursor-pointer brutalist-shadow-sm"
              >
                <span>DODAJ U KORPU</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-[#151515] text-white hover:bg-white hover:text-[#151515] py-3.5 px-8 font-bold text-sm uppercase tracking-wider transition-colors border-2 border-[#151515] flex items-center justify-center cursor-pointer"
              >
                KUPI ODMAH
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 border-t border-b border-[#D4D4D0] py-4 grid grid-cols-3 gap-2 font-mono-tech text-[10px] sm:text-xs text-[#4A4A47]">
              <div className="flex flex-col items-center text-center gap-1">
                <Truck className="w-4 h-4 text-[#b30400]" />
                <span>BRZA DOSTAVA (1-2 DANA)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 border-x border-[#D4D4D0] px-1">
                <ShieldCheck className="w-4 h-4 text-[#b30400]" />
                <span>100% ORGANSKI PAMUK</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <RefreshCw className="w-4 h-4 text-[#b30400]" />
                <span>14 DANA ZA POVRAT</span>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="divide-y divide-[#D4D4D0] border-b border-[#D4D4D0]">
            {/* Opis */}
            <div className="py-3">
              <button
                onClick={() => setIsDescOpen(!isDescOpen)}
                className="w-full flex justify-between items-center text-left font-bold text-xs uppercase text-[#151515] py-1 cursor-pointer"
              >
                <span>OPIS PROIZVODA & DETALJI</span>
                {isDescOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isDescOpen && (
                <div className="mt-3 text-xs text-[#4A4A47] space-y-2 leading-relaxed font-sans">
                  <p>{product.description}</p>
                  {product.details && (
                    <ul className="list-disc pl-4 space-y-1 font-mono-tech text-[11px]">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Materijal */}
            <div className="py-3">
              <button
                onClick={() => setIsMaterialOpen(!isMaterialOpen)}
                className="w-full flex justify-between items-center text-left font-bold text-xs uppercase text-[#151515] py-1 cursor-pointer"
              >
                <span>MATERIJAL I ODRŽAVANJE</span>
                {isMaterialOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isMaterialOpen && (
                <div className="mt-3 text-xs text-[#4A4A47] space-y-2 leading-relaxed">
                  <p>{product.materials || '100% češljani pamuk, 240g/m². Prati izvrnuto na 30 stepeni.'}</p>
                </div>
              )}
            </div>

            {/* Dostava i povrat */}
            <div className="py-3">
              <button
                onClick={() => setIsShippingOpen(!isShippingOpen)}
                className="w-full flex justify-between items-center text-left font-bold text-xs uppercase text-[#151515] py-1 cursor-pointer"
              >
                <span>DOSTAVA I POVRAT</span>
                {isShippingOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isShippingOpen && (
                <div className="mt-3 text-xs text-[#4A4A47] space-y-2 leading-relaxed">
                  <p>
                    Dostavu vršimo na teritoriji cele Srbije putem Post Express / BEX kurirske službe. Rok isporuke je 1 do 2 radna dana. Besplatna dostava za sve porudžbine veće od 7.000 RSD.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t-2 border-[#151515]">
          <h2 className="font-anton text-3xl md:text-4xl text-[#151515] uppercase tracking-tight mb-8">
            MOŽDA VAM SE DOPADNE I OVO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => viewProduct(p)}
                className="group border border-[#D4D4D0] bg-white hover:border-[#151515] transition-colors cursor-pointer flex flex-col"
              >
                <div className="aspect-square bg-[#E7E7E3] overflow-hidden border-b border-[#D4D4D0]">
                  <img src={p.images[0]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3.5 flex flex-col gap-0.5">
                  <div className="font-mono-tech text-[10px] text-[#6F6F6A]">{p.sku}</div>
                  <h4 className="font-bold text-xs uppercase text-[#151515] group-hover:text-[#b30400] transition-colors truncate">
                    {p.name}
                  </h4>
                  <div className="font-bold text-xs text-[#151515] mt-1">
                    {p.price.toLocaleString('sr-RS')} RSD
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
