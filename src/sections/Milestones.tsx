import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Award, GraduationCap, Users, Zap, Terminal, Trophy } from 'lucide-react';

export default function Milestones() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education & Certs */}
          <div className="space-y-12">
             <Reveal width="100%">
               <div>
                  <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                    <Trophy className="text-brand-cyan" /> Education & Honors
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "B.Tech in Computer Science Engineering",
                        org: "Mallareddy Engineering College",
                        meta: "2023 - 2027 | CGPA: 8.87",
                        icon: GraduationCap
                      },
                      {
                        title: "Intermediate (MPC)",
                        org: "Trividyaa Junior College",
                        meta: "2021 - 2023 | 98.5%",
                        icon: Award
                      },
                      {
                        title: "SSC (CLASS X)",
                        org: "Sri Chaitanya School, Hyderabad",
                        meta: "2020 - 2021 | CGPA: 9.9/10",
                        icon: Award
                      }
                    ].map((item, i) => (
                      <div key={i} className="p-5 glass rounded-2xl flex gap-4 group hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan shrink-0">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                          <p className="text-sm text-gray-400">{item.org}</p>
                          <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-tighter">{item.meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
             </Reveal>

             <Reveal width="100%">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <Zap className="text-brand-purple" /> Certifications
                  </h3>
                  <div className="p-6 glass border-l-4 border-brand-purple rounded-2xl flex items-center justify-between">
                     <div>
                        <h4 className="font-bold text-white">Front End Development</h4>
                        <p className="text-sm text-gray-400">Placemantra Internship Certification</p>
                     </div>
                  </div>
                </div>
             </Reveal>
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-12">
            <Reveal width="100%">
              <div>
                <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                  <Users className="text-brand-purple" /> Leadership & Activities
                </h3>
                <div className="grid gap-4">
                  {[
                    { role: "Student Coordinator", event: "VISHESH", type: "Technical" },
                    { role: "Technical Lead", event: "ADYANT CSE Community", type: "Community" },
                    { role: "Student Coordinator", event: "SAC", type: "Activities" },
                    { role: "Technical Coordinator", event: "IGNITE-2K26 24Hrs AI Hackathon", type: "Hackathon" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="p-6 glass rounded-2xl relative overflow-hidden"
                    >
                      <div className="absolute right-0 top-0 h-full w-1 bg-brand-purple opacity-40" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                        <Terminal size={14} className="text-gray-600" />
                      </div>
                      <h4 className="text-lg font-bold text-white">{item.role}</h4>
                      <p className="text-brand-cyan text-sm">{item.event}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal width="100%">
               <div className="p-8 glass rounded-3xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border-brand-cyan/20">
                  <h4 className="text-xl font-bold font-display mb-4">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Leadership", "Collaboration", "Public Speaking", "Event Management", "Adaptability", "Problem Solving"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
