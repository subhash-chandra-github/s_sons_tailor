import React from 'react';
import { motion } from 'motion/react';
import { Send, Camera, Ruler } from 'lucide-react';

export default function CustomOrder() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="custom-orders" className="py-32 px-4 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative cursor-default">
        {/* Decorative background text */}
        <div className="absolute -top-12 -left-12 text-[15vw] font-serif font-black opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
          ATELIER CUSTOM S.SONS 
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold mb-10 leading-[0.9] uppercase tracking-tighter">
              Commission <br />
              <span className="italic font-light text-brand-gold">Luxury</span>
            </h2>
            <p className="text-lg text-white/50 mb-14 font-light leading-relaxed tracking-wide">
              Have a specific vision? Share your designs, measurements, or inspiration with us. 
              Our master tailors will work closely with you to create a garment that is uniquely yours.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Ruler, title: 'Precision Measurements', desc: 'Expert fittings to ensure a flawless silhouette.' },
                { icon: Camera, title: 'Inspiration Driven', desc: 'Share reference images and we\'ll bring them to life.' },
                { icon: Send, title: 'Seamless Process', desc: 'Consultation to delivery, we handle everything.' }
              ].map((item, id) => (
                <div key={id} className="flex gap-6 items-start">
                  <div className="p-3 border border-brand-gold/30 rounded-full">
                    <item.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 text-brand-dark relative"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Request Sent!</h3>
                <p className="text-gray-500 italic">Our team will contact you shortly to discuss your custom order.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-tight border-b-2 border-brand-gold w-fit pb-2">
                  Project Inquiry
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Full Name</label>
                    <input required type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Phone Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Interested In</label>
                  <select className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:outline-none focus:border-brand-gold transition-colors text-sm">
                    <option>Wedding Sherwani</option>
                    <option>Bespoke Suit</option>
                    <option>Traditional Set</option>
                    <option>Casual Wear</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Message / Vision</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:outline-none focus:border-brand-gold transition-colors text-sm resize-none" placeholder="Tell us about your custom requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-widest hover:bg-brand-gold transition-all">
                  Send Inquiry
                </button>
              </form>
            )}
            
            {/* Design detail */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-brand-gold pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
