import { useEffect, useRef, useState } from 'react';

/** Returns a ref + boolean. Once the element scrolls into view, isVisible flips true. */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setIsVisible(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, isVisible };
}

/** Animated counter hook */
export function useCounter(target: number, decimal = false, duration = 1800) {
  const ref = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 50;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(decimal ? Math.round(cur * 10) / 10 : Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(id);
  }, [started, target, decimal, duration]);

  return { ref, count };
}

/** CSS class helpers for staggered reveal */
export function revealClass(isVisible: boolean): string {
  return isVisible
    ? `opacity-100 translate-y-0 transition-all duration-700 ease-out`
    : 'opacity-0 translate-y-8';
}

export function delayStyle(delay: number) {
  return { transitionDelay: `${delay}ms` };
}
