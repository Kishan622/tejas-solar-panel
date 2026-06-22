import { useState } from 'react';
import { useInView } from '../hooks/useReveal';
import { Send, AlertCircle } from 'lucide-react';
import { siteConfig } from '../lib/site-config';
import { WhatsAppIcon } from '../components/Navbar';

const requirements = [
  'आवासीय सोलर (Residential)',
  'व्यावसायिक सोलर (Commercial)',
  'औद्योगिक सोलर (Industrial)',
  'कृषि सोलर पंप (Agriculture)',
  'सोलर स्ट्रीट लाइट',
  'रूफटॉप सोलर',
  'अन्य (Other)',
];

export function QuoteSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: '',
    solar_requirement: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.city || !form.solar_requirement) {
      setErrorMsg('कृपया सभी आवश्यक फील्ड भरें।');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      setErrorMsg('कृपया सही 10 अंक का मोबाइल नंबर दर्ज करें।');
      return;
    }
    setErrorMsg('');

    const lines = [
      `नमस्ते! मैं तेजस सोलर से सोलर कोटेशन लेना चाहता/चाहती हूं।`,
      ``,
      `👤 नाम: ${form.name.trim()}`,
      `📱 मोबाइल: ${form.mobile.trim()}`,
      `📍 शहर/गांव: ${form.city.trim()}`,
      `☀️ सोलर जरूरत: ${form.solar_requirement}`,
      ...(form.message.trim() ? [`💬 संदेश: ${form.message.trim()}`] : []),
      ``,
      `कृपया निःशुल्क साइट विजिट बुक करें। धन्यवाद!`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${siteConfig.phone1Raw}?text=${text}`, '_blank');
  };

  return (
    <section
      id="quote"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-gradient-to-br from-ocean-900 via-ocean-950 to-slate-950 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="container-x">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow-dark">निःशुल्क कोटेशन</span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-white sm:text-4xl">
            <span className="shimmer-text">निःशुल्क साइट विजिट</span> बुक करें
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            नीचे फॉर्म भरें — Submit करते ही WhatsApp खुलेगा और हमारी टीम से सीधे बात होगी।
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
          <div
            className={`glass-card p-8 ${anim(150)}`}
            style={{ transitionDelay: '150ms' }}
          >
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  नाम <span className="text-red-400">*</span>
                </label>
                <input
                  value={form.name}
                  onChange={update('name')}
                  type="text"
                  placeholder="आपका पूरा नाम"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  मोबाइल <span className="text-red-400">*</span>
                </label>
                <input
                  value={form.mobile}
                  onChange={update('mobile')}
                  type="tel"
                  placeholder="10 अंक का नंबर"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  शहर / गांव <span className="text-red-400">*</span>
                </label>
                <input
                  value={form.city}
                  onChange={update('city')}
                  type="text"
                  placeholder="जैसे: निवाई, टोंक"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  सोलर की जरूरत <span className="text-red-400">*</span>
                </label>
                <select
                  value={form.solar_requirement}
                  onChange={update('solar_requirement')}
                  className="w-full rounded-xl border border-white/20 bg-ocean-900 px-4 py-3 text-white focus:border-solar-gold focus:outline-none"
                >
                  <option value="">-- चुनें --</option>
                  {requirements.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  संदेश (वैकल्पिक)
                </label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={3}
                  placeholder="कोई विशेष जानकारी या सवाल..."
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              {errorMsg && (
                <div className="sm:col-span-2 flex items-start gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-300 ring-1 ring-red-500/20">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="sm:col-span-2">
                <button type="submit" className="btn-orange w-full text-base">
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp पर कोटेशन भेजें
                  <Send className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Submit करते ही WhatsApp खुलेगा — सभी जानकारी स्वतः भर जाएगी।
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
