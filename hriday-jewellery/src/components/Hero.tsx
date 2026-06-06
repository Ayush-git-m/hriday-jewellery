import { motion } from 'motion/react';
import { Sparkles, Layers, Hand, BadgeCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 px-6 md:px-20 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-5/12 space-y-10"
        >
          <div className="flex items-center gap-3 text-tertiary font-semibold tracking-[0.4em] text-[11px]">
            <Sparkles size={14} />
            <span>HANDCRAFTED WITH LOVE</span>
            <Sparkles size={14} />
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-5xl md:text-6xl text-on-surface leading-[1.1] font-semibold">
              Timeless Beauty,
            </h1>
            <h2 className="font-script text-blush-pink text-6xl md:text-7xl leading-tight script-flourish">
              Made for You
            </h2>
          </div>

          <p className="text-on-surface-variant max-w-md leading-loose opacity-80">
            Discover exquisite imitation jewellery that echoes the grandeur of heirlooms. Each piece is a masterpiece of craftsmanship, designed to make your special moments unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a href="#collections" className="px-10 py-4 bg-blush-pink text-tertiary font-semibold rounded-lg luxury-shadow hover:brightness-95 transition-all uppercase tracking-[0.2em] text-[12px] cursor-pointer inline-block text-center">
              Explore Collection
            </a>
            <a href="#contact" className="px-10 py-4 border border-blush-pink text-tertiary font-semibold rounded-lg hover:bg-surface-container-low transition-all uppercase tracking-[0.2em] text-[12px] cursor-pointer inline-block text-center mt-4 sm:mt-0">
              Contact Us
            </a>
          </div>

          <div className="flex gap-12 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                <Layers size={20} />
              </div>
              <div>
                <p className="font-bold text-on-surface">500+</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Designs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                <Hand size={20} />
              </div>
              <div>
                <p className="font-bold text-on-surface">100%</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Handcrafted</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                <BadgeCheck size={20} />
              </div>
              <div>
                <p className="font-bold text-on-surface">Premium</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Quality</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-7/12"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-blush-pink/10 rounded-3xl -z-10 group-hover:-inset-2 transition-all duration-500"></div>
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPWx2UGYqivDXQoAriob1m-uXYXVWX2ICvUb0pbXijiaJ3_Q_T8czKz76KjSjgK1Hegq4NFXwQIwPa7lgkNepipp4fmkTXqKSGZQEdHb2K0200B0Ro=s1080"
              alt="Exquisite Pink Jewelry"
              className="w-full h-auto rounded-2xl luxury-shadow object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
