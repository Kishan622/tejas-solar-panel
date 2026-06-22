import { useInView } from '../hooks/useReveal';
import { Phone, Mail, MapPin, Instagram, Clock, User } from 'lucide-react';
import { siteConfig, wpHref, callHref } from '../lib/site-config';
import { WhatsAppIcon } from '../components/Navbar';

const contacts = [
  {
    name: siteConfig.owner,
    role: 'मालिक / Owner',
    phone: siteConfig.phone1,
    phoneRaw: siteConfig.phone1Raw,
    color: 'from-brand-500 to-brand-700',
  },
  {
    name: siteConfig.contactPerson,
    role: 'संपर्क व्यक्ति / Contact',
    phone: siteConfig.phone2,
    phoneRaw: siteConfig.phone2Raw,
    color: 'from-ocean-500 to-ocean-700',
  },
];

export function ContactSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="bg-slate-950 py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow-dark">संपर्क</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-white sm:text-4xl">
            <span className="shimmer-text">हमसे संपर्क</span> करें
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            कोई भी सवाल हो — कॉल करें, WhatsApp करें या सीधे मिलें।
          </p>
        </div>

        {/* Contact persons */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <div
              key={c.name}
              className={`glass-card p-6 text-center ${anim(i * 100)}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${c.color} shadow-lg`}>
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 font-hindi text-xl font-black text-white">{c.name}</h3>
              <p className="text-sm text-slate-400">{c.role}</p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={`tel:${c.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" /> {c.phone}
                </a>
                <a
                  href={`https://wa.me/${c.phoneRaw}?text=${siteConfig.whatsappMsg}`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366]/20 px-4 py-2.5 text-sm font-semibold text-[#25D366] ring-1 ring-[#25D366]/30 transition hover:bg-[#25D366]/30"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info cards */}
        <div className={`mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
          {[
            { icon: MapPin,    label: 'पता',       value: siteConfig.address,     href: '#',                             color: 'text-brand-400' },
            { icon: Mail,      label: 'ईमेल',       value: siteConfig.email,       href: `mailto:${siteConfig.email}`,    color: 'text-blue-400' },
            { icon: Instagram, label: 'Instagram', value: siteConfig.instagram,   href: siteConfig.instagramUrl,         color: 'text-pink-400' },
            { icon: Clock,     label: 'समय',        value: 'सोम - शनि: 9 AM - 7 PM', href: '#',                          color: 'text-green-400' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="glass-card flex items-start gap-4 p-5 transition hover:bg-white/15"
            >
              <span className={`mt-0.5 ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</div>
                <div className="mt-1 text-sm text-white">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
          <a href={callHref} className="btn-orange text-base">
            <Phone className="h-5 w-5" /> अभी कॉल करें — {siteConfig.phone1}
          </a>
          <a href={wpHref} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp पर संपर्क
          </a>
        </div>

        {/* Map */}
        <div className={`mt-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 ${anim(400)}`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-ocean-900/80 px-6 py-4 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-brand-400" />
            <span className="font-hindi text-sm font-semibold text-white">{siteConfig.address}</span>
          </div>
          <iframe
            title="तेजस सोलर — निवाई, राजस्थान"
            src={siteConfig.mapEmbedUrl}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
