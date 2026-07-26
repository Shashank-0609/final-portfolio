import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Sparkles, Code2, Cloud, Search, Terminal, Cpu, Database, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface SkillGroup {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    rating: number; // out of 5
    description: string;
    subtopics: string[];
  }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'ai',
    index: '01',
    title: 'Generative AI & Prompt Engineering',
    subtitle: 'Building LLM-powered applications, RAG pipelines, and agentic workflows',
    icon: Sparkles,
    accentColor: 'border-brand-cyan text-brand-cyan bg-brand-cyan/10',
    skills: [
      {
        name: 'Generative AI & Gemini API',
        level: 'Expert',
        rating: 5,
        description: 'Building custom AI applications with structured output, system prompts, streaming responses, and Google AI Studio integration.',
        subtopics: ['Gemini API', 'System Prompts', 'Streaming Response', 'Multimodal Inputs', 'Google AI Studio', 'JSON Schemas']
      },
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        level: 'Advanced',
        rating: 5,
        description: 'Grounding generative models on private vector knowledge bases, document search, and context injection.',
        subtopics: ['Vector Embeddings', 'Context Grounding', 'Semantic Search', 'Hallucination Guardrails', 'Document Parsing']
      },
      {
        name: 'Vibe Coding & Claude Code',
        level: 'Expert',
        rating: 5,
        description: 'Leveraging AI-native development environments to architect and deploy production client apps in record time.',
        subtopics: ['Claude Code', 'Vibe Coding', 'AI Workflows', 'Rapid Prototyping', 'WhatsApp Automation']
      },
      {
        name: 'Prompt Engineering',
        level: 'Expert',
        rating: 5,
        description: 'Mastering prompt strategies for high-precision LLM reasoning, structured data extraction, and role conditioning.',
        subtopics: ['Zero-Shot', 'Few-Shot', 'Chain-of-Thought', 'In-Context Learning', 'Role Conditioning']
      }
    ]
  },
  {
    id: 'cs',
    index: '02',
    title: 'Core Computer Science & Programming',
    subtitle: 'Object-oriented fundamentals, database logic, and algorithmic efficiency',
    icon: Code2,
    accentColor: 'border-emerald-400 text-emerald-400 bg-emerald-400/10',
    skills: [
      {
        name: 'Python Development',
        level: 'Advanced',
        rating: 5,
        description: 'Writing clean, modular Python for backend API processing, automation scripts, and machine learning pipelines.',
        subtopics: ['Python 3', 'OOP Principles', 'Automation Scripts', 'Data Preprocessing', 'API Handling']
      },
      {
        name: 'SQL & Relational Databases',
        level: 'Advanced',
        rating: 4,
        description: 'Querying relational databases, optimizing complex joins, nested subqueries, window functions, and schema design.',
        subtopics: ['Complex Joins', 'Subqueries', 'Window Functions', 'Schema Normalization', 'NoSQL Basics']
      },
      {
        name: 'Data Structures & Algorithms',
        level: 'Advanced',
        rating: 4,
        description: 'Applying core data structures and algorithmic complexity optimization to solve real-world engineering problems.',
        subtopics: ['Arrays & HashMaps', 'Trees & Graphs', 'Sorting & Searching', 'Space-Time Complexity', 'Problem Solving']
      },
      {
        name: 'Machine Learning & AI Core',
        level: 'Proficient',
        rating: 4,
        description: 'Understanding foundational machine learning concepts, supervised learning models, and neural network architectures.',
        subtopics: ['Supervised Learning', 'Neural Networks', 'Transformers', 'Model Evaluation', 'AI Core Principles']
      }
    ]
  },
  {
    id: 'cloud',
    index: '03',
    title: 'Cloud, Infrastructure & DevOps',
    subtitle: 'Cloud consoles, automated deployments, version control, and data warehousing',
    icon: Cloud,
    accentColor: 'border-cyan-400 text-cyan-400 bg-cyan-400/10',
    skills: [
      {
        name: 'Google Cloud Console & OAuth',
        level: 'Advanced',
        rating: 4,
        description: 'Configuring cloud API keys, OAuth consent screens, GCP project credentials, and service quotas.',
        subtopics: ['GCP Console', 'API Credentials', 'OAuth Client Config', 'Cloud Services', 'Resource Provisioning']
      },
      {
        name: 'Vercel, Hostinger & Custom Domains',
        level: 'Expert',
        rating: 5,
        description: 'Deploying production client applications, configuring DNS A/CNAME records, SSL certificates, and Hostinger domains.',
        subtopics: ['Vercel Deployment', 'Hostinger DNS', 'Custom Domains', 'SSL Certificates', 'Environment Secrets']
      },
      {
        name: 'GitHub & Version Control',
        level: 'Advanced',
        rating: 5,
        description: 'Managing source code repositories, branching workflows, pull requests, and continuous release pipelines.',
        subtopics: ['Git Workflows', 'GitHub Repositories', 'Branching & Merging', 'CI/CD Basics', 'Version Control']
      },
      {
        name: 'Data Architecture Concepts',
        level: 'Proficient',
        rating: 4,
        description: 'Fundamental understanding of enterprise data architectures, data lakes, warehouses, and ETL pipeline design.',
        subtopics: ['Data Warehouse', 'Data Lakehouse', 'ETL Pipelines', 'AWS Basics', 'Data Ingestion']
      }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'minimal' | 'all-subtopics'>('minimal');

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (activeTab !== 'all' && group.id !== activeTab) return null;

    const filteredSkills = group.skills.filter((skill) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.subtopics.some((st) => st.toLowerCase().includes(query))
      );
    });

    if (filteredSkills.length === 0) return null;
    return { ...group, skills: filteredSkills };
  }).filter(Boolean) as SkillGroup[];

  const allSubtopics = Array.from(
    new Set(
      SKILL_GROUPS.flatMap((g) => g.skills.flatMap((s) => s.subtopics))
    )
  );

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-brand-dark transition-colors duration-300">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Skills & <span className="text-gradient">Core Competencies</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl font-light">
              An architectural overview of my technical domain expertise across Generative AI, Core Computer Science, and Cloud Systems.
            </p>
          </div>
        </Reveal>

        {/* Filter Bar & Controls */}
        <Reveal width="100%">
          <div className="p-4 glass rounded-2xl border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeTab === 'all'
                    ? 'bg-brand-cyan text-brand-dark font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                All Domains
              </button>
              {SKILL_GROUPS.map((group) => {
                const isActive = activeTab === group.id;
                return (
                  <button
                    key={group.id}
                    onClick={() => setActiveTab(group.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white text-brand-dark font-bold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{group.index}</span>
                    <span className="hidden sm:inline">{group.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="relative flex-1 md:w-56">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Filter by subtopic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                />
              </div>

              <div className="flex rounded-xl bg-white/5 p-1 border border-white/10 text-xs font-mono shrink-0">
                <button
                  onClick={() => setViewMode('minimal')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    viewMode === 'minimal' ? 'bg-brand-cyan text-brand-dark font-bold' : 'text-gray-400'
                  }`}
                >
                  Matrix
                </button>
                <button
                  onClick={() => setViewMode('all-subtopics')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    viewMode === 'all-subtopics' ? 'bg-brand-cyan text-brand-dark font-bold' : 'text-gray-400'
                  }`}
                >
                  All Subtopics ({allSubtopics.length})
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {viewMode === 'all-subtopics' && (
          <Reveal width="100%">
            <div className="p-8 glass rounded-[2.5rem] border border-white/10 mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Complete Subtopic Tag Cloud</h3>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    Every subtopic, library, tool, and technique included in my skillset matrix.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan rounded-full font-bold">
                  {allSubtopics.length} Subtopics
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {allSubtopics.map((st, i) => {
                  const isHighlighted = searchQuery && st.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                        isHighlighted
                          ? 'bg-brand-cyan text-brand-dark font-bold border-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-brand-cyan/40 hover:text-white'
                      }`}
                    >
                      #{st}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={group.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-[2.5rem] border border-white/10 p-8 md:p-10 relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-white/5 gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl md:text-4xl font-mono font-bold text-gray-600 tracking-tighter">
                        {group.index}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                        <GroupIcon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display text-white">{group.title}</h3>
                        <p className="text-xs font-mono text-gray-400 mt-0.5">{group.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-auto">
                      <span className="text-xs font-mono text-gray-500">
                        {group.skills.length} Core Modules
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {group.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all duration-300 flex flex-col justify-between group/card"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <h4 className="text-lg font-bold text-white group-hover/card:text-brand-cyan transition-colors">
                              {skill.name}
                            </h4>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                                {skill.level}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  dot <= skill.rating ? 'bg-brand-cyan' : 'bg-white/10'
                                }`}
                              />
                            ))}
                            <span className="text-[10px] font-mono text-gray-500 ml-2">
                              Level {skill.rating}/5
                            </span>
                          </div>

                          <p className="text-xs text-gray-300 font-light leading-relaxed mb-5">
                            {skill.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-2">
                            Key Subtopics & Frameworks:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.subtopics.map((st, sIdx) => {
                              const isMatch = searchQuery && st.toLowerCase().includes(searchQuery.toLowerCase());
                              return (
                                <span
                                  key={sIdx}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                                    isMatch
                                      ? 'bg-brand-cyan text-brand-dark font-bold'
                                      : 'bg-white/5 text-gray-300 border border-white/5 hover:border-white/20'
                                  }`}
                                >
                                  #{st}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <Reveal width="100%">
          <div className="mt-16 p-8 glass rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left bg-gradient-to-r from-brand-cyan/5 via-brand-purple/5 to-transparent">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Practical & Verified Competence</h4>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  Applied directly across 2 live freelance client deployments and 7 Google AI Professional certifications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#projects"
                className="px-6 py-2.5 bg-brand-cyan text-brand-dark font-bold text-xs font-mono rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-1.5"
              >
                View Projects <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
