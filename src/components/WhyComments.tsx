import { useEffect, useRef } from 'react';

const comparisonData = [
  {
    aspect: 'Arrival context',
    inbox: 'Overcrowded inbox with 20+ sales messages',
    feed: 'Public, social comment section',
  },
  {
    aspect: 'Prior relationship',
    inbox: 'Zero – total stranger',
    feed: 'Familiar name from consistent engagement',
  },
  {
    aspect: 'Perception',
    inbox: '"I want something from you"',
    feed: '"I\'m contributing to your conversation"',
  },
  {
    aspect: 'Prospect mindset',
    inbox: 'Guard is up – sales-defense mode',
    feed: 'Guard is down – content-consumption mode',
  },
  {
    aspect: 'Social proof',
    inbox: 'None – no credibility context',
    feed: 'Your comment demonstrates expertise live',
  },
  {
    aspect: 'Follow-up options',
    inbox: 'Pushy or disappear',
    feed: 'Each comment adds value independently',
  },
  {
    aspect: 'Response rate',
    inbox: '3–10%',
    feed: '45–60%',
  },
  {
    aspect: 'Prospect perception',
    inbox: 'Salesperson',
    feed: 'Peer, expert, someone worth knowing',
  },
];

export default function WhyComments() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-comments" ref={sectionRef} className="relative py-24 bg-slate-950">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">The Data Doesn't Lie</span>
          </div>
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">Why LinkedIn Comments Beat</span>
            <br />
            <span className="gradient-text">Cold DMs for Sales</span>
          </h2>
          <p className="fade-in text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Your prospects hate your cold DMs. The average LinkedIn InMail response rate has dropped below 10% — for generic, templated outreach, it's closer to <span className="text-red-400 font-semibold">3%</span>. But here's what nobody's doing: engaging with their content before reaching out.
          </p>
        </div>

        {/* Stats row */}
        <div className="fade-in grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'Cold InMail Response Rate', value: '<10%', sub: 'Generic templates: ~3%', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
            { label: 'LinkedIn Inbox Overload', value: '15–30', sub: 'unsolicited messages per week per prospect', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
            { label: 'In-Feed Comment Response', value: '45–60%', sub: 'after consistent warm-up engagement', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
          ].map((stat) => (
            <div key={stat.label} className={`card-3d glass rounded-2xl p-6 border ${stat.bg} text-center`}>
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Psychology section */}
        <div className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-8 border border-red-500/15">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
              </div>
              <h3 className="text-white font-bold text-xl">Inbox Approach (Cold DM)</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">
              "When someone receives a cold DM, their brain triggers a <span className="text-red-400 font-semibold">defensive response</span>. Who is this person? What do they want? How do I get rid of them?"
            </p>
            <div className="space-y-3">
              {comparisonData.map((row) => (
                <div key={row.aspect} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                  <span className="text-slate-400 text-sm">{row.inbox}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-emerald-500/15">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="text-white font-bold text-xl">In-Feed Approach (Comments)</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">
              "When someone sees a thoughtful comment on their post, their brain triggers a <span className="text-emerald-400 font-semibold">reciprocity response</span>. This person took time to engage with my content. I should check out their profile."
            </p>
            <div className="space-y-3">
              {comparisonData.map((row) => (
                <div key={row.aspect} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="text-slate-300 text-sm">{row.feed}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* SEO internal links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="fade-in glass rounded-2xl p-5 border border-blue-500/10">
          <p className="text-slate-500 text-xs text-center mb-3 font-medium uppercase tracking-wider">Explore More ReplyChief Tools</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            <a href="https://replychief.com/linkedin-comment-automation-tool" className="text-blue-400/70 hover:text-blue-400 transition-colors underline underline-offset-2">
              LinkedIn Comment Automation Tool
            </a>
            <span className="text-slate-700">·</span>
            <a href="https://replychief.com/linkedin-ai-reply-suggestions" className="text-blue-400/70 hover:text-blue-400 transition-colors underline underline-offset-2">
              LinkedIn AI Reply Suggestions
            </a>
            <span className="text-slate-700">·</span>
            <a href="https://replychief.com/ai-writing-assistant-for-linkedin" className="text-blue-400/70 hover:text-blue-400 transition-colors underline underline-offset-2">
              AI Writing Assistant for LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
