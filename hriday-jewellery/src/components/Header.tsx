import { Code } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface-container"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 py-2 md:py-4 flex justify-between items-center">
        <a href="#" className="flex items-center justify-center gap-3 w-[130px]">
          <Logo className="scale-[0.6] md:scale-[0.65] origin-left -my-10" />
        </a>

        <nav className="hidden md:flex gap-10">
          <a href="#home" className="text-sm font-semibold text-antique-gold border-b border-antique-gold pb-0.5 uppercase tracking-widest">
            Home
          </a>
          <a href="#collections" className="text-sm font-semibold text-on-surface-variant hover:text-antique-gold transition-colors uppercase tracking-widest">
            Collections
          </a>
          <a href="#gallery" className="text-sm font-semibold text-on-surface-variant hover:text-antique-gold transition-colors uppercase tracking-widest">
            Gallery
          </a>
          <a href="#about" className="text-sm font-semibold text-on-surface-variant hover:text-antique-gold transition-colors uppercase tracking-widest">
            About Us
          </a>
        </nav>

        <a href="#contact" className="px-7 py-2.5 border border-blush-pink text-tertiary text-[12px] font-semibold rounded-lg hover:bg-blush-pink/10 transition-all uppercase tracking-widest inline-block">
          Contact Us
        </a>
      </div>
    </motion.header>
  );
}
