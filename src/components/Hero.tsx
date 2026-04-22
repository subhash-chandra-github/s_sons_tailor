import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598501022229-39b5a1bb57f7?q=80&w=2670&auto=format&fit=crop"
          alt="Tailor shop background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/60 backdrop-brightness-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
        >
          Bespoke Tailoring Lucknow
        </motion.span>
        <div className="inline-block bg-brand-dark/30 backdrop-blur-sm p-8 md:p-12 mb-10 border border-white/10 ring-1 ring-white/5 ring-offset-4 ring-offset-transparent">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif text-white font-bold leading-[0.9] tracking-tighter drop-shadow-2xl"
          >
            S.Sons <br />
            <span className="italic font-light text-brand-gold/90">Atelier</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/70 font-light mb-14 max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          For those who demand excellence. Every stitch tells a story of heritage,
          precision, and uncompromising style.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/services"
            className="px-12 py-5 bg-brand-gold text-brand-dark font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all w-full sm:w-auto shadow-2xl shadow-brand-gold/20 text-center"
          >
            View Collections
          </Link>
          <Link
            to="/custom-orders"
            className="px-12 py-5 border border-white/30 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all w-full sm:w-auto text-center"
          >
            Start Project
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="text-white/60 w-5 h-5" />
      </motion.div>
    </section>
  );
}
