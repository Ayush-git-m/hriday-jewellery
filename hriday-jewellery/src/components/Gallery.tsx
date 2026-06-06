import { motion } from 'motion/react';

export function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 md:px-20 bg-surface">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 space-y-8"
        >
          <p className="font-semibold text-tertiary tracking-[0.4em] text-[11px] uppercase">
            ✦ Crafted to Perfection ✦
          </p>
          <h2 className="font-display text-4xl text-on-surface leading-tight font-semibold">
            A Glimpse of Our <span className="font-script text-blush-pink text-5xl block mt-2">Creations</span>
          </h2>
          <p className="text-on-surface-variant leading-loose opacity-80">
            Every piece tells a story. From vibrant rubies to ethereal emeralds, our gallery showcases the peak of imitation jewellery artistry.
          </p>
          <button className="px-10 py-4 border border-tertiary/20 text-tertiary font-semibold rounded-lg hover:bg-blush-pink/10 transition-all uppercase tracking-[0.2em] text-[12px] cursor-pointer">
            Explore Gallery
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3"
        >
          <div className="rounded-2xl overflow-hidden luxury-shadow bg-surface-container-lowest flex">
            {/* The provided composite image serves perfectly as a visual layout of 5 vertical strips */}
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLtKdq1sdAv5qxzC-rbojmykPY0EPxo34lSmRh-A0nTXg0XBTFkzAMatNKLozKMJ3og8uRbeeTRgzlK6_1AEIrYwFG8-IqiIewigJ_Zmos9VyPxul6c6RcHn2jYcETIAVwJ6j6vqbT8ZTPMm0pzxnYFExh2caRwDgwEfPaPYPYDixBKzeJ6D3yZItiWezEQIy91SXyg8p3uZ2IiljJ8K0DaUxO135XEA6C7qIaUss4HBw1TavXRLkv58Tmk"
              alt="Jewellery Gallery Multi View"
              className="w-full h-auto min-h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
