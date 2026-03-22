import { useEffect, useRef } from 'react';

const metrics = [
  { label: 'Daily comments per rep', before: '3–4 (manual)', after: '18–22 (ReplyChief)', change: '+475%', positive: true },
  { label: 'Time spent commenting', before: '35–45 min/day', after: '10–12 min/day', change: '-73%', positive: true },
  { label: 'Connection acceptance rate', before: '22%', after: '64%', change: '+191%', positive: true },
  { label: 'DM response rate', before: '6%', after: '41%', change: '+583%', positive: true },
  { label: 'Inbound leads (monthly)', before: '45', after: '63', change: '+40%', positive: true },
  { label: 'Cost per qualified lead', before: '$340', after: '$205', change: '-40%', positive: true },
  { label: 'Average deal cycle', before: '58 days', after: '39 days', change: '-33%', positive: true },
  { label: 'Pipeline (quarterly)', before: '$2.1M', after: '$3.4M', change: '+62%', positive: true },
];

export default function CaseStudy() {
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
    <section id="case-study" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">Real Results</span>
          </div>
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">How a B2B SaaS Team</span>
            <br />
            <span className="gradient-text">Increased Inbound Leads by 40%</span>
          </h2>
          <div className="fade-in flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="glass px-3 py-1.5 rounded-full">🏢 200 Employees</span>
            <span className="glass px-3 py-1.5 rounded-full">💰 $35M ARR</span>
            <span className="glass px-3 py-1.5 rounded-full">👥 24 Sales Reps</span>
            <span className="glass px-3 py-1.5 rounded-full">📊 ERP Solutions</span>
          </div>
        </div>

        {/* Problem statement */}
        <div className="fade-in glass rounded-2xl p-8 border border-red-500/20 mb-8">
          <h3 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-2">
            <span>⚠️</span> The Problem
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {[
              { label: 'InMail Response Rate', value: '4.2%', sub: 'Before ReplyChief' },
              { label: 'Cold Email Reply Rate', value: '2.8%', sub: 'Before ReplyChief' },
              { label: 'Cost Per Lead Increase', value: '+55%', sub: 'Year-over-year' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-red-400 mb-1">{s.value}</div>
                <div className="text-white text-sm font-semibold">{s.label}</div>
                <div className="text-slate-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-red-500/50 pl-4 text-slate-400 italic text-sm leading-relaxed">
            "We were doing everything by the book — personalized templates, multi-channel sequences, trigger-based outreach. And it was still declining. We needed a fundamentally different approach."
            <footer className="text-slate-500 mt-2 not-italic">— Ryan M., VP of Sales</footer>
          </blockquote>
        </div>

        {/* Results table */}
        <div className="fade-in glass rounded-2xl overflow-hidden border border-blue-500/20 mb-8">
          <div className="p-6 border-b border-blue-500/10">
            <h3 className="text-white font-bold text-xl flex items-center gap-2">
              <span>📈</span> 90-Day Results
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-3 text-slate-400 font-semibold">Metric</th>
                  <th className="text-center px-6 py-3 text-red-400 font-semibold">Before</th>
                  <th className="text-center px-6 py-3 text-emerald-400 font-semibold">After (90 Days)</th>
                  <th className="text-center px-6 py-3 text-blue-400 font-semibold">Change</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((row, i) => (
                  <tr key={row.label} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} hover:bg-white/[0.04] transition-colors`}>
                    <td className="px-6 py-3 text-slate-300">{row.label}</td>
                    <td className="px-6 py-3 text-center text-red-300/70">{row.before}</td>
                    <td className="px-6 py-3 text-center text-emerald-300 font-semibold">{row.after}</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-blue-300 font-bold">{row.change}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key insights */}
        <div className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {[
            {
              number: '01',
              title: 'Prospects Started Reaching Out First',
              quote: '"We had a CFO at a target account message our AE: \'I keep seeing your comments on my posts. You clearly understand our industry. Are you available for a call next week?\' That never would have happened through cold outreach."',
            },
            {
              number: '02',
              title: 'Comment Quality Exceeded Manual Work',
              quote: '"Honestly, the AI comments were better than what most of our reps were writing manually. More specific. More insightful. More likely to spark a reply. The AI didn\'t have bad days or writer\'s block."',
            },
            {
              number: '03',
              title: 'Zero Account Safety Issues',
              quote: 'Across 24 accounts running ReplyChief for 90 days, there were zero restrictions, zero warnings, and zero flags from LinkedIn. The browser-based architecture kept every account completely safe.',
            },
            {
              number: '04',
              title: 'Near-Universal Team Adoption',
              quote: 'Unlike other sales tools that face adoption resistance, ReplyChief integrated seamlessly. Of 24 team members, 22 were using it daily by the end of the first month.',
            },
          ].map((insight) => (
            <div key={insight.number} className="card-3d glass rounded-2xl p-6 border border-blue-500/15">
              <div className="gradient-text text-4xl font-black mb-3 opacity-30">{insight.number}</div>
              <h4 className="text-white font-bold text-lg mb-3">{insight.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed italic">{insight.quote}</p>
            </div>
          ))}
        </div>

        {/* SEO contextual links */}
        <div className="fade-in glass rounded-2xl p-6 border border-blue-500/15 mb-8">
          <p className="text-slate-400 text-sm leading-relaxed text-center">
            Want to see how ReplyChief stacks up against competitors? Read our independent roundup of the{' '}
            <a href="https://replychief.com/best-linkedin-engagement-tools-2026" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
              best LinkedIn engagement tools in 2026
            </a>
            . Or explore how{' '}
            <a href="https://replychief.com/linkedin-ai-reply-suggestions" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">
              LinkedIn AI reply suggestions
            </a>{' '}
            can help your team respond faster to inbound conversations once the warm-up loop starts generating replies.
          </p>
        </div>

        {/* Final quote */}
        <div className="fade-in gradient-border rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">"</div>
          <blockquote className="text-slate-200 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            ReplyChief didn't just add a tool to our sales stack — it changed our entire prospecting philosophy. Pipeline is up 62%. Inbound leads are up 40%. And our team actually enjoys the process now because commenting with ReplyChief feels effortless.
            <br /><br />
            If you're running a B2B sales team and you're not using ReplyChief, you're leaving pipeline on the table.
          </blockquote>
          <div className="text-blue-400 font-semibold">Ryan M.</div>
          <div className="text-slate-500 text-sm">VP of Sales, B2B SaaS Company</div>
        </div>
      </div>
    </section>
  );
}
