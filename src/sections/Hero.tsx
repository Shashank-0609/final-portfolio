import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-cyan font-mono text-sm tracking-[0.4em] mb-6"
          >
            HELLO, I AM
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
            Shashank <span className="text-gradient">Ellendula</span>
          </h1>

          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I’m a passionate Computer Science Engineering student focused on building impactful digital solutions through full stack development, data analytics, and modern web technologies.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-brand-cyan text-brand-dark font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </div>

          <div className="flex justify-center gap-8">
            {[ 
              { icon: Linkedin, href: "https://www.linkedin.com/in/shashankell/" },
              { icon: Github, href: "https://github.com/Shashank-0609" },
              { icon: Mail, href: "mailto:shashanke0609@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-gray-500 hover:text-brand-cyan transition-all hover:scale-125"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
