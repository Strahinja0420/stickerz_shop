import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Truck, ShieldCheck, ArrowRight, ArrowLeft, Tag, CreditCard, Banknote, QrCode } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, clearCart, setActivePage, remainingForFreeShipping, freeShippingThreshold } = useCart();

  const [formData, setFormData] = useState({
    email: '',
    subscribeNewsletter: true,
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: 'Beograd',
    postalCode: '11000',
    phone: '',
    paymentMethod: 'pouzecem', // 'pouzecem' | 'kartica' | 'ips'
    notes: '',
  });

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isShippingFree = subtotal >= freeShippingThreshold;
  const shippingCost = isShippingFree ? 0 : 350;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const totalAmount = subtotal - discountAmount + shippingCost;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'STRIKERZ10') {
      setDiscountPercent(10);
      setCouponError('');
    } else {
      setCouponError('Nevažeći promo kod. Probajte: STRIKERZ10');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrder = `STK-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsSubmitting(false);
      setIsOrdered(true);
      clearCart();
    }, 1200);
  };

  if (isOrdered) {
    return (
      <div className="w-full px-4 md:px-12 py-16 max-w-3xl mx-auto text-center">
        <div className="bg-white border-2 border-[#151515] p-8 md:p-12 brutalist-shadow space-y-6">
          <div className="w-20 h-20 bg-[#1EA85B]/10 border-2 border-[#1EA85B] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-[#1EA85B]" />
          </div>

          <div>
            <span className="font-mono-tech text-xs uppercase text-[#b30400] font-bold tracking-widest block mb-1">
              PORUDŽBINA JE EVIDENTIRANA
            </span>
            <h1 className="font-anton text-4xl sm:text-5xl uppercase text-[#151515]">
              HVALA NA POVERENJU!
            </h1>
            <p className="font-mono-tech text-sm text-[#151515] font-bold mt-2">
              BROJ VAŠE PORUDŽBINE: <span className="text-[#b30400] underline">{orderNumber}</span>
            </p>
          </div>

          <div className="bg-[#F5F5F2] border border-[#D4D4D0] p-4 text-left font-mono-tech text-xs text-[#4A4A47] space-y-2">
            <p><strong>Kupac:</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Adresa za dostavu:</strong> {formData.address}, {formData.postalCode} {formData.city}</p>
            <p><strong>Način plaćanja:</strong> {formData.paymentMethod === 'pouzecem' ? 'Plaćanje pouzećem (gotovinom kuriru)' : formData.paymentMethod === 'kartica' ? 'Platna kartica' : 'IPS Instant'}</p>
            <p><strong>Ukupan iznos za plaćanje:</strong> {totalAmount.toLocaleString('sr-RS')} RSD</p>
            <p className="text-[11px] text-[#6F6F6A] pt-2 border-t border-[#D4D4D0]">
              Detalji porudžbine i račun poslati su na vašu email adresu <strong>{formData.email}</strong>. Kurir će vas kontaktirati pre isporuke.
            </p>
          </div>

          <button
            onClick={() => setActivePage('home')}
            className="bg-[#151515] hover:bg-[#b30400] text-white py-3.5 px-8 font-bold text-xs uppercase tracking-wider transition-colors inline-block cursor-pointer"
          >
            VRATI SE NA POČETNU
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="w-full px-4 md:px-12 py-20 max-w-xl mx-auto text-center space-y-6">
        <h2 className="font-anton text-4xl uppercase text-[#151515]">VAŠA KORPA JE PRAZNA</h2>
        <p className="text-xs text-[#6F6F6A]">
          Niste dodali nijedan artikal u korpu za naručivanje.
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="bg-[#b30400] text-white hover:bg-[#151515] px-8 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          ISTRAŽI PRODAVNICU
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-12 py-8 max-w-7xl mx-auto">
      {/* Checkout Breadcrumbs */}
      <div className="mb-8 border-b-2 border-[#151515] pb-4 flex items-center justify-between">
        <div>
          <button
            onClick={() => setActivePage('shop')}
            className="font-mono-tech text-xs text-[#6F6F6A] hover:text-[#151515] flex items-center gap-1.5 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>NASTAVI KUPOVINU</span>
          </button>
          <h1 className="font-anton text-4xl md:text-5xl uppercase text-[#151515] tracking-tight m-0">
            KASA // CHECKOUT
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-2 font-mono-tech text-xs font-bold">
          <span className="text-[#b30400]">1. KORPA</span>
          <span>→</span>
          <span className="text-[#151515]">2. PODACI I DOSTAVA</span>
          <span>→</span>
          <span className="text-[#6F6F6A]">3. POTVRDA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Form */}
        <div className="lg:col-span-7 space-y-8">
          <form id="checkout-form" onSubmit={handleCompleteOrder} className="space-y-8">
            {/* 1. Contact Information */}
            <div className="bg-white border-2 border-[#151515] p-6 brutalist-shadow-sm space-y-4">
              <h2 className="font-anton text-2xl uppercase text-[#151515] border-b border-[#D4D4D0] pb-2">
                1. KONTAKT PODACI
              </h2>

              <div>
                <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                  EMAIL ADRESA ZA POTVRDU I RAČUN *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vas.email@gmail.com"
                  className="w-full brutalist-input p-3 border text-xs"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.subscribeNewsletter}
                  onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                  className="accent-[#b30400] w-4 h-4 rounded-none"
                />
                <span className="text-xs text-[#4A4A47] font-mono-tech">
                  Želim da primam obaveštenja o novim dropovima i popustima.
                </span>
              </label>
            </div>

            {/* 2. Shipping Address */}
            <div className="bg-white border-2 border-[#151515] p-6 brutalist-shadow-sm space-y-4">
              <h2 className="font-anton text-2xl uppercase text-[#151515] border-b border-[#D4D4D0] pb-2">
                2. ADRESA ZA DOSTAVU
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    IME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Marko"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    PREZIME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Jovanović"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    ULICA I BROJ *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Knez Mihailova 10"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    STAN / SPRAT
                  </label>
                  <input
                    type="text"
                    value={formData.apartment}
                    onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                    placeholder="Stan 4, sprat 2"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    GRAD *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Beograd"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    POŠTANSKI BROJ *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="11000"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                  TELEFON ZA KURIRA *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+381 6..."
                  className="w-full brutalist-input p-3 border text-xs"
                />
              </div>

              <div>
                <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                  NAPOMENA ZA ISPORUKU (OPCIONO)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="npr. Zvoniti na interfon Petrović..."
                  className="w-full brutalist-input p-3 border text-xs"
                />
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white border-2 border-[#151515] p-6 brutalist-shadow-sm space-y-4">
              <h2 className="font-anton text-2xl uppercase text-[#151515] border-b border-[#D4D4D0] pb-2">
                3. NAČIN PLAĆANJA
              </h2>

              <div className="space-y-3">
                <label className={`flex items-start gap-3 p-4 border-2 cursor-pointer transition-colors ${
                  formData.paymentMethod === 'pouzecem' ? 'border-[#b30400] bg-[#F5F5F2]' : 'border-[#D4D4D0]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="pouzecem"
                    checked={formData.paymentMethod === 'pouzecem'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-[#b30400] mt-0.5"
                  />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase text-[#151515]">PLAĆANJE POUZEĆEM</span>
                      <Banknote className="w-4 h-4 text-[#6F6F6A]" />
                    </div>
                    <p className="text-[11px] text-[#6F6F6A] font-mono-tech mt-0.5">
                      Plaćate gotovinom kuriru u trenutku preuzimanja paketa.
                    </p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 border-2 cursor-pointer transition-colors ${
                  formData.paymentMethod === 'kartica' ? 'border-[#b30400] bg-[#F5F5F2]' : 'border-[#D4D4D0]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="kartica"
                    checked={formData.paymentMethod === 'kartica'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-[#b30400] mt-0.5"
                  />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase text-[#151515]">PLATNA KARTICA (VISA / MASTER)</span>
                      <CreditCard className="w-4 h-4 text-[#6F6F6A]" />
                    </div>
                    <p className="text-[11px] text-[#6F6F6A] font-mono-tech mt-0.5">
                      Sigurno 3D-Secure online plaćanje debitnim i kreditnim karticama.
                    </p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 border-2 cursor-pointer transition-colors ${
                  formData.paymentMethod === 'ips' ? 'border-[#b30400] bg-[#F5F5F2]' : 'border-[#D4D4D0]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="ips"
                    checked={formData.paymentMethod === 'ips'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-[#b30400] mt-0.5"
                  />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase text-[#151515]">IPS SKENIRAJ QR KOD</span>
                      <QrCode className="w-4 h-4 text-[#6F6F6A]" />
                    </div>
                    <p className="text-[11px] text-[#6F6F6A] font-mono-tech mt-0.5">
                      Instant plaćanje aplikacijom vaše banke skeniranjem IPS koda.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#b30400] text-white hover:bg-[#151515] py-4 px-8 font-bold text-sm uppercase tracking-wider transition-colors border-2 border-[#b30400] hover:border-[#151515] flex items-center justify-center gap-2 cursor-pointer brutalist-shadow disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>EVIDENTIRANJE PORUDŽBINE...</span>
              ) : (
                <>
                  <span>POTVRDI I NARUČI ({totalAmount.toLocaleString('sr-RS')} RSD)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Sticky Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white border-2 border-[#151515] p-6 brutalist-shadow sticky top-28 space-y-6">
            <h2 className="font-anton text-2xl uppercase text-[#151515] border-b border-[#D4D4D0] pb-2">
              PREGLED PORUDŽBINE ({cart.length})
            </h2>

            {/* Cart Items List */}
            <div className="max-h-80 overflow-y-auto space-y-3 divide-y divide-[#D4D4D0]">
              {cart.map((item, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-center gap-3">
                  <div className="w-16 h-16 bg-[#E7E7E3] border border-[#D4D4D0] overflow-hidden shrink-0 relative">
                    <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    <span className="absolute -top-1 -right-1 bg-[#151515] text-white font-mono-tech text-[10px] w-4 h-4 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="flex-grow min-w-0">
                    <h4 className="font-bold text-xs uppercase text-[#151515] truncate">
                      {item.product.name}
                    </h4>
                    <p className="font-mono-tech text-[11px] text-[#6F6F6A]">
                      {item.selectedSize ? `Vel: ${item.selectedSize}` : ''}
                    </p>
                  </div>

                  <span className="font-mono-tech text-xs font-bold text-[#151515] shrink-0">
                    {(item.product.price * item.quantity).toLocaleString('sr-RS')} RSD
                  </span>
                </div>
              ))}
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="pt-4 border-t border-[#D4D4D0] flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="KOD ZA POPUST (npr. STRIKERZ10)"
                className="flex-grow brutalist-input p-2.5 border uppercase text-xs"
              />
              <button
                type="submit"
                className="bg-[#151515] text-white px-4 text-xs font-bold uppercase hover:bg-[#b30400] transition-colors"
              >
                PRIMENI
              </button>
            </form>
            {couponError && <p className="text-[11px] font-mono-tech text-[#D92D20]">{couponError}</p>}
            {discountPercent > 0 && (
              <div className="bg-[#1EA85B]/10 text-[#1EA85B] p-2 font-mono-tech text-xs font-bold flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>Primenjen popust 10% ({discountAmount.toLocaleString('sr-RS')} RSD)</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-2 pt-4 border-t border-[#D4D4D0] font-mono-tech text-xs">
              <div className="flex justify-between text-[#6F6F6A]">
                <span>MEĐUZBIR:</span>
                <span>{subtotal.toLocaleString('sr-RS')} RSD</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-[#1EA85B]">
                  <span>POPUST:</span>
                  <span>-{discountAmount.toLocaleString('sr-RS')} RSD</span>
                </div>
              )}

              <div className="flex justify-between text-[#6F6F6A]">
                <span>DOSTAVA:</span>
                <span>{shippingCost === 0 ? <strong className="text-[#1EA85B]">BESPLATNA</strong> : '350 RSD'}</span>
              </div>

              <div className="flex justify-between items-baseline pt-3 border-t-2 border-[#151515]">
                <span className="font-bold text-sm text-[#151515]">UKUPNO:</span>
                <span className="font-anton text-3xl text-[#b30400]">
                  {totalAmount.toLocaleString('sr-RS')} RSD
                </span>
              </div>
            </div>

            {/* Guarantee badge */}
            <div className="bg-[#F5F5F2] p-3 border border-[#D4D4D0] flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#b30400] shrink-0" />
              <div className="text-[11px] font-mono-tech text-[#4A4A47] leading-tight">
                <strong>Isporuka za 1-2 radna dana.</strong> Sigurno pakovanje i praćenje pošiljke preko SMS koda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
