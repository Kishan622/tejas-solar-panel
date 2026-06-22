import { Sun, Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig, wpHref, callHref } from '../lib/site-config';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16.04 4c-6.62 0-12 5.38-12 12 0 2.11.55 4.17 1.6 5.99L4 28l6.16-1.62A11.93 11.93 0 0 0 16.04 28c6.62 0 12-5.38 12-12s-5.38-12-12-12zm0 21.82c-1.84 0-3.64-.49-5.21-1.43l-.37-.22-3.66.96.98-3.57-.24-.37a9.82 9.82 0 0 1-1.5-5.22c0-5.43 4.42-9.85 9.85-9.85s9.85 4.42 9.85 9.85-4.42 9.85-9.85 9.85zm5.4-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

const quickLinks = [
  { href: '#home', label: 'होम' },
  { href: '#services', label: 'सेवाएं' },
  { href: '#schemes', label: 'सरकारी योजनाएं' },
  { href: '#calculator', label: 'सब्सिडी कैलकुलेटर' },
  { href: '#gallery', label: 'प्रोजेक्ट गैलरी' },
  { href: '#contact', label: 'संपर्क करें' },
];

const serviceLinks = [
  'आवासीय सोलर', 'व्यावसायिक सोलर', 'औद्योगिक सोलर',
  'कृषि सोलर पंप', 'सोलर स्ट्रीट लाइट', 'रूफटॉप सोलर',
];

export function Footer() {
  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-ocean-950 text-slate-300">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-ocean-600/10 blur-3xl" />

      <div className="container-x relative py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-solar-gradient shadow-glow-orange">
                <Sun className="h-6 w-6 text-white" strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-hindi text-xl font-black text-white">{siteConfig.name}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-solar-gold">{siteConfig.nameEn}</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              राजस्थान में सोलर एनर्जी का भरोसेमंद नाम। PM सूर्य घर योजना और PM कुसुम योजना में सहायता।
              MNRE अप्रूव्ड इंस्टॉलर।
            </p>
            <div className="mt-5 flex gap-3">
              <a href={wpHref} target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl bg-[#25D366]/20 text-[#25D366] ring-1 ring-[#25D366]/30 transition hover:bg-[#25D366]/30">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-pink-400 ring-1 ring-white/10 transition hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={`mailto:${siteConfig.email}`}
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-hindi text-sm font-bold uppercase tracking-wider text-white">
              त्वरित लिंक
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-sm text-slate-400 transition hover:text-solar-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-hindi text-sm font-bold uppercase tracking-wider text-white">
              हमारी सेवाएं
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scroll('#services')}
                    className="text-sm text-slate-400 transition hover:text-solar-gold"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-hindi text-sm font-bold uppercase tracking-wider text-white">
              संपर्क करें
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={callHref} className="text-slate-400 hover:text-solar-gold transition">{siteConfig.phone1}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:${siteConfig.phone2Raw}`} className="text-slate-400 hover:text-solar-gold transition">{siteConfig.phone2}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-400 hover:text-solar-gold transition">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-solar-gold transition">{siteConfig.instagram}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name} | {siteConfig.nameEn}. सर्वाधिकार सुरक्षित।</p>
          <p>निवाई, राजस्थान | MNRE अप्रूव्ड सोलर इंस्टॉलर</p>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 left-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-ocean-800 text-white shadow-lg ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-ocean-700"
      aria-label="ऊपर जाएं"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
