import { Server, GitFork, Bot, HardDrive, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  setActiveView: (view: string) => void;
}

export default function Hero({ setActiveView }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pt-20 border-b border-zinc-900">
      {/* Decorative ambient Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370e_1px,transparent_1px),linear-gradient(to_bottom,#1f29370e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          
          <div className="max-w-3xl flex-1">
            {/* Status tag */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-2xs font-mono text-emerald-400 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Senior / Lead Backend Positions</span>
            </div>

            {/* Display Headings */}
            <h1 className="text-fluid-display font-extrabold text-white font-sans">
              Engineering <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">Robust Backends</span> for High-Scale Applications
            </h1>
            
            <p className="mt-5 sm:mt-6 text-fluid-lead text-zinc-400 max-w-2xl font-sans">
              {PERSONAL_INFO.bio}
            </p>

            {/* Core specialites tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center space-x-1.5 rounded bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300">
                <Server className="h-3 w-3 text-emerald-400" />
                <span>Distributed Systems</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 rounded bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300">
                <Bot className="h-3 w-3 text-sky-400" />
                <span>Agentic AI Workflows</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 rounded bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300">
                <GitFork className="h-3 w-3 text-violet-400" />
                <span>Event Orchestration</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 rounded bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300">
                <HardDrive className="h-3 w-3 text-amber-500" />
                <span>API Architecture</span>
              </span>
            </div>

            {/* Micro Call-to-actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-view-arch"
                onClick={() => setActiveView('architecture')}
                className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-855 hover:border-zinc-700 transition-all active:scale-[0.98]"
              >
                Interactive System Designs
              </button>
              <button
                id="hero-view-api"
                onClick={() => setActiveView('api')}
                className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-emerald-500 text-black px-5 py-3 text-sm font-medium hover:bg-emerald-400 transition-all active:scale-[0.98]"
              >
                Run API Playground
              </button>
            </div>
          </div>

          {/* Quick Metrics display Board - Minimalist but techy */}
          <div className="w-full lg:w-[400px] bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-6 relative flex flex-col gap-5 sm:gap-6 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center space-x-2 font-mono text-3xs text-zinc-400">
                <Cpu className="h-3.5 w-3.5 text-emerald-500" />
                <span>METRICS // SYSTEM_OVERVIEW</span>
              </div>
              <span className="text-3xs font-mono text-emerald-400">READY</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col border border-zinc-800/40 rounded-xl bg-zinc-950/40 p-3.5 sm:p-4">
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-3xs font-medium text-zinc-400 mt-2 font-mono leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800/80 pt-4 text-3xs font-mono text-zinc-500 leading-normal">
              ⚡ Infrastructure components deployed securely across AWS/EC2 nodes. Zero unhandled downtime events logged across 8 modular production releases.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
