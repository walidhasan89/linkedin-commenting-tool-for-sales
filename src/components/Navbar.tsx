import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Why Comments', href: '#why-comments' },
  { label: 'Warm-Up Loop', href: '#warmup-loop' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="https://replychief.com/asset/logo.png"
              alt="ReplyChief Logo"
              className="h-8 w-auto"
            />
            <span className="text-white font-bold text-lg tracking-tight">ReplyChief</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto scrollbar-none">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 2.25c1.714 0 3.32.44 4.72 1.213L5.463 16.72A9.712 9.712 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75zm0 19.5c-1.714 0-3.32-.44-4.72-1.213L18.537 7.28A9.712 9.712 0 0121.75 12c0 5.385-4.365 9.75-9.75 9.75z"/>
              </svg>
              <span>Add to Chrome – It's Free</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${menuOpen ? 'open' : ''} glass-dark`}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand text-white text-sm font-semibold px-4 py-2.5 rounded-full text-center mt-2 flex items-center justify-center gap-2"
          >
            <span>Add to Chrome – It's Free</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
