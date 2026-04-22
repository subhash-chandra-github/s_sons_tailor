import { MapPin, Phone, Mail, Clock, Scissors, ExternalLink } from 'lucide-react';
import { SHOP_LOCATION } from '../constants';

export default function Contact() {
  return (
    <footer id="location" className="bg-white pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <Scissors className="w-8 h-8 text-brand-gold" />
              <span className="font-serif text-3xl font-bold tracking-tighter uppercase text-brand-dark">S.Sons</span>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="font-serif text-2xl font-bold mb-6 uppercase tracking-tight text-brand-dark">The Studio</h4>
                <div className="flex gap-4 text-brand-dark/60 italic">
                  <MapPin className="w-6 h-6 text-brand-gold shrink-0 italic" />
                  <p className="leading-relaxed text-sm uppercase tracking-widest">
                    60 Feet Rd, Jankipuram Vistar,<br />
                    Lucknow, Uttar Pradesh 226021, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif text-xl font-bold mb-6 uppercase tracking-tight text-brand-dark">Inquiries</h4>
                  <ul className="space-y-4 text-brand-dark/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brand-gold" />
                      <span>+91 98765 43210</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-brand-gold" />
                      <span>atelier@ssons.com</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-6 uppercase tracking-tight text-brand-dark">Concierge</h4>
                  <ul className="space-y-4 text-brand-dark/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <li className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-brand-gold" />
                      <span>Mon - Sat: 10AM - 9PM</span>
                    </li>
                    <li className="flex items-center gap-3 text-brand-gold">
                      <Clock className="w-4 h-4" />
                      <span>Sunday by Appointment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={SHOP_LOCATION}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 border border-brand-gold text-brand-dark font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-white transition-all shadow-xl shadow-brand-gold/5"
              >
                Find Us <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="h-[500px] w-full bg-gray-100 relative group overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=S%20Sons%20Tailor%20%26%20Collection%20Madiyaon%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            © 2024 S.Sons Tailor & Collection. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Instagram', 'Facebook', 'WhatsApp'].map(social => (
              <a key={social} href="#" className="text-gray-400 hover:text-brand-gold text-xs uppercase tracking-widest transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
