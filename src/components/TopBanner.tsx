import { useEffect, useState } from 'react';
import { Sun, Phone, MapPin, Zap } from 'lucide-react';
import { siteConfig } from '../lib/site-config';

function SunRays() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Outer slow rotating rays */}
      <div
        className="absolute h-[500px] w-[500px] animate-ray-spin opacity-10"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(251,191,36,0.6) 10deg, transparent 20deg, transparent 60deg, rgba(249,115,22,0.4) 70deg, transparent 80deg, transparent 120deg, rgba(251,191,36,0.5) 130deg, transparent 140deg, transparent 180deg, rgba(249,115,22,0.3) 190deg, transparent 200deg, transparent 240deg, rgba(251,191,36,0.6) 250deg, transparent 260deg, transparent 300deg, rgba(249,115,22,0.4) 310deg, transparent 320deg, transparent 360deg)',
          borderRadius: '50%',
        }}
      />
      {/* Inner glow */}
      <div className="absolute h-64 w-64 animate-pulse-soft rounded-full bg-gradient-to-r from-amber-400/15 via-orange-400/10 to-transparent blur-3xl" />
    </div>
  );
}

const particles = [
  { size: 8, top: '15%', left: '8%', dur: '3.5s', delay: '0s' },
  { size: 6, top: '70%', left: '5%', dur: '4.5s', delay: '0.8s' },
  { size: 10, top: '25%', right: '10%', dur: '5s', delay: '1.2s' },
  { size: 5, top: '80%', right: '8%', dur: '3s', delay: '0.4s' },
  { size: 7, top: '50%', left: '15%', dur: '4s', delay: '1.8s' },
  { size: 9, top: '40%', right: '18%', dur: '3.8s', delay: '2s' },
];

interface PersonCardProps {
  name: string;
  phone: string;
  phoneRaw: string;
  role: string;
  delay: number;
  visible: boolean;
}

function PersonCard({ name, phone, phoneRaw, role, delay, visible }: PersonCardProps) {
  return (
    <a
      href={`tel:${phoneRaw}`}
      className="banner-card group flex items-center gap-3 px-5 py-3 no-underline"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {/* Avatar */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-solar-gold to-brand-600 shadow-lg shadow-brand-600/30">
        <span className="font-hindi text-sm font-black text-white">{name[0]}</span>
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-slate-900" />
      </div>
      <div>
        <div className="font-hindi text-sm font-black text-white group-hover:text-solar-gold transition-colors">{name}</div>
        <div className="text-xs text-slate-400">{role}</div>
        <div className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-solar-gold">
          <Phone className="h-3 w-3" /> {phone}
        </div>
      </div>
    </a>
  );
}

export function TopBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-ocean-950 to-slate-950">
      {/* Animated background rays */}
      <SunRays />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            '--dur': p.dur,
            '--delay': p.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-solar-gold to-transparent" />

      <div className="container-x relative z-10 py-5 sm:py-7">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand title block */}
          <div
            className="flex flex-col items-center gap-2 lg:items-start"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Sun icon + title row */}
            <div className="flex items-center gap-3">
              {/* Animated sun */}
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-solar-gold/40" />
                <div className="absolute inset-1.5 animate-pulse-soft rounded-full bg-gradient-to-br from-amber-300/20 to-orange-500/20" />
                <Sun className="relative h-6 w-6 text-solar-gold animate-flicker" strokeWidth={2} />
              </div>
              <div>
                <h1 className="banner-title font-sans text-2xl font-black tracking-wider sm:text-3xl lg:text-4xl">
                  TEJAS SOLAR
                </h1>
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3 w-3 text-solar-gold" fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-solar-gold/80">NIWAI, RAJASTHAN</span>
                  <Zap className="h-3 w-3 text-solar-gold" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-xs font-medium text-slate-400 sm:text-sm"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 300ms',
              }}
            >
              MNRE अप्रूव्ड • PM सूर्य घर योजना • PM कुसुम योजना
            </p>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col items-stretch gap-2 w-full sm:flex-row sm:items-center sm:justify-center lg:w-auto lg:justify-end">
            <PersonCard
              name={siteConfig.owner}
              phone={siteConfig.phone1}
              phoneRaw={siteConfig.phone1Raw}
              role="मालिक / Owner"
              delay={200}
              visible={visible}
            />
            <PersonCard
              name={siteConfig.contactPerson}
              phone={siteConfig.phone2}
              phoneRaw={siteConfig.phone2Raw}
              role="संपर्क व्यक्ति"
              delay={350}
              visible={visible}
            />
            {/* Address chip */}
            <div
              className="banner-card flex items-start gap-2 px-4 py-3 sm:max-w-[220px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 500ms, transform 0.6s ease-out 500ms',
              }}
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="text-xs leading-relaxed text-slate-300">
                कंकाली माता मंदिर के पास,<br />
                गंगोरी बाजार, <strong className="text-white">निवाई, राजस्थान</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
