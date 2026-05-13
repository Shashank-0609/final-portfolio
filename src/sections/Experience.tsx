import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Briefcase, Building2, Calendar, CheckSquare } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase mb-2">My Journey</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Practical Experience</h3>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <Reveal width="100%">
            <div className="relative p-8 glass rounded-[2.5rem] border-l-4 border-brand-cyan">
              <div className="absolute -left-3 top-10 w-6 h-6 bg-brand-cyan rounded-lg rotate-45" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Front End Development Intern</h4>
                  <div className="flex items-center gap-2 text-brand-cyan font-medium">
                    <Building2 size={18} /> Placemantra
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-sm bg-white/5 py-1 px-3 rounded-full">
                  <Calendar size={14} /> June 2025 – August 2025
                </div>
              </div>

              <p className="text-gray-400 mb-8 max-w-2xl">
                Completed a two-month professional training program focused on frontend development and real-world project structuring.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Learned practical website development workflows",
                  "UI building and component-driven architecture",
                  "Responsive design principles for all screens",
                  "Industry-standard project organization"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckSquare size={18} className="text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 bg-brand-purple/20 rounded-xl flex items-center justify-center text-brand-purple">
                    <Briefcase size={20} />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500">2 Months Program</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}
