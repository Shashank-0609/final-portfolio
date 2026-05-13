import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const STATS = [
  { label: "Projects Completed", value: "10+", icon: CheckCircle2 },
  { label: "Certifications", value: "5+", icon: Award },
  { label: "Technical Skills", value: "15+", icon: Briefcase },
  { label: "Leadership Roles", value: "4", icon: GraduationCap },
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
                I am a hardworking and enthusiastic <span className="text-white font-semibold">Computer Science Engineering student</span> at Mallareddy Engineering College, Hyderabad. My journey is driven by a deep-seated passion for continuously learning new technologies and improving my problem-solving skills.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I pride myself on being adaptable, responsible, and optimistic. Collaboration is at the heart of what I do—I thrive in team environments and am dedicated to building real-world applications that solve meaningful problems.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Even as a fresher, I have cultivated practical skills across the stack, from frontend development to Python scripting and SQL data management. I am also deeply interested in AI-assisted development and prompt engineering.
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
                    institution: "Mallareddy Engineering College, Hyderabad",
                    date: "Aug 2023 – May 2027",
                    info: "CGPA: 8.87"
                  },
                  {
                    title: "Intermediate (MPC)",
                    institution: "Trividyaa Junior College, Hyderabad",
                    date: "Apr 2021 – May 2023",
                    info: "Percentage: 98.5%"
                  },
                  {
                    title: "SSC (CLASS X)",
                    institution: "SRI CHAITANYA SCHOOL, HYDERABAD",
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
