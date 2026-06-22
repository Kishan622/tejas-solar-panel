import { useInView } from '../hooks/useReveal';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { services } from '../lib/data';
import { callHref } from '../lib/site-config';

export function ServicesSection() {
  const { ref, isVisible } = useInView();

  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="bg-slate-50 py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow">हमारी सेवाएं</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            हर ज़रूरत के लिए <span className="text-gradient-orange">सोलर सॉल्यूशन</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            आवासीय से लेकर औद्योगिक तक — हम हर प्रकार का सोलर सिस्टम डिज़ाइन, सप्लाई और इंस्टॉल करते हैं।
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group card-white overflow-hidden ${anim(i * 80)}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className={`absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <service.icon className="h-6 w-6" />
                </span>
                <div className="absolute bottom-4 left-[60px] right-4">
                  <div className="font-hindi text-base font-black text-white leading-tight">{service.title}</div>
                  <div className="text-xs text-white/70">{service.titleEn}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-4 grid grid-cols-2 gap-1.5">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={callHref}
                  className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700 group-hover:gap-3"
                >
                  <Phone className="h-4 w-4" />
                  कोटेशन के लिए कॉल करें
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
