import { motion } from 'motion/react';
import { Heart, BadgeCheck, Sparkles, CalendarCheck, Smile } from 'lucide-react';

const features = [
  { icon: Heart, label: 'Handcrafted with love' },
  { icon: BadgeCheck, label: 'Premium Quality' },
  { icon: Sparkles, label: 'Elegant Designs For Every You' },
  { icon: CalendarCheck, label: 'Perfect for Every Occasion' },
  { icon: Smile, label: 'Customer Satisfaction' },
];

export function TrustBar() {
  return (
    <section className="bg-surface-bright py-14 px-6 md:px-20 border-y border-tertiary/5">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-8">
        {features.map((item, idx) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center gap-4 flex-1 min-w-[150px]"
          >
            <item.icon className="w-8 h-8 text-tertiary" strokeWidth={1.5} absoluteStrokeWidth />
            <p className="font-semibold text-center text-[10px] leading-tight text-on-surface-variant uppercase tracking-[0.15em] max-w-[120px]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
