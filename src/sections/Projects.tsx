import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Github, ExternalLink, ShieldCheck, Home, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "PawMitra",
    description: "A web application that helps pet owners find safe and trusted hosts for their pets while they travel. Features a verified host system using GHMC certificate verification.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JS", "Firebase"],
    icon: ShieldCheck,
    live: "https://pawmitra.online",
    code: "https://github.com/Shashank-0609/PawMitra",
    features: [
      "Verified Host System via GHMC",
      "Home-based pet hosting",
      "Trust-focused architecture",
      "User-friendly dashboard"
    ]
  },
  {
    title: "Home Job Finder",
    description: "A platform designed to help homemakers find flexible part-time and work-from-home opportunities, simplifying the connection between employers and beginners.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind", "JS", "Firebase"],
    icon: Home,
    live: "https://github.com/Shashank-0609",
    code: "https://github.com/Shashank-0609",
    features: [
      "Employer job posting system",
      "Easy opportunity browsing",
      "Direct communication bridge",
      "Optimized for home users"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase mb-2">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Selected Projects</h3>
          </div>
        </Reveal>

        <div className="space-y-24">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="w-full">
              <Reveal width="100%">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`relative group overflow-hidden rounded-3xl ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                     {/* Project Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-6 left-6 w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-cyan">
                      <project.icon size={24} />
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <h4 className="text-3xl font-bold font-display mb-4 text-white hover:text-brand-cyan transition-colors cursor-default">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4">
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live} 
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 bg-white text-brand-dark font-bold rounded-xl flex items-center gap-2 hover:bg-brand-cyan hover:text-brand-dark transition-all"
                      >
                        Live Demo <ExternalLink size={16} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.code} 
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 glass text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all"
                      >
                        Source Code <Github size={16} />
                      </motion.a>
                    </div>
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
