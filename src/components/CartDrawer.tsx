import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    closeCart,
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    remainingForFreeShipping,
    freeShippingProgress,
    setActivePage,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    closeCart();
    setActivePage('checkout');
  };

  const handleGoToShop = () => {
    closeCart();
    setActivePage('shop');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-[#151515]/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside className="w-screen max-w-md bg-[#FFFFFF] border-l-2 border-[#151515] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#D4D4D0] bg-[#FFFFFF] shrink-0">
            <h2 className="font-anton text-3xl uppercase tracking-tight text-[#151515] m-0">
              VAŠA KORPA
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-[#151515] hover:text-[#b30400] transition-colors focus:outline-none cursor-pointer"
              aria-label="Zatvori korpu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#E7E7E3] p-4 border-b border-[#D4D4D0] shrink-0">
            <p className="font-mono-tech text-xs uppercase text-[#151515] font-semibold mb-2">
              {remainingForFreeShipping > 0 ? (
                <>
                  Još <span className="text-[#b30400] font-bold">{remainingForFreeShipping.toLocaleString('sr-RS')} RSD</span> do besplatne dostave
                </>
              ) : (
                <span className="text-[#1EA85B] font-bold">Čestitamo! Imate besplatnu dostavu!</span>
              )}
            </p>
            <div className="h-2 w-full bg-[#D4D4D0] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-[#b30400] transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center space-y-3">
                <ShoppingBag className="w-16 h-16 text-[#D4D4D0]" />
                <h3 className="font-anton text-2xl uppercase text-[#151515]">KORPA JE PRAZNA</h3>
                <p className="text-xs text-[#6F6F6A] max-w-[200px]">
                  Dodajte originalne stikere ili odeću u korpu da započnete kupovinu.
                </p>
                <button
                  onClick={handleGoToShop}
                  className="mt-4 bg-[#151515] text-white hover:bg-[#b30400] px-6 py-2.5 text-xs font-bold uppercase transition-colors"
                >
                  ISTRAŽI SHOP
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                  className="flex gap-3.5 bg-[#FFFFFF] border border-[#D4D4D0] p-2.5 hover:border-[#151515] transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 shrink-0 border border-[#D4D4D0] overflow-hidden bg-[#E7E7E3] relative">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="font-bold text-xs uppercase text-[#151515] leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="font-mono-tech text-[11px] text-[#6F6F6A] mt-0.5">
                          {item.selectedSize ? `VEL: ${item.selectedSize}` : ''}
                          {item.selectedColor && item.selectedColor !== 'DEFAULT' ? ` / BOJA: ${item.selectedColor}` : ''}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                        className="text-[#6F6F6A] hover:text-[#D92D20] p-1 transition-colors cursor-pointer"
                        title="Ukloni"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center border border-[#D4D4D0] bg-[#FFFFFF]">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1, item.selectedSize, item.selectedColor)}
                          className="w-7 h-7 flex items-center justify-center text-[#151515] hover:bg-[#E7E7E3] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center font-mono-tech text-xs font-bold text-[#151515] border-x border-[#D4D4D0]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1, item.selectedSize, item.selectedColor)}
                          className="w-7 h-7 flex items-center justify-center text-[#151515] hover:bg-[#E7E7E3] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono-tech text-xs font-bold text-[#151515]">
                        {(item.product.price * item.quantity).toLocaleString('sr-RS')} RSD
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sticky Footer */}
          {cart.length > 0 && (
            <div className="border-t-2 border-[#151515] bg-[#FFFFFF] p-4 shrink-0 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono-tech text-xs uppercase text-[#6F6F6A] font-bold">
                  UKUPNO
                </span>
                <span className="font-anton text-2xl text-[#b30400]">
                  {subtotal.toLocaleString('sr-RS')} RSD
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#b30400] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#151515] transition-colors border border-[#b30400] hover:border-[#151515] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ZAVRŠI KUPOVINU</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleGoToShop}
                  className="w-full py-3 bg-[#FFFFFF] text-[#151515] font-bold text-xs uppercase tracking-wider hover:bg-[#151515] hover:text-white transition-colors border border-[#151515] flex items-center justify-center cursor-pointer"
                >
                  NASTAVI KUPOVINU
                </button>
              </div>

              <p className="font-mono-tech text-[10px] text-[#6F6F6A] text-center">
                Dostava i porezi izračunati na kasi.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
