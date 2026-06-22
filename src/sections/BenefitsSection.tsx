import { useInView } from '../hooks/useReveal';
import { benefits } from '../lib/data';

export function BenefitsSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-slate-50 py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow">सोलर के फायदे</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl">
            सोलर लगवाने के <span className="text-gradient-orange">6 बड़े फायदे</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group card-white p-7 ${anim(i * 70)}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${b.bg} transition-transform duration-300 group-hover:scale-110`}>
                <b.icon className={`h-7 w-7 ${b.color}`} />
              </span>
              <h3 className="mt-5 font-hindi text-xl font-black text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
