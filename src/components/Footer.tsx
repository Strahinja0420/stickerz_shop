import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Video, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#151515] text-white w-full border-t border-[#D4D4D0]/30 pt-12 pb-8 px-4 md:px-12 mt-16 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-anton text-4xl lg:text-5xl text-[#b30400] tracking-tighter leading-none">
                STRIKERZ
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-xs tracking-widest uppercase text-white">
                  PRINT. STICK. WEAR.
                </span>
                <span className="inline-block w-2.5 h-2.5 bg-[#1EA85B] rounded-full"></span>
              </div>
            </div>
            
            <p className="text-xs text-[#D4D4D0]/70 normal-case max-w-[260px] leading-relaxed">
              Urbani print proizvodi i custom rešenja za pojedince i firme. Sirova estetika i beskompromisan kvalitet.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-[#b30400] hover:border-[#b30400] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-[#b30400] hover:border-[#b30400] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-[#b30400] hover:border-[#b30400] transition-colors"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-[#b30400] hover:border-[#b30400] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Proizvodi */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-bold text-xs tracking-widest uppercase text-white border-b border-white/10 pb-2">
              PROIZVODI
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#D4D4D0]/70 font-mono-tech">
              <li>
                <button onClick={() => setActivePage('shop')} className="hover:text-[#b30400] transition-colors text-left">
                  Stikeri
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('shop')} className="hover:text-[#b30400] transition-colors text-left">
                  Majice
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('shop')} className="hover:text-[#b30400] transition-colors text-left">
                  Duksevi
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('shop')} className="hover:text-[#b30400] transition-colors text-left">
                  Kačketi
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('b2b')} className="hover:text-[#b30400] transition-colors text-left">
                  Za firme (B2B)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('shop')} className="hover:text-[#b30400] transition-colors text-left">
                  Poklon kartice
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Korisne Informacije */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-bold text-xs tracking-widest uppercase text-white border-b border-white/10 pb-2">
              INFORMACIJE
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#D4D4D0]/70 font-mono-tech">
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-[#b30400] transition-colors text-left">
                  O nama
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('checkout')} className="hover:text-[#b30400] transition-colors text-left">
                  Dostava i plaćanje
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('contact')} className="hover:text-[#b30400] transition-colors text-left">
                  Povrat i reklamacije
                </button>
              </li>
              <li>
                <span className="hover:text-[#b30400] cursor-pointer">Uslovi korišćenja</span>
              </li>
              <li>
                <span className="hover:text-[#b30400] cursor-pointer">Politika privatnosti</span>
              </li>
              <li>
                <span className="hover:text-[#b30400] cursor-pointer">Česta pitanja (FAQ)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Pomoć */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-bold text-xs tracking-widest uppercase text-white border-b border-white/10 pb-2">
              POMOĆ & B2B
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#D4D4D0]/70 font-mono-tech">
              <li>
                <button onClick={() => setActivePage('contact')} className="hover:text-[#b30400] transition-colors text-left">
                  Kontakt
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('product-detail')} className="hover:text-[#b30400] transition-colors text-left">
                  Vodič za veličine
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('checkout')} className="hover:text-[#b30400] transition-colors text-left">
                  Poručivanje
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('b2b')} className="hover:text-[#b30400] transition-colors text-left">
                  Wholesale / Za firme
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Kontakt & Newsletter */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-xs tracking-widest uppercase text-white border-b border-white/10 pb-2">
                KONTAKT
              </h4>
              <div className="flex items-center gap-2.5 text-xs text-[#D4D4D0]/80 font-mono-tech">
                <Phone className="w-3.5 h-3.5 text-[#b30400] shrink-0" />
                <span>+381 60 123 45 67</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#D4D4D0]/80 font-mono-tech">
                <Mail className="w-3.5 h-3.5 text-[#b30400] shrink-0" />
                <span>info@strikerz.rs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#D4D4D0]/80 font-mono-tech">
                <MapPin className="w-3.5 h-3.5 text-[#b30400] shrink-0 mt-0.5" />
                <span>Bulevar Umetnosti 12, 11000 Beograd, Srbija</span>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-xs tracking-widest uppercase text-white">
                NEWSLETTER
              </h4>
              <p className="text-xs text-[#D4D4D0]/60 leading-tight">
                Prijavite se i ostvarite <span className="text-[#b30400] font-bold">10% popusta</span> na prvu porudžbinu.
              </p>
              
              {isSubscribed ? (
                <div className="bg-[#1EA85B]/20 border border-[#1EA85B] p-2.5 flex items-center gap-2 text-xs text-[#1EA85B]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Uspešno ste prijavljeni! Kod za 10%: <strong>STRIKERZ10</strong></span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-0 border border-white/20">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Vaš email"
                    required
                    className="bg-transparent border-none text-xs p-2.5 text-white placeholder:text-white/40 focus:ring-0 flex-grow font-mono-tech outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#b30400] text-white text-xs font-bold uppercase py-2.5 px-4 hover:bg-white hover:text-[#151515] transition-colors whitespace-nowrap"
                  >
                    PRIJAVI SE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar with payment options & shipping */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-[#D4D4D0]/50 font-mono-tech uppercase">
            © 2026 STRIKERZ. SVA PRAVA ZADRŽANA.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#D4D4D0]/70">
            <span className="px-2 py-1 bg-white/10 uppercase">MASTERCARD</span>
            <span className="px-2 py-1 bg-white/10 uppercase">VISA</span>
            <span className="px-2 py-1 bg-white/10 uppercase">PAYPAL</span>
            <span className="px-2 py-1 bg-white/10 uppercase">APPLE PAY</span>
            <span className="px-2 py-1 bg-white/10 uppercase">IPS</span>
          </div>

          {/* Delivery Providers */}
          <div className="flex items-center gap-3 text-[11px] text-[#D4D4D0]/70 font-mono-tech uppercase">
            <span className="opacity-60">Dostava:</span>
            <span className="font-bold text-white">BEX</span>
            <span className="font-bold text-white">GLS</span>
            <span className="font-bold text-white">POST EXPRESS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
