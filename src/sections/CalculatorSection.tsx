import { useState } from 'react';
import { useInView } from '../hooks/useReveal';
import { Calculator, TrendingDown, BadgeIndianRupee, Clock } from 'lucide-react';

interface CalcResult {
  totalCost: number;
  subsidy: number;
  finalCost: number;
  monthlySaving: number;
  annualSaving: number;
  paybackYears: number;
}

function calcResults(monthlyBill: number, systemSize: number): CalcResult {
  const totalCost = systemSize * 65000;
  let subsidy = 0;
  if (systemSize <= 2) subsidy = systemSize * 30000;
  else if (systemSize <= 3) subsidy = 60000 + (systemSize - 2) * 18000;
  else subsidy = 60000 + 18000;
  subsidy = Math.min(subsidy, 78000);

  const finalCost = totalCost - subsidy;
  const unitsPerMonth = systemSize * 120;
  const rate = monthlyBill > 0 ? 8 : 8;
  const monthlySaving = Math.min(unitsPerMonth * rate, monthlyBill);
  const annualSaving = monthlySaving * 12;
  const paybackYears = annualSaving > 0 ? finalCost / annualSaving : 0;
  return { totalCost, subsidy, finalCost, monthlySaving, annualSaving, paybackYears };
}

export function CalculatorSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const [bill, setBill] = useState('');
  const [size, setSize] = useState('');
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalc = () => {
    const b = parseFloat(bill);
    const s = parseFloat(size);
    if (!b || !s || b <= 0 || s <= 0) return;
    setResult(calcResults(b, s));
  };

  const fmt = (n: number) => n.toLocaleString('hi-IN', { maximumFractionDigits: 0 });

  return (
    <section id="calculator" ref={ref as React.RefObject<HTMLElement>} className="relative bg-gradient-to-br from-ocean-900 via-ocean-950 to-slate-950 py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow-dark">
            <Calculator className="h-3.5 w-3.5" />
            सब्सिडी कैलकुलेटर
          </span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-white sm:text-4xl">
            अपनी <span className="shimmer-text">बचत और सब्सिडी</span> जानें
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            मासिक बिजली बिल और सिस्टम का साइज डालें — हम बताएंगे कितनी सब्सिडी और बचत होगी।
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Input */}
          <div className={`glass-card p-8 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
            <h3 className="font-hindi text-xl font-black text-white mb-6">जानकारी भरें</h3>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">मासिक बिजली बिल (₹)</label>
                <input
                  type="number"
                  value={bill}
                  onChange={e => setBill(e.target.value)}
                  placeholder="जैसे: 2000"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">सोलर सिस्टम साइज (kW)</label>
                <select
                  value={size}
                  onChange={e => setSize(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-ocean-900 px-4 py-3 text-white focus:border-solar-gold focus:outline-none"
                >
                  <option value="">सिस्टम साइज चुनें</option>
                  {[1,2,3,4,5,6,7,8,10].map(kw => (
                    <option key={kw} value={kw}>{kw} kW</option>
                  ))}
                </select>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-xs text-slate-300">
                <div className="font-semibold text-solar-gold mb-2">PM सूर्य घर सब्सिडी दर:</div>
                <div>• 1-2 kW: ₹30,000/kW</div>
                <div>• 2-3 kW: ₹18,000/kW (2kW के ऊपर)</div>
                <div>• अधिकतम: ₹78,000</div>
              </div>
              <button onClick={handleCalc} disabled={!bill || !size} className="btn-orange w-full disabled:opacity-50">
                <Calculator className="h-5 w-5" />
                कैलकुलेट करें
              </button>
            </div>
          </div>

          {/* Result */}
          <div className={`glass-card p-8 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="font-hindi text-xl font-black text-white mb-6">आपकी अनुमानित बचत</h3>
            {result ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: BadgeIndianRupee, label: 'कुल सिस्टम लागत',  value: `₹${fmt(result.totalCost)}`,    color: 'text-white' },
                    { icon: TrendingDown,     label: 'सरकारी सब्सिडी',   value: `₹${fmt(result.subsidy)}`,      color: 'text-green-400' },
                    { icon: BadgeIndianRupee, label: 'आपकी लागत',         value: `₹${fmt(result.finalCost)}`,   color: 'text-solar-gold' },
                    { icon: TrendingDown,     label: 'मासिक बचत',         value: `₹${fmt(result.monthlySaving)}`,color: 'text-green-400' },
                    { icon: BadgeIndianRupee, label: 'वार्षिक बचत',        value: `₹${fmt(result.annualSaving)}`, color: 'text-solar-gold' },
                    { icon: Clock,            label: 'Payback अवधि',       value: `${result.paybackYears.toFixed(1)} वर्ष`, color: 'text-blue-400' },
                  ].map(item => (
                    <div key={item.label} className="rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <item.icon className="h-3.5 w-3.5" /> {item.label}
                      </div>
                      <div className={`font-hindi text-xl font-black ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/30 p-4 text-center">
                  <div className="font-hindi text-xl font-black text-green-400">
                    25 वर्षों में ₹{fmt(result.annualSaving * 25)} की बचत
                  </div>
                  <div className="text-xs text-slate-300 mt-1">*अनुमानित। वास्तविक बिजली दर पर भिन्न हो सकता है।</div>
                </div>
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/20">
                <div className="text-5xl">☀️</div>
                <div className="font-hindi text-center text-slate-300">
                  बाईं ओर जानकारी भरें<br />
                  <span className="text-sm text-slate-400">और अपनी बचत जानें</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
