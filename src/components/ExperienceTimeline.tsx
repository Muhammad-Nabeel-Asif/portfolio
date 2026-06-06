import { useState } from 'react';
import { COMPANIES } from '../data/portfolioData';
import { Company, Project } from '../types';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

export default function ExperienceTimeline() {
  const [activeCompanyIdx, setActiveCompanyIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'contributions' | 'projects'>('contributions');

  const selectedCompany: Company = COMPANIES[activeCompanyIdx] || COMPANIES[0];

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-4 sm:p-6">
      <div className="border-b border-zinc-200 pb-5 mb-8">
        <h2 className="text-fluid-h2 font-bold text-zinc-900 font-sans flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-emerald-700" />
          <span>Professional Experience Timeline</span>
        </h2>
        <p className="text-xs text-zinc-600 font-sans mt-0.5">Filter work terms to audit technical contributions, corporate impact outcomes, and project portfolios.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Company selectors (horizontal scroll on mobile, vertical list on desktop) */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 border-b lg:border-b-0 lg:border-r border-zinc-200 lg:pr-4 scrollbar-thin" aria-label="Work Chronology">
          {COMPANIES.map((company, index) => {
            const isActive = index === activeCompanyIdx;
            return (
              <button
                key={company.name}
                id={`exp-btn-${index}`}
                onClick={() => {
                  setActiveCompanyIdx(index);
                  setActiveTab('contributions'); // Reset to default tab
                }}
                className={`cursor-pointer shrink-0 lg:shrink w-[200px] sm:w-[240px] lg:w-full text-left p-3.5 rounded-xl border transition-all duration-150 relative ${
                  isActive
                    ? 'bg-zinc-100 border-zinc-300 text-zinc-900 ring-1 ring-zinc-200 shadow-md'
                    : 'bg-transparent border-transparent text-zinc-500 hover:bg-zinc-100'
                }`}
              >
                {/* Visual cursor line for active items (left on desktop, bottom on mobile scroll) */}
                {isActive && (
                  <>
                    <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-505 rounded-r"></span>
                    <span className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-12 bg-emerald-505 rounded-t"></span>
                  </>
                )}
                
                <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{company.duration.split('(')[0].trim()}</h3>
                <h4 className="text-xs font-bold text-zinc-900 mt-1 leading-tight truncate">{company.name}</h4>
                <p className="text-3xs font-mono text-emerald-700 mt-1 truncate">{company.role}</p>
              </button>
            );
          })}
        </div>

        {/* Right column: Detailed achievements information panels */}
        <div className="lg:col-span-8 border border-zinc-200 bg-zinc-50 rounded-2xl p-4 sm:p-6 min-h-[460px] flex flex-col justify-between">
          
          <div>
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-200 pb-4 mb-6 gap-3">
              <div>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">{selectedCompany.role}</h3>
                <p className="text-3xs font-mono text-emerald-700 mt-1 uppercase">{selectedCompany.name}</p>
              </div>

              <div className="flex flex-col md:items-end text-3xs font-mono text-zinc-500 gap-1">
                <span className="flex items-center gap-1.5 justify-start md:justify-end">
                  <Calendar className="h-3 w-3 text-zinc-400" />
                  {selectedCompany.duration}
                </span>
                <span className="flex items-center gap-1.5 justify-start md:justify-end">
                  <MapPin className="h-3 w-3 text-zinc-400" />
                  {selectedCompany.location}
                </span>
              </div>
            </div>

            {/* Context paragraph */}
            <p className="text-xs text-zinc-600 font-sans leading-relaxed mb-6">
              {selectedCompany.description}
            </p>

            {/* Sub-tabs toggling Technical Contributions vs Key Projects */}
            <div className="flex space-x-1 border-b border-zinc-200 pb-px mb-6 overflow-x-auto scrollbar-thin">
              <button
                id="exp-tab-contribs"
                onClick={() => setActiveTab('contributions')}
                className={`cursor-pointer shrink-0 whitespace-nowrap pb-2.5 px-1 text-2xs font-mono font-medium transition-all duration-150 relative ${
                  activeTab === 'contributions'
                    ? 'text-zinc-900 border-b-2 border-emerald-500'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                Core_Technical_Achievements
              </button>
              {selectedCompany.keyProjects && selectedCompany.keyProjects.length > 0 && (
                <button
                  id="exp-tab-projects"
                  onClick={() => setActiveTab('projects')}
                  className={`cursor-pointer shrink-0 whitespace-nowrap pb-2.5 px-4 text-2xs font-mono font-medium transition-all duration-150 relative ${
                    activeTab === 'projects'
                      ? 'text-zinc-900 border-b-2 border-emerald-500'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  Notable_Production_Projects
                </button>
              )}
            </div>

            {/* Contributions Bullet Listing */}
            {activeTab === 'contributions' && (
              <ul className="space-y-4" aria-label="Technical Achievements">
                {selectedCompany.achievements.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                    <span className="text-xs text-zinc-700 leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Projects Directory Details */}
            {activeTab === 'projects' && selectedCompany.keyProjects && (
              <div className="space-y-6" aria-label="Projects Repository">
                {selectedCompany.keyProjects.map((project: Project) => (
                  <div key={project.id} className="border border-zinc-200 bg-zinc-50 rounded-xl p-4 sm:p-5 shadow-inner">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-200 pb-3 mb-4 gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900">{project.title}</h4>
                        <p className="text-3xs font-sans text-zinc-500 mt-1 leading-tight">{project.tagline}</p>
                      </div>
                      <span className="text-4xs font-mono text-emerald-700 uppercase border border-emerald-500/15 rounded bg-emerald-500/5 px-2 py-0.5 self-start md:self-auto">
                        {project.role}
                      </span>
                    </div>

                    <p className="text-2xs text-zinc-600 font-sans leading-normal mb-4">
                      {project.description}
                    </p>

                    {/* Impact metric logs */}
                    {project.impactMetrics && project.impactMetrics.length > 0 && (
                      <div className="my-4 border-l-2 border-emerald-500/40 pl-3 py-1 bg-emerald-500/5 rounded-r">
                        <span className="block text-4xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">KPI OVERVIEW</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {project.impactMetrics.map((kpi, idx) => (
                            <span key={idx} className="inline-flex items-center text-3xs font-mono text-emerald-700">
                              <ChevronRight className="h-3 w-3 shrink-0" />
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-4xs font-mono text-zinc-600 border border-zinc-200 bg-zinc-100 rounded px-1.5 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Bottom stack technologies tag browser */}
          <div className="border-t border-zinc-200 pt-5 mt-8">
            <h4 className="text-3xs font-mono text-zinc-500 uppercase tracking-wider mb-2.5">STACK & COMPILER ENVIRONMENT</h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedCompany.coreTech.map((tech) => (
                <span key={tech} className="text-4xs font-mono text-emerald-700 border border-zinc-200 bg-white rounded-lg px-2 py-1 select-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
