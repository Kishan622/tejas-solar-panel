import { useInView } from '../hooks/useReveal';
import { govtSchemes } from '../lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { callHref } from '../lib/site-config';

export function SchemesSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="schemes" ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow">सरकारी योजनाएं</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            सरकारी सब्सिडी से करें <span className="text-gradient-orange">बड़ी बचत</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            केंद्र और राज्य सरकार की योजनाओं में ₹78,000 तक की सब्सिडी।
            तेजस सोलर आपको आवेदन में पूरी मदद करता है।
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {govtSchemes.map((scheme, i) => (
            <div
              key={scheme.title}
              className={`group relative overflow-hidden rounded-2xl border p-7 bg-gradient-to-br transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${scheme.bg} ${scheme.border} ${anim(i * 100)}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${scheme.color} text-white shadow-lg`}>
                    <scheme.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-hindi text-lg font-black text-slate-900 leading-tight">{scheme.title}</h3>
                    <p className="text-xs font-medium text-slate-500">{scheme.subtitle}</p>
                  </div>
                </div>
                <span className={`shrink-0 rounded-full bg-gradient-to-r ${scheme.color} px-3 py-1.5 text-xs font-black text-white shadow whitespace-nowrap`}>
                  {scheme.subsidyText}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {scheme.points.map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {pt}
                  </li>
                ))}
              </ul>

              <a
                href={callHref}
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${scheme.color} px-5 py-2.5 text-sm font-bold text-white shadow transition hover:shadow-lg hover:-translate-y-0.5`}
              >
                योजना की जानकारी लें <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-10 rounded-2xl bg-gradient-to-r from-ocean-900 to-ocean-950 p-6 text-center ${anim(400)}`} style={{ transitionDelay: '400ms' }}>
          <div className="font-hindi text-lg font-black text-white">
            🏛️ MNRE (Ministry of New and Renewable Energy) अप्रूव्ड इंस्टॉलर
          </div>
          <p className="mt-2 text-sm text-slate-300">
            सब्सिडी प्राप्त करने के लिए MNRE अप्रूव्ड इंस्टॉलर से ही सिस्टम लगवाना जरूरी है।
            तेजस सोलर MNRE अप्रूव्ड है।
          </p>
        </div>
      </div>
    </section>
  );
}
