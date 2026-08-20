import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setActivePage, viewProduct, addToCart } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const bestSellers = PRODUCTS.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 min-h-[75vh] border-b-2 border-[#D4D4D0] px-4 md:px-12 py-8 md:py-16 gap-6 md:gap-8 bg-[#FFFFFF]">
        <div className="md:col-span-7 flex flex-col justify-center gap-6 z-10 pr-0 md:pr-8">
          <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter text-[#151515]">
            STIKERI, MAJICE <br className="hidden xl:block" />
            I BRANDING <br className="hidden xl:block" />
            <span className="text-[#b30400]">ZA ONE KOJI OSTAVLJAJU TRAG.</span>
          </h1>
          
          <p className="text-sm md:text-base text-[#6F6F6A] max-w-xl leading-relaxed">
            Sirova ulična estetika, teški pamuk i vodootporni vinil. Autentični komadi i custom print rešenja iz Beograda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-max mt-2">
            <button
              onClick={() => setActivePage('shop')}
              className="bg-[#b30400] text-white font-bold text-xs uppercase px-8 py-4 border-2 border-[#b30400] hover:bg-[#151515] hover:border-[#151515] transition-colors duration-150 h-[52px] flex items-center justify-center cursor-pointer tracking-wider"
            >
              KUPI ODMAH
            </button>
            <button
              onClick={() => setActivePage('b2b')}
              className="bg-transparent text-[#151515] font-bold text-xs uppercase px-8 py-4 border-2 border-[#151515] hover:bg-[#151515] hover:text-white transition-colors duration-150 h-[52px] flex items-center justify-center cursor-pointer tracking-wider"
            >
              ZA FIRME
            </button>
          </div>
        </div>

        {/* Hero Collage Box */}
        <div className="md:col-span-5 relative min-h-[380px] md:h-full bg-[#E7E7E3] p-3 border border-[#D4D4D0] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 m-3 grid grid-cols-2 grid-rows-2 gap-3">
            <div
              className="bg-cover bg-center border border-[#D4D4D0] mix-blend-multiply col-span-2 row-span-1 grayscale contrast-125"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRXiR5i1jS_9qvk2wPhG0v0JGGKZ_02t8kIzdWosfYdx5vM2BTWqvttcUoKUwcHfmBOUXQe4rcidvFHskcRfuX4D3FtYa7sFsL3brFDg3MbwcTbIvSh9PGiq9cQmG2QCK045t527AwmQY409-im3yfP7Mrbrhjap0Xh88FmNegBPzZedYDHulqh1qqHKKZjT5zzhZObQa4nft6fEZlx-PYukj2lUfcwnhRVKEZ5H98aHChTzKiq5VB')`
              }}
            />
            <div
              className="bg-cover bg-center border border-[#D4D4D0] mix-blend-multiply col-span-1 row-span-1 contrast-125"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBu24cEzkzk-USBJgtchkuK3N3HMQYnNYb1wIL2P7VgbhEv66-RZuN88eX_aQ0dgoitdIyTQ97SRplvw7nn7CVpoElarfw7PUhDT9FmJ6AylNvDRkDI0_VKUiVqULgYUijRz84OTiNnr1Sb-R4t0BQW3bAUP4Qm7Zw7swKaStqhBWVK2M86If_7Suw44nurRtj_V_Fm3v-YC9folxyn0c29GM3ERubic40Vt_cwosyeV5pEO2HpEJ6H')`
              }}
            />
            <div
              className="bg-cover bg-center border border-[#D4D4D0] mix-blend-multiply col-span-1 row-span-1 contrast-125"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTuaXvRshXwz3hLkF8UvZxR9virksiqH1sEWWZeXgIO0McN4cSJNhVuCFQfZwZpzeGTy8R3qvKV7U_RO_gEsddK1-Cqr-EtD0qFKybLHocwgQ2AR7e8_81SOmq6O-k8C6aYQ67qgFMIXn2ot5BfhbRXwL2hBNXzqATp9UYakS3kKIQWFzVsXhY6a6nFVcMITX2BKKEX8KQADZ_V-2ddud1HQHJ4MqP_qZoZmAGAYo1EpiIAb_prkmZ')`
              }}
            />
          </div>

          <div className="absolute top-6 right-6 bg-[#151515] text-white font-bold text-xs px-3.5 py-1.5 -rotate-3 shadow-[4px_4px_0_#b30400] border border-white tracking-widest uppercase">
            NEW DROP
          </div>
        </div>
      </section>

      {/* 2. Trust Strip Marquee */}
      <section className="bg-[#151515] w-full py-3.5 overflow-hidden border-b-2 border-[#D4D4D0]">
        <div className="animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-8 px-4 font-mono-tech text-xs text-white uppercase tracking-widest">
            <span>ORIGINALNI DIZAJNI</span>
            <span className="text-[#b30400]">/</span>
            <span>BRZA ISPORUKA (1-2 DANA)</span>
            <span className="text-[#b30400]">/</span>
            <span>SIGURNA KUPOVINA</span>
            <span className="text-[#b30400]">/</span>
            <span>CUSTOM PRINT ZA FIRME</span>
            <span className="text-[#b30400]">/</span>
            <span>BESPLATNA DOSTAVA PREKO 7.000 RSD</span>
            <span className="text-[#b30400]">/</span>
            <span>100% ORGANSKI TEŠKI PAMUK</span>
            <span className="text-[#b30400]">/</span>
            <span>ORIGINALNI DIZAJNI</span>
            <span className="text-[#b30400]">/</span>
            <span>BRZA ISPORUKA (1-2 DANA)</span>
            <span className="text-[#b30400]">/</span>
            <span>SIGURNA KUPOVINA</span>
            <span className="text-[#b30400]">/</span>
            <span>CUSTOM PRINT ZA FIRME</span>
            <span className="text-[#b30400]">/</span>
          </div>
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="px-4 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:grid-rows-2 auto-rows-fr h-auto md:h-[560px]">
          
          {/* Large Sticker Card */}
          <button
            onClick={() => setActivePage('shop')}
            className="md:col-span-7 md:row-span-2 group relative border border-[#D4D4D0] bg-[#E7E7E3] overflow-hidden flex flex-col justify-end p-6 md:p-8 min-h-[280px] text-left cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkV64Me6SYg4AQuowP7Xl3AOicklIfvz429HGx2NxKsNhpGauFiKCn2UtaAOOROx4pC3FnaYQ3r30EsvPDt3Q7MzyJWi68GNpyV8-M8j25vz-Yn2qFLuVSHTqS-5v43SxydMsEwTczUaNFtGeyDV33YEevtadRUGBiV6QWqd10mGoUtcg7VCfuGdMhzBg7jrLwcoRoIEzhJOjDloU70rf-AGA0wpxXAbsQAm418I-LSGDSzsS9kEiH"
              alt="Stikeri"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale contrast-125 opacity-70 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 flex justify-between items-end w-full">
              <div>
                <span className="font-mono-tech text-xs uppercase text-[#b30400] font-bold block mb-1">
                  VODOOTPORNI VINIL
                </span>
                <h2 className="font-anton text-5xl md:text-7xl text-[#151515] m-0 leading-none">
                  STIKERI
                </h2>
              </div>
              <span className="w-12 h-12 bg-[#151515] text-white flex items-center justify-center group-hover:bg-[#b30400] group-hover:translate-x-2 transition-all">
                <ArrowRight className="w-6 h-6" />
              </span>
            </div>
          </button>

          {/* Majice Card */}
          <button
            onClick={() => setActivePage('shop')}
            className="md:col-span-5 md:row-span-1 group relative border border-[#D4D4D0] bg-[#FFFFFF] overflow-hidden flex flex-col justify-end p-6 min-h-[200px] text-left cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf0svpvxrC5NkTvC8o8eQPX8csv7d-h26jPmJ8gwRXVeYAFJlhG8BPqjclFrnu8o9p1V7q-N7Px9Bi-blWodtFg0vLrwrexIU66ZKWm4ddxm6Gp1AS5QriwgldR1zISAJy-r-MxJAmgbvaaxRuWmFMeH6mPUcOf4HnywkpBTTI7XSZcvrkiZ4di672W3Xkc5eDabFTO5pekuT3u10Wurf21gS8kONHp8noVXe2Grf5ncYNiG4DxXYS"
              alt="Majice"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 flex justify-between items-end w-full">
              <h3 className="font-anton text-4xl md:text-5xl text-[#151515] m-0 leading-none">
                MAJICE
              </h3>
              <span className="w-10 h-10 bg-[#151515] text-white flex items-center justify-center group-hover:bg-[#b30400] group-hover:translate-x-1.5 transition-all">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </button>

          {/* Duksevi & Za Firme split */}
          <div className="md:col-span-5 md:row-span-1 grid grid-cols-2 gap-4 min-h-[200px]">
            <button
              onClick={() => setActivePage('shop')}
              className="group relative border border-[#D4D4D0] bg-[#151515] overflow-hidden flex flex-col justify-end p-4 text-left cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500 grayscale"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTuaXvRshXwz3hLkF8UvZxR9virksiqH1sEWWZeXgIO0McN4cSJNhVuCFQfZwZpzeGTy8R3qvKV7U_RO_gEsddK1-Cqr-EtD0qFKybLHocwgQ2AR7e8_81SOmq6O-k8C6aYQ67qgFMIXn2ot5BfhbRXwL2hBNXzqATp9UYakS3kKIQWFzVsXhY6a6nFVcMITX2BKKEX8KQADZ_V-2ddud1HQHJ4MqP_qZoZmAGAYo1EpiIAb_prkmZ')`
                }}
              />
              <div className="relative z-10 flex justify-between items-end w-full">
                <h3 className="font-anton text-2xl md:text-3xl text-white m-0 leading-none">
                  DUKSEVI
                </h3>
              </div>
            </button>

            <button
              onClick={() => setActivePage('b2b')}
              className="group relative border border-[#b30400] bg-[#b30400] overflow-hidden flex flex-col justify-end p-4 text-left cursor-pointer"
            >
              <div className="relative z-10 flex justify-between items-end w-full">
                <h3 className="font-anton text-2xl md:text-3xl text-white m-0 leading-none">
                  ZA FIRME
                </h3>
                <span className="text-white group-hover:translate-x-1.5 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Section */}
      <section className="px-4 md:px-12 pb-16 md:pb-24">
        <div className="flex justify-between items-end mb-8 border-b-2 border-[#151515] pb-4">
          <div>
            <span className="font-mono-tech text-xs text-[#b30400] font-bold uppercase tracking-widest block mb-1">
              IZDVAJAMO IZ PONUDE
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tighter text-[#151515]">
              NAJPRODAVANIJE
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="font-bold text-xs text-[#151515] hover:text-[#b30400] transition-colors flex items-center gap-1 uppercase cursor-pointer"
          >
            <span>Svi proizvodi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col border border-[#D4D4D0] bg-white hover:border-[#151515] transition-colors"
            >
              {/* Image box */}
              <div
                onClick={() => viewProduct(product)}
                className="relative aspect-[4/5] bg-[#E7E7E3] overflow-hidden border-b border-[#D4D4D0] flex items-center justify-center cursor-pointer"
              >
                {product.badge && product.badge !== 'NOVO' && (
                  <span
                    className={`absolute top-3 left-3 text-white font-mono-tech text-[10px] px-2 py-1 tracking-wider uppercase font-bold z-10 ${
                      product.badge.includes('%') || product.badge === 'SALE'
                        ? 'bg-[#b30400]'
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
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Add on Hover */}
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
              </div>

              {/* Card info */}
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
                  className="font-bold text-sm text-[#151515] uppercase truncate hover:text-[#b30400] transition-colors cursor-pointer"
                >
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Promo 3-Column Banners */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-b-2 border-[#D4D4D0]">
        <div
          onClick={() => setActivePage('shop')}
          className="bg-[#b30400] text-white p-8 md:p-12 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-[#D4D4D0]/30 hover:bg-[#151515] transition-colors duration-300 cursor-pointer"
        >
          <h3 className="font-anton text-4xl md:text-5xl uppercase leading-none mb-3">
            NEW DROP
          </h3>
          <p className="font-bold uppercase text-xs tracking-widest border-b border-white pb-1">
            POGLEDAJ KOLEKCIJU
          </p>
        </div>

        <div
          onClick={() => setActivePage('shop')}
          className="bg-[#151515] text-white p-8 md:p-12 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-[#D4D4D0]/30 hover:bg-[#b30400] transition-colors duration-300 cursor-pointer"
        >
          <h3 className="font-anton text-4xl md:text-5xl uppercase leading-none mb-3">
            SALE
          </h3>
          <p className="font-bold uppercase text-xs tracking-widest border-b border-white pb-1">
            DO -50% POPUSTA
          </p>
        </div>

        <div
          onClick={() => setActivePage('b2b')}
          className="bg-[#151515] text-white p-8 md:p-12 flex flex-col justify-center items-center text-center hover:bg-[#b30400] transition-colors duration-300 cursor-pointer"
        >
          <h3 className="font-anton text-4xl md:text-5xl uppercase leading-none mb-3">
            CUSTOM PRINT
          </h3>
          <p className="font-bold uppercase text-xs tracking-widest border-b border-white pb-1">
            ZA TVOJ BIZNIS / B2B
          </p>
        </div>
      </section>

      {/* 6. Community / Instagram Grid */}
      <section className="bg-[#151515] py-16 md:py-20 border-b border-[#D4D4D0]">
        <div className="px-4 md:px-12 mb-8 text-center">
          <span className="font-mono-tech text-xs text-[#b30400] uppercase font-bold tracking-widest block mb-2">
            STREETWEAR & PRINT COMMUNITY
          </span>
          <h2 className="font-anton text-4xl md:text-6xl uppercase leading-none text-white tracking-tighter">
            @STRIKERZ_CULTURE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-white/20 max-w-7xl mx-auto">
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAdf4g-J6C8RH6TWCXf7RrlydB6XrPlqfv5drgASEl6ugbfv3eM3VIomO8rnGafhqBt2GFvtpZ1fAxnb9wYPDN8a-uzbOziOj_wGhLuYu4yPA3stIKOrTzcxg5g8Tmk2FEV4TBVLzGyUR2iFO-aafQyclMAscWtgM3ZoKJ4i6ACbocx1lPLNZyH9lRovLC1KJjaNUBewxCSNBC5pImzXPrtO4-CQkqnYUAzXc5m90g_8gm7vk154SOk',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuASYlF53HvlzLZI4ffcarfF-nIlGGJVpdd-HYUE97ujEC322g1nX4jI4yhehPVUhCKcVOc4oZZWg_eOncXalG9c-Tc75-upPMLQ1Wbz5zGtmeD6Po4WJP0FUIxAr_ME3j74yddDDj2BGz3BiQ-ykV1oGec2U3sK4oxNwHdB_oTBRaIBZfXRzNcv0yS8OxLjbUIe-hX0Fc0ir59zzql1PWMx2VNzD72IK6slaKewUnhX5kfSTcHuBc8t',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC7LcDYRSlh7-4SO5XqZKvx6ezl6InFOyiv_WycbRC49lqMx8sFXfqjgm4hSLWahhNqipqTpiSWgWvddxEj6taKlfKnGoX8siUNqoq3g9X891o-MxXRLV6pXkeUnIGMtTr1Zo1923dPdb6CsRlK34FIYaF2s15rCaMc8GtPerUGH4OrP0_LdUuHu-O1Nkhujv27HYy9m-KZmIcohR6oh8ibDU1TNj6fXCRubB6cTwO6IUJEzV9I2BHC',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDEbQGsOJQXbQl9nxxsGrESt-ZquIiITmHXrG2VR7s3zz15Ve2roTAo_t8Fd5KcEg21-w8MLTL87IfsAVIFB6FAWg__2JA_16uGnNRAgGev6h6t36FQz5dzmKVIEV7pgOMt8EwyG0dtofZ-InXzYxn3pJm4Eks5lhPnD13bxEOD55tZXUf1ssl6kfE6wnf2h0I7Pj1DWTOdqAMNtTp0N0uMYNnr9hN7KBXkqxtACCAPn58VbIy3_2sx'
          ].map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden block">
              <img
                src={img}
                alt={`Community ${i + 1}`}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#b30400]/0 group-hover:bg-[#b30400]/25 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-mono-tech text-xs opacity-0 group-hover:opacity-100 font-bold tracking-widest uppercase bg-[#151515] px-3 py-1.5">
                  #STRIKERZ
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="bg-[#b30400] w-full px-4 md:px-12 py-16 md:py-24 border-b border-[#151515]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tighter text-white">
            DROPOVI, AKCIJE I NOVI DIZAJNI.
          </h2>
          
          <p className="font-mono-tech text-xs md:text-sm text-white/90 uppercase tracking-widest max-w-lg">
            Budi prvi koji saznaje za limitirane serije majica i nove pakete stikera.
          </p>

          {isSubscribed ? (
            <div className="bg-white border-2 border-[#151515] p-6 text-[#151515] brutalist-shadow max-w-lg w-full flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-[#1EA85B] shrink-0" />
              <div className="text-left">
                <p className="font-anton text-xl uppercase leading-tight">HVALA NA PRIJAVI!</p>
                <p className="font-mono-tech text-xs text-[#6F6F6A] mt-0.5">
                  Tvoj kod za 10% popusta: <strong>STRIKERZ10</strong>
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full max-w-lg flex flex-col sm:flex-row gap-0 border-2 border-[#151515] bg-white brutalist-shadow"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="UNESI SVOJ EMAIL"
                required
                className="flex-grow bg-transparent border-none text-[#151515] font-mono-tech font-bold px-6 py-4 outline-none placeholder:text-[#6F6F6A] focus:ring-0 text-sm h-[56px]"
              />
              <button
                type="submit"
                className="bg-[#151515] text-white font-bold text-xs uppercase px-8 py-4 hover:bg-[#b30400] transition-colors h-[56px] w-full sm:w-auto border-t-2 sm:border-t-0 sm:border-l-2 border-[#151515] flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                PRIJAVI SE
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
