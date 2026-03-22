export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="https://replychief.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img
              src="https://replychief.com/asset/logo.png"
              alt="ReplyChief"
              className="h-7 w-auto"
            />
            <span className="text-white font-bold text-base tracking-tight">ReplyChief</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://replychief.com/privacy" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="https://replychief.com/terms" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="https://replychief.com/support" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              Support
            </a>
            <a href="https://replychief.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              Website
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-600 text-xs text-center">
            © 2026 ReplyChief. A product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors underline underline-offset-2"
            >
              Inoviqa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
