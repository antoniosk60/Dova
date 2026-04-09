import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl mb-6"
          >
            NUESTROS <span className="text-brand-orange">SERVICIOS</span>
          </motion.h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Combinamos tecnología de punta con décadas de experiencia artesanal para ofrecerte los mejores resultados en impresión y diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border border-gray-200 p-10 hover:border-brand-orange transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-brand-orange/10 transition-colors" />
              
              <service.icon className="text-brand-orange mb-8" size={56} />
              <h3 className="text-4xl mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-10">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center text-gray-700">
                    <Check className="text-brand-orange mr-3" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                <span className="font-display text-2xl text-brand-orange">{service.price}</span>
                <Link to="/cotizacion" className="bg-brand-black text-white px-6 py-3 font-display text-lg hover:bg-brand-orange hover:text-brand-black transition-all flex items-center">
                  COTIZAR <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-4">NUESTRO <span className="text-brand-orange">PROCESO</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trabajamos de manera eficiente para garantizar que tu proyecto se entregue a tiempo y con la máxima calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta', desc: 'Entendemos tus necesidades y objetivos para ofrecerte la mejor solución.' },
              { step: '02', title: 'Diseño', desc: 'Creamos o adaptamos tus archivos para asegurar una impresión perfecta.' },
              { step: '03', title: 'Producción', desc: 'Utilizamos maquinaria de última generación con supervisión experta.' },
              { step: '04', title: 'Entrega', desc: 'Revisamos cada detalle antes de entregarte el producto final.' },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 border border-gray-100 bg-gray-50">
                <span className="font-display text-6xl text-brand-orange/20 absolute top-4 right-4">{item.step}</span>
                <h4 className="text-3xl mb-4 relative z-10">{item.title}</h4>
                <p className="text-gray-600 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
