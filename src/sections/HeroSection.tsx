import { useEffect, useState } from 'react';
import { Sun, Phone, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { siteConfig, wpHref, callHref } from '../lib/site-config';
import { WhatsAppIcon } from '../components/Navbar';

const serviceList = [
  'आवासीय सोलर एनर्जी',
  'व्यावसायिक सोलर एनर्जी',
  'औद्योगिक सोलर एनर्जी',
  'कृषि सोलर पंप (PM कुसुम)',
  'सोलर स्ट्रीट लाइट',
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToQuote = () =>
    document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });

  const cls = (_delay: number) =>
    `transition-all duration-700 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-gradient">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Solar panels"
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-950/95 via-ocean-900/80 to-ocean-950/90" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Decorative sun — right side, desktop only */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 xl:block">
        <div className="absolute right-[5%] top-[10%] h-72 w-72 animate-pulse-soft rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[12%] h-80 w-80">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-solar-gold/20" />
          <div className="absolute inset-8 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-300/15 to-orange-600/10 shadow-glow">
            <Sun className="h-24 w-24 text-solar-gold/60" strokeWidth={1} />
          </div>
        </div>
        {/* Floating project card */}
        <div className="absolute right-4 top-1/4 w-72 animate-float overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
          <img
            src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-159397.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Solar installation"
            className="h-40 w-full object-cover"
          />
          <div className="flex items-center justify-between bg-ocean-900/90 px-4 py-3 backdrop-blur">
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
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pb-20 pt-28">
        <div className="max-w-2xl">
          <div
            className={cls(0)}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="eyebrow-dark">
              <Sun className="h-3.5 w-3.5" />
              MNRE अप्रूव्ड | PM सूर्य घर योजना
            </span>
          </div>

          <h1
            className={`mt-6 font-hindi text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl ${cls(1)}`}
            style={{ transitionDelay: '120ms' }}
          >
            सूरज की शक्ति से{' '}
            <span className="shimmer-text">करें बिजली<br />की बचत</span>
          </h1>

          <p
            className={`mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg ${cls(2)}`}
            style={{ transitionDelay: '240ms' }}
          >
            {siteConfig.name} — राजस्थान का भरोसेमंद सोलर एनर्जी पार्टनर।
            घर, दुकान, खेत — हर जगह सोलर लगवाएं और बिजली बिल से हमेशा के लिए मुक्ति पाएं।
          </p>

          <ul
            className={`mt-6 flex flex-wrap gap-2 ${cls(3)}`}
            style={{ transitionDelay: '340ms' }}
          >
            {serviceList.map(s => (
              <li key={s} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-400" /> {s}
              </li>
            ))}
          </ul>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row ${cls(4)}`}
            style={{ transitionDelay: '440ms' }}
          >
            <button onClick={scrollToQuote} className="btn-orange text-base">
              <Sun className="h-5 w-5" />
              निःशुल्क साइट विजिट बुक करें
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={wpHref} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp पर पूछें
            </a>
            <a
              href={callHref}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              अभी कॉल करें
            </a>
          </div>

          <div
            className={`mt-10 grid max-w-xs grid-cols-3 gap-3 ${cls(5)}`}
            style={{ transitionDelay: '540ms' }}
          >
            {[
              { n: '500+', l: 'ग्राहक' },
              { n: '5+', l: 'वर्ष अनुभव' },
              { n: '100%', l: 'संतुष्टि' },
            ].map(b => (
              <div key={b.l} className="glass-card p-3 text-center">
                <div className="font-hindi text-2xl font-black text-solar-gold">{b.n}</div>
                <div className="text-xs text-slate-300">{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="h-8 w-8 text-white/40" />
      </div>
    </section>
  );
}
