import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Briefcase, Building2, Calendar, CheckSquare, ExternalLink, Globe, TrendingUp } from 'lucide-react';

const EXPERIENCES = [
  {
    role: "Freelance Web Developer",
    company: "OKB Infotech",
    period: "Mar 2026 – May 2026",
    highlight: "Drove 37% increase in sales leads",
    description: "Designed, developed, and deployed 2 live production websites end-to-end including OKB Infotech’s official website (okbit.in) and an official devotional platform for a client named Pavan Events (annamayyapavan.org.in).",
    points: [
      "Handled custom domain configuration, client requirement gathering, and monthly iterative updates under a lumpsum contract model.",
      "Drove a 37% increase in sales leads for OKB Infotech by establishing their digital presence through a professional company website.",
      "Managed full freelance lifecycle independently from scoping and development to deployment and post-launch maintenance.",
      "Demonstrated end-to-end ownership, client communication, and simultaneous multi-project delivery."
    ],
    skills: ["Vibe Coding", "Google Cloud Console", "Firebase", "Firestore Integration", "Vercel", "Domain Handling"],
    links: [
      { name: "okbit.in", url: "https://okbit.in" },
      { name: "annamayyapavan.org.in", url: "https://annamayyapavan.org.in" }
    ]
  },
  {
    role: "Front End Development Intern",
    company: "Placemantra",
    period: "June 2025 – August 2025",
    highlight: "2 Months Program",
    description: "Completed a two-month professional training program focused on frontend development, UI building, and real-world project structuring.",
    points: [
      "Learned practical website development workflows and component architecture.",
      "Built responsive user interfaces optimized across all modern screen sizes.",
      "Practiced industry-standard project organization and version control."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive UI"],
    links: []
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase mb-2">My Journey</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Professional Experience</h3>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx}>
              <Reveal width="100%">
                <div className="relative p-8 md:p-10 glass rounded-[2.5rem] border-l-4 border-brand-cyan hover:border-brand-purple transition-all duration-300">
                  <div className="absolute -left-3 top-10 w-6 h-6 bg-brand-cyan rounded-lg rotate-45" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                        {exp.highlight.includes("37%") && (
                          <span className="px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-xs font-mono font-bold text-brand-cyan flex items-center gap-1">
                            <TrendingUp size={12} /> {exp.highlight}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-brand-cyan font-medium">
                        <Building2 size={18} /> {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-mono text-sm bg-white/5 py-1.5 px-4 rounded-full self-start md:self-auto border border-white/5">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed font-light text-base">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {exp.points.map((point, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckSquare size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {exp.links.length > 0 && (
                    <div className="mb-6 flex flex-wrap items-center gap-3 pt-2">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Live Deployments:</span>
                      {exp.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/40 rounded-lg text-xs font-mono text-gray-300 hover:text-brand-cyan transition-all"
                        >
                          <Globe size={13} /> {link.name} <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mr-2">Skills Used:</span>
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
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
