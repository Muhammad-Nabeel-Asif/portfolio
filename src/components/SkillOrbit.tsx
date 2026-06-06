import { useState } from 'react';
import { Search, Server, Shield, BrainCircuit, Workflow, Database, RefreshCw } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export default function SkillOrbit() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Stack', icon: Server },
    { id: 'core', label: 'Languages', icon: Shield },
    { id: 'frameworks', label: 'Frameworks', icon: BrainCircuit },
    { id: 'messaging', label: 'Orchestration / Queues', icon: Workflow },
    { id: 'databases', label: 'Data & Cache', icon: Database },
    { id: 'infra', label: 'Cloud & Infrastructure', icon: RefreshCw },
  ];

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white border border-zinc-200 p-4 sm:p-6 rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-200 pb-5 mb-6 gap-4">
        <div>
          <h2 className="text-fluid-h2 font-bold text-zinc-900 font-sans">Technical Competencies & Systems Grip</h2>
          <p className="text-xs text-zinc-600 font-sans mt-0.5">Explore granular details, production years, and design capabilities of my tech toolbelt.</p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-none md:max-w-xs w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <input
            id="skill-search"
            type="text"
            placeholder="Search competencies (e.g., Temporal)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 hover:border-zinc-400 py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-emerald-500 font-mono transition-all"
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-row md:flex-wrap overflow-x-auto md:overflow-x-visible pb-2.5 md:pb-0 gap-1.5 mb-8 scrollbar-thin">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`skill-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-pointer shrink-0 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-2xs font-mono border transition-all ${
                isActive
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              <Icon className="h-3 w-3" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill: Skill) => (
          <div
            key={skill.name}
            className="group flex flex-col justify-between border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 rounded-xl p-4 transition-all duration-150 shadow-inner"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-zinc-900 tracking-tight">{skill.name}</span>
                <span className="text-3xs font-mono text-zinc-500 px-2 py-0.5 rounded border border-zinc-200 bg-white">
                  {skill.yearsOfExperience} years
                </span>
              </div>
              
              <p className="text-2xs text-zinc-600 leading-relaxed font-sans mb-4 min-h-[36px]">
                {skill.description}
              </p>
            </div>

            {/* Micro progress indicator */}
            <div className="mt-3">
              <div className="flex items-center justify-between font-mono text-3xs text-zinc-500 mb-1.5">
                <span>SYSTEM DEPTH</span>
                <span className="text-zinc-900 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500/80 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}

        {filteredSkills.length === 0 && (
          <div className="col-span-full py-12 text-center text-xs font-mono text-zinc-500">
            No technical matching keywords found for "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
}
