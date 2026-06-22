import { useState } from 'react';
import { useInView } from '../hooks/useReveal';
import { galleryImages } from '../lib/data';
import { X, ZoomIn } from 'lucide-react';

export function GallerySection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" ref={ref as React.RefObject<HTMLElement>} className="bg-slate-50 py-24">
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow">प्रोजेक्ट गैलरी</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-slate-900 sm:text-4xl">
            हमारे <span className="text-gradient-orange">पूर्ण प्रोजेक्ट</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">
            राजस्थान भर में पूर्ण किए गए सोलर प्रोजेक्ट।
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card cursor-pointer ${anim(i * 70)}`}
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="font-hindi text-sm font-bold text-white">{img.label}</div>
              </div>
              <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
