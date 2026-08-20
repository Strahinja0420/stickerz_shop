import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ArrowRight, Check, Plus, Minus } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, viewProduct, openSizeGuide } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('BLACK');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedSize, selectedColor);
    closeQuickView();
  };

  const handleFullDetails = () => {
    closeQuickView();
    viewProduct(quickViewProduct);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative bg-[#FFFFFF] border-2 border-[#151515] max-w-3xl w-full brutalist-shadow p-6 md:p-8 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 p-2 text-[#151515] hover:text-[#b30400] transition-colors cursor-pointer"
          aria-label="Zatvori"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Gallery */}
          <div className="md:col-span-6 space-y-3">
            <div className="aspect-[3/4] bg-[#E7E7E3] border border-[#D4D4D0] overflow-hidden relative">
              <img
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
              {quickViewProduct.badge && quickViewProduct.badge !== 'NOVO' && (
                <span className="absolute top-3 left-3 bg-[#b30400] text-white font-mono-tech text-[10px] px-2 py-1 uppercase font-bold tracking-wider">
                  {quickViewProduct.badge === 'SALE' && quickViewProduct.originalPrice
                    ? `-${Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)}%`
                    : quickViewProduct.badge}
                </span>
              )}
            </div>

            {quickViewProduct.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickViewProduct.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-16 h-16 border shrink-0 overflow-hidden bg-[#E7E7E3] cursor-pointer ${
                      activeImageIndex === i ? 'border-2 border-[#b30400]' : 'border-[#D4D4D0] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Config */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="font-mono-tech text-xs text-[#6F6F6A] mb-1">
                SKU: {quickViewProduct.sku}
              </div>
              <h2 className="font-anton text-2xl md:text-3xl text-[#151515] uppercase leading-tight mb-2">
                {quickViewProduct.name}
              </h2>
              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-anton text-2xl text-[#b30400]">
                  {quickViewProduct.price.toLocaleString('sr-RS')} RSD
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="font-mono-tech text-sm text-[#6F6F6A] line-through">
                    {quickViewProduct.originalPrice.toLocaleString('sr-RS')} RSD
                  </span>
                )}
              </div>

              <p className="text-xs text-[#4A4A47] leading-relaxed mb-4 border-b border-[#D4D4D0] pb-4">
                {quickViewProduct.description}
              </p>

              {/* Sizes */}
              {quickViewProduct.sizes && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xs uppercase text-[#151515]">VELIČINA</span>
                    <button
                      onClick={openSizeGuide}
                      className="font-mono-tech text-[11px] text-[#6F6F6A] underline hover:text-[#151515]"
                    >
                      VODIČ ZA VELIČINE
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`min-w-[40px] h-9 px-2 font-mono-tech text-xs font-bold border transition-colors cursor-pointer ${
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

              {/* Quantity */}
              <div className="mb-4">
                <span className="font-bold text-xs uppercase text-[#151515] block mb-2">KOLIČINA</span>
                <div className="flex items-center w-32 border border-[#D4D4D0]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#E7E7E3] text-[#151515] transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-14 text-center font-mono-tech text-xs font-bold text-[#151515]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#E7E7E3] text-[#151515] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-4 border-t border-[#D4D4D0]">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#b30400] text-white hover:bg-[#151515] py-3.5 px-6 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DODAJ U KORPU</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleFullDetails}
                className="w-full bg-white text-[#151515] border border-[#151515] hover:bg-[#151515] hover:text-white py-2.5 px-6 font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                DETALJNIJE O PROIZVODU
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
