import { useState } from 'react';
import { useInView } from '../hooks/useReveal';
import {
  Send, AlertCircle, Phone, ShieldCheck, CheckCircle2,
  Loader2, RefreshCw, Lock
} from 'lucide-react';
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

type OtpStage = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified';

function generateOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function QuoteSection() {
  const { ref, isVisible } = useInView();
  const anim = (_delay: number) =>
    `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  // Form state
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: '',
    monthly_bill: '',
    solar_requirement: '',
    message: '',
  });
  const [formError, setFormError] = useState('');

  // OTP state
  const [otpStage, setOtpStage] = useState<OtpStage>('idle');
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(f => ({ ...f, [k]: e.target.value }));
      if (k === 'mobile') {
        setOtpStage('idle');
        setOtpInput('');
        setOtpError('');
      }
    };

  const isValidMobile = /^[6-9]\d{9}$/.test(form.mobile);

  // ── Send OTP ─────────────────────────────────────────────
  const handleSendOtp = () => {
    if (!isValidMobile) {
      setFormError('कृपया सही 10 अंक का मोबाइल नंबर दर्ज करें।');
      return;
    }
    setFormError('');
    setOtpError('');
    setOtpStage('sending');
    setOtpInput('');

    // Simulate network delay, then show OTP field
    // In production: replace with Firebase Auth / real SMS gateway
    setTimeout(() => {
      const code = generateOtp();
      setOtpCode(code);
      setOtpStage('sent');
      // Start 30-second resend timer
      setResendTimer(30);
      const interval = setInterval(() => {
        setResendTimer(t => {
          if (t <= 1) { clearInterval(interval); return 0; }
          return t - 1;
        });
      }, 1000);

      // Dev helper — log OTP to console (remove in production)
      console.info('[Tejas Solar] Demo OTP for', form.mobile, ':', code);
    }, 1500);
  };

  // ── Verify OTP ───────────────────────────────────────────
  const handleVerifyOtp = () => {
    if (otpInput.length !== 6) {
      setOtpError('कृपया 6 अंकों का OTP दर्ज करें।');
      return;
    }
    setOtpStage('verifying');
    setTimeout(() => {
      if (otpInput === otpCode) {
        setOtpStage('verified');
        setOtpError('');
      } else {
        setOtpError('गलत OTP। कृपया दोबारा कोशिश करें।');
        setOtpStage('sent');
      }
    }, 800);
  };

  // ── Submit → WhatsApp ────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.city || !form.solar_requirement) {
      setFormError('कृपया सभी आवश्यक फील्ड भरें।');
      return;
    }
    if (!isValidMobile) {
      setFormError('कृपया सही 10 अंक का मोबाइल नंबर दर्ज करें।');
      return;
    }
    if (otpStage !== 'verified') {
      setFormError('कृपया पहले OTP से मोबाइल नंबर सत्यापित करें।');
      return;
    }
    setFormError('');

    const lines = [
      `नमस्ते! मैं तेजस सोलर से सोलर कोटेशन लेना चाहता/चाहती हूं।`,
      ``,
      `👤 नाम: ${form.name.trim()}`,
      `📱 मोबाइल: ${form.mobile.trim()} ✅ OTP Verified`,
      `📍 शहर/गांव: ${form.city.trim()}`,
      ...(form.monthly_bill ? [`⚡ मासिक बिजली बिल: ₹${form.monthly_bill.trim()}`] : []),
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
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-ocean-500/10 blur-3xl" />

      <div className="container-x relative z-10">
        <div className={`text-center ${anim(0)}`}>
          <span className="eyebrow-dark">
            <ShieldCheck className="h-3.5 w-3.5" />
            OTP सत्यापित | निःशुल्क कोटेशन
          </span>
          <h2 className="mt-4 font-hindi text-3xl font-black text-white sm:text-4xl">
            <span className="shimmer-text">निःशुल्क साइट विजिट</span> बुक करें
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            OTP से मोबाइल सत्यापित करें, फॉर्म भरें — WhatsApp पर सीधे कोटेशन पाएं।
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
          <div
            className={`glass-card overflow-hidden ${anim(150)}`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Progress bar at top */}
            <div className="flex">
              {[
                { label: '1. जानकारी', done: form.name && form.mobile && form.city && form.solar_requirement },
                { label: '2. OTP सत्यापन', done: otpStage === 'verified' },
                { label: '3. Submit', done: false },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`flex-1 py-2.5 text-center text-xs font-semibold transition-colors ${
                    step.done
                      ? 'bg-green-600/30 text-green-300'
                      : i === 0
                      ? 'bg-white/10 text-slate-300'
                      : 'bg-white/5 text-slate-500'
                  }`}
                >
                  {step.done ? <CheckCircle2 className="inline mr-1 h-3.5 w-3.5" /> : null}
                  {step.label}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 p-8 sm:grid-cols-2" noValidate>

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  पूरा नाम <span className="text-red-400">*</span>
                </label>
                <input
                  value={form.name} onChange={update('name')} type="text"
                  placeholder="आपका पूरा नाम"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  शहर / गांव <span className="text-red-400">*</span>
                </label>
                <input
                  value={form.city} onChange={update('city')} type="text"
                  placeholder="जैसे: निवाई, टोंक"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              {/* Mobile + OTP — full width */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  मोबाइल नंबर <span className="text-red-400">*</span>
                  {otpStage === 'verified' && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400 ring-1 ring-green-500/30">
                      <CheckCircle2 className="h-3 w-3" /> सत्यापित
                    </span>
                  )}
                </label>

                {/* Mobile row */}
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">+91</span>
                    <input
                      value={form.mobile} onChange={update('mobile')} type="tel"
                      maxLength={10} placeholder="10 अंक का नंबर"
                      disabled={otpStage === 'verified'}
                      className={`w-full rounded-xl border px-4 py-3 pl-11 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none transition ${
                        otpStage === 'verified'
                          ? 'border-green-500/40 bg-green-900/20 cursor-not-allowed'
                          : isValidMobile && form.mobile
                          ? 'border-green-500/40 bg-white/10'
                          : 'border-white/20 bg-white/10'
                      }`}
                    />
                  </div>

                  {otpStage !== 'verified' && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={!isValidMobile || otpStage === 'sending' || (otpStage === 'sent' && resendTimer > 0)}
                      className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-ocean-600 to-ocean-700 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-ocean-700 hover:to-ocean-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {otpStage === 'sending' ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> भेज रहे हैं</>
                      ) : otpStage === 'sent' && resendTimer > 0 ? (
                        <><RefreshCw className="h-4 w-4" /> {resendTimer}s</>
                      ) : (
                        <><Phone className="h-4 w-4" /> OTP भेजें</>
                      )}
                    </button>
                  )}
                </div>

                {/* Mobile validation hint */}
                {form.mobile && !isValidMobile && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-amber-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    कृपया सही 10 अंक का मोबाइल नंबर दर्ज करें।
                  </p>
                )}

                {/* OTP field */}
                {(otpStage === 'sent' || otpStage === 'verifying') && (
                  <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="mb-3 text-sm text-slate-300 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-solar-gold" />
                      +91 {form.mobile} पर OTP भेजा गया
                    </p>
                    <div className="flex gap-2">
                      <input
                        value={otpInput}
                        onChange={e => {
                          setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 6));
                          setOtpError('');
                        }}
                        type="tel"
                        maxLength={6}
                        placeholder="· · · · · ·"
                        className="otp-input flex-1"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otpInput.length !== 6 || otpStage === 'verifying'}
                        className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-4 py-3 text-sm font-bold text-white shadow transition hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {otpStage === 'verifying' ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <><ShieldCheck className="h-4 w-4" /> सत्यापित</>
                        )}
                      </button>
                    </div>
                    {otpError && (
                      <p className="mt-2 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" /> {otpError}
                      </p>
                    )}
                    {resendTimer === 0 && (
                      <button type="button" onClick={handleSendOtp} className="mt-2 text-xs text-solar-gold underline hover:no-underline">
                        OTP दोबारा भेजें
                      </button>
                    )}
                  </div>
                )}

                {/* Verified banner */}
                {otpStage === 'verified' && (
                  <div className="mt-3 flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 ring-1 ring-green-500/20">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm font-semibold text-green-300">मोबाइल नंबर सफलतापूर्वक सत्यापित!</span>
                  </div>
                )}
              </div>

              {/* Monthly Bill */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  मासिक बिजली बिल (₹)
                </label>
                <input
                  value={form.monthly_bill} onChange={update('monthly_bill')} type="number"
                  placeholder="जैसे: 2000"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              {/* Solar requirement */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  सोलर की जरूरत <span className="text-red-400">*</span>
                </label>
                <select
                  value={form.solar_requirement} onChange={update('solar_requirement')}
                  className="w-full rounded-xl border border-white/20 bg-ocean-900 px-4 py-3 text-white focus:border-solar-gold focus:outline-none"
                >
                  <option value="">-- चुनें --</option>
                  {requirements.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  संदेश (वैकल्पिक)
                </label>
                <textarea
                  value={form.message} onChange={update('message')} rows={3}
                  placeholder="कोई विशेष जानकारी या सवाल..."
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-solar-gold focus:outline-none"
                />
              </div>

              {/* Error */}
              {formError && (
                <div className="sm:col-span-2 flex items-start gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-300 ring-1 ring-red-500/20">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {formError}
                </div>
              )}

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={otpStage !== 'verified'}
                  className="btn-orange w-full text-base disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp पर कोटेशन भेजें
                  <Send className="h-4 w-4" />
                </button>
                {otpStage !== 'verified' && (
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                    <Lock className="h-3.5 w-3.5" />
                    Submit के लिए OTP सत्यापन अनिवार्य है।
                  </p>
                )}
                {otpStage === 'verified' && (
                  <p className="mt-3 text-center text-xs text-slate-400">
                    Submit करते ही WhatsApp खुलेगा — सभी जानकारी स्वतः भर जाएगी।
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
