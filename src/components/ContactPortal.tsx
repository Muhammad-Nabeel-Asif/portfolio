import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactPortal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Senior Backend Engineer',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Mimic secure server API payload ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Clear values
      setFormData({
        name: '',
        email: '',
        company: '',
        roleType: 'Senior Backend Engineer',
        message: ''
      });
      // Clear success indicator after 4.5s
      setTimeout(() => setSubmitSuccess(false), 4500);
    }, 1200);
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-4 sm:p-6">
      <div className="border-b border-zinc-200 pb-5 mb-8">
        <h2 className="text-fluid-h2 font-bold text-zinc-900 font-sans flex items-center gap-2">
          <Mail className="h-5 w-5 text-emerald-600" />
          <span>Gateway & Interview Dispatch Portal</span>
        </h2>
        <p className="text-xs text-zinc-600 font-sans mt-0.5">Submit immediate job specs or coordination requests directly to Nabeel's delivery logs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left column: Direct Contact Information Blocks */}
        <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 pb-6 lg:pb-0 lg:pr-8">
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-zinc-900 tracking-tight uppercase font-mono">Channel Registry</h3>
            
            <p className="text-2xs text-zinc-600 leading-relaxed font-sans">
              Have an open opportunity matching my distributed systems, microservices, or custom AI agent engineering proficiency? Shoot over a wire or connect via social networks.
            </p>

            <div className="space-y-4">
              <a
                id="contact-mail-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 transition-all"
              >
                <Mail className="h-4.5 w-4.5 text-emerald-600" />
                <div className="flex-1 min-w-0">
                  <span className="block text-4xs font-mono text-zinc-500 uppercase leading-none">Primary Direct Email</span>
                  <span className="block text-3xs font-mono mt-1 text-zinc-900 truncate">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 transition-all"
              >
                <Linkedin className="h-4.5 w-4.5 text-blue-600" />
                <div className="flex-1 min-w-0">
                  <span className="block text-4xs font-mono text-zinc-500 uppercase leading-none">Professional LinkedIn</span>
                  <span className="block text-3xs font-mono mt-1 text-zinc-900 truncate">muhammad-nabeel-asif</span>
                </div>
              </a>

              <a
                id="contact-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 transition-all"
              >
                <Github className="h-4.5 w-4.5 text-zinc-900" />
                <div className="flex-1 min-w-0">
                  <span className="block text-4xs font-mono text-zinc-500 uppercase leading-none">Source / GitHub</span>
                  <span className="block text-3xs font-mono mt-1 text-zinc-900 truncate">Muhammad-Nabeel-Asif</span>
                </div>
              </a>

              <div className="flex items-center space-x-3.5 p-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700">
                <MapPin className="h-4.5 w-4.5 text-amber-600" />
                <div className="flex-1 min-w-0">
                  <span className="block text-4xs font-mono text-zinc-500 uppercase leading-none">Physical Presence Coordinates</span>
                  <span className="block text-3xs font-sans mt-1 text-zinc-700 truncate">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200 text-4xs font-mono text-zinc-500 flex items-center gap-1.5 leading-snug">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Open for contract system audits, architectural scoping blueprints, and permanent senior positions.</span>
          </div>
        </div>

        {/* Right column: Interactive Contact Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 flex flex-col justify-between space-y-4" aria-label="Recruiter Contact Form">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="recruiter-name" className="text-4xs font-mono text-zinc-500 uppercase mb-1.5 font-medium">Your Name *</label>
              <input
                id="recruiter-name"
                type="text"
                required
                placeholder="Manager Name / Recruiter"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 py-2 px-3 text-xs focus:outline-none focus:border-emerald-500 font-sans transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="recruiter-email" className="text-4xs font-mono text-zinc-500 uppercase mb-1.5 font-medium">Your Work Email *</label>
              <input
                id="recruiter-email"
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 py-2 px-3 text-xs focus:outline-none focus:border-emerald-500 font-sans transition-all"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label htmlFor="recruiter-company" className="text-4xs font-mono text-zinc-500 uppercase mb-1.5 font-medium">Company Name</label>
              <input
                id="recruiter-company"
                type="text"
                placeholder="Enterprise Inc."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 py-2 px-3 text-xs focus:outline-none focus:border-emerald-500 font-sans transition-all"
              />
            </div>

            {/* Target position */}
            <div className="flex flex-col">
              <label htmlFor="recruiter-role" className="text-4xs font-mono text-zinc-500 uppercase mb-1.5 font-medium">Target Tech Role</label>
              <select
                id="recruiter-role"
                value={formData.roleType}
                onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                className="w-full rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 py-2 px-3 text-xs focus:outline-none focus:border-emerald-500 font-sans transition-all"
              >
                <option value="Senior Backend Engineer">Senior Backend Engineer</option>
                <option value="Lead Software Architect">Lead Software Architect</option>
                <option value="Systems/Infrastructure Specialist">Systems/Infrastructure Specialist</option>
                <option value="Other Consulting Project">Other Consulting Project</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="recruiter-message" className="text-4xs font-mono text-zinc-500 uppercase mb-1.5 font-medium">Inquiry / Opportunity Details *</label>
            <textarea
              id="recruiter-message"
              required
              rows={4}
              placeholder="Provide a quick job spec summaries, architecture consulting outlines, or meeting coordination availability lists..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 py-2 px-3 text-xs focus:outline-none focus:border-emerald-500 font-sans transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Submission and state warnings */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="min-h-[22px]">
              {submitSuccess && (
                <div className="flex items-center space-x-2 text-3xs font-mono text-emerald-600">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                  <span>TRANSACTION LOGGED: Message packet successfully queued for dispatch!</span>
                </div>
              )}
            </div>

            <button
              id="contact-dispatch-btn"
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer inline-flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white disabled:bg-zinc-300 disabled:text-zinc-400 disabled:cursor-not-allowed justify-center text-xs font-semibold px-6 py-2.5 rounded-lg transition-all active:scale-[0.98] self-end"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message Gateway'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
