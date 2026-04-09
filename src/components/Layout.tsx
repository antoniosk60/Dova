import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Cotización', path: '/cotizacion' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-black/95 py-3 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-orange text-brand-black font-display text-2xl px-3 py-1 skew-x-[-12deg]">
              DOVA
            </div>
            <span className="text-white font-display text-xl tracking-widest hidden sm:block">IMPRENTA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-lg tracking-wider transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-4xl tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-brand-orange text-brand-black font-display text-2xl px-3 py-1 skew-x-[-12deg]">
                  DOVA
                </div>
                <span className="text-white font-display text-xl tracking-widest">IMPRENTA</span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Soluciones gráficas integrales con tecnología de vanguardia y un compromiso inquebrantable con la calidad.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/5 hover:bg-brand-orange hover:text-brand-black transition-all rounded-full">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-brand-orange hover:text-brand-black transition-all rounded-full">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-brand-orange hover:text-brand-black transition-all rounded-full">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-xl mb-6 text-brand-orange">Enlaces</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl mb-6 text-brand-orange">Servicios</h4>
              <ul className="space-y-4">
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Impresión Offset</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Impresión Digital</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Diseño Gráfico</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Gran Formato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl mb-6 text-brand-orange">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin size={20} className="text-brand-orange shrink-0 mt-1" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone size={20} className="text-brand-orange shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail size={20} className="text-brand-orange shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Imprenta Dova. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
        </svg>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-[#25D366] rounded-full -z-10 opacity-50"
        />
      </motion.a>
    </div>
  );
};

export default Layout;
