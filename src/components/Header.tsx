import { Mail, Linkedin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        
        {/* Logo and metadata info */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-950/10 text-emerald-400 sm:h-10 sm:w-10">
            <Terminal className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold tracking-tight text-white">{PERSONAL_INFO.name}</h1>
            <p className="truncate text-2xs font-mono text-emerald-400/80">{PERSONAL_INFO.title}</p>
          </div>
        </div>

        {/* Desktop Navigation Modes */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          <button
            id="nav-profile"
            onClick={() => setActiveView('profile')}
            className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-mono transition-all duration-150 ${
              activeView === 'profile'
                ? 'bg-zinc-800 text-white border border-zinc-700'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
            }`}
          >
            ~/experience
          </button>
          <button
            id="nav-architect"
            onClick={() => setActiveView('architecture')}
            className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-mono transition-all duration-150 ${
              activeView === 'architecture'
                ? 'bg-zinc-800 text-white border border-zinc-700'
                : 'text-emerald-400/90 hover:bg-zinc-900 hover:text-emerald-300'
            }`}
          >
            ~/system-architecture
          </button>
          <button
            id="nav-api"
            onClick={() => setActiveView('api')}
            className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-mono transition-all duration-150 ${
              activeView === 'api'
                ? 'bg-zinc-800 text-white border border-zinc-700'
                : 'text-sky-400/90 hover:bg-zinc-900 hover:text-sky-300'
            }`}
          >
            ~/api-sandbox
          </button>
        </nav>

        {/* Contact info and actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            id="linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            id="email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex h-9 w-9 xl:w-auto items-center justify-center space-x-2 rounded-lg border border-zinc-800 xl:px-3 text-xs text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
            title="Contact Email"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="hidden xl:inline">{PERSONAL_INFO.email}</span>
          </a>
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <div className="flex lg:hidden border-t border-zinc-900 bg-zinc-950 px-4 py-2 justify-around gap-1.5" aria-label="Mobile Navigation">
        <button
          id="mob-nav-profile"
          onClick={() => setActiveView('profile')}
          className={`flex-1 text-center py-1.5 text-2xs font-mono rounded-md ${
            activeView === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-500'
          }`}
        >
          Profile
        </button>
        <button
          id="mob-nav-arch"
          onClick={() => setActiveView('architecture')}
          className={`flex-1 text-center py-1.5 text-2xs font-mono rounded-md ${
            activeView === 'architecture' ? 'bg-zinc-900 text-emerald-400' : 'text-zinc-500'
          }`}
        >
          Architecture
        </button>
        <button
          id="mob-nav-api"
          onClick={() => setActiveView('api')}
          className={`flex-1 text-center py-1.5 text-2xs font-mono rounded-md ${
            activeView === 'api' ? 'bg-zinc-900 text-sky-400' : 'text-zinc-500'
          }`}
        >
          API Terminal
        </button>
      </div>
    </header>
  );
}
