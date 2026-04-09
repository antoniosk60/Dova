import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-brand-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/printing/1920/1080" 
            alt="Printing Press" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl text-white mb-6 leading-none">
              IMPRESIÓN QUE <br />
              <span className="text-brand-orange">DEJA HUELLA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Desde 1995 transformando ideas en realidades tangibles. Calidad industrial, diseño impecable y tiempos de entrega récord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/cotizacion" 
                className="bg-brand-orange text-brand-black font-display text-xl px-10 py-4 flex items-center justify-center hover:bg-white transition-colors group"
              >
                COTIZAR AHORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/servicios" 
                className="border border-white text-white font-display text-xl px-10 py-4 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"
              >
                VER SERVICIOS
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-10 bottom-20 hidden lg:block">
          <span className="font-display text-white/20 text-8xl tracking-tighter vertical-text rotate-180 select-none">
            EST. 1995
          </span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Clientes Satisfechos', value: '5,000+', icon: Users },
              { label: 'Proyectos Entregados', value: '12,000+', icon: CheckCircle2 },
              { label: 'Años de Experiencia', value: '28', icon: Award },
              { label: 'Tiempos de Entrega', value: '24h', icon: Clock },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto text-brand-orange mb-4" size={40} />
                <div className="font-display text-5xl text-brand-black mb-2">{stat.value}</div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl mb-4">NUESTROS <span className="text-brand-orange">SERVICIOS</span></h2>
              <p className="text-gray-600 max-w-xl text-lg">
                Ofrecemos una gama completa de soluciones de impresión para satisfacer todas tus necesidades comerciales y personales.
              </p>
            </div>
            <Link to="/servicios" className="text-brand-orange font-display text-xl flex items-center hover:underline">
              VER TODOS <ArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 border border-gray-200 hover:border-brand-orange transition-colors group"
              >
                <service.icon className="text-brand-orange mb-6 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-3xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/servicios" className="font-display text-lg text-brand-black group-hover:text-brand-orange transition-colors flex items-center">
                  SABER MÁS <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-4">TRABAJOS <span className="text-brand-orange">RECIENTES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Echa un vistazo a algunos de nuestros proyectos más destacados. Calidad que habla por sí sola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-brand-orange font-display text-lg mb-2">{item.category}</span>
                  <h4 className="text-3xl font-display">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/portafolio" 
              className="inline-block border border-brand-orange text-brand-orange font-display text-xl px-12 py-4 hover:bg-brand-orange hover:text-brand-black transition-all"
            >
              VER PORTAFOLIO COMPLETO
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-orange">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl text-brand-black mb-8">¿LISTO PARA DARLE VIDA <br /> A TU PROYECTO?</h2>
          <p className="text-brand-black/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Hablemos hoy mismo. Nuestro equipo de expertos está listo para asesorarte en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contacto" 
              className="bg-brand-black text-white font-display text-2xl px-12 py-5 hover:bg-white hover:text-brand-black transition-all shadow-xl"
            >
              CONTÁCTANOS
            </Link>
            <Link 
              to="/cotizacion" 
              className="bg-white text-brand-black font-display text-2xl px-12 py-5 hover:bg-brand-black hover:text-white transition-all shadow-xl"
            >
              SOLICITAR COTIZACIÓN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
