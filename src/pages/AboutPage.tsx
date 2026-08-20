import React from 'react';
import { useCart } from '../context/CartContext';
import { Instagram } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setActivePage } = useCart();

  const processPhases = [
    {
      tag: '[FAZA_01]',
      title: 'DIZAJN',
      desc: 'Sirova ideja prelazi u digitalni format. Bez kompromisa.'
    },
    {
      tag: '[FAZA_02]',
      title: 'ŠTAMPA',
      desc: 'Visoka rezolucija, jake boje, materijali koji traju.'
    },
    {
      tag: '[FAZA_03]',
      title: 'STIKERI',
      desc: 'Sečeno do perfekcije. Spremno za ulicu.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section - Exact Match to Design */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[540px] bg-[#151515] overflow-hidden flex items-end [clip-path:polygon(0_0,100%_0,100%_94%,0_100%)]">
        {/* Tiled Workshop Background Grid with Dark Overlay */}
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-3 gap-0.5 opacity-25 select-none pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full bg-cover bg-center grayscale contrast-125 border border-black/40"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfR0OHl-qc-t4A3AvgOQKfv5zdMBrjFCiI2A2H4vAcyOOp2ONnwhcwccSS730uKacSu3lbtIKzBdWUp4ytvULZCwoM6KVNoQGsQATpS55t5x9yKvGV8FhLjhhJvijmfTikihoYIbsiNPoAtCzlVcjTe4-Q2inuHZfDr-ucBk0l5uJbCWoPTch7VC0Hxs7VVX1zvwrP4rsw7QHW_w_8myZpGnk1j4A9qWuMn8IYcyk0lYmeB1NGVwfo')`
              }}
            />
          ))}
        </div>

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/95 via-[#151515]/85 to-[#151515]/70 pointer-events-none" />

        {/* Hero Title & Est Tag Positioned Low Near Container Edge */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-6 sm:pb-8 md:pb-10 max-w-7xl mx-auto">
          <span className="font-mono-tech text-xs text-[#b30400] font-bold tracking-widest block mb-1">
            [EST. 2024 / BELGRADE]
          </span>
          <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] uppercase tracking-tight leading-[0.85] m-0">
            <span className="text-white/80 block select-none drop-shadow-sm">
              MI SMO
            </span>
            <span className="text-[#b30400] block">
              STRIKERZ
            </span>
          </h1>
        </div>
      </section>

      {/* 2. Middle Featured Container ("KULTURA NA PAPIRU. I SVUDA OKO NAS.") */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 max-w-6xl mx-auto -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white border border-[#D4D4D0] p-6 sm:p-8 md:p-10 relative brutalist-shadow-sm">
          {/* Top-Right Red Angled Sticker Badge */}
          <div className="absolute -top-3 right-6 sm:right-8 bg-[#b30400] text-white font-mono-tech font-bold text-[10px] sm:text-xs px-3 py-1 rotate-2 shadow-md border border-black select-none">
            #CONTROLLED_REBELLION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image: Workshop Peel Sticker */}
            <div className="md:col-span-5 aspect-[4/3] sm:aspect-square bg-[#E7E7E3] border border-[#D4D4D0] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYvsTRGtiBs1355xrStXLkrh2j9hxOjGxUuwNDHJ7uKzTQRw6kyN_uoGPgOCQqZLVwRNg-eU93DwSRYzYP4uCJnEp0b3EYE2p3vAnS_Kpt0RQ61mDJfYKRU8hlg2emTtFxV7rTGQZsEAf65aoDs7vDsxq4kzMXmsgJ2avnNwhHqYxscdptYzXxPKQq6N1SEj6JUKPayjjtWWZAnWB0v_f5mQSI87hj-bDDKKwcsApNlVkdwwAS4nnd"
                alt="Workshop Sticker Peel"
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Text Content */}
            <div className="md:col-span-7 space-y-4">
              <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.95] text-[#151515] m-0">
                KULTURA NA PAPIRU. <br />
                <span className="text-[#b30400]">I SVUDA OKO NAS.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#4A4A47] leading-relaxed font-sans">
                Nastali smo iz potrebe da sirovu energiju ulice, skejt parkova i lokalnih grafita prenesemo na opipljive medije. Nismo još samo jedna štamparija. Mi smo produžena ruka tvoje kreativnosti.
              </p>

              <p className="text-xs sm:text-sm text-[#4A4A47] leading-relaxed font-sans">
                Od prvog nacrta do finalnog reza, verujemo u proces koji je prljav, glasan i autentičan. Štampamo stikere koji preživljavaju kišu, dizajniramo majice koje pričaju priče i podržavamo lokalne umetnike u njihovom izrazu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section "KAKO RADIMO" - 3 Phase Cards */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 max-w-6xl mx-auto">
        <div className="border-b-2 border-[#151515] pb-3 mb-8 flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
          <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#151515] m-0">
            KAKO RADIMO
          </h2>
          <span className="font-mono-tech text-xs text-[#6F6F6A] uppercase font-bold tracking-wider">
            / PROCES / [01 - 03] /
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 md:pb-16">
          {processPhases.map((phase, idx) => {
            // Staircase vertical offset per card on desktop/tablet
            const stairOffsetClass = idx === 0 ? 'md:mt-0' : idx === 1 ? 'md:mt-6' : 'md:mt-12';
            return (
              <div
                key={idx}
                className={`bg-white border border-[#D4D4D0] p-6 sm:p-7 min-h-[190px] flex flex-col justify-between hover:border-[#151515] transition-all brutalist-shadow-sm ${stairOffsetClass}`}
              >
                <div>
                  <span className="font-mono-tech text-xs text-[#b30400] font-bold block mb-3">
                    {phase.tag}
                  </span>
                  <h3 className="font-anton text-3xl sm:text-4xl uppercase text-[#151515] mb-2 tracking-tight">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-xs text-[#6F6F6A] leading-relaxed font-sans mt-3">
                  {phase.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Visual Gallery / In Action */}
      <section className="bg-[#151515] py-16 md:py-24 border-y-2 border-[#151515] text-white">
        <div className="px-4 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
            <div>
              <span className="font-mono-tech text-xs text-[#b30400] font-bold uppercase tracking-widest block mb-1">
                RADIONICA & ULIČNA AKCIJA
              </span>
              <h2 className="font-anton text-4xl sm:text-5xl uppercase text-white m-0">
                STRIKERZ U AKCIJI
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono-tech text-xs uppercase text-white hover:text-[#b30400] flex items-center gap-2 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>PRATITE NAS NA @STRIKERZ_CULTURE</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-white/20 bg-white/5 overflow-hidden aspect-[3/4] group relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYvsTRGtiBs1355xrStXLkrh2j9hxOjGxUuwNDHJ7uKzTQRw6kyN_uoGPgOCQqZLVwRNg-eU93DwSRYzYP4uCJnEp0b3EYE2p3vAnS_Kpt0RQ61mDJfYKRU8hlg2emTtFxV7rTGQZsEAf65aoDs7vDsxq4kzMXmsgJ2avnNwhHqYxscdptYzXxPKQq6N1SEj6JUKPayjjtWWZAnWB0v_f5mQSI87hj-bDDKKwcsApNlVkdwwAS4nnd"
                alt="Peel Sticker"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#151515] text-white font-mono-tech text-[10px] px-2 py-1 uppercase font-bold">
                DIE-CUT VINYL PEEL
              </div>
            </div>

            <div className="border border-white/20 bg-white/5 overflow-hidden aspect-[3/4] group relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0zU8fXIzhC6-1-maMz-YQ68Tl4Fg3_K5BwjzhflJjsVLr7dROwYkhi7qdtmPrTmLtuhtgyvmUDMoAXzPnphYp51p7bJlG82WsnI-SuCvfu263c5pM6mdzjpWxPewXBC90PIIxxx3z70fByj-QggwqC_d-_enAcIwYp4dClqDwfUPvRyPKSknwT7qQEndtpYnOEdOvvfZJy4vNVBue3dK4RkikPEFJLdxGNCz4Ht63iTRI1mNMwbXr"
                alt="Skateboard Deck"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#151515] text-white font-mono-tech text-[10px] px-2 py-1 uppercase font-bold">
                SKATE CULTURE
              </div>
            </div>

            <div className="border border-white/20 bg-white/5 overflow-hidden aspect-[3/4] group relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSfiKxdgdoAGOmT3Gs5g2-Vl2_0UY7fyIWVz24PAJigF4Gb4-ttW6olU4fyhkbVKBplL29WT4oqRNimb6TaIDbNTQR8IasmmtjpD1Wn5ZQnnGi915CLBmnn2zyLpAFLllYgmYr6cQsHqmJgckIz0IzZzMRV69F1KUH0wygtRTYx-Ofy5l2kSSR938NE-uVH1USYYUC-1xvr73ISkYNfR6RrjdPcDhhDGJj8X88-XLnd0V8FVQcWd97"
                alt="Helmet Stickers"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#151515] text-white font-mono-tech text-[10px] px-2 py-1 uppercase font-bold">
                UV & WATERPROOF
              </div>
            </div>

            <div className="border border-white/20 bg-white/5 overflow-hidden aspect-[3/4] group relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDIMGuJyTHjUi_6fYuyMI2hiusCZiIUVFESFb9q7IVa2GJ8meBCEjA9y2_IXNvb7175hlxs9woGm0V71FOJfLrEnAyL3QQtaOBGHtyXojnsllhkcMm1Gmk1Ta3GA26q9gYvwYVzoeavEFkbM0zHavczuR4aLn0w3iAYdFXHdQA4HAQ1bTEpqqDrIX8I0Leau1CRQkR9oR8PdYuXzpasRIvfS2nO0_GAC6iaErWi1ZlPZwbe3ctHgGS"
                alt="Streetwear Hoodies"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#151515] text-white font-mono-tech text-[10px] px-2 py-1 uppercase font-bold">
                HEAVYWEIGHT HOODIES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-[#b30400] text-white py-16 px-4 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight m-0">
            ŽELITE DA BUDETE DEO PRIČE?
          </h2>
          <p className="font-mono-tech text-xs sm:text-sm uppercase tracking-widest text-white/90">
            Istražite našu najnoviju streetwear kolekciju ili zatražite custom ponudu za vaš brend.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setActivePage('shop')}
              className="bg-[#151515] hover:bg-white hover:text-[#151515] text-white font-bold text-xs uppercase px-8 py-4 transition-colors tracking-wider cursor-pointer"
            >
              ISTRAŽI SHOP
            </button>
            <button
              onClick={() => setActivePage('b2b')}
              className="bg-white text-[#151515] hover:bg-[#151515] hover:text-white font-bold text-xs uppercase px-8 py-4 transition-colors tracking-wider cursor-pointer"
            >
              CUSTOM B2B PRINT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
