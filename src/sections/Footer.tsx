import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-bold tracking-tighter mb-2">
              SHASHANK <span className="text-brand-cyan">ELLENDULA</span>
            </h4>
          </div>

          <div className="flex gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
            <a href="#projects" className="hover:text-brand-cyan transition-colors">Projects</a>
            <a href="#contact" className="hover:text-brand-cyan transition-colors">Hire Me</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Shashank-0609" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shashankell/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/imshashank6/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all"
            >
              <Instagram size={18} />
            </a>
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
