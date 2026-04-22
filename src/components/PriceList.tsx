import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';

export default function PriceList() {
  return (
    <section id="price-list" className="py-32 px-4 bg-brand-cream/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight mb-6 text-brand-dark">
            Service <span className="italic font-normal text-brand-gold">Inventory</span>
          </h2>
          <p className="text-brand-dark/60 uppercase tracking-[0.4em] text-[10px] font-black">bespoke stitching rates</p>
        </div>

        <div className="bg-white p-10 md:p-20 shadow-2xl shadow-brand-dark/5 border border-brand-gold/5">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="mb-12 last:mb-0">
              <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-4 text-brand-dark">
                <span className="w-12 h-[1px] bg-brand-gold opacity-50"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {category.services.map((service) => (
                  <div key={service.name} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold uppercase tracking-widest text-sm group-hover:text-brand-gold transition-colors">
                        {service.name}
                      </span>
                      <span className="flex-grow border-b border-dotted border-gray-300 mx-4"></span>
                      <span className="font-serif font-bold text-lg text-brand-dark">{service.price}</span>
                    </div>
                    <p className="text-xs text-gray-400 lowercase italic line-clamp-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-16 p-8 border border-brand-gold/20 bg-brand-cream tracking-tight text-center italic text-gray-500 text-sm">
            * Prices are for stitching only and may vary based on design complexity. 
            Fabric costs are additional unless specified.
          </div>
        </div>
      </div>
    </section>
  );
}
