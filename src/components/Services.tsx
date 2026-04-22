import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { Scissors } from 'lucide-react';
import casualImg from '../assets/images/casual.jpg';
import traditionalImg from '../assets/images/traditional.jpg';
import weddingImg from '../assets/images/wedding.jpg';
import modernImg from '../assets/images/modern.jpg';

const categoryImages: Record<string, string> = {
  casuals: casualImg,
  traditional: traditionalImg,
  wedding: weddingImg,
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 mb-4 border border-brand-gold/20 rounded-full"
          >
            <Scissors className="w-8 h-8 text-brand-gold" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tighter uppercase text-brand-dark">
            The <span className="italic font-normal text-brand-gold">Craft</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-10"></div>
          <p className="text-brand-dark max-w-xl mx-auto text-sm uppercase tracking-[0.2em] font-bold">
            masterfully crafted garments for every moment of your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-10 shadow-2xl shadow-brand-dark/10">
                <img
                  src={categoryImages[category.id] ?? modernImg}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-10">
                  <h3 className="text-3xl font-serif text-white uppercase tracking-tighter mb-2">{category.title}</h3>
                  <p className="text-brand-gold text-[10px] font-black tracking-[0.3em] uppercase">Bespoke Atelier</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
