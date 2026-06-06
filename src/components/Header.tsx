import { Mail, Linkedin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        
        {/* Logo and metadata info */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-50 text-emerald-600 sm:h-10 sm:w-10">
            <Terminal className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold tracking-tight text-zinc-900">{PERSONAL_INFO.name}</h1>
            <p className="truncate text-2xs font-mono text-emerald-600">{PERSONAL_INFO.title}</p>
          </div>
        </div>

        {/* Contact actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            id="linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            id="email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex h-9 w-9 sm:w-auto items-center justify-center space-x-2 rounded-lg border border-zinc-300 sm:px-3 text-xs text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
            title="Contact Email"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
