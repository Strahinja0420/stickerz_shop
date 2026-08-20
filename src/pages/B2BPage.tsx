import React, { useState } from 'react';
import { Layers, Sparkles, Shirt, Box, PackageCheck, Send, CheckCircle2, Upload, FileText, ArrowRight } from 'lucide-react';

export const B2BPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: 'stikeri',
    quantity: '100-500',
    notes: '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const services = [
    {
      title: 'CUSTOM STIKERI',
      desc: 'Vodootporni die-cut stikeri od teškog vinila sa UV lakom. Otporni na sve vremenske uslove i grebanje. Idealno za pakovanja i branding.',
      specs: ['Min. 50 komada', 'Die-cut ili Kiss-cut', 'Mat ili Sjaj laminacija', 'UV Zaštita'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYHkr8bk4g5QErd7AAAEYZYgTPa8jTJGN8i4YJ8YaedqYOWPoADJgRSXN6AT7RWi3LCuNrjr6-fX3K5S558D9VSZDR4iG-CtzpQlXnBGr8DaZLNsdqpX2QOwp4idU1ClulfBljnSbRnk-eQfn45h9ENPJq1kwnfLZ1HN143R0wC7WAdWxukV0NC7yNWe_QiqlUQqB5Sqg7uDJ8wXwWg9mpPmFfL_V_NLEpxF0hCl2TqtEu04QxKEW_'
    },
    {
      title: 'TEKSTIL & MERCH',
      desc: 'Sito štampa visokog kvaliteta, reljefni 3D print i mašinski vez na 240gsm organskim majicama i 400gsm duksevima.',
      specs: ['Min. 20 komada', 'Sito štampa do 8 boja', 'Visokokvalitetni vez', 'Custom unutrašnje etikete'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBctFr5n1wNwqdI0fBFkQIcsY3hLIaZ6v4aakZJcovWIgYKtRt3b5Gp6OFfiu1XRCER53F3BQA-aI5-2p_OQFxB7ciQw0bJnEMo3VpHtq88f5o4-MtBfke4AzxaSTKYZ4fwbp52rDNh8IbMMV7XAddsQCbMPEKec9YKlLtcyhwNuBGkJcaEJb4CiD-iWPmR97koO8uixTUPl9gWIFm5iUCIRMb4H4345utL6f-22CjNg_y754_jLWuK'
    },
    {
      title: 'KOMPLETAN BRANDING',
      desc: 'Kompletna izrada identiteta za brendove: kartonske kutije, hang tagovi, brendirane papirne trake i promotivne kartice.',
      specs: ['Custom kutije i pakovanja', 'Hang tagovi sa kanapom', 'Brendirane trake', 'Komercijalni popusti'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLBRjF6yUCStx8UWx8YiuSDpaGO4V2enyJpGbBMcc9pNKd78zz1pbe1cVWivn3Gbe8rEDWFMRIi6jsNqr2uonjvQvQc9Vy9tVjly5-d96zMn7vC-dJ701sAFscYGR9UiTs1fxMaIskk4Mb4GGX84HwEvJFL0MD-zYYmY35Rm9tDpixeIeVF7U85Nu-h6gebm04xVK6bG52L8LMFwTx43N7E47N32b2TiFfHA47CC2oDZmnXaRFqMQy'
    },
    {
      title: 'PROMO MATERIJALI',
      desc: 'Platnene tote torbe od teškog pamuka, kačketi sa 3D vezom, privesci za ključeve i specijalni promo setovi za događaje.',
      specs: ['Eko tote torbe 380gsm', 'Strukturirani 6-panel kačketi', 'Privesci i bedževi', 'Pakovanje po komadu'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO5c_cdaQMy_7a17QZMRHJTpGYwYJI1KnV5bGbByRi07ifZpgkrYBcuws9hgp5ehJWVrK2dyKXrFjeUmg99l9oVRLROTs80t1BYs1e_Z4Lqo3VsqU7XU6m7T_546YLUVT32iPFpc15mRbPuvGj0geRz_d7IWWhsSy9-qagDl6jCeaPMt0i6s6dNlHkxs9zbX8efGml2-J7vlw15ipby_2rkWtjc21WJn15_Jaj5k4rM8pwo-Bp-yJk'
    }
  ];

  const steps = [
    { num: '01', title: 'UPIT I DIZAJN', desc: 'Pošaljite nam ideju, vektor fajl (AI, PDF, SVG) ili skicu.' },
    { num: '02', title: 'MOCKUP I PONUDA', desc: 'U roku od 24h dobijate vizuelni prikaz i tačnu specifikaciju cene.' },
    { num: '03', title: 'ODOBRENJE', desc: 'Nakon vaše potvrde započinjemo pripremu za štampu.' },
    { num: '04', title: 'ŠTAMPA I KONTROLA', desc: 'Precizna izrada u našoj beogradskoj radionici uz kontrolu svakog komada.' },
    { num: '05', title: 'ISPORUKA', desc: 'Pakovanje i brza kurirska dostava direktno na vašu adresu.' },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section - Exact match to design */}
      <section className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[680px] bg-[#151515] border-b-2 border-[#151515] overflow-hidden flex items-center">
        {/* Tiled Workshop Background Grid with Dark Overlay */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-0.5 opacity-30 select-none pointer-events-none">
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

        {/* Dark Vignette & Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/95 via-[#151515]/80 to-[#151515]/60 pointer-events-none" />

        {/* Content Container with Left Red Accent Bar */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="border-l-4 border-[#b30400] pl-4 sm:pl-5 md:pl-6 space-y-4 max-w-4xl">
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.05] m-0">
              B2B REŠENJA ZA VAŠ <br />
              BIZNIS
            </h1>

            <p className="text-xs sm:text-[13px] md:text-sm text-white/80 font-normal leading-relaxed max-w-xl pt-1">
              Specijalizovana izrada stikera, premijum tekstil print i brending materijali dizajnirani za maksimalan udar na ulici i u poslovanju.
            </p>

            <div className="pt-2">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block font-mono-tech font-bold text-xs uppercase tracking-widest text-white hover:text-[#b30400] transition-colors py-1.5 cursor-pointer"
              >
                ZATRAŽI PONUDU
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Services Grid */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-tech text-xs text-[#b30400] font-bold uppercase tracking-widest block mb-2">
            ŠTA NUDIMO
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#151515]">
            USLUGE ZA PRAVNA LICA
          </h2>
          <p className="text-xs md:text-sm text-[#6F6F6A] mt-2">
            Svaki proizvod radimo sa pažnjom posvećenom detaljima, koristeći premijum uvozne materijale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#151515] p-6 md:p-8 brutalist-shadow flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] bg-[#E7E7E3] border border-[#D4D4D0] overflow-hidden mb-6">
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-anton text-3xl text-[#151515] uppercase tracking-tight mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#4A4A47] leading-relaxed mb-6 font-sans">
                  {srv.desc}
                </p>
              </div>

              <div className="border-t border-[#D4D4D0] pt-4">
                <div className="grid grid-cols-2 gap-2 font-mono-tech text-[11px] text-[#151515]">
                  {srv.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#b30400]"></span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Work Process Steps */}
      <section className="bg-[#E7E7E3] px-4 md:px-12 py-16 md:py-20 border-y-2 border-[#151515]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono-tech text-xs text-[#b30400] font-bold uppercase tracking-widest block mb-1">
              JASAN I BRZ PROCES
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#151515]">
              KAKO FUNKCIbrowserONISE SARADNJA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="bg-white border-2 border-[#151515] p-5 brutalist-shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-anton text-4xl text-[#b30400] block mb-2">{s.num}</span>
                  <h4 className="font-bold text-xs uppercase text-[#151515] mb-2">{s.title}</h4>
                  <p className="text-xs text-[#6F6F6A] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Quote Form */}
      <section id="quote-form" className="px-4 md:px-12 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-[#151515] p-6 md:p-12 brutalist-shadow">
          <div className="border-b-2 border-[#151515] pb-6 mb-8 text-center">
            <span className="font-mono-tech text-xs text-[#b30400] font-bold uppercase tracking-widest block mb-1">
              B2B FORMULAR
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase text-[#151515]">
              ZATRAŽITE BESPLATNU PONUDU
            </h2>
            <p className="font-mono-tech text-xs text-[#6F6F6A] mt-2">
              Odgovor i digitalni mockup šaljemo u roku od 24 radna sata.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#1EA85B]/10 border-2 border-[#1EA85B] p-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#1EA85B] mx-auto" />
              <h3 className="font-anton text-3xl text-[#151515] uppercase">ZAHTEV JE USPEŠNO POSLAT!</h3>
              <p className="text-xs text-[#4A4A47] max-w-md mx-auto">
                Hvala vam na interesovanju. Naš tim će pregledati vaše zahteve i poslati detaljnu ponudu sa cenom i rokovima na <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUploadedFile(null);
                }}
                className="mt-4 bg-[#151515] text-white px-6 py-2.5 text-xs font-bold uppercase hover:bg-[#b30400]"
              >
                POŠALJI JOŠ JEDAN ZAHTEV
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                    NAZIV FIRME / BRENDA *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="npr. Red Dot Studio d.o.o."
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                    KONTAKT OSOBA *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Ime i prezime"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                    SLUŽBENI EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="primer@firma.rs"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                    TELEFON
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+381 60 ..."
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                    VRSTA USLUGE *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full brutalist-input p-3 border text-xs cursor-pointer font-bold"
                  >
                    <option value="stikeri">Custom Stikeri (Vinil)</option>
                    <option value="tekstil">Majice & Duksevi (Tekstil Print)</option>
                    <option value="branding">Kompletan Branding & Pakovanja</option>
                    <option value="promo">Promo Materijali (Torbe, Kačketi)</option>
                    <option value="ostalo">Kombinovano / Ostalo</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                    OKVIRNA KOLIČINA *
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full brutalist-input p-3 border text-xs cursor-pointer font-bold"
                  >
                    <option value="50-100">50 - 100 kom</option>
                    <option value="100-300">100 - 300 kom</option>
                    <option value="300-500">300 - 500 kom</option>
                    <option value="500-1000">500 - 1.000 kom</option>
                    <option value="1000+">Preko 1.000 kom</option>
                  </select>
                </div>
              </div>

              {/* File Upload Box */}
              <div>
                <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                  PRILOŽITE DIZAJN ILI LOGO (OPCIONO)
                </label>
                <div className="border-2 border-dashed border-[#D4D4D0] p-6 text-center bg-[#F5F5F2] hover:border-[#151515] transition-colors relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.ai,.eps,.png,.jpg,.svg,.zip"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {uploadedFile ? (
                    <div className="flex items-center justify-center gap-2 text-xs font-mono-tech text-[#151515]">
                      <FileText className="w-5 h-5 text-[#b30400]" />
                      <span>Izabrani fajl: <strong>{uploadedFile.name}</strong> ({Math.round(uploadedFile.size / 1024)} KB)</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-6 h-6 text-[#6F6F6A] mx-auto mb-2" />
                      <p className="font-mono-tech text-xs font-bold text-[#151515]">
                        PREVUCITE FAJL OVDE ILI KLIKNITE ZA IZBOR
                      </p>
                      <p className="text-[10px] font-mono-tech text-[#6F6F6A]">
                        Podržani formati: AI, PDF, EPS, SVG, PNG, JPG (Maks. 25MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-2">
                  DODATNE NAPOMENE / SPECIFIKACIJA
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Navedite željene dimenzije, pozicije štampe, željeni rok izrade..."
                  className="w-full brutalist-input p-3 border text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#b30400] text-white hover:bg-[#151515] py-4 px-8 font-bold text-sm uppercase tracking-wider transition-colors border-2 border-[#b30400] hover:border-[#151515] flex items-center justify-center gap-2 cursor-pointer brutalist-shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SLANJE U TOKU...</span>
                ) : (
                  <>
                    <span>POŠALJI ZAHTEV ZA PONUDU</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
