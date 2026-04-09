import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl mb-6"
          >
            ESTAMOS EN <span className="text-brand-orange">CONTACTO</span>
          </motion.h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ¿Tienes alguna duda o proyecto especial? Visítanos en nuestra planta o envíanos un mensaje. Estamos listos para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <MapPin className="text-brand-orange mb-4" size={32} />
                <h4 className="font-display text-2xl mb-2">DIRECCIÓN</h4>
                <p className="text-gray-600">{CONTACT_INFO.address}</p>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100">
                <Phone className="text-brand-orange mb-4" size={32} />
                <h4 className="font-display text-2xl mb-2">TELÉFONO</h4>
                <p className="text-gray-600">{CONTACT_INFO.phone}</p>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100">
                <Mail className="text-brand-orange mb-4" size={32} />
                <h4 className="font-display text-2xl mb-2">EMAIL</h4>
                <p className="text-gray-600">{CONTACT_INFO.email}</p>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-100">
                <Clock className="text-brand-orange mb-4" size={32} />
                <h4 className="font-display text-2xl mb-2">HORARIOS</h4>
                <p className="text-gray-600">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            {/* Mock Map */}
            <div className="aspect-video bg-gray-200 relative overflow-hidden group border border-gray-200">
              <img 
                src="https://picsum.photos/seed/map/800/450" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-black text-white px-6 py-3 font-display text-xl shadow-2xl flex items-center">
                  <MapPin className="text-brand-orange mr-2" /> VER EN GOOGLE MAPS
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="flex items-center space-x-2 text-brand-black hover:text-brand-orange transition-colors font-display text-xl">
                <Facebook /> <span>FACEBOOK</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-brand-black hover:text-brand-orange transition-colors font-display text-xl">
                <Instagram /> <span>INSTAGRAM</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-brand-black hover:text-brand-orange transition-colors font-display text-xl">
                <Twitter /> <span>TWITTER</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-black text-white p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -mr-32 -mt-32" />
            
            <h3 className="text-4xl md:text-5xl mb-8 relative z-10">ENVÍANOS UN <span className="text-brand-orange">MENSAJE</span></h3>
            
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="font-display text-lg tracking-widest text-gray-400">NOMBRE</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-orange transition-colors font-sans"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-display text-lg tracking-widest text-gray-400">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-orange transition-colors font-sans"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-lg tracking-widest text-gray-400">ASUNTO</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-orange transition-colors font-sans appearance-none">
                    <option className="bg-brand-black">General</option>
                    <option className="bg-brand-black">Ventas</option>
                    <option className="bg-brand-black">Soporte</option>
                    <option className="bg-brand-black">Diseño</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-display text-lg tracking-widest text-gray-400">MENSAJE</label>
                <textarea 
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-orange transition-colors font-sans resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-orange text-brand-black font-display text-2xl py-5 hover:bg-white transition-all flex items-center justify-center"
              >
                ENVIAR MENSAJE <Send className="ml-3" size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
