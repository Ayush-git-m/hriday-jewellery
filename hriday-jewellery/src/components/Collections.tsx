import { motion } from 'motion/react';

const masterImage = "https://lh3.googleusercontent.com/aida/AP1WRLslBozRv2nqqLrIhEdpeWpKws-kxca6YQjS9G8NZM_LjX33rwAVEoW-RnfdKqnct8qLYj7mdEdQzXysMtlC4qf1zvxWApzRfQqOIsuIMCwZL5hn3gZenAX-vBjQunOZkBppp4MIauTfWxOo1ekMvBo1yFWvStW9cvCy2b5TpAPAvzkKzqqzF6wlU-DE1_bRJX9dphBU7i5JIWy4b0Cj9NiceGIaSGvE47PkFRhfGP9kHMAwan4ZvT15TQ";

const collections = [
  { name: 'Bridal Sets Heavy Work', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMjwfUcVOYWX0kNgg-p-2NgLfmFPlRdjI6aDoRDatnzs4xfp9Qgiaqnbq1aC02LEY_4-b6ACpNbkeNPasPK-g5Z1zwFwFmatCRb8g4-B5Hc1ld66PE=s1080' },
  { name: 'Semi-Bridal Sets', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNpoHnujnhkX7E3N2TlNtzVeoZ5U6H1-lmsa6DjlW0evv-Prxyj6KlGfUsxHK28UE08DMhFp_BNppZFhSGR5qiK9Tw0XrWAiztt---SkeT28JWFHlc=s1080' },
  { name: 'Simple Sets', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOKBCWKXMN6pTP67ItEwOxYTm1oOlhiNvoaSdGBAb4g9G4CQNS4Wjx2sAAOWvx81ryFhgj0Pbm5Z_UfbEVEk8YXBCgwt-NXCvOpoTraCuJ8rEzPSgE=s1080' },
  { name: 'Minimal Sets', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNW7NriI6BGlA7yprb_VIMbXSvsRhvTOxbf_9LORJfcg0pNwr5pikInjZlNW9XdUj-AzYk3GysVbUQxNki1vERzGoMFNmfg-z_yNnJD9CeXJ8Rn8kk=s1080' },
  { name: 'Waist Chain', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOdKnpyTDcQBeWkrTQwywuOI8tTUFPBvREjGfcKBHFIO-28ScVscVW8mfQjTcgphfKUQzKEJx75pYcAMzbyq9LubXHfMo23lUTClDiSfA8SCpF8MWA=s1080' },
  { name: 'Bracelets', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNBN4dlbXo2nwN1Q3m6Cmg3ggZBgV5_9ApVFbM6vRFCCP-viTGwmQ6631OvizMVaNXJHKBDz8m_HTFoU8taoTU-IU_0tMai7XTEBm2kLZMt_ORD324=s1080' },
  { name: 'Watches', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNQItn2PiF5vf6REbpwHHu2s7hS0B5nBtWYA5EvSTbJO2KuylDDOj1tEjneEYPX0ZbesqWjiVWlBx9lKOOskiiPAabDCvmQvGkuTyMU7hPBH48Sung=s1080' },
  { name: 'Earrings', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMyndIvq1_15tjsiZmevfY0XIVrvHzMd6FN9YlKqNLVBz73T5mwXFY5OkJ59u5icnIFFmvazX9GaJjz1NuUg7UXWhy4f-B-FQahfBkPLUOt-L-cfJQ=s1080' },
  { name: 'Bangles', position: 'center', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNY3gnppIVh9XhKwhOvho37lL7BjMmbuzhSmDjuMtqRMpFG50Hq8FfLDFLQZ3rs5rUIlHafyeGzqwT4-MqGIE_q2efYNCnjwyoYk8tUm33dKTYWB1M=s1080' },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 px-6 md:px-20 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="font-semibold text-tertiary tracking-[0.5em] text-[11px] mb-2 uppercase">
            ✦ Our Collections ✦
          </p>
          <h2 className="font-display text-4xl text-on-surface font-semibold">
            Find Your <span className="font-script text-blush-pink text-5xl lowercase align-middle px-2">perfect piece</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-10">
          {collections.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border border-surface-variant p-0.5 hover:border-blush-pink transition-all duration-300 cursor-pointer luxury-shadow">
                <img
                  src={item.imageUrl || masterImage}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ 
                    objectPosition: item.position, 
                    scale: item.imageUrl ? '1' : '3' 
                  }}
                />
              </div>
              <p className="font-semibold text-[11px] text-on-surface uppercase tracking-widest text-center">
                {item.name}
              </p>
            </motion.div>
          ))}


        </div>


      </div>
    </section>
  );
}
