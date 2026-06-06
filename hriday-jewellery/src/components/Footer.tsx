import { ChevronUp, User, Heart } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-low py-16 px-6 md:px-20 border-t border-tertiary/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-16">
          <div className="space-y-6 max-w-sm text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            <Logo className="scale-[0.7] md:scale-[0.8] origin-center lg:origin-left mb-[-20px] mt-[-20px]" />
            <p className="text-[12px] text-on-surface-variant leading-relaxed opacity-70">
              Premium Imitation Jewellery Collection<br />
              Curated Designs for Modern Women
            </p>
          </div>

          <nav className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-6 flex-1 items-center">
            {['Home', 'Collections', 'Gallery', 'About Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="font-semibold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-antique-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-4">
              <button title="Account" className="w-10 h-10 rounded-full bg-white luxury-shadow flex items-center justify-center text-tertiary hover:bg-blush-pink hover:text-white transition-all cursor-pointer">
                <User size={18} />
              </button>
              <button title="Wishlist" className="w-10 h-10 rounded-full bg-white luxury-shadow flex items-center justify-center text-tertiary hover:bg-blush-pink hover:text-white transition-all cursor-pointer">
                <Heart size={18} />
              </button>
            </div>
            
            <a 
              href="#top"
              onClick={handleScrollTop}
              className="w-10 h-10 rounded-full bg-white border border-surface-container flex items-center justify-center text-tertiary/40 hover:text-tertiary hover:border-tertiary/20 transition-all cursor-pointer group"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-tertiary/5 text-center">
          <p className="font-semibold text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">
            © 2026 Hriday Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
