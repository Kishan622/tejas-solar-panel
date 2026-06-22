import { useState } from 'react';
import { useInView } from '../hooks/useReveal';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../lib/data';

export function FAQSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow">अक्सर पूछे जाने वाले सवाल</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl">
            आपके <span className="text-gradient-orange">सवाल</span>, हमारे जवाब
          </h2>
        </div>

        <div className="mt-12 mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ring-1 ring-slate-100 ${anim(i * 60)}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left transition hover:bg-slate-50"
              >
                <span className="font-hindi text-base font-bold text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
