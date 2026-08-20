import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    queryType: 'general',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 800);
  };

  const faqs = [
    {
      q: 'KOLIKO TRAJE ISPORUKA?',
      a: 'Isporuka za standardne artikle sa lagera traje 1 do 2 radna dana od momenta potvrde porudžbine. Kurir vam šalje SMS sa brojem pošiljke.'
    },
    {
      q: 'KAKO MOGU DA PLATIM PORUDŽBINU?',
      a: 'Plaćanje je moguće pouzećem (gotovinom prilikom preuzimanja od kurira), platnim karticama online, putem IPS QR koda ili uplatom na račun (za pravna lica).'
    },
    {
      q: 'ŠTA AKO MI VELIČINA MAJICE ILI DUKSA NE ODGOVARA?',
      a: 'Nema problema! Imate rok od 14 dana da nas kontaktirate i besplatno zamenite artikal za odgovarajuću veličinu, pod uslovom da proizvod nije nošen i oštećen.'
    },
    {
      q: 'DA LI RADITE POJEDINAČNE CUSTOM STIKERE?',
      a: 'Za custom štampu stikera minimalna količina je 50 komada po dizajnu zbog postavke mašina i noževa za die-cut obrezivanje.'
    }
  ];

  return (
    <div className="w-full px-4 md:px-12 py-8 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-[#151515] pb-6 mb-12">
        <div className="font-mono-tech text-xs text-[#6F6F6A] uppercase mb-2 flex items-center gap-2">
          <span>POČETNA</span>
          <span>/</span>
          <span className="text-[#151515] font-bold">KONTAKT</span>
        </div>
        <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#151515] m-0">
          KONTAKT // JAVITE NAM SE
        </h1>
        <p className="text-xs font-mono-tech text-[#6F6F6A] mt-2">
          OTVORENI SMO ZA SVA VAŠA PITANJA, PREDLOGE I SARADNJE.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact Cards & Studio Photo */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-[#151515] p-5 brutalist-shadow-sm space-y-2">
              <Mail className="w-5 h-5 text-[#b30400]" />
              <h3 className="font-bold text-xs uppercase text-[#151515]">EMAIL PODRŠKA</h3>
              <p className="font-mono-tech text-xs text-[#6F6F6A]">info@strikerz.rs</p>
              <p className="font-mono-tech text-[10px] text-[#b30400] font-bold">B2B: b2b@strikerz.rs</p>
            </div>

            <div className="bg-white border-2 border-[#151515] p-5 brutalist-shadow-sm space-y-2">
              <Phone className="w-5 h-5 text-[#b30400]" />
              <h3 className="font-bold text-xs uppercase text-[#151515]">TELEFON</h3>
              <p className="font-mono-tech text-xs text-[#6F6F6A]">+381 60 123 45 67</p>
              <p className="font-mono-tech text-[10px] text-[#6F6F6A]">Viber / WhatsApp</p>
            </div>

            <div className="bg-white border-2 border-[#151515] p-5 brutalist-shadow-sm space-y-2">
              <Clock className="w-5 h-5 text-[#b30400]" />
              <h3 className="font-bold text-xs uppercase text-[#151515]">RADNO VREME</h3>
              <p className="font-mono-tech text-xs text-[#6F6F6A]">Pon - Pet: 09:00 - 17:00</p>
              <p className="font-mono-tech text-[10px] text-[#6F6F6A]">Subota: 10:00 - 14:00</p>
            </div>

            <div className="bg-white border-2 border-[#151515] p-5 brutalist-shadow-sm space-y-2">
              <MapPin className="w-5 h-5 text-[#b30400]" />
              <h3 className="font-bold text-xs uppercase text-[#151515]">STUDIO & RADIONICA</h3>
              <p className="font-mono-tech text-xs text-[#6F6F6A]">Bulevar Umetnosti 12</p>
              <p className="font-mono-tech text-[10px] text-[#6F6F6A]">11000 Beograd, Srbija</p>
            </div>
          </div>

          {/* Studio Image */}
          <div className="relative border-2 border-[#151515] bg-[#E7E7E3] overflow-hidden aspect-[16/10] brutalist-shadow">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-i35ShFZew5PZ9RPbw-CCrSzpcf0r053zxscf9IPXUkQ4znxCznUpFTRqPwGTW7gQ_3t3ectTprwyMqtvgQcoEWUseLtfwEVdIL5iezsgijIQFjxl1srOttD1QecRV4v7MI2bl7KDSHZar6nk3A626McZaajPWjRQVYQrjFFHctzJAp334cLF7Ta_g8MAXts93aKpaxMrLMsPtJXVJadUeRaeTi4xd2SfXi90Z-NucXlsxQ3ns-FW"
              alt="Studio STRIKERZ"
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute top-3 right-3 bg-[#b30400] text-white font-mono-tech text-[10px] font-bold px-2 py-1 uppercase shadow-md">
              STRIKE FAST.
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form & FAQ */}
        <div className="lg:col-span-7 space-y-12">
          <div className="bg-white border-2 border-[#151515] p-6 md:p-8 brutalist-shadow">
            <h2 className="font-anton text-2xl md:text-3xl text-[#151515] uppercase tracking-tight mb-2">
              POŠALJITE NAM PORUKU
            </h2>
            <p className="font-mono-tech text-xs text-[#6F6F6A] mb-6">
              Odgovaramo u roku od par sati u toku radnog vremena.
            </p>

            {isSent ? (
              <div className="bg-[#1EA85B]/10 border-2 border-[#1EA85B] p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#1EA85B] mx-auto" />
                <h3 className="font-anton text-2xl uppercase text-[#151515]">PORUKA JE USPEŠNO POSLATA!</h3>
                <p className="text-xs text-[#4A4A47]">
                  Hvala vam što ste nas kontaktirali. Javićemo vam se uskoro na <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-3 bg-[#151515] text-white px-5 py-2 text-xs font-bold uppercase"
                >
                  NOVA PORUKA
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                      IME I PREZIME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Petar Petrović"
                      className="w-full brutalist-input p-3 border text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                      EMAIL ADRESA *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="petar@gmail.com"
                      className="w-full brutalist-input p-3 border text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                      TIP UPITA *
                    </label>
                    <select
                      value={formData.queryType}
                      onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                      className="w-full brutalist-input p-3 border text-xs cursor-pointer font-bold"
                    >
                      <option value="general">Opšti upit</option>
                      <option value="order">Status postojeće porudžbine</option>
                      <option value="exchange">Zamena veličine / Povrat</option>
                      <option value="collab">Umetnička saradnja</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                      BROJ PORUDŽBINE (OPCIONO)
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      placeholder="#STK-8492"
                      className="w-full brutalist-input p-3 border text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs uppercase font-bold text-[#151515] mb-1.5">
                    VAŠA PORUKA *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Kako možemo da vam pomognemo?"
                    className="w-full brutalist-input p-3 border text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#b30400] text-white hover:bg-[#151515] py-3.5 px-6 font-bold text-xs uppercase tracking-wider transition-colors border border-[#b30400] hover:border-[#151515] flex items-center justify-center gap-2 cursor-pointer brutalist-shadow-sm disabled:opacity-50"
                >
                  {isSending ? (
                    <span>SLANJE...</span>
                  ) : (
                    <>
                      <span>POŠALJI PORUKU</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#b30400]" />
              <h3 className="font-anton text-2xl uppercase text-[#151515]">ČESTA PITANJA</h3>
            </div>

            <div className="divide-y divide-[#D4D4D0] border-t border-b border-[#D4D4D0] bg-white">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left font-bold text-xs uppercase text-[#151515] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#b30400]" /> : <ChevronDown className="w-4 h-4 text-[#6F6F6A]" />}
                  </button>
                  {openFaq === idx && (
                    <p className="mt-3 text-xs text-[#4A4A47] leading-relaxed font-mono-tech">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
