import { useEffect, useRef } from 'react';

const stats = [
  { value: '10,000+', label: 'Sales Professionals' },
  { value: '65-75%', label: 'Connection Acceptance' },
  { value: '45-60%', label: 'DM Response Rate' },
  { value: '40%', label: 'Faster Deal Cycles' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-bg"
      id="hero"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/8 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        {/* Badge */}
        <div className="fade-in fade-in-delay-1 inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 badge-pulse">
          <div className="w-2 h-2 rounded-full bg-blue-400 pulse-glow" />
          <span className="text-blue-300 text-sm font-medium">AI-Powered LinkedIn Sales Tool</span>
        </div>

        {/* H1 */}
        <h1 className="fade-in fade-in-delay-2 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
          <span className="gradient-text-white">Turn LinkedIn Comments</span>
          <br />
          <span className="gradient-text">into Sales Conversations</span>
        </h1>

        {/* Subheadline */}
        <p className="fade-in fade-in-delay-2 text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
          The best salespeople don't start with a pitch. They start with a comment.
        </p>

        <p className="fade-in fade-in-delay-3 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Before the connection request. Before the cold DM. Before the InMail. They show up — consistently, thoughtfully, strategically — in their prospects' comment sections.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand text-white font-bold text-base px-8 py-4 rounded-full shadow-2xl shadow-blue-500/30 glow-blue-strong flex items-center gap-3 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 2.25c1.714 0 3.32.44 4.72 1.213L5.463 16.72A9.712 9.712 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75zm0 19.5c-1.714 0-3.32-.44-4.72-1.213L18.537 7.28A9.712 9.712 0 0121.75 12c0 5.385-4.365 9.75-9.75 9.75z"/>
            </svg>
            <span>Add ReplyChief to Chrome – It's Free</span>
          </a>
          <a
            href="#pricing"
            className="text-slate-300 hover:text-white text-base font-medium px-6 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
          >
            View Pricing
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        <p className="fade-in fade-in-delay-3 text-slate-500 text-sm mb-4">
          Trusted by <span className="text-blue-400 font-semibold">10,000+</span> sales professionals, SDRs, account executives, and revenue teams
        </p>

        {/* SEO internal links strip */}
        <div className="fade-in fade-in-delay-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-600 mb-12">
          <a href="https://replychief.com/free-linkedin-comment-generator" className="hover:text-blue-400 transition-colors underline underline-offset-2">Free LinkedIn Comment Generator</a>
          <span className="text-slate-700">·</span>
          <a href="https://replychief.com/ai-linkedin-comment-generator" className="hover:text-blue-400 transition-colors underline underline-offset-2">AI LinkedIn Comment Generator</a>
          <span className="text-slate-700">·</span>
          <a href="https://replychief.com/best-linkedin-engagement-tools-2026" className="hover:text-blue-400 transition-colors underline underline-offset-2">Best LinkedIn Engagement Tools 2026</a>
          <span className="text-slate-700">·</span>
          <a href="https://replychief.com/linkedin-engagement-chrome-extension" className="hover:text-blue-400 transition-colors underline underline-offset-2">LinkedIn Engagement Chrome Extension</a>
        </div>

        {/* Stats Grid */}
        <div className="fade-in fade-in-delay-4 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="glass card-3d rounded-2xl p-5 text-center">
              <div className="stat-number text-2xl sm:text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="fade-in fade-in-delay-4 mt-12 flex flex-wrap justify-center items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            <span>Safe for LinkedIn accounts</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            <span>Setup in under 60 seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            <span>Chrome, Edge, Brave & more</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
