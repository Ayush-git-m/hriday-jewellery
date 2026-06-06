import { motion } from 'motion/react';
import { MessageCircle, Phone, Instagram } from 'lucide-react';

export function Connected() {
  return (
    <section id="contact" className="bg-blush-pink py-16 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-3"
        >
          <h3 className="font-display text-3xl text-tertiary font-semibold flex items-center justify-center md:justify-start gap-3">
            Let's Stay Connected <span className="font-script text-4xl text-on-tertiary-container/50">♡</span>
          </h3>
          <p className="text-tertiary/70 max-w-sm mx-auto md:mx-0">
            Have a question or want to place an order? We're here to help you.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="https://wa.me/+917016206303"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-white/40 hover:bg-white/60 transition-colors px-8 py-4 rounded-xl group min-w-[180px]"
          >
            <MessageCircle className="text-tertiary" />
            <div className="text-left">
              <p className="font-semibold text-[10px] text-tertiary/60 uppercase tracking-widest leading-none mb-1">WhatsApp</p>
              <p className="text-sm text-tertiary font-semibold">Chat with us</p>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+917016206303"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-white/40 hover:bg-white/60 transition-colors px-8 py-4 rounded-xl group min-w-[180px]"
          >
            <Phone className="text-tertiary" />
            <div className="text-left">
              <p className="font-semibold text-[10px] text-tertiary/60 uppercase tracking-widest leading-none mb-1">Call Us</p>
              <p className="text-sm text-tertiary font-semibold">+91 70162 06303</p>
            </div>
          </motion.a>

          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 bg-white/40 hover:bg-white/60 transition-colors px-8 py-4 rounded-xl group min-w-[180px]"
          >
            <Instagram className="text-tertiary" />
            <div className="text-left">
              <p className="font-semibold text-[10px] text-tertiary/60 uppercase tracking-widest leading-none mb-1">Instagram</p>
              <p className="text-sm text-tertiary font-semibold">Follow us</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
