import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Check } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, closeSizeGuide } = useCart();

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={closeSizeGuide}
        className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Content */}
      <div className="relative bg-[#FFFFFF] border-2 border-[#151515] max-w-2xl w-full brutalist-shadow p-6 md:p-8 z-10 my-8">
        <div className="flex justify-between items-center border-b border-[#D4D4D0] pb-4 mb-6">
          <div>
            <h2 className="font-anton text-2xl md:text-3xl text-[#151515] uppercase tracking-tight">
              VODIČ ZA VELIČINE
            </h2>
            <p className="font-mono-tech text-xs text-[#6F6F6A] mt-1">
              STANDARDNE MERE ZA OVERSIZED STREETWEAR KROJEVE (cm)
            </p>
          </div>
          <button
            onClick={closeSizeGuide}
            className="p-2 text-[#151515] hover:text-[#b30400] transition-colors cursor-pointer"
            aria-label="Zatvori"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* T-Shirt Table */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-sm uppercase text-[#151515] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#b30400]"></span>
              MAJICE (BOX / OVERSIZED FIT)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono-tech text-xs border border-[#D4D4D0]">
                <thead>
                  <tr className="bg-[#151515] text-white">
                    <th className="p-2.5 border-r border-white/20">VELIČINA</th>
                    <th className="p-2.5 border-r border-white/20">ŠIRINA GRUDI (cm)</th>
                    <th className="p-2.5 border-r border-white/20">DUŽINA (cm)</th>
                    <th className="p-2.5">RUKAV (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4D4D0]">
                  <tr className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">S</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">54</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">72</td>
                    <td className="p-2.5">22</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2] bg-[#F5F5F2]/40">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">M</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">57</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">74</td>
                    <td className="p-2.5">23</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">L</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">60</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">76</td>
                    <td className="p-2.5">24</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2] bg-[#F5F5F2]/40">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">XL</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">63</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">78</td>
                    <td className="p-2.5">25</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">XXL</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">66</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">80</td>
                    <td className="p-2.5">26</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hoodies Table */}
          <div>
            <h3 className="font-bold text-sm uppercase text-[#151515] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#b30400]"></span>
              DUKSEVI (HEAVYWEIGHT FIT)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono-tech text-xs border border-[#D4D4D0]">
                <thead>
                  <tr className="bg-[#151515] text-white">
                    <th className="p-2.5 border-r border-white/20">VELIČINA</th>
                    <th className="p-2.5 border-r border-white/20">ŠIRINA GRUDI (cm)</th>
                    <th className="p-2.5 border-r border-white/20">DUŽINA (cm)</th>
                    <th className="p-2.5">DUŽINA RUKAVA (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4D4D0]">
                  <tr className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">S</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">58</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">70</td>
                    <td className="p-2.5">64</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2] bg-[#F5F5F2]/40">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">M</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">61</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">72</td>
                    <td className="p-2.5">65</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">L</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">64</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">74</td>
                    <td className="p-2.5">66</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F2] bg-[#F5F5F2]/40">
                    <td className="p-2.5 font-bold border-r border-[#D4D4D0]">XL</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">67</td>
                    <td className="p-2.5 border-r border-[#D4D4D0]">76</td>
                    <td className="p-2.5">67</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#F5F5F2] p-4 border border-[#D4D4D0] text-xs text-[#4A4A47] space-y-1">
            <p className="font-bold text-[#151515]">SAVET ZA BIRANJE:</p>
            <p>Svi naši modeli su krojeni u oversized / relaxed fit stilu. Ako želite klasičan fit uz telo, preporučujemo da uzmete jednu veličinu manju od uobičajene.</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#D4D4D0]">
          <button
            onClick={closeSizeGuide}
            className="w-full bg-[#151515] text-white hover:bg-[#b30400] py-3 text-xs font-bold uppercase transition-colors"
          >
            RAZUMEM, ZATVORI VODIČ
          </button>
        </div>
      </div>
    </div>
  );
};
