import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'stk-001',
    sku: 'STK-001',
    name: 'BRUTALIST TEE BLCK',
    category: 'majice',
    price: 3500,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW06HNO0tGIey3Kh5H3KgaWwmtwsnjllVm05b00c01fZw_BO2NCZMxfZ0EV_0oKoIg-KmEjDYklb4j1YeD7gqQSSOSS0z1FcEL50u8Se1tr__BoqpDM9Bp7-Jgj70-8Kc1CtTCFsC6bm1XDHv3j_ddI_SaowakB4cfrFudwVQwdRvoWgtCO71NrcnyK5YuwW4BO_MgYIjOV-SzUSo4K8B9D1PfOhoWKE-YX8LnwRM-Lc7I1Udd_2aD',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJI2kfqeSyrnzGJ7gYgadvZUHn9KtKgX_OCDdnvDwnHzkSgnfbEZ_adx0RDzPX1udeun6g9zBv4TqH_NWSa8ANzexdmkw_CHwwlul-xUWKE0qkHke-CWInhdccuPOPye2rz_ytQrs_1O7hoJOH2SrMkInAx8PWmIXR2bCmqUTQOZ6yABuTwIQCA1_TfTboZo4oz1cUUma-8jhchE5ACn-2cxI-7PjiYW0hQBqNoqAFq1SjIEcfV7fI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_M7MPKK_y4qm11TnNRPOIv0DcqoZXbPNacBG3pGuJpR-t-oiOIpQviuJkPOQVaPpexcukRjOJKumghHhtBPO87S9nlE_G93HedAC3mdOwlDs5s2ERLD9o9YXmDIK7FymJxP3f0f3Y3m36qhKQlAnJGmAePLIzup94MR-0xEO4y230K9w9Et1xr-mXTbre739qZutKZjPw7wgrYdbcxutVgghFTKFIRVbEfXHNFwqMWo_jPfzpF_1J',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAifcnXL0Qf4CmSJ0DnbQrXA9x_gv0SWTt3I-CDXy01NPzYe6E8xU0qOwezv1biBlGSP3jq_30Qc5-jnvT_nS63byJQLtH4lG660zGklnwmXQQ7wgOBqhPoh5Ypz6or1SO78_iKjlGEOS7Qs0xDr5M-MKeOQRHHVesdyfLXetIDJ9PaftoNKM4PlBALxSJTwvkMFI6k2PScys96doksNGWUt-8PnkBhUobY8Ksm0ScERVhOtpK3rvu4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB02rhZcFCTX0HtxgUm8HUctTX1FQgotDdcbUTQQKf4Ya93T5WzLw12B1Bt8PdDoU2H7-GSZF_roOhqeRxY8qMti1c4zE9j9gS1T8ttOKVSXiGV4-5m6_a7EQdlyYWGO5nXq5lh582vH9vBR6CbfarJzLiX_neqlv9DXd_efYRzqVeHan17_gehnvyLkDh6vpOySFL_MKFkftVx54NDA8_mAfz-vvGcKMLRs_SLFypsOlMtQur7DgpW'
    ],
    description: 'Heavyweight 240gsm cotton t-shirt built for the streets. Features our signature "STRANICA" brutalist graphic, hand-printed in high-density orange ink. Boxy, oversized fit. Uncompromising quality.',
    details: [
      '240 GSM 100% organski pamuk visokog kvaliteta',
      'High-density sito štampa sa reljefnim finišom',
      'Oversized / Boxy kroj sa spuštenim ramenima',
      'Ojačani okovratnik i dupli štepovi',
      'Proizvedeno u Srbiji'
    ],
    materials: '100% organski češljani pamuk, 240g/m². Prati izvrnuto na 30°C. Ne sušiti u sušilici. Ne peglati direktno preko štampe.',
    shippingInfo: 'Dostava se vrši kurirskom službom BEX / Post Express u roku od 1-2 radna dana. Za iznose preko 7.000 RSD dostava je besplatna.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'BLACK', hex: '#151515' },
      { name: 'VINTAGE WHITE', hex: '#F8F8F8' },
      { name: 'SLATE GREY', hex: '#5F5E5E' }
    ]
  },
  {
    id: 'stk-p02',
    sku: 'STK-P02',
    name: 'URBAN PACK STICKERS',
    category: 'stikeri',
    price: 800,
    originalPrice: 1200,
    badge: '-33%',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3hH3G0VW4QEKKBhQxKIA1zubvs7Si2XRK9Iwp-VXhRSWgqT9GtFRTVeJqAyjKW11klokwm_-tX9So29nkFtEbYMPiQ6YHaSsZsJRS-eoc-tHjCaoT0z4JuM6JvO_vSeOzY_dExE27KdEekEB1cVkxna9eNQjtVjeUq556-PiPqBEhNgImcMqcQDbzuuBvvRjJHC_28pXM98oLnZoQ2LLCHfoLp6lX1q0ebYHN6Gwc99pcfglN4pW4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAq6rEuaQYqI85xTqn1YWMEU0FJ-v26xqUxLNU0fYn20Q1zAkU82HbhcHAyA-sdsr5peqfXOoVqmqLyxq3-Y5bUcHrUoR9O0RQUyGp3sJDJi9GVt07RLOWrjVKeZEeJLAFtnFhoIXpL4gODdXQJ7Wu54t_hh0gO0q3RNOgrGHu4mG94JvJripK6h-5l3ekr8REOqmG_xWiYUlIcB7jUCRuzyjLmGHuYI1Wi4d5phpXUHU2maXJLR_uC'
    ],
    description: 'Set od 10 vodootpornih die-cut stikera od teškog vinila sa UV zaštitom. Otporni na kišu, sunce, grebanje i ekstremne temperature.',
    details: [
      '10 unikatnih brutalist grafika u pakovanju',
      'Ekstra debeli vinil (180 mikrona)',
      'UV lakirani finiš protiv habanja i bledenja',
      'Savršeno za laptopove, skejtove, kacige i ulični print'
    ],
    materials: 'Premium vinil folija sa trajnim akrilnim lepkom i zaštitnim mat laminatom.',
    sizes: ['SET OD 10']
  },
  {
    id: 'hd-wht-01',
    sku: 'HD-WHT-01',
    name: 'CORE HOODIE WHT',
    category: 'duksevi',
    price: 5900,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJOwAftLrfz1FfNw69vRBGEzIfpp-UCqh-G6sTY1PSq19SYQ-qrVgKFonsAavAagaIprwzl1wB_HzalQ9x8iKr_e5mA-9wIuMhgcIaLlN0SztZhwEGnhkQLJ3f3movZGeeKMCjlSdcVjZhs64KvVKG5R3b1QfkrP7QIaD7X6tfsY_S-TwacNHpzR2QL_4E7Go3xbgqFPtlNbkThq4HbLszeGxXB8n1GsNCjk2DqKIjUV01JDR4_P9M',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuaXvRshXwz3hLkF8UvZxR9virksiqH1sEWWZeXgIO0McN4cSJNhVuCFQfZwZpzeGTy8R3qvKV7U_RO_gEsddK1-Cqr-EtD0qFKybLHocwgQ2AR7e8_81SOmq6O-k8C6aYQ67qgFMIXn2ot5BfhbRXwL2hBNXzqATp9UYakS3kKIQWFzVsXhY6a6nFVcMITX2BKKEX8KQADZ_V-2ddud1HQHJ4MqP_qZoZmAGAYo1EpiIAb_prkmZ'
    ],
    description: 'Vrhunski 400gsm brušeni pamučni duks sa brutalist tipografskim vezom u crvenoj boji. Masivna kapuljača bez pertli i kengur džep sa skrivenim šavovima.',
    details: [
      '400 GSM teški francuski frotir',
      'Prednji i zadnji brutalist reljefni vez',
      'Dupla kapuljača sa savršenom strukturom',
      'Rebraste ranfle na rukavima i struku'
    ],
    materials: '80% pamuk, 20% poliester za stabilnost forme. Prati na 30°C.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'WHITE', hex: '#FFFFFF' },
      { name: 'BLACK', hex: '#151515' }
    ]
  },
  {
    id: 'cap-001',
    sku: 'CAP-001',
    name: 'LOGO CAP BLK',
    category: 'kacketi',
    price: 2400,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUyvdZRO-1dsAuBKBqJ0ZnL9_BFKwZMdfhO_Jx2fQmMzx0HVEhdUs3zZvJIDlQKMhB-XzoMjBBXAg45L0dQtA7AVq9k7NInKW56UVa__-xs3T4a0d_Z50D5miFpeRwAvCNTGDTlvGPYKkwnuMFfAzFGXYK9vtD-i9_wgWHaioyNPP0nsi_pkXsJur1iZpH2_e42A6azfoOIUsKD6y2_TdJxnShUQ9InW_YJHVIVpX1CBepXvC9YUyF'
    ],
    description: 'Strukturirani 6-panel kačket od čvrstog pamučnog kepera sa 3D vezom "STRANICA" logotipa. Metalna kopča sa utisnutim logotipom za podešavanje veličine.',
    details: [
      '100% pamučni keper visoke gustine',
      'Gusti 3D reljefni vez na prednjem panelu',
      'Univerzalna veličina sa metalnim zatvaračem',
      'Zakrivljeni štitnik sa 6 linija štepa'
    ],
    sizes: ['ONESIZE'],
    colors: [{ name: 'BLACK', hex: '#151515' }]
  },
  {
    id: 'stk-002',
    sku: 'STK-002',
    name: 'SYSTEM ERROR TEE WHT',
    category: 'majice',
    price: 3500,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIqrFOxmPX7BvmOpQOVdXlZXZrzOIvY0m22833pibf9ekUrEcJb7UODOv3iulC-Rb2i7KGHZxsLX3I61euW8s0J1yd6N0A07zzUHe-METqR40S7UXKjyOBT1KHXKvysfSlGIzSPT9acxyVDBVzF9tgXkjzfMhCqzN6Ji00dg8ASNiuRjlacHtZruA5r6nzz7xQnrH7SX6s9HDzBia7OWGkdcEM63vGIMuT6nHCRjA3kjom4-ujqxLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWsnCMe6zx41dHf8aQORa7pa4FCg4h-uoTrI4SIcjRzr6Kp7FJA723yL4hlcUofhMn9q09DZlq78U0nqo-xJ2VRDvQklkePWZZwsZo1sjc8DV4Z3Xiq2rVkla2VaEopbpHp5aKp7vQbX_lQKlI8wl_1O9OlcoWsFgOU14WK71CCSKgu1yzB_xgPQNxAjaam1Peq9hfQUx-AV94DjxfSfrazg2iio-sMOSdBoCmNdZ05EOFU8roPBM'
    ],
    description: 'Bela brutalistička majica sa masivnim "SYSTEM FAILURE" grafičkim printom inspirisanim digitalnom distopijom i brutalističkom arhitekturom.',
    details: [
      '240 GSM organski pamuk',
      'Mat crna sito štampa visoke preciznosti',
      'Boxy streetwear fit'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'WHITE', hex: '#FFFFFF' }]
  },
  {
    id: 'stk-015',
    sku: 'STK-015',
    name: 'VOID HOODIE GRY',
    category: 'duksevi',
    price: 6500,
    badge: 'RASPRODATO',
    isSoldOut: true,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZjpeHDcpRzW_z1TmG8_hxQaSsBOSJVHoEtWjdL8XhdiIxph67WRtS5d6jmBmTi8oHpyoZ-F4HyMa5MIY8B5iISSRnpMAx4J0e6toV03g2c12bKwpY01QwraUp_EiI_eYpWuAwl_BKLVZs5W3kE_n908aG4sbmYKrQTBnaOL3EaywCXRGVAuPW6CDN4uxd0ERPYplMwabYNO6ufebNOmYNF3pgxrStwuiXzXYtdQ02tWKVER6a-_1P'
    ],
    description: 'Vintage washed sivi duks sa izbledelom brutalističkom tipografijom "BRUTAL ARCHIVE". Izuzetno redak primerak iz limitirane arhivske serije.',
    details: [
      '420 GSM teški isprani pamuk',
      'Vintage acid wash efekat',
      'Limitirano na samo 50 primeraka'
    ],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'stk-008',
    sku: 'STK-008',
    name: 'ALERT L/S RED',
    category: 'majice',
    price: 4200,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRj0IbgQOOzwB5OfXTWYNLkUNylkMgygfDd3mcRo-4TLbXTOzhH-bDcygRR13lYbZlKi4A5nCDfuqPRBkCpMQbR1drFb1ZoLjnmERqEGg_HOT7uL1PeCf-_h8wGj2sF_AT4UejfSLf8rKWp44FYlBT2ahAkSSNT42-E6Y4GAbsU7Pb12pzTGt7mnJ7WnK158l55aWbjt3oPY8HcGaECffcPYjxQ-WX1KqjFA0JpoqSDyFQxsX5RqO5'
    ],
    description: 'Crvena majica dugih rukava sa tehničkim belim printom na rukavima i grudima "ASCENSION // 上昇". Inspirisana cyberpunk i techwear estetikom.',
    details: [
      '220 GSM pamuk sa elastinom za fleksibilnost',
      'Print duž celih rukava',
      'Rebraste ranfle na rukavima'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'RED', hex: '#b30400' }]
  },
  {
    id: 'sku-042',
    sku: 'SKU-042',
    name: 'RAW EDGE HOODIE',
    category: 'duksevi',
    price: 4500,
    originalPrice: 6000,
    badge: '-25%',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrYNV6kJ54QRymJfNkPqKbeqS4g3tqaqIiBJM5VgBLC3aAYVuHzujKka1lOLi_vOUvh_PQyl5alvUHEZUG3HJk-nbtIF7uaHF4kT5mGuwdQ_eUxa2Rj5zK4EqE6dgw8JgoogwNLspCvBk-It9J4p_V8Uxt_4JRFM1ghyZ_2-ETp-5pcgogvpO6fPdTRPIwnq0aZlGKMRCfBmZLalp7t2sEphmA6wf_1u0Sglu94HTBByP2b5tjmPcN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuaXvRshXwz3hLkF8UvZxR9virksiqH1sEWWZeXgIO0McN4cSJNhVuCFQfZwZpzeGTy8R3qvKV7U_RO_gEsddK1-Cqr-EtD0qFKybLHocwgQ2AR7e8_81SOmq6O-k8C6aYQ67qgFMIXn2ot5BfhbRXwL2hBNXzqATp9UYakS3kKIQWFzVsXhY6a6nFVcMITX2BKKEX8KQADZ_V-2ddud1HQHJ4MqP_qZoZmAGAYo1EpiIAb_prkmZ'
    ],
    description: 'Dvobojni crveno-crni duks sa sirovim štepovima i upečatljivim uličnim printom na grudima. Savršen balans udobnosti i agresivnog stila.',
    details: [
      '380 GSM pamučni flis',
      'Kombinovani blok paneli crvene i crne boje',
      'Dvostruka kapuljača'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'BLACK/RED', hex: '#151515' }]
  },
  {
    id: 'stk-decay',
    sku: 'STK-001',
    name: 'URBAN DECAY STICKER PACK',
    category: 'stikeri',
    price: 1200,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBh9k0ifLp3JrxSKYz4XMTCL3dMetGTfY9b0Ii-MlfVzD6eJhhaxfJ01812WIsdvlPR-Vu5EyYs9yqFLnA0h2RcDeDR18QNbT4Fs9KxgdqYo--xQjMlhf3nP8XWCDFcgdDqDdjewE-cOHSF4Ox9zlaCIY9C72PuglCkCQmlJeF0Hboa70LADUyEe7YjZnnbo4cQXPCmaTN9lzLQtCcz4jGaOqSLIWYa_cLmGSNFVj7x88Kii38loQp3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAq6rEuaQYqI85xTqn1YWMEU0FJ-v26xqUxLNU0fYn20Q1zAkU82HbhcHAyA-sdsr5peqfXOoVqmqLyxq3-Y5bUcHrUoR9O0RQUyGp3sJDJi9GVt07RLOWrjVKeZEeJLAFtnFhoIXpL4gODdXQJ7Wu54t_hh0gO0q3RNOgrGHu4mG94JvJripK6h-5l3ekr8REOqmG_xWiYUlIcB7jUCRuzyjLmGHuYI1Wi4d5phpXUHU2maXJLR_uC'
    ],
    description: 'Komplet od 15 premium vinil nalepnica sa ilustracijama urbanog propadanja, skejt motiva i grafiti tipografije.',
    details: [
      '15 die-cut nalepnica različitih dimenzija (5cm - 12cm)',
      '100% vodootporne i otporne na ogrebotine',
      'Ekološki prihvatljive boje bez rastvarača'
    ],
    sizes: ['PAKET OD 15']
  },
  {
    id: 'sku-888',
    sku: 'SKU-888',
    name: 'ACID WASH OVERSIZE',
    category: 'majice',
    price: 4000,
    badge: 'LIMITED',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWsnCMe6zx41dHf8aQORa7pa4FCg4h-uoTrI4SIcjRzr6Kp7FJA723yL4hlcUofhMn9q09DZlq78U0nqo-xJ2VRDvQklkePWZZwsZo1sjc8DV4Z3Xiq2rVkla2VaEopbpHp5aKp7vQbX_lQKlI8wl_1O9OlcoWsFgOU14WK71CCSKgu1yzB_xgPQNxAjaam1Peq9hfQUx-AV94DjxfSfrazg2iio-sMOSdBoCmNdZ05EOFU8roPBM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWIxMVdAq-EILvhLzrqeUYmBetN_EGan2CHQmwlis8Iy1X-pNGeVtzUN6l5H_df7ZOQm-NRYOGfY0aMgoBjRdqlERoM8eS7P-UkqAby3wqV-OEYpK6wLWiuJzwG7YstoUFPWHaDIzvfsqgsAkCpopGaocNIskhjHGhxVm2nrwN_vdlkoORz4TNz0BXhC1L03oQKWWHfT7Tv_v15gXDaLS5HqKtoT4oYUw_XShPza4TqC3bhMB1TyxG'
    ],
    description: 'Limitirana oversize majica tretirana kiselinskim pranjem za postizanje unikatnog vintage mermernog uzorka sa "WANDERLUST" grafikom.',
    details: [
      '260 GSM teški sirovi pamuk',
      'Ručno rađeni acid wash tretman (svaki komad je unikatan)',
      'Spušteni rameni šavovi i široki rukavi'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'VINTAGE ACID', hex: '#E7E7E3' }]
  },
  {
    id: 'acc-004',
    sku: 'ACC-004',
    name: 'MANIFESTO TOTE BAG',
    category: 'majice',
    price: 2000,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPcqjkjVQz6F2gPsHmMfjsxohRfXn5QHbIaOZKYl6Do_PjrO6L0pe3hADRnUM_1_bMsaPFyLZnLO1pHSjVZEvxwLieu8RFkBDHaS02xjXJAe9Ns-ttdiXsw3YXfZxNxtJtdGbAV73yTIVDViWR8jZjznGx-ESD7e-QZwC3KmfqqvdsVMLNP5eMHP6dLpjSPrS6Yfr0GDcZt4q0vIm3aztrjHB_yXfSqRTua8qrx53PJGb4JJvDRhbu'
    ],
    description: 'Izuzetno izdržljiva crna platnena torba od 380gsm pamuka sa obostranim brutalističkim manifesto printom i unutrašnjim džepom sa zipom.',
    details: [
      '380 GSM robusno platno',
      'Ojačane ručke dužine 65cm',
      'Unutrašnji džep za telefon i ključeve'
    ],
    sizes: ['ONESIZE']
  }
];
