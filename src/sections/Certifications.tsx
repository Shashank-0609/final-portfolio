import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Award, CheckCircle2, ExternalLink, Sparkles, ShieldCheck, BookOpen, Layers, Cpu } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'google' | 'ai-tools' | 'web-dev';
  categoryLabel: string;
  date: string;
  credentialId?: string;
  verified: boolean;
  description: string;
  skills: string[];
  featured?: boolean;
  highlight?: string;
  link?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: 'google-studio',
    title: 'Build & Deploy AI-Powered Applications using Google AI Studio',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Mastered building, prototyping, and deploying end-to-end full-stack AI web applications using Gemini models, prompt templates, and cloud API integration.',
    skills: ['Google AI Studio', 'Gemini API', 'Full Stack AI Apps', 'Prompt Engineering', 'Cloud Deployment'],
    featured: true,
    highlight: 'Core AI Specialization',
    link: 'https://cloud.google.com'
  },
  {
    id: 'google-rag',
    title: 'Retrieval-Augmented Generation (RAG) for Enhanced AI Outputs',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Deep dive into grounding LLMs with custom data, vector store integration, semantic search pipelines, and reducing hallucinations for enterprise AI.',
    skills: ['RAG Architecture', 'Vector Databases', 'Semantic Search', 'Grounding LLMs', 'Context Injection'],
    featured: true,
    highlight: 'Advanced AI Architecture',
    link: 'https://cloud.google.com'
  },
  {
    id: 'google-agentic',
    title: 'Make Agentic AI Work for You',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Learned principles of autonomous AI agents, multi-agent workflows, tool execution, chain-of-thought orchestration, and human-in-the-loop control.',
    skills: ['Agentic AI', 'Multi-Agent Workflows', 'Tool Execution', 'Autonomous Systems', 'AI Automation'],
    featured: true,
    highlight: 'Cutting-edge AI Agentic Systems'
  },
  {
    id: 'google-prompts',
    title: 'Craft Precise Prompts for AI Models',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Advanced prompt engineering strategies including zero-shot, few-shot prompting, system instruction tuning, structured JSON outputs, and role conditioning.',
    skills: ['Zero-Shot Prompting', 'Few-Shot Prompting', 'System Instructions', 'JSON Schema Output', 'In-Context Learning']
  },
  {
    id: 'google-foundations',
    title: 'Foundations in Generative AI',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Comprehensive understanding of generative model architectures, Transformer mechanisms, tokenization, embeddings, and fine-tuning paradigms.',
    skills: ['Generative AI', 'Transformers', 'Embeddings', 'LLM Architectures', 'Model Fine-tuning']
  },
  {
    id: 'google-essentials',
    title: 'Generative AI Essentials',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Core concepts of multimodal AI generation across text, code, audio, and vision, alongside responsible AI development ethics and safety guardrails.',
    skills: ['Multimodal AI', 'AI Ethics', 'Safety Guardrails', 'Model Evaluation', 'GenAI Workflows']
  },
  {
    id: 'google-fundamentals',
    title: 'AI Fundamentals',
    issuer: 'Google Cloud / Google AI Studio',
    category: 'google',
    categoryLabel: 'Google AI Professional',
    date: '2026',
    verified: true,
    description: 'Solid foundation in machine learning principles, supervised/unsupervised algorithms, neural networks, loss optimization, and data preprocessing.',
    skills: ['Machine Learning', 'Neural Networks', 'Supervised Learning', 'Data Preprocessing', 'AI Core Principles']
  },
  {
    id: 'be10x-workshop',
    title: 'Be10X AI Tools and Workshop',
    issuer: 'Be10X',
    category: 'ai-tools',
    categoryLabel: 'AI Tools & Productivity',
    date: '2025 - 2026',
    verified: true,
    description: 'Hands-on intensive workshop mastering 20+ cutting-edge generative AI productivity tools, prompt engineering hacks, automated coding workflows, and rapid app creation.',
    skills: ['AI Productivity Tools', 'Vibe Coding', 'Workflow Automation', 'Prompt Engineering', 'Rapid Prototyping'],
    featured: true,
    highlight: 'Hands-on Workshop'
  },
  {
    id: 'placemantra-internship',
    title: 'Front End Development Internship Certification',
    issuer: 'Placemantra',
    category: 'web-dev',
    categoryLabel: 'Web & Software Engineering',
    date: 'June 2025 – August 2025',
    verified: true,
    description: 'Professional 2-month internship certification covering component-driven UI development, React state management, modern CSS frameworks, and production-ready project delivery.',
    skills: ['React.js', 'HTML5 / CSS3', 'Component Architecture', 'Responsive UI', 'Frontend Best Practices']
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Certifications', count: CERTIFICATIONS.length },
  { id: 'google', label: 'Google AI Professional (7)', count: 7 },
  { id: 'ai-tools', label: 'AI Tools & Automation (1)', count: 1 },
  { id: 'web-dev', label: 'Web & Software (1)', count: 1 }
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCerts = CERTIFICATIONS.filter(
    (cert) => activeTab === 'all' || cert.category === activeTab
  );

  return (
    <section id="certifications" className="py-28 relative overflow-hidden bg-brand-dark/50">
      {/* Background Lights */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/30 mb-4">
              <ShieldCheck size={14} className="text-brand-purple" />
              <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-bold">
                Verified Credentials & Specializations
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Certifications & <span className="text-gradient">Recognitions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Complete catalog of verified certifications across Google AI, Generative AI engineering, RAG architectures, prompt engineering, and full-stack software development.
            </p>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal width="100%">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-mono transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-brand-cyan text-brand-dark font-bold border-brand-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'glass text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <div
                  className={`h-full p-8 glass rounded-[2.5rem] relative flex flex-col justify-between group border transition-all duration-500 hover:-translate-y-2 ${
                    cert.featured
                      ? 'border-brand-cyan/40 bg-gradient-to-b from-brand-cyan/5 to-transparent hover:border-brand-cyan hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                      : 'border-white/5 hover:border-brand-purple/50'
                  }`}
                >
                  {/* Card Header & Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-semibold text-brand-cyan uppercase tracking-wider">
                        {cert.categoryLabel}
                      </span>
                      {cert.verified && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                          <CheckCircle2 size={13} /> Verified
                        </span>
                      )}
                    </div>

                    {cert.highlight && (
                      <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-purple">
                        <Sparkles size={13} /> {cert.highlight}
                      </div>
                    )}

                    <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6 pb-4 border-b border-white/5">
                      <span className="text-gray-300 font-medium">{cert.issuer}</span>
                      <span className="text-gray-500">{cert.date}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Chips Footer */}
                  <div>
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-gray-400 group-hover:border-white/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Credentials Footer Link Bar */}
        <Reveal width="100%">
          <div className="mt-16 p-8 glass rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-brand-cyan/5 via-brand-purple/5 to-transparent">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Google & Credly Verified Credentials</h4>
                <p className="text-gray-400 text-sm">
                  View complete credential history, badge tokens, and skill verifications directly on Credly & Google Skills.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://www.credly.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-brand-cyan text-brand-dark font-bold rounded-xl flex items-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all text-sm"
              >
                Credly Badges <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
