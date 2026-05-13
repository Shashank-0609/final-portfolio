import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Layout, Globe, Code2, Database, BarChart3, Terminal, Cpu, PenTool } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Full Stack Development",
    icon: Layout,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "Responsive Design", level: 95 }
    ]
  },
  {
    title: "Programming & DBMS",
    icon: Code2,
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Problem Solving", level: 85 },
      { name: "Data Structures", level: 75 }
    ]
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    skills: [
      { name: "Advanced Excel", level: 90 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 75 },
      { name: "Dashboards", level: 85 }
    ]
  },
  {
    title: "AI & Productivity",
    icon: Terminal,
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "Vibe Coding", level: 85 },
      { name: "Canva", level: 80 },
      { name: "AI Workflows", level: 95 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase mb-2">Technical Proficiency</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Skills & expertise</h3>
          </div>
        </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={cat.title}>
              <Reveal>
                <div className="p-8 h-full glass rounded-[2.5rem] relative group border border-white/5 hover:border-brand-cyan/50 transition-all duration-500 hover:translate-y-[-8px]">
                  {/* Decorative Background Icon */}
                  <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                    <cat.icon size={80} />
                  </div>
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <cat.icon size={28} className="text-brand-cyan" />
                  </div>
                  
                  <h4 className="text-2xl font-bold font-display mb-8 text-white">{cat.title}</h4>
                  
                  <div className="space-y-6">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                          <span className="text-[10px] font-mono text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan bg-[length:200%_auto] animate-gradient-scroll"
                          />
                        </div>
                      </div>
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
