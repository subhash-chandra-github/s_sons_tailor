import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Price List', href: '/price-list' },
    { name: 'Custom Orders', href: '/custom-orders' },
    { name: 'Location', href: '/location' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo — clicking goes home */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Scissors className="w-8 h-8 text-brand-gold group-hover:rotate-12 transition-transform" />
            <span className="font-serif text-2xl font-bold tracking-tighter uppercase text-brand-dark">S.Sons</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-brand-gold transition-colors text-brand-dark/70"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/custom-orders"
              className="px-8 py-3 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 shadow-xl shadow-brand-dark/10"
            >
              Reserve a Fitting
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-brand-gold/20"
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-serif tracking-wide hover:text-brand-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/custom-orders"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-3 bg-brand-dark text-white text-sm font-bold uppercase tracking-widest"
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
