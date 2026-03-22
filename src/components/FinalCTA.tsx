import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 pulse-glow" />
          <span className="text-blue-300 text-sm font-medium">Stop Cold Outreach. Start Warm Engagement.</span>
        </div>

        <h2 className="fade-in text-3xl sm:text-4xl lg:text-6xl font-black mb-8 leading-tight">
          <span className="text-white">Every cold DM is a gamble.</span>
          <br />
          <span className="gradient-text">Every comment is an investment.</span>
        </h2>

        <p className="fade-in text-slate-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          ReplyChief makes warm engagement effortless. Ten minutes a day. Twenty prospect comments. Zero burnout. And a pipeline that grows because your prospects come to <em>you</em> — not because you chased them.
        </p>

        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand text-white font-bold text-base px-10 py-5 rounded-full shadow-2xl shadow-blue-500/30 glow-blue-strong flex items-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 2.25c1.714 0 3.32.44 4.72 1.213L5.463 16.72A9.712 9.712 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75zm0 19.5c-1.714 0-3.32-.44-4.72-1.213L18.537 7.28A9.712 9.712 0 0121.75 12c0 5.385-4.365 9.75-9.75 9.75z"/>
            </svg>
            <span>Add ReplyChief to Chrome – Start Warming Up Leads Today</span>
          </a>
        </div>

        <div className="fade-in mb-12">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors border border-blue-500/30 hover:border-blue-400/50 px-6 py-3 rounded-full"
          >
            Install Free — Your Pipeline Will Thank You
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        <div className="fade-in flex flex-wrap justify-center gap-6 text-slate-500 text-xs">
          <span>✅ Works with Chrome, Edge, Brave, Arc, Opera</span>
          <span>✅ LinkedIn account required</span>
          <span>✅ Setup takes less than 60 seconds</span>
        </div>
      </div>
    </section>
  );
}
