import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Github, ExternalLink, ShieldCheck, Bot, Globe, Sparkles } from 'lucide-react';

const PROJECTS = [
  {
    title: "NexusAI – Chatbot Assistant",
    subtitle: "Full-Stack AI Assistant Powered by Gemini API",
    description: "A full-stack AI Chatbot web application powered by Google Gemini API with Firebase Authentication for secure Google Sign-in and Firestore for storing personalized chat history for each user in real time.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Vibe Coding", "Gemini API", "Firebase Auth", "Firestore", "React", "Tailwind CSS"],
    icon: Bot,
    live: "https://nexus-ai-nine.vercel.app",
    code: "https://github.com/Shashank-0609",
    features: [
      "Google Gemini API integration with real-time streaming",
      "Firebase Auth (Google Sign-In) & Firestore personalized history",
      "ChatGPT-inspired UI with Light/Dark theme toggle & typing animations",
      "Sidebar chat management (rename, delete, search) & suggested prompts"
    ]
  },
  {
    title: "PawMitra – Trusted Local Pet Hosting",
    subtitle: "Pet Hosting Platform Connecting Local Hosts & Owners",
    description: "Architected and shipped a full-stack pet hosting platform connecting verified GHMC-certified local hosts with pet parents, featuring real-time booking management, Firebase Auth with email verification, and AI-powered review summarization using Gemini API.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Vibe Coding", "Google AI Studio", "Firebase Auth", "Hostinger", "Vercel", "Google OAuth"],
    icon: ShieldCheck,
    live: "https://pawmitra.online",
    code: "https://github.com/Shashank-0609/PawMitra",
    features: [
      "Verified GHMC-certified local host connection system",
      "Dual-role dashboards (Pet Owner + Host) & Firestore booking lifecycle",
      "Cloud storage for medical records & host profiles",
      "AI-powered review summarization using Google Gemini API"
    ]
  },
  {
    title: "OKB Infotech & Pavan Events",
    subtitle: "2 Live Client Production Websites Deployed End-to-End",
    description: "Designed, developed, and deployed 2 live production websites end-to-end including OKB Infotech's official website (okbit.in) and a devotional platform for Pavan Events (annamayyapavan.org.in), driving a 37% increase in sales leads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Freelance", "Google Cloud", "Firebase", "Firestore", "Vercel", "Domain Handling"],
    icon: Globe,
    live: "https://okbit.in",
    code: "https://annamayyapavan.org.in",
    features: [
      "Drove a 37% increase in sales leads for OKB Infotech",
      "Custom domain configuration & Google Cloud Console setup",
      "End-to-end client requirement gathering and iterative updates",
      "Full freelance project lifecycle management from scoping to maintenance"
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
            <h3 className="text-4xl md:text-5xl font-display font-bold">Projects</h3>
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

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <span className="text-xs font-mono px-3 py-1 bg-brand-dark/80 backdrop-blur border border-white/10 rounded-full text-brand-cyan">
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono font-semibold text-brand-cyan/80 border border-brand-cyan/20 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <h4 className="text-3xl font-bold font-display mb-3 text-white hover:text-brand-cyan transition-colors cursor-default">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                          <Sparkles size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live} 
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 bg-brand-cyan text-brand-dark font-bold rounded-xl flex items-center gap-2 hover:bg-white hover:text-brand-dark transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                      >
                        {project.title.includes("OKB") ? "Visit okbit.in" : "Live Website"} <ExternalLink size={16} />
                      </motion.a>
                      
                      {project.code && (
                        <motion.a 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.code} 
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-2.5 glass text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10"
                        >
                          {project.title.includes("OKB") ? "annamayyapavan.org.in" : "Source Code"} {project.title.includes("OKB") ? <Globe size={16} /> : <Github size={16} />}
                        </motion.a>
                      )}
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
