import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const STATS = [
  { label: "Ongoing CGPA", value: "8.64", icon: GraduationCap },
  { label: "Live Production Sites", value: "2", icon: CheckCircle2 },
  { label: "AI Certifications", value: "8+", icon: Award },
  { label: "Leadership Roles", value: "2+", icon: Briefcase },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase mb-2">My Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">About Me</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Final-year <span className="text-white font-semibold">Computer Science Engineering student</span> at Malla Reddy Engineering College, Hyderabad, with a practical, builder’s mindset focused on creating real-world solutions using AI tools, automation, and web technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Experienced in <span className="text-brand-cyan font-medium">freelance client delivery</span>, AI-assisted product development, and applying core CS fundamentals including Python, OOP, DSA, and SQL. Hands-on with Generative AI, RAG basics, and automation tools including WhatsApp automation.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Comfortable working across the full product lifecycle from ideation to deployment with a strong bias toward shipping and learning by doing.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                {STATS.map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-4 glass rounded-2xl"
                  >
                    <stat.icon size={20} className="text-brand-cyan mb-2" />
                    <h4 className="text-2xl font-bold font-display">{stat.value}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-8">
              <h4 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="text-brand-purple" /> Education Overview
              </h4>
              
              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {[
                  {
                    title: "B.Tech in Computer Science Engineering",
                    institution: "Malla Reddy Engineering College, Hyderabad",
                    date: "Aug 2023 – 2027",
                    info: "CGPA: 8.64"
                  },
                  {
                    title: "Intermediate (MPC)",
                    institution: "Trividyaa Junior College, Hyderabad",
                    date: "Jun 2021 – May 2023",
                    info: "Percentage: 98.5%"
                  },
                  {
                    title: "SSC (CLASS X)",
                    institution: "Sri Chaitanya School, Hyderabad",
                    date: "2020 – 2021",
                    info: "CGPA: 9.9/10"
                  }
                ].map((edu, i) => (
                  <div key={i} className="pl-10 relative">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-purple z-10" />
                    <h5 className="text-lg font-bold text-white">{edu.title}</h5>
                    <p className="text-brand-cyan font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-1 text-sm">
                      <span className="text-gray-500">{edu.date}</span>
                      <span className="px-2 py-1 bg-white/5 rounded text-gray-400 font-mono">{edu.info}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
