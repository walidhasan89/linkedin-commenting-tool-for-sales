import { useEffect, useRef } from 'react';

const commentTiers = [
  {
    tier: 'Tier 1',
    title: "Prospect's Original Content",
    priority: 'Highest Priority',
    description: "When your prospect writes and publishes their own post, that's gold. They've invested time and thought into creating content.",
    icon: '⭐',
    color: 'border-yellow-500/30',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
  },
  {
    tier: 'Tier 2',
    title: "Prospect's Shared Content",
    priority: 'High Priority',
    description: "When your prospect shares someone else's article with their own commentary, they're signaling what they care about.",
    icon: '🔄',
    color: 'border-blue-500/30',
    badgeColor: 'bg-blue-500/20 text-blue-300',
  },
  {
    tier: 'Tier 3',
    title: 'Posts Where Prospect Has Commented',
    priority: 'Medium Priority',
    description: 'Showing up in the same comment section creates organic visibility and shared context.',
    icon: '💡',
    color: 'border-purple-500/30',
    badgeColor: 'bg-purple-500/20 text-purple-300',
  },
  {
    tier: 'Tier 4',
    title: "Prospect's Company Page Content",
    priority: 'Supporting Priority',
    description: "Engaging with your prospect's company page shows you're paying attention to their business, not just their personal brand.",
    icon: '🏢',
    color: 'border-slate-500/30',
    badgeColor: 'bg-slate-500/20 text-slate-300',
  },
];

const commentTypes = [
  {
    title: 'Add a New Perspective',
    description: 'Bring an angle the poster and other commenters haven\'t considered.',
    icon: '🔭',
  },
  {
    title: 'Share Relevant Data',
    description: 'Reference specific statistics, research, or case studies that support or challenge the post.',
    icon: '📊',
  },
  {
    title: 'Ask a Thoughtful Question',
    description: 'Questions invite the poster to respond directly to you, creating a one-on-one conversation in public.',
    icon: '❓',
  },
  {
    title: 'Share a Related Experience',
    description: 'Briefly reference a relevant experience that complements the poster\'s point.',
    icon: '💼',
  },
  {
    title: 'Validate and Amplify',
    description: 'Genuinely endorse the poster\'s perspective and explain why it matters.',
    icon: '🚀',
  },
];

