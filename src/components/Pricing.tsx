import { useEffect, useRef, useState } from 'react';

const freePlan = [
  '10 comments/day',
  '5 basic tones',
  '1 device',
  'Basic support',
  'Full contextual post analysis',
  'Human review before every comment',
  'No credit card required',
];

const proPlan = [
  'Unlimited comments every day',
  'All 8 tones (Curious, Thought Leader, Direct & more)',
  '2 devices',
  'Priority support',
  'Advanced personalization & custom prompts',
  'Engagement tracking & prospect history',
  'Everything in Free',
];

const lifetimePlan = [
  'Unlimited forever — no renewals',
  'All future updates included free',
  '5 devices',
  'Lifetime priority support',
  'All future features & early access',
  'VIP beta features & founder channel',
  'Everything in Pro',
];

// Monthly price: $5.99/mo → $71.88/yr
// Yearly price: $59/yr
// Exact saving: $71.88 - $59 = $12.88 per year
const PRO_MONTHLY = 5.99;
const PRO_YEARLY = 59;
const PRO_MONTHLY_ANNUAL = +(PRO_MONTHLY * 12).toFixed(2); // 71.88
const PRO_YEARLY_SAVING = +(PRO_MONTHLY_ANNUAL - PRO_YEARLY).toFixed(2); // 12.88
const PRO_SAVING_PCT = Math.round(((PRO_MONTHLY_ANNUAL - PRO_YEARLY) / PRO_MONTHLY_ANNUAL) * 100); // 18

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [slotsLeft] = useState(47);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ctaUrl = 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 bg-slate-950">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">Simple, Transparent Pricing</span>
          </div>
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">Start Your</span>{' '}
            <span className="gradient-text">Free Trial</span>
          </h2>
          <p className="fade-in text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Install in 10 seconds. Start commenting in 60 seconds. Start seeing results in days. Choose the plan that fits your sales workflow.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="fade-in flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                background: isYearly
                  ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                  : 'rgba(255,255,255,0.1)',
              }}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Yearly
            </span>
            {/* Saving badge — only show on yearly */}
            <span
              className={`transition-all duration-300 text-xs font-bold px-3 py-1 rounded-full ${
                isYearly
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 opacity-100 scale-100'
                  : 'opacity-0 scale-75 pointer-events-none'
              }`}
              style={{ transformOrigin: 'left center' }}
            >
              Save ${PRO_YEARLY_SAVING}/yr ({PRO_SAVING_PCT}% off)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Free Plan */}
          <div className="card-3d glass rounded-2xl p-8 border border-white/10 flex flex-col">
            <div className="mb-6">
              <div className="text-slate-400 text-sm font-semibold mb-2">FREE</div>
              <div className="text-white text-5xl font-black mb-1">$0</div>
              <div className="text-slate-500 text-sm">Forever free</div>
            </div>
            <p className="text-slate-400 text-sm mb-6">Perfect for individual sales reps trying out the strategy</p>
            <ul className="space-y-3 flex-1 mb-8">
              {freePlan.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full check-icon flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 px-6 rounded-full border border-blue-500/50 text-blue-400 font-semibold text-sm hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
            >
              Start Free – No Credit Card Needed
            </a>
          </div>

          {/* Pro Plan */}
          <div
            className="card-3d glass rounded-2xl p-8 border border-blue-500/40 flex flex-col relative"
            style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)' }}
          >
            <div className="mb-6">
              <div className="text-blue-400 text-sm font-semibold mb-2">PRO</div>

              {/* Price display — animates on toggle */}
              <div className="flex items-end gap-2 mb-2 min-h-[56px]">
                <div className="text-white text-5xl font-black transition-all duration-300">
                  {isYearly ? `$${PRO_YEARLY}` : `$${PRO_MONTHLY}`}
                </div>
                <div className="text-slate-400 text-sm mb-2 transition-all duration-300">
                  {isYearly ? '/year' : '/month'}
                </div>
              </div>

              {/* Sub-line */}
              {isYearly ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-slate-500 text-sm line-through">${PRO_MONTHLY_ANNUAL}/yr</span>
                  <span className="text-emerald-400 font-semibold text-sm">
                    You save ${PRO_YEARLY_SAVING}
                  </span>
                </div>
              ) : (
                <div className="text-slate-500 text-sm">
                  or{' '}
                  <button
                    onClick={() => setIsYearly(true)}
                    className="text-emerald-400 font-semibold hover:underline focus:outline-none"
                  >
                    ${PRO_YEARLY}/year
                  </button>{' '}
                  — save ${PRO_YEARLY_SAVING}
                </div>
              )}
            </div>

            <p className="text-slate-400 text-sm mb-6">For sales professionals serious about social selling</p>
            <ul className="space-y-3 flex-1 mb-8">
              {proPlan.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full check-icon flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand block text-center py-3.5 px-6 rounded-full text-white font-semibold text-sm"
            >
              <span>
                {isYearly
                  ? `Get Pro – $${PRO_YEARLY}/year`
                  : `Get Pro – $${PRO_MONTHLY}/month`}
              </span>
            </a>
          </div>

          {/* Lifetime Plan */}
          <div
            className="card-3d rounded-2xl p-8 flex flex-col relative gradient-border"
            style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b)' }}
          >
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="popular-badge text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <span>⭐</span> Most Popular
              </div>
            </div>

            <div className="mb-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">LIFETIME</div>
              <div className="flex items-end gap-2 mb-1">
                <div className="text-white text-5xl font-black">$149</div>
                <div className="text-slate-400 text-sm mb-2">one-time</div>
              </div>
              <div className="text-slate-500 text-sm">
                🔥 Early Adopter Pricing –{' '}
                <span className="text-red-400 font-semibold">increases to $299</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">Pay once, sell forever. No monthly fees ever.</p>

            {/* Slots remaining */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-300 text-xs font-semibold">Early Adopter Slots</span>
                <span className="text-amber-300 text-xs font-bold">{slotsLeft}/100 remaining</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(slotsLeft / 100) * 100}%`,
                    background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
                  }}
                />
              </div>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {lifetimePlan.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full check-icon flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand block text-center py-3.5 px-6 rounded-full text-white font-bold text-sm glow-blue-strong"
            >
              <span>Claim Lifetime – $149 (Limited Slots)</span>
            </a>
          </div>
        </div>

        {/* All plans include */}
        <div className="fade-in glass rounded-2xl p-6 border border-white/5 mb-8">
          <h3 className="text-white font-semibold text-center mb-6">All Plans Include</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🔒', text: '30-day money-back guarantee' },
              { icon: '🔄', text: 'Cancel anytime, no contracts' },
              { icon: '💳', text: 'Secure payment via Stripe' },
              { icon: '🛡️', text: 'Enterprise-grade privacy' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team plans */}
        <div className="fade-in glass rounded-2xl p-8 border border-blue-500/20 text-center">
          <h3 className="text-white font-bold text-xl mb-3">For Sales Teams (5+ Seats)</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            Need to deploy ReplyChief across your entire sales organization? Get custom team pricing, centralized tone configuration, team analytics, and dedicated onboarding support.
          </p>
          <a
            href="https://replychief.com/support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 border border-blue-500/40 hover:bg-blue-500/10 transition-all px-6 py-3 rounded-full text-sm font-semibold"
          >
            Contact Sales for Team Pricing
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
