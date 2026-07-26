import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, ArrowRight, Award, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            Shashank <span className="text-gradient">Ellendula</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-brand-cyan text-brand-dark font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
            >
              Explore Projects <ArrowRight size={18} />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 glass text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10"
            >
              Get In Touch <Mail size={18} />
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 border-t border-white/5">
            {[ 
              { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/shashankell/" },
              { label: "GitHub", icon: Github, href: "https://github.com/Shashank-0609" },
              { label: "Email", icon: Mail, href: "mailto:shashanke0609@gmail.com" },
              { label: "Phone", icon: Phone, href: "tel:+919063493880" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-xs font-mono text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <social.icon size={16} />
                <span>{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
