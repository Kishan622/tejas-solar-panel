import { useInView, useCounter } from '../hooks/useReveal';
import { counters } from '../lib/data';
import { siteConfig } from '../lib/site-config';
import {
  Award, ShieldCheck, Clock, Users, Star,
  CheckCircle2, MapPin
} from 'lucide-react';

const whyPoints = [
  { icon: Award,        title: 'MNRE अप्रूव्ड',    desc: 'सरकार द्वारा मान्यता प्राप्त सोलर इंस्टॉलर' },
  { icon: ShieldCheck,  title: '25 वर्ष वारंटी',    desc: 'पैनल और इंवर्टर पर पूरी गारंटी' },
  { icon: Clock,        title: '5+ वर्ष अनुभव',    desc: 'राजस्थान में हजारों प्रोजेक्ट पूरे' },
  { icon: Users,        title: 'स्थानीय टीम',       desc: 'निवाई और आसपास के क्षेत्र में तुरंत सेवा' },
  { icon: Star,         title: '4.9★ रेटिंग',       desc: '500+ संतुष्ट ग्राहकों का विश्वास' },
  { icon: CheckCircle2, title: 'सब्सिडी सहायता',    desc: 'PM योजनाओं में आवेदन में पूरी मदद' },
];

function CounterCard({ icon: Icon, value, suffix, label, decimal }: {
  icon: React.ElementType; value: number; suffix: string; label: string; decimal?: boolean;
}) {
  const { ref, count } = useCounter(value, decimal);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="glass-card flex flex-col items-center p-6 text-center"
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-solar-gradient shadow-glow-orange">
        <Icon className="h-7 w-7 text-white" />
      </span>
      <div className="mt-4 font-hindi text-4xl font-black text-white">
        {decimal ? count.toFixed(1) : count}{suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-300">{label}</div>
    </div>
  );
}

export function AboutSection() {
  const { ref, isVisible } = useInView();

  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="bg-white">
      {/* Counters bar */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-950 to-ocean-900 py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {counters.map((c, i) => (
              <div
                key={c.label}
                className={anim(i * 80)}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <CounterCard {...c} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About content */}
      <div className="container-x py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div
            className={`relative ${anim(0)}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="तेजस सोलर प्रोजेक्ट"
                loading="lazy"
                className="h-96 w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100 sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-hindi text-sm font-bold text-slate-900">निवाई, राजस्थान</div>
                  <div className="text-xs text-slate-500">गंगोरी बाजार</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={anim(150)}
            style={{ transitionDelay: '150ms' }}
          >
            <span className="eyebrow">हमारे बारे में</span>
            <h2 className="mt-4 font-hindi text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              तेजस सोलर — <span className="text-gradient-orange">राजस्थान का भरोसेमंद</span> सोलर पार्टनर
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              <strong className="text-slate-800">{siteConfig.owner}</strong> जी के नेतृत्व में तेजस सोलर
              राजस्थान में सोलर एनर्जी के क्षेत्र में एक विश्वसनीय नाम बन चुका है।
              निवाई, गंगोरी बाजार से शुरू हुई यह यात्रा आज पूरे राजस्थान में सैकड़ों परिवारों
              और व्यवसायों तक पहुंच चुकी है।
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              हम MNRE अप्रूव्ड सोलर इंस्टॉलर हैं और PM सूर्य घर मुफ्त बिजली योजना,
              PM कुसुम योजना तथा अन्य सरकारी सब्सिडी में हमारे ग्राहकों की पूरी सहायता करते हैं।
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                '✅ MNRE अप्रूव्ड इंस्टॉलर',
                '✅ 5+ वर्षों का अनुभव',
                '✅ 25 वर्ष पैनल वारंटी',
                '✅ निःशुल्क साइट विजिट',
                '✅ सब्सिडी में पूरी मदद',
                '✅ सोलर AMC उपलब्ध',
              ].map(p => (
                <div key={p} className="rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-100">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-20">
          <div className="text-center">
            <span className="eyebrow">हमें क्यों चुनें</span>
            <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl">
              तेजस सोलर की <span className="text-gradient-orange">विशेषताएं</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((item, i) => (
              <div
                key={item.title}
                className={`group card-white p-6 ${anim(i * 60)}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-ocean-600 to-brand-500 text-white shadow-lg shadow-ocean-600/20 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-hindi text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
