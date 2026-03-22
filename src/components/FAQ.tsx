import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'Will prospects know I\'m using AI to write comments?',
    a: 'No. ReplyChief\'s comments are specifically designed to sound natural and human — no generic phrases, no robotic patterns, no detectable AI markers. Your prospects will see thoughtful, relevant comments that reflect genuine expertise. The AI is invisible.',
  },
  {
    q: 'Is this considered spamming my prospects?',
    a: 'Not at all. You\'re leaving valuable, contextually relevant comments on publicly shared content. That\'s exactly how LinkedIn is designed to be used. Unlike cold DMs, commenting on someone\'s public post is a natural, welcomed form of engagement.',
  },
  {
    q: 'Can I use ReplyChief with LinkedIn Sales Navigator?',
    a: 'Yes. ReplyChief works seamlessly with both standard LinkedIn and Sales Navigator. Use Sales Navigator\'s advanced search and lead lists to identify prospects, then engage with their content using ReplyChief right in your feed.',
  },
  {
    q: 'Will this get my LinkedIn account banned?',
    a: 'No. ReplyChief runs as a Chrome extension in your browser. It never posts automatically — you always review and approve every comment. It uses smart pacing to stay within LinkedIn\'s activity thresholds. Zero ReplyChief users have ever had account restrictions.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most sales professionals report increased profile views within the first week. Connection request acceptance rates typically improve within 2–3 weeks as prospects begin recognizing your name. Inbound conversations and pipeline impact usually become measurable within 30–60 days.',
  },
  {
    q: 'Can my sales manager track my engagement?',
    a: 'On team plans, yes. Sales managers can view team-wide engagement analytics, including comment volume, prospect coverage, and engagement trends. Individual plan users have access to their own personal engagement dashboard.',
  },
  {
    q: 'What if my prospect posts in a language other than English?',
    a: 'ReplyChief supports comments in English, Spanish, French, German, Portuguese, Dutch, Italian, and Hindi. If your prospect posts in a supported language, ReplyChief can generate contextually relevant comments in that language.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section id="faq" ref={sectionRef} className="relative py-24 bg-slate-900">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-white">Got Questions?</span>
            <br />
            <span className="gradient-text">We've Got Answers.</span>
          </h2>
        </div>

        <div className="fade-in space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i ? 'border-blue-500/40' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? 'bg-blue-500 rotate-45' : 'bg-white/5'
                }`}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
