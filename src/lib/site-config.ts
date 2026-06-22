export const siteConfig = {
  name: 'तेजस सोलर',
  nameEn: 'Tejas Solar',
  tagline: 'सूरज की रोशनी से करें बिजली की बचत',
  subTagline: 'राजस्थान का विश्वसनीय सोलर एनर्जी पार्टनर',
  owner: 'अशोक स्वामी',
  contactPerson: 'जितेंद्र स्वामी',
  phone1: '+91 9414642168',
  phone1Raw: '919414642168',
  phone2: '+91 9680636577',
  phone2Raw: '919680636577',
  email: 'tejassolarraj@gmail.com',
  instagram: '@Tajas_Solar',
  instagramUrl: 'https://www.instagram.com/Tajas_Solar',
  address: 'कंकाली माता मंदिर के पास, गंगोरी बाजार, निवाई, राजस्थान',
  addressEn: 'Near Kankali Mata Mandir, Gangori Bazar, Niwai, Rajasthan',
  whatsappMsg: encodeURIComponent('नमस्ते! मैं तेजस सोलर से सोलर एनर्जी के बारे में जानकारी लेना चाहता हूं।'),
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=75.88,26.16,75.92,26.20&layer=mapnik&marker=26.18,75.90',
} as const;

export const wpHref = `https://wa.me/${siteConfig.phone1Raw}?text=${siteConfig.whatsappMsg}`;
export const callHref = `tel:${siteConfig.phone1Raw}`;
