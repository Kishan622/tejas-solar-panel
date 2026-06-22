import { useEffect, useState } from 'react';
import { Sun, Menu, X, Phone } from 'lucide-react';
import { siteConfig, wpHref, callHref } from '../lib/site-config';
import { useCounter } from '../hooks/useReveal';

const navLinks = [
  { href: '#home',       label: 'होम' },
  { href: '#services',   label: 'सेवाएं' },
  { href: '#schemes',    label: 'सरकारी योजनाएं' },
  { href: '#about',      label: 'हमारे बारे में' },
  { href: '#gallery',    label: 'गैलरी' },
  { href: '#contact',    label: 'संपर्क' },
];

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16.04 4c-6.62 0-12 5.38-12 12 0 2.11.55 4.17 1.6 5.99L4 28l6.16-1.62A11.93 11.93 0 0 0 16.04 28c6.62 0 12-5.38 12-12s-5.38-12-12-12zm0 21.82c-1.84 0-3.64-.49-5.21-1.43l-.37-.22-3.66.96.98-3.57-.24-.37a9.82 9.82 0 0 1-1.5-5.22c0-5.43 4.42-9.85 9.85-9.85s9.85 4.42 9.85 9.85-4.42 9.85-9.85 9.85zm5.4-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ocean-950/95 shadow-lg shadow-black/30 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5 group">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-solar-gradient shadow-glow-orange transition-transform group-hover:scale-105">
            <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-hindi text-lg font-black text-white">{siteConfig.name}</span>
            <span className="text-[9px] font-semibold uppercase tracking-widest text-solar-gold">{siteConfig.nameEn}</span>
          </div>
        </button>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={wpHref} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366]/20 px-4 py-2 text-sm font-semibold text-[#25D366] ring-1 ring-[#25D366]/40 transition hover:bg-[#25D366]/30"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <a href={callHref} className="btn-orange !px-5 !py-2.5 !text-sm">
            <Phone className="h-4 w-4" /> कॉल करें
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-white/10 bg-ocean-950/98 px-4 pb-6 pt-4 lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col gap-3">
          <a href={callHref} className="btn-orange w-full justify-center">
            <Phone className="h-4 w-4" /> अभी कॉल करें
          </a>
          <a
            href={wpHref} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp पर संपर्क
          </a>
        </div>
      </div>
    </header>
  );
}

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      setProgress(h.scrollHeight > h.clientHeight ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div className="h-full bg-solar-gradient transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href={wpHref} target="_blank" rel="noreferrer"
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/50 transition-transform hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />
        <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">1</span>
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      </a>
      <a
        href={callHref}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-ocean-500 to-ocean-700 shadow-2xl shadow-ocean-600/40 transition-transform hover:scale-110 active:scale-95"
        aria-label="Call"
      >
        <Phone className="h-6 w-6 text-white" fill="currentColor" />
      </a>
    </div>
  );
}

// Re-export counter hook for section use
export { useCounter };