const badExample = `"Great post, John! Really insightful. Would love to connect and chat about how we help companies like yours."`;
const goodExample = `"The challenge you're describing around sensor data standardization across legacy equipment is one that most predictive maintenance discussions overlook. I've seen some organizations bridge that gap by starting with a pilot on their newest equipment lines first. Curious whether you've considered that phased approach or if the executive mandate is for a simultaneous rollout?"`;

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="relative py-24 bg-slate-900">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">How Sales Teams Use ReplyChief</span>
          </div>
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">A Prospecting Engine That Runs on</span>
            <br />
            <span className="gradient-text">Engagement, Not Interruption</span>
          </h2>
        </div>

        {/* Comment Example */}
        <div className="fade-in mb-16">
          <h3 className="text-white font-bold text-2xl mb-2 text-center">Comment on Prospect Posts Intelligently</h3>
          <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">The difference between a comment that builds trust and one that destroys it.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 border border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </div>
                <span className="text-red-400 font-semibold text-sm">Bad Sales Comment</span>
              </div>
              <p className="text-slate-400 text-sm italic leading-relaxed">"{badExample}"</p>
              <div className="mt-4 text-xs text-red-400/70">❌ Generic, strategic, destroys trust</div>
            </div>

            <div className="glass rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <span className="text-emerald-400 font-semibold text-sm">ReplyChief Generates</span>
              </div>
              <p className="text-slate-300 text-sm italic leading-relaxed">"{goodExample}"</p>
              <div className="mt-4 text-xs text-emerald-400/70">✅ Specific, insightful, builds trust in seconds</div>
            </div>
          </div>
        </div>

        {/* Targeting Tiers */}
        <div className="fade-in mb-16">
          <h3 className="text-white font-bold text-2xl mb-2 text-center">Targeting the Right Posts</h3>
          <p className="text-slate-400 text-center mb-8 max-w-xl mx-auto">Not all prospect posts are created equal. Here's how to prioritize:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commentTiers.map((tier) => (
              <div key={tier.tier} className={`card-3d glass rounded-2xl p-6 border ${tier.color}`}>
                <div className="text-2xl mb-3">{tier.icon}</div>
                <div className={`inline-block text-xs px-2 py-1 rounded-full mb-2 font-semibold ${tier.badgeColor}`}>{tier.priority}</div>
                <h4 className="text-white font-bold text-sm mb-2">{tier.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            Pro Tip: Aim for <span className="text-blue-400">60% Tier 1, 20% Tier 2, 10% Tier 3, 10% Tier 4</span> per prospect weekly
          </p>
        </div>

        {/* Comment Types */}
        <div className="fade-in mb-16">
          <h3 className="text-white font-bold text-2xl mb-8 text-center">5 Types of Value-Driven Comments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {commentTypes.map((type) => (
              <div key={type.title} className="card-3d glass rounded-2xl p-5 text-center border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-2">{type.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timing section */}
        <div className="fade-in glass rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-white font-bold text-2xl mb-6 text-center">Optimal Commenting Windows</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { time: '7:00–8:30 AM', label: 'Morning Scroll', desc: 'First LinkedIn check of the day' },
              { time: '11:30 AM–1 PM', label: 'Lunch Break', desc: 'High engagement for thought leadership' },
              { time: '5:00–6:30 PM', label: 'End of Day', desc: 'Professionals catching up on content' },
              { time: 'Sunday 7–9 PM', label: 'Pre-Week Mode', desc: 'Senior leaders preparing for Monday' },
            ].map((window) => (
              <div key={window.time} className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/20">
                <div className="text-blue-300 font-bold text-sm mb-1">{window.time}</div>
                <div className="text-white text-xs font-semibold mb-1">{window.label}</div>
                <div className="text-slate-400 text-xs">{window.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center glass rounded-xl p-4 border border-blue-400/20">
            <p className="text-blue-300 font-semibold text-sm">
              💡 Pro Tip: Set a daily 10-minute "prospect engagement block" at 8:00 AM. Ten minutes. Twenty comments. Zero burnout. Maximum impact.
            </p>
          </div>
        </div>

        {/* SEO internal links */}
        <div className="fade-in mt-10 glass rounded-2xl p-6 border border-slate-700/40">
          <p className="text-slate-500 text-xs text-center mb-4 font-medium uppercase tracking-wider">Related Resources</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-center">
            <a
              href="https://replychief.com/ai-linkedin-comment-generator"
              className="glass rounded-xl p-4 border border-blue-500/10 hover:border-blue-500/30 text-blue-400/80 hover:text-blue-400 transition-all duration-200 block"
            >
              <div className="text-xl mb-1">🤖</div>
              <div className="font-semibold text-xs">AI LinkedIn Comment Generator</div>
              <div className="text-slate-500 text-xs mt-1">Generate comments in seconds</div>
            </a>
            <a
              href="https://replychief.com/linkedin-engagement-chrome-extension"
              className="glass rounded-xl p-4 border border-blue-500/10 hover:border-blue-500/30 text-blue-400/80 hover:text-blue-400 transition-all duration-200 block"
            >
              <div className="text-xl mb-1">🔌</div>
              <div className="font-semibold text-xs">LinkedIn Engagement Chrome Extension</div>
              <div className="text-slate-500 text-xs mt-1">Works right inside LinkedIn</div>
            </a>
            <a
              href="https://replychief.com/linkedin-comment-automation-tool"
              className="glass rounded-xl p-4 border border-blue-500/10 hover:border-blue-500/30 text-blue-400/80 hover:text-blue-400 transition-all duration-200 block"
            >
              <div className="text-xl mb-1">⚡</div>
              <div className="font-semibold text-xs">LinkedIn Comment Automation Tool</div>
              <div className="text-slate-500 text-xs mt-1">Scale your engagement safely</div>
            </a>
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
