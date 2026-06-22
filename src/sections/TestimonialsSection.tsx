import { useInView } from '../hooks/useReveal';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../lib/data';

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow">ग्राहक समीक्षाएं</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl">
            हमारे <span className="text-gradient-orange">खुश ग्राहक</span> क्या कहते हैं
          </h2>
        </div>

        <div className={`mt-8 flex justify-center ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center gap-4 rounded-2xl bg-amber-50 px-8 py-4 ring-1 ring-amber-100">
            <div className="font-hindi text-5xl font-black text-amber-500">4.9</div>
            <div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
              </div>
              <div className="text-sm text-slate-600">500+ ग्राहकों की औसत रेटिंग</div>
            </div>
          </div>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className={`mb-5 break-inside-avoid card-white p-6 ${anim(i * 70)}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between">
                <Quote className="h-8 w-8 text-ocean-100" fill="currentColor" />
                <StarRow count={t.rating} />
              </div>
              <blockquote className="mt-4 font-hindi text-sm leading-relaxed text-slate-700">
                "{t.review}"
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ocean-600 to-brand-500 font-hindi text-sm font-bold text-white">
                  {t.customer_name[0]}
                </div>
                <div>
                  <div className="font-hindi text-sm font-bold text-slate-900">{t.customer_name}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
                <span className="ml-auto rounded-full bg-ocean-50 px-2.5 py-1 text-xs font-medium text-ocean-700 ring-1 ring-ocean-100">
                  {t.project_type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
