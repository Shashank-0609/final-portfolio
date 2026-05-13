import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
            <div className="max-w-2xl">
              <Reveal>
                <span className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-6 block">Ready to collaborate?</span>
              </Reveal>
              <Reveal>
                <h3 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tighter">
                  Let's create something <span className="text-gradient">extraordinary</span> together.
                </h3>
              </Reveal>
            </div>
            
            <Reveal width="100%">
              <div className="lg:mb-4">
                <p className="text-gray-400 text-xl max-w-sm leading-relaxed border-l-2 border-brand-cyan/30 pl-6">
                  I'm currently looking for new opportunities and collaborations. My inbox is always open.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Contact Card */}
            <div className="lg:col-span-7">
              <Reveal width="100%">
                <a 
                  href="mailto:shashanke0609@gmail.com"
                  className="group relative block p-10 md:p-16 h-full glass rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-brand-cyan/50"
                >
                  <div className="absolute top-0 right-0 p-8 text-brand-cyan opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    <Mail size={48} strokeWidth={1.5} />
                  </div>
                  
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 block">Send me an email</span>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 break-all group-hover:text-brand-cyan transition-colors">
                    shashanke0609@gmail.com
                  </h4>
                  <p className="text-gray-500 font-medium">Click to compose a mail</p>
                  
                  <div className="mt-12 flex items-center gap-3 text-brand-cyan font-bold text-sm">
                    GET IN TOUCH <ArrowUpRight size={18} />
                  </div>
                </a>
              </Reveal>
            </div>

            {/* Secondary Cards Column */}
            <div className="lg:col-span-5 grid gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <Reveal width="100%">
                  <a 
                    href="tel:+919063493880"
                    className="flex items-center gap-6 p-8 glass rounded-[2.5rem] group hover:border-brand-cyan/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Call Me</p>
                      <span className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">+91 9063493880</span>
                    </div>
                  </a>
                </Reveal>

                <Reveal width="100%">
                  <a 
                    href="https://maps.google.com/?q=Hyderabad,India"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-6 p-8 glass rounded-[2.5rem] group hover:border-brand-cyan/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Location</p>
                      <span className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">Hyderabad, India</span>
                    </div>
                  </a>
                </Reveal>
              </div>

              {/* Social Links Card */}
              <Reveal width="100%">
                <div className="p-8 glass rounded-[2.5rem] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Social Profiles</p>
                    <span className="text-lg font-bold text-white">Find me on</span>
                  </div>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/Shashank-0609" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/shashankell/" }
                    ].map((social, i) => (
                      <motion.a 
                        key={i} 
                        href={social.href} 
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }} 
                        className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-cyan transition-all border border-white/5 hover:border-brand-cyan/50"
                      >
                        <social.icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
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
      viewBox="0 0 24 14" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

