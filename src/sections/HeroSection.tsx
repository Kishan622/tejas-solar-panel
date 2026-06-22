import { useEffect, useState } from 'react';
import {
  Sun, Phone, ArrowRight, CheckCircle2, ChevronDown,
  Zap, Battery, Leaf, TrendingDown
} from 'lucide-react';
import { siteConfig, wpHref, callHref } from '../lib/site-config';
import { WhatsAppIcon } from '../components/Navbar';

const serviceList = [
  'आवासीय सोलर एनर्जी',
  'व्यावसायिक सोलर एनर्जी',
  'औद्योगिक सोलर एनर्जी',
  'कृषि सोलर पंप (PM कुसुम)',
  'सोलर स्ट्रीट लाइट',
];

// Floating solar energy icon particles
const floatingIcons = [
  { Icon: Zap,        top: '12%', left: '3%',  size: 18, delay: '0s',   dur: '5s'   },
  { Icon: Sun,        top: '55%', left: '2%',  size: 22, delay: '1.2s', dur: '6s'   },
  { Icon: Battery,    top: '80%', left: '6%',  size: 16, delay: '2.4s', dur: '4.5s' },
  { Icon: Leaf,       top: '20%', right: '3%', size: 18, delay: '0.6s', dur: '5.5s' },
  { Icon: TrendingDown, top: '65%', right: '4%', size: 16, delay: '1.8s', dur: '4s' },
  { Icon: Zap,        top: '40%', left: '4%',  size: 14, delay: '3s',   dur: '6.5s' },
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToQuote = () =>
    document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });

  const cls = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
  });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-gradient">

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Solar panels"
          className="h-full w-full object-cover opacity-15"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-950/96 via-ocean-900/85 to-ocean-950/95" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* ── Sunlight glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary top-right glow */}
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] animate-pulse-soft rounded-full bg-amber-400/8 blur-[80px]" />
        {/* Secondary bottom-left glow */}
        <div
          className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-ocean-500/10 blur-3xl"
          style={{ animation: 'pulseSoft 4s ease-in-out 1.5s infinite' }}
        />
        {/* Centre beam */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-solar-gold/10 via-transparent to-transparent" />
      </div>

      {/* ── Floating solar icons ── */}
      {floatingIcons.map(({ Icon, top, left, right, size, delay, dur }, i) => (
        <div
          key={i}
          className="pointer-events-none absolute hidden sm:block"
          style={{
            top, left, right,
            opacity: 0.18,
            animation: `particleFloat ${dur} ease-in-out ${delay} infinite`,
          } as React.CSSProperties}
        >
          <Icon style={{ width: size, height: size }} className="text-solar-gold" strokeWidth={1.5} />
        </div>
      ))}

      {/* ── Decorative animated sun — desktop right ── */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 xl:block">
        {/* Outer glow halo */}
        <div className="absolute right-[4%] top-[8%] h-96 w-96 animate-pulse-soft rounded-full bg-amber-400/8 blur-[60px]" />
        {/* Sun assembly */}
        <div className="absolute right-[8%] top-[10%] h-80 w-80">
          {/* Slow dashed orbit ring */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-solar-gold/20" />
          {/* Medium orbit ring — counter */}
          <div
            className="absolute inset-4 rounded-full border border-dotted border-amber-300/15"
            style={{ animation: 'raySpin 20s linear reverse infinite' }}
          />
          {/* Sun body */}
          <div className="absolute inset-10 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-300/15 via-orange-500/10 to-transparent">
            <Sun
              className="h-28 w-28 text-solar-gold/70 animate-flicker"
              strokeWidth={1}
            />
          </div>
          {/* Inner bright pulse */}
          <div className="absolute inset-24 animate-ping rounded-full bg-amber-400/10" />
        </div>

        {/* Floating project card */}
        <div
          className="absolute right-4 top-[32%] w-72 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10"
          style={{ animation: 'particleFloat 6s ease-in-out 0.5s infinite' }}
        >
          <img
            src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-159397.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Solar installation"
            className="h-40 w-full object-cover"
          />
          <div className="flex items-center justify-between bg-ocean-900/95 px-4 py-3 backdrop-blur">
            <div>
              <div className="text-xs font-semibold text-solar-gold">3.5 kW सिस्टम</div>
              <div className="text-[10px] text-slate-300">निवाई, राजस्थान</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-green-400">₹0 बिजली बिल</div>
              <div className="text-[10px] text-slate-300">हर महीने</div>
            </div>
          </div>
        </div>

        {/* Mini stats badge */}
        <div
          className="absolute right-[calc(1rem+288px+12px)] top-[38%] hidden 2xl:flex flex-col gap-2"
          style={{ animation: 'particleFloat 7s ease-in-out 1.2s infinite' }}
        >
          {[
            { val: '500+', lbl: 'ग्राहक', color: 'text-solar-gold' },
            { val: '5+',   lbl: 'वर्ष',   color: 'text-green-400' },
          ].map(s => (
            <div key={s.lbl} className="glass-card px-4 py-2 text-center">
              <div className={`font-hindi text-xl font-black ${s.color}`}>{s.val}</div>
              <div className="text-[10px] text-slate-300">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="container-x relative z-10 pb-20 pt-36 lg:pt-32">
        <div className="max-w-2xl">

          <div style={cls(0)}>
            <span className="eyebrow-dark">
              <Sun className="h-3.5 w-3.5" />
              MNRE अप्रूव्ड | PM सूर्य घर योजना
            </span>
          </div>

          <h1
            className="mt-6 font-hindi text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={cls(120)}
          >
            सूरज की शक्ति से{' '}
            <span className="shimmer-text">करें बिजली<br />की बचत</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg" style={cls(240)}>
            {siteConfig.name} — राजस्थान का भरोसेमंद सोलर एनर्जी पार्टनर।
            घर, दुकान, खेत — हर जगह सोलर लगवाएं और बिजली बिल से हमेशा के लिए मुक्ति पाएं।
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" style={cls(340)}>
            {serviceList.map(s => (
              <li key={s} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15 hover:ring-solar-gold/40">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-400" /> {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" style={cls(440)}>
            <button
              onClick={scrollToQuote}
              className="btn-orange text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50"
            >
              <Sun className="h-5 w-5" />
              निःशुल्क साइट विजिट बुक करें
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={wpHref} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp पर पूछें
            </a>
            <a
              href={callHref}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              अभी कॉल करें
            </a>
          </div>

          <div className="mt-10 grid max-w-xs grid-cols-3 gap-3" style={cls(540)}>
            {[
              { n: '500+', l: 'ग्राहक' },
              { n: '5+',   l: 'वर्ष अनुभव' },
              { n: '100%', l: 'संतुष्टि' },
            ].map(b => (
              <div key={b.l} className="glass-card p-3 text-center transition hover:bg-white/15">
                <div className="font-hindi text-2xl font-black text-solar-gold">{b.n}</div>
                <div className="text-xs text-slate-300">{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="h-8 w-8 text-white/40" />
      </div>
    </section>
  );
}
