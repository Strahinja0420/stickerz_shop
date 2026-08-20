import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { CheckCircle2, ArrowRight } from 'lucide-react';

/* ─── Tiny helper: money ─── */
const money = (n: number) =>
  n.toLocaleString('sr-RS') + ' RSD';

/* ─── Badge chip ─── */
const Badge: React.FC<{ label: string; variant?: 'red' | 'dark' | 'grey' }> = ({
  label,
  variant = 'dark',
}) => {
  const bg = variant === 'red' ? '#E10600' : variant === 'grey' ? '#555' : '#090909';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: 25,
        padding: '0 9px',
        fontSize: 9,
        fontWeight: 900,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#fff',
        background: bg,
      }}
    >
      {label}
    </span>
  );
};

/* ─── Product card ─── */
const ProductCard: React.FC<{ product: (typeof PRODUCTS)[number] }> = ({ product }) => {
  const { viewProduct, addToCart } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid #D4D4D0',
        position: 'relative',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 14px 30px rgba(0,0,0,.07)' : 'none',
        transition: 'transform 140ms ease, box-shadow 140ms ease',
      }}
    >
      {/* Image */}
      <div
        onClick={() => viewProduct(product)}
        style={{
          aspectRatio: '1',
          background: '#E7E7E3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 360ms cubic-bezier(.2,.8,.2,1)',
          }}
        />

        {/* Badges */}
        <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6, zIndex: 2 }}>
          {product.badge === '-33%' && <Badge label="Sale" variant="red" />}
          {product.badge === 'RASPRODATO' && <Badge label="Rasprodato" variant="grey" />}
          {product.badge === 'LIMITED' && <Badge label="Limited" variant="dark" />}
          {!product.badge && !product.originalPrice && <Badge label="Novo" variant="dark" />}
        </div>

        {/* Quick add on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1, product.sizes?.[0] || 'M');
          }}
          style={{
            position: 'absolute',
            left: 10, right: 10, bottom: 10,
            border: 0,
            background: '#000',
            color: '#fff',
            minHeight: 40,
            cursor: 'pointer',
            fontSize: 9,
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            fontWeight: 900,
            transform: hovered ? 'translateY(0)' : 'translateY(55px)',
            transition: 'transform 220ms ease',
          }}
        >
          Dodaj u korpu
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: 15 }}>
        <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E10600' }}>
          {product.category}
        </div>
        <div style={{ fontSize: 14, fontWeight: 800, margin: '6px 0 8px', minHeight: 42, lineHeight: 1.3 }}>
          {product.name}
        </div>
        <div style={{ fontWeight: 900 }}>
          {product.originalPrice && (
            <span style={{ fontSize: 12, color: '#6F6F6A', textDecoration: 'line-through', marginRight: 7, fontWeight: 500 }}>
              {money(product.originalPrice)}
            </span>
          )}
          {money(product.price)}
        </div>
      </div>
    </article>
  );
};

/* ═══════════════════════════════════════════
   HOMEPAGE
═══════════════════════════════════════════ */
export const HomePage: React.FC = () => {
  const { setActivePage, viewProduct } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const featured = PRODUCTS.filter((p) => !p.isSoldOut).slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section
        style={{
          minHeight: 720,
          background: '#fff',
          display: 'grid',
          gridTemplateColumns: '1.04fr 0.96fr',
          overflow: 'hidden',
        }}
        className="hero-split"
      >
        {/* Left copy */}
        <div
          style={{
            padding: 'clamp(60px, 8vh, 86px) 40px clamp(60px, 8vh, 86px) max(32px, calc((100vw - 1360px)/2 + 32px))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className="eyebrow">Stick / Print / Wear / Repeat</div>
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              textTransform: 'uppercase',
              fontSize: 'clamp(66px, 7.4vw, 112px)',
              lineHeight: 0.88,
              maxWidth: 800,
              marginTop: 18,
            }}
          >
            Stikeri, majice i branding{' '}
            <span style={{ color: '#E10600' }}>za one koji ostavljaju trag.</span>
          </h1>

          <p
            style={{
              maxWidth: 540,
              color: '#4A4A47',
              fontSize: 17,
              lineHeight: 1.7,
              margin: '24px 0 30px',
            }}
          >
            Originalni sticker packovi, streetwear komadi i custom print za ljude, ekipe i firme koje ne žele generičan izgled.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => setActivePage('shop')}
              style={{
                border: 0, borderRadius: 0, minHeight: 48, padding: '0 24px',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.09em',
                fontSize: 11, fontWeight: 900,
                background: '#E10600', color: '#fff',
                transition: 'background 140ms ease, transform 140ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#090909'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#E10600'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Kupi odmah →
            </button>
            <button
              onClick={() => setActivePage('b2b')}
              style={{
                border: '1px solid #090909', borderRadius: 0, minHeight: 48, padding: '0 24px',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.09em',
                fontSize: 11, fontWeight: 900,
                background: 'transparent', color: '#090909',
                transition: 'background 140ms ease, color 140ms ease, transform 140ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#090909'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#090909'; }}
            >
              Za firme
            </button>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap', marginTop: 52 }}>
            {[
              { val: '100+', label: 'Dizajna' },
              { val: '4.9/5', label: 'Ocena' },
              { val: '1–3 dana', label: 'Isporuka' },
            ].map(({ val, label }) => (
              <div key={label}>
                <b style={{ display: 'block', fontSize: 18, fontWeight: 900 }}>{val}</b>
                <small style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 9, color: '#6F6F6A', marginTop: 4 }}>
                  {label}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Right art panel */}
        <div className="hero-art-panel">
          {/* Floating tags */}
          <div className="hero-tag" style={{ top: '10%', right: '7%', transform: 'rotate(-7deg)' }}>
            NEW DROP
          </div>
          <div className="hero-tag" style={{ left: '6%', bottom: '13%', transform: 'rotate(8deg)' }}>
            STAY WILD
          </div>
          <div
            className="hero-tag"
            style={{
              right: '13%', bottom: '9%', transform: 'rotate(-3deg)',
              background: '#E10600', color: '#fff',
              boxShadow: '7px 7px 0 #fff',
            }}
          >
            #006
          </div>

          {/* Product image center */}
          <div
            style={{
              position: 'absolute', inset: '4%', zIndex: 2,
              display: 'grid', placeItems: 'center',
            }}
          >
            <img
              src={PRODUCTS[2]?.images[0] || PRODUCTS[0].images[0]}
              alt="Hero product"
              style={{
                width: '72%', height: '72%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.6))',
                position: 'relative', zIndex: 2,
              }}
            />
          </div>
        </div>
      </section>

      {/* ══ 2. TRUST STRIP ══════════════════════════════════ */}
      <section style={{ background: '#000', color: '#fff' }}>
        <div className="trust-grid">
          {[
            { n: '01', title: 'Originalni dizajni', sub: 'STRIKERZ vizuelni potpis' },
            { n: '02', title: 'Brza kupovina', sub: 'Jasan shop i checkout' },
            { n: '03', title: 'Streetwear + stickers', sub: 'Jedan prepoznatljiv sistem' },
            { n: '04', title: 'Custom print', sub: 'Za ekipe i firme' },
          ].map(({ n, title, sub }) => (
            <div key={n} className="trust-item">
              <div
                style={{
                  fontFamily: "'Anton', sans-serif",
                  color: '#E10600', fontSize: 27,
                  lineHeight: 1, flexShrink: 0,
                }}
              >
                {n}
              </div>
              <div>
                <b style={{ display: 'block', fontSize: 10, letterSpacing: '0.11em', textTransform: 'uppercase' }}>
                  {title}
                </b>
                <small style={{ display: 'block', color: '#888', marginTop: 3, fontSize: 10 }}>
                  {sub}
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. CATEGORIES ════════════════════════════════════ */}
      <section style={{ padding: '96px 0' }}>
        <div style={{ width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto' }}>
          <div className="eyebrow">Kategorije</div>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
              fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 0.94, marginTop: 14,
            }}
          >
            Izaberi svoj teren.
          </h2>
          <p style={{ maxWidth: 680, color: '#4A4A47', marginTop: 18, lineHeight: 1.75 }}>
            Streetwear i sticker kultura, ali kupovina ostaje jasna. Svaka kategorija ima svoj karakter.
          </p>

          <div className="category-wall">
            {/* Big — Stikeri */}
            <article
              className="cat-tile big"
              style={{ background: '#E10600' }}
              onClick={() => setActivePage('shop')}
            >
              <img
                src={PRODUCTS.find(p => p.category === 'stikeri')?.images[0] || PRODUCTS[1].images[0]}
                alt="Stikeri"
                className="cat-img"
                style={{ objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.6 }}
              />
              <div className="cat-info">
                <h3>Stikeri</h3>
                <p>Sticker packovi, pojedinačni dizajni i custom nalepnice →</p>
              </div>
            </article>

            {/* Majice */}
            <article
              className="cat-tile"
              style={{ background: '#111' }}
              onClick={() => setActivePage('shop')}
            >
              <img
                src={PRODUCTS.find(p => p.category === 'majice')?.images[0] || PRODUCTS[0].images[0]}
                alt="Majice"
                className="cat-img"
                style={{ objectFit: 'cover', opacity: 0.6 }}
              />
              <div className="cat-info">
                <h3>Majice</h3>
                <p>Logo tees, drop grafike i clean streetwear komadi →</p>
              </div>
            </article>

            {/* Duksevi */}
            <article
              className="cat-tile"
              style={{ background: '#2a2a2a' }}
              onClick={() => setActivePage('shop')}
            >
              <img
                src={PRODUCTS.find(p => p.category === 'duksevi')?.images[0] || PRODUCTS[2].images[0]}
                alt="Duksevi"
                className="cat-img"
                style={{ objectFit: 'cover', opacity: 0.5 }}
              />
              <div className="cat-info">
                <h3>Duksevi</h3>
                <p>Heavyweight hoodie komadi i limited dropovi →</p>
              </div>
            </article>

            {/* B2B — wide */}
            <article
              className="cat-tile wide"
              style={{ background: '#111' }}
              onClick={() => setActivePage('b2b')}
            >
              <div
                style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif", fontSize: 68,
                    color: '#fff', border: '7px solid #E10600',
                    padding: '12px 20px', transform: 'rotate(-7deg)',
                    textTransform: 'uppercase',
                  }}
                >
                  YOUR LOGO
                </span>
              </div>
              <div className="cat-info">
                <h3>Za firme</h3>
                <p>Stikeri, tekstil, window graphics i promo materijal →</p>
              </div>
            </article>

            {/* Kačketi */}
            <article
              className="cat-tile"
              style={{ background: '#dededb' }}
              onClick={() => setActivePage('shop')}
            >
              <img
                src={PRODUCTS.find(p => p.category === 'kacketi')?.images[0] || PRODUCTS[3].images[0]}
                alt="Kačketi"
                className="cat-img"
                style={{ objectFit: 'cover', opacity: 0.75, mixBlendMode: 'multiply' }}
              />
              <div className="cat-info">
                <h3>Kačketi</h3>
                <p>Snapback, cap i embroidered modeli →</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══ 4. BESTSELLERS ═══════════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 30, alignItems: 'flex-end', marginBottom: 36 }}>
            <div>
              <div className="eyebrow">Najtraženije</div>
              <h2
                style={{
                  fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
                  fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 0.94, marginTop: 14,
                }}
              >
                Bestselleri.
              </h2>
            </div>
            <button
              onClick={() => setActivePage('shop')}
              style={{
                border: '1px solid #090909', borderRadius: 0, minHeight: 48, padding: '0 24px',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.09em',
                fontSize: 11, fontWeight: 900, background: 'transparent', color: '#090909',
                whiteSpace: 'nowrap',
                transition: 'background 140ms ease, color 140ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#090909'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#090909'; }}
            >
              Pogledaj sve →
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 18,
            }}
            className="bestsellers-grid"
          >
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. PROMO BANNERS ═════════════════════════════════ */}
      <section style={{ padding: '0 0 96px' }}>
        <div style={{ width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto' }}>
          <div className="promo-grid">
            {[
              { bg: '#E10600', title: 'New drop', desc: 'Najnoviji STRIKERZ komadi.', cta: 'Pogledaj drop', page: 'shop' as const },
              { bg: '#000', title: 'Sale', desc: 'Odabrani komadi po sniženim cenama.', cta: 'Uhvati popust', page: 'shop' as const },
              { bg: '#343434', title: 'Custom print', desc: 'Tvoj logo. Tvoj dizajn. Tvoja ekipa.', cta: 'Pošalji upit', page: 'b2b' as const },
            ].map(({ bg, title, desc, cta, page }) => (
              <div
                key={title}
                className="promo-tile"
                style={{ background: bg }}
                onClick={() => setActivePage(page)}
              >
                <h3
                  style={{
                    fontFamily: "'Anton', sans-serif", fontSize: 48,
                    textTransform: 'uppercase', lineHeight: 0.94,
                    position: 'relative', margin: 0,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 12, color: '#ddd', marginTop: 9, position: 'relative' }}>
                  {desc}
                </p>
                <span
                  style={{
                    position: 'relative', marginTop: 18, width: 'max-content',
                    borderBottom: '2px solid currentColor',
                    fontSize: 9, fontWeight: 900, letterSpacing: '0.11em', textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {cta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. DROP FEATURE ══════════════════════════════════ */}
      <section style={{ padding: '0 0 96px' }}>
        <div style={{ width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              background: '#fff',
              border: '1px solid #D4D4D0',
            }}
            className="drop-feature-grid"
          >
            {/* Art */}
            <div className="drop-art-panel">
              <img
                src={PRODUCTS[2]?.images[0] || PRODUCTS[0].images[0]}
                alt="Drop product"
                style={{
                  width: '60%', height: '70%',
                  objectFit: 'contain',
                  position: 'relative', zIndex: 2,
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,.5))',
                }}
              />
            </div>

            {/* Copy */}
            <div
              style={{
                padding: 'clamp(40px, 5vw, 68px)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'ui-monospace, monospace', fontSize: 10,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#6F6F6A', marginBottom: 12,
                }}
              >
                DROP / LIMITED / AUG 2026
              </div>
              <div className="eyebrow">Editorial product feature</div>
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 'clamp(42px, 5vw, 62px)',
                  lineHeight: 0.95, textTransform: 'uppercase', margin: '14px 0 0',
                }}
              >
                {PRODUCTS[2]?.name || 'CORE HOODIE WHT'}.
              </h3>
              <p style={{ color: '#4A4A47', margin: '18px 0 26px', maxWidth: 500, lineHeight: 1.75 }}>
                {PRODUCTS[2]?.description?.slice(0, 120) || 'Heavyweight hoodie komad za ljude koji ne kompromituju.'}&hellip;
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button
                  onClick={() => viewProduct(PRODUCTS[2] || PRODUCTS[0])}
                  style={{
                    border: 0, borderRadius: 0, minHeight: 48, padding: '0 24px',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.09em',
                    fontSize: 11, fontWeight: 900, background: '#E10600', color: '#fff',
                    transition: 'background 140ms ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#090909')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#E10600')}
                >
                  Pogledaj proizvod
                </button>
                <button
                  onClick={() => setActivePage('shop')}
                  style={{
                    border: '1px solid #090909', borderRadius: 0, minHeight: 48, padding: '0 24px',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.09em',
                    fontSize: 11, fontWeight: 900, background: 'transparent', color: '#090909',
                    transition: 'background 140ms ease, color 140ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#090909'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#090909'; }}
                >
                  Svi duksevi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. B2B SPLIT ═════════════════════════════════════ */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: '#000',
          color: '#fff',
        }}
        className="b2b-split-grid"
      >
        {/* Copy */}
        <div
          style={{
            padding: 'clamp(60px, 8vh, 82px) clamp(32px, 4vw, 64px)',
          }}
        >
          <div className="eyebrow" style={{ color: '#E10600' }}>Za firme / B2B</div>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
              fontSize: 'clamp(54px, 6vw, 92px)', lineHeight: 0.9,
              marginTop: 15,
            }}
          >
            Brending koji se{' '}
            <span style={{ color: '#E10600' }}>vidi.</span>
          </h2>
          <p style={{ color: '#aaa', maxWidth: 560, lineHeight: 1.75, margin: '24px 0 30px' }}>
            Custom stikeri, tekstil, QR nalepnice, izlozi i promo materijal. STRIKERZ B2B stranica je zaseban prodajni kanal, ne samo mali link u footeru.
          </p>
          <button
            onClick={() => setActivePage('b2b')}
            style={{
              border: 0, borderRadius: 0, minHeight: 48, padding: '0 24px',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.09em',
              fontSize: 11, fontWeight: 900, background: '#E10600', color: '#fff',
              transition: 'background 140ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#fff', e.currentTarget.style.color = '#000')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#E10600', e.currentTarget.style.color = '#fff')}
          >
            Zatraži ponudu →
          </button>
        </div>

        {/* Art */}
        <div
          style={{
            background: '#E10600',
            minHeight: 480,
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              fontFamily: "'Anton', sans-serif", fontSize: 160,
              color: 'rgba(255,255,255,.1)', transform: 'rotate(-13deg)',
              whiteSpace: 'nowrap', pointerEvents: 'none',
            }}
          >
            ZA FIRME
          </div>
          <img
            src={PRODUCTS[0].images[0]}
            alt="B2B"
            style={{
              width: '65%', height: '65%',
              objectFit: 'contain',
              position: 'relative', zIndex: 2,
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,.3))',
            }}
          />
        </div>
      </section>

      {/* ══ 8. REVIEWS ═══════════════════════════════════════ */}
      <section style={{ padding: '96px 0' }}>
        <div style={{ width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto' }}>
          <div className="eyebrow">Recenzije / trust</div>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
              fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 0.94, marginTop: 14,
            }}
          >
            Kažu da ostavljamo trag.
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 30 }}
            className="review-grid-resp"
          >
            {[
              { text: 'Sticker pack izgleda jako i uživo, ne samo na ekranu. Print je čist, a pakovanje ima karakter.', author: '— Kupac 01' },
              { text: 'Hoodie deo sajta mi je dao dovoljno informacija da odmah izaberem veličinu i dodam u korpu.', author: '— Kupac 02' },
              { text: 'B2B deo izgleda kao ozbiljna ponuda, a ne kao generična kontakt forma zakačena na kraj shopa.', author: '— Firma klijent' },
            ].map(({ text, author }) => (
              <div key={author} className="review-card">
                <div className="quote-mark">"</div>
                <p style={{ color: '#4A4A47', margin: '18px 0', lineHeight: 1.75 }}>{text}</p>
                <b style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{author}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. COMMUNITY GALLERY ═════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#090909', color: '#fff' }}>
        <div style={{ width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto' }}>
          <div className="eyebrow" style={{ color: '#E10600' }}>Community / gallery</div>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
              fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 0.94, marginTop: 14,
            }}
          >
            #STRIKERZ
          </h2>
          <p style={{ maxWidth: 680, color: '#aaa', marginTop: 18, lineHeight: 1.75 }}>
            Ovde dolaze realne slike: sticker wall, print radionica, customer builds, pakovanje, streetwear i B2B radovi.
          </p>

          <div className="gallery-grid">
            {[
              { bg: '#111', label: 'Stick' },
              { bg: '#E10600', label: 'Drop' },
              { bg: '#d8d8d4', label: 'Print', dark: true },
              { bg: '#1a1a1a', label: 'Wild' },
              { bg: '#E10600', label: 'Raw' },
              { bg: '#222', label: '006' },
            ].map(({ bg, label, dark }) => (
              <div
                key={label}
                className="gallery-item"
                style={{ background: bg, cursor: 'pointer' }}
              >
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    textTransform: 'uppercase', fontSize: 28,
                    color: dark ? '#000' : '#fff',
                    transform: 'rotate(-10deg)',
                    opacity: 0.8,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10. NEWSLETTER ════════════════════════════════════ */}
      <section style={{ background: '#E10600', color: '#fff', padding: '58px 0' }}>
        <div
          style={{
            width: 'min(1360px, calc(100% - 64px))', marginInline: 'auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
          }}
          className="newsletter-grid"
        >
          <div>
            <div className="eyebrow" style={{ color: '#fff' }}>Newsletter</div>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
                fontSize: 50, lineHeight: 0.95, marginTop: 14,
              }}
            >
              Dropovi, akcije i novi dizajni.
            </h2>
          </div>

          {isSubscribed ? (
            <div
              style={{
                background: '#fff', border: '2px solid #090909',
                padding: 24, display: 'flex', alignItems: 'center', gap: 12,
              }}
            >
              <CheckCircle2 style={{ width: 32, height: 32, color: '#1EA85B', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 20, textTransform: 'uppercase', color: '#090909', margin: 0 }}>
                  Hvala na prijavi!
                </p>
                <p style={{ fontSize: 10, color: '#6F6F6A', margin: '4px 0 0', fontFamily: 'monospace' }}>
                  Kod za 10% popusta: <strong>STRIKERZ10</strong>
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              style={{ display: 'flex' }}
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Tvoj email"
                required
                style={{
                  flex: 1, minWidth: 0, border: 0,
                  padding: 15, fontSize: 14, outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
              <button
                type="submit"
                style={{
                  border: 0, background: '#000', color: '#fff',
                  padding: '0 24px', fontSize: 9, textTransform: 'uppercase',
                  fontWeight: 900, cursor: 'pointer', letterSpacing: '0.09em',
                  transition: 'background 140ms ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#090909')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
              >
                Prijavi se
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
