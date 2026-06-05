/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillOrbit from './components/SkillOrbit';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import ApiPlayground from './components/ApiPlayground';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactPortal from './components/ContactPortal';

export default function App() {
  const [activeView, setActiveView] = useState<string>('profile');

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-505 selection:text-black">
      {/* Navigation Header */}
      <Header activeView={activeView} setActiveView={setActiveView} />

      {/* Main layouts switcher */}
      <main className="pb-16">
        {activeView === 'profile' && (
          <div className="space-y-8 sm:space-y-12">
            {/* Hero Section */}
            <Hero setActiveView={setActiveView} />

            {/* Side-by-Side: Experience Vertical List & Skill Category blocks */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:gap-10">
                {/* Detailed Careers list */}
                <ExperienceTimeline />

                {/* Granular interactive tech inventory list */}
                <SkillOrbit />

                {/* Gateway for recruiters */}
                <ContactPortal />
              </div>
            </div>
          </div>
        )}

        {activeView === 'architecture' && (
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8">
            <ArchitectureVisualizer />
          </div>
        )}

        {activeView === 'api' && (
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8">
            <ApiPlayground />
          </div>
        )}
      </main>

      {/* Print-only clean resume layout */}
      <div className="hidden print:block p-8 text-black bg-white">
        <div className="border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Muhammad Nabeel Asif</h1>
          <p className="text-sm font-semibold text-zinc-650 mt-1">Senior Backend Engineer</p>
          <div className="mt-2.5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-500 font-mono">
            <span>nabeel.asif362@gmail.com</span>
            <span>www.linkedin.com/in/muhammad-nabeel-asif</span>
            <span>Lahore, Pakistan</span>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-700 border-b border-emerald-100 pb-1.5 mb-3">Professional Summary</h2>
          <p className="text-xs text-zinc-800 leading-relaxed">
            Senior Backend Engineer with 4 years of experience building reliable, scalable systems for both B2B and B2C products. I take ownership of backend development end-to-end, working closely with product and business teams to turn ideas into stable, production-ready solutions. Dedicated to performance tuning, microservice structures, high-throughput pipelines, and Agentic AI workflow orchestration.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-700 border-b border-emerald-100 pb-1.5 mb-3">Core Expertise</h2>
          <p className="text-xs text-zinc-805 leading-relaxed font-semibold">
            Backend Architecture, API Design (NestJS/FastAPI), Stateful Distributed Orchestration (Temporal.io), High-throughput Ingestion (BullMQ/Redis/PubSub), Database Schema Designs (PostgreSQL/NeonDB), Container Deployment (Docker/AWS/Nginx).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-700 border-b border-emerald-100 pb-1.5 mb-3">Professional Chronology</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start font-semibold">
                <span className="text-xs text-zinc-900">Proto IT Consultants — Backend Engineer</span>
                <span className="text-3xs text-zinc-500 font-mono">Sep 2025 - Present</span>
              </div>
              <p className="text-3xs font-mono text-zinc-400">Islamabad (Remote)</p>
              <ul className="list-disc list-inside mt-2 text-2xs text-zinc-800 space-y-1 pl-1">
                <li>Architected email pipeline 'Delight Desk' combining GCP Pub/Sub triggers with BullMQ redis streams.</li>
                <li>Engineered custom AI routers with Gemini API parsing and structured JSON extraction rules.</li>
                <li>Orchestrated stateful multi-day actions via Temporal.io for refund policies and cart locks.</li>
                <li>Slashed client response latency from days to 10 seconds, automating 80% of support tickets.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start font-semibold">
                <span className="text-xs text-zinc-900">MindRind — Backend Engineer</span>
                <span className="text-3xs text-zinc-500 font-mono">Aug 2023 - Aug 2025</span>
              </div>
              <p className="text-3xs font-mono text-zinc-400">Lahore (Hybrid)</p>
              <ul className="list-disc list-inside mt-2 text-2xs text-zinc-805 space-y-1 pl-1">
                <li>Shipped RESTful APIs (NestJS/Node/FastAPI) serving concurrent user pools securely.</li>
                <li>Deployed CI/CD pipelines in GitLab reducing average release configurations load by 80%.</li>
                <li>Engineered multi-tenant bidirectional Google & Outlook OAuth calendar availability checkers.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

