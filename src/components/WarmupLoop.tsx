import { useEffect, useRef } from 'react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Observe',
    time: 'Days 1–3',
    description: 'Follow your prospect. Study their posts. Understand what they care about, what they\'re working on, what challenges they\'re facing. Don\'t engage yet — just listen.',
    icon: '👁️',
    color: 'from-slate-700 to-slate-600',
    borderColor: 'border-slate-500/30',
  },
  {
    phase: 'Phase 2',
    title: 'Engage',
    time: 'Days 4–14',
    description: 'Start commenting on their posts. 2–3 thoughtful comments per week. Each comment should add genuine value: an insight, a relevant question, a complementary data point.',
    icon: '💬',
    color: 'from-blue-900 to-blue-800',
    borderColor: 'border-blue-500/30',
  },
  {
    phase: 'Phase 3',
    title: 'Connect',
    time: 'Day 14–21',
    description: 'Send a connection request with a personalized note. The prospect recognizes your name. They\'ve seen your thoughtful engagement. They accept.',
    icon: '🤝',
    color: 'from-indigo-900 to-indigo-800',
    borderColor: 'border-indigo-500/30',
  },
  {
    phase: 'Phase 4',
    title: 'Converse',
    time: 'Day 21–30',
    description: 'Now you send a direct message. But it doesn\'t feel cold. It feels like a continuation of an existing relationship. The prospect replies because you\'re no longer a stranger.',
    icon: '✉️',
    color: 'from-violet-900 to-violet-800',
    borderColor: 'border-violet-500/30',
  },
  {
    phase: 'Phase 5',
    title: 'Convert',
    time: 'Day 30+',
    description: 'The conversation flows naturally into a discovery call, a demo, a proposal. The deal progresses faster because trust was built before the first sales conversation.',
    icon: '🎯',
    color: 'from-blue-800 to-blue-700',
    borderColor: 'border-blue-400/30',
  },
];

const results = [
  { metric: 'Connection acceptance rate', value: '65–75%', vs: 'vs. 15–25% cold' },
  { metric: 'DM response rate', value: '45–60%', vs: 'vs. 3–10% cold' },
  { metric: 'Sales cycle reduction', value: '30–40%', vs: 'trust is pre-built' },
  { metric: 'Inbound conversations', value: '3–5x', vs: 'more than cold outreach' },
  { metric: 'Deal close rate', value: '25–35%', vs: 'higher than cold' },
];

export default function WarmupLoop() {
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

  return (
    <section id="warmup-loop" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">The Strategy</span>
          </div>
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">The</span>{' '}
            <span className="gradient-text">Warm-Up Loop Strategy</span>
          </h2>
          <p className="fade-in text-slate-400 text-lg max-w-2xl mx-auto">
            The engagement strategy quietly replacing cold outreach as the highest-converting sales tactic on LinkedIn.
          </p>
        </div>

        {/* Phase timeline */}
        <div className="fade-in relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <div
                key={phase.phase}
                className={`card-3d glass rounded-2xl p-6 border ${phase.borderColor} relative`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{phase.icon}</div>
                <div className="text-xs text-blue-400 font-semibold mb-1">{phase.phase}</div>
                <h3 className="text-white font-bold text-lg mb-1">{phase.title}</h3>
                <div className="text-xs text-slate-500 mb-3 font-medium">{phase.time}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
                {i < phases.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="fade-in gradient-border rounded-2xl p-8 mb-16">
          <h3 className="text-white font-bold text-2xl text-center mb-8">The Results Are Staggering</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {results.map((r) => (
              <div key={r.metric} className="text-center">
                <div className="stat-number text-3xl font-black mb-1">{r.value}</div>
                <div className="text-white text-sm font-semibold mb-1">{r.metric}</div>
                <div className="text-slate-500 text-xs">{r.vs}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO contextual links */}
        <div className="fade-in mb-8 text-center">
          <p className="text-slate-500 text-sm leading-relaxed">
            Looking to build thought leadership while warming up leads? Explore the{' '}
            <a href="https://replychief.com/linkedin-personal-branding-ai-tool" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
              LinkedIn personal branding AI tool
            </a>{' '}
            — or if you're a founder running your own outreach, see how the{' '}
            <a href="https://replychief.com/linkedin-comment-generator-for-founders" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
              LinkedIn comment generator for founders
            </a>{' '}
            can accelerate your pipeline.
          </p>
        </div>

        {/* Why ReplyChief */}
        <div className="fade-in glass rounded-2xl p-8 border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">That's Exactly Why ReplyChief Exists</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Commenting thoughtfully on 50–100 prospect posts per week takes hours. Hours that sales professionals don't have because they're already stretched between calls, demos, pipeline management, and quota pressure.
              </p>
              <p className="text-slate-400 leading-relaxed">
                ReplyChief automates the most time-consuming part of the Warm-Up Loop — the comment creation — while keeping every comment contextually relevant, genuinely insightful, and authentically human.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Without ReplyChief', sub: '3–5 posts/week', color: 'text-red-400', bg: 'bg-red-500/10' },
                { label: 'With ReplyChief', sub: '30–50 posts/week', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { label: 'Manual time', sub: '35–45 min/day', color: 'text-amber-400', bg: 'bg-amber-500/10' },
                { label: 'With ReplyChief', sub: '10 min/day', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-xl p-4 text-center`}>
                  <div className={`font-bold text-lg ${item.color}`}>{item.sub}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
