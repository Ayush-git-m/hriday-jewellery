import { motion } from 'motion/react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* "Hg" script */}
      <div className="relative">
        <span className="font-script text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-antique-gold to-[#e8c872] leading-none mb-1 inline-block -rotate-2">
          Hg
        </span>
        <span className="absolute top-1 -right-8 font-script text-3xl text-antique-gold">
          ♡
        </span>
        <span className="absolute -top-2 -right-12 text-blush-pink text-xl opacity-80">
          ✦
        </span>
      </div>

      {/* HRIDAY */}
      <div className="font-display text-2xl md:text-3xl tracking-[0.2em] text-[#e0a9a5] font-medium leading-none mb-2 ml-1">
        HRIDAY
      </div>

      {/* GALLERY */}
      <div className="flex items-center gap-3 mb-2 w-full justify-center">
        <div className="h-[1px] w-8 bg-on-surface-variant/30"></div>
        <div className="font-display text-[10px] md:text-xs tracking-[0.4em] text-on-surface-variant leading-none">
          GALLERY
        </div>
        <div className="h-[1px] w-8 bg-on-surface-variant/30"></div>
      </div>

      {/* Heart Divider & Imitation Jewellery */}
      <div className="flex flex-col items-center gap-1 w-full mt-1">
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="h-[1px] w-12 bg-blush-pink/40"></div>
          <span className="text-blush-pink text-[10px]">♡</span>
          <div className="h-[1px] w-12 bg-blush-pink/40"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blush-pink text-[8px]">✦</span>
          <div className="font-sans text-[7px] md:text-[8px] tracking-[0.3em] text-on-surface-variant/70 uppercase">
            Imitation Jewellery
          </div>
          <span className="text-blush-pink text-[8px]">✦</span>
        </div>
      </div>
    </div>
  );
}
