import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Send, CheckCircle2, ArrowRight, ArrowLeft, ClipboardList, User, FileText } from 'lucide-react';
import { SERVICES } from '../constants';

const Quote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: SERVICES[0].id,
    quantity: 100,
    paperType: 'standard',
    details: '',
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [price, setPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Simple mock calculation logic
    let basePrice = 0;
    const selectedService = SERVICES.find(s => s.id === formData.service);
    
    if (selectedService) {
      if (formData.service === 'business-cards') {
        // $450 per 1000 units
        basePrice = 450 / 1000;
      } else if (formData.service === 'offset') basePrice = 0.5;
      else if (formData.service === 'digital') basePrice = 1.0;
      else if (formData.service === 'large-format') basePrice = 15.0;
      else basePrice = 10.0;
    }

    const paperMultiplier = formData.paperType === 'premium' ? 1.5 : 1.0;
    const calculated = basePrice * formData.quantity * paperMultiplier;
    setPrice(calculated);
  }, [formData.service, formData.quantity, formData.paperType]);

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (formData.service === 'business-cards' && formData.quantity < 1000) {
        newErrors.quantity = 'La cantidad mínima para tarjetas es de 1,000 unidades (1 Millar)';
      } else if (!formData.quantity || formData.quantity <= 0) {
        newErrors.quantity = 'La cantidad debe ser mayor a 0';
      }
    }
    
    if (step === 2) {
      if (!formData.details.trim()) {
        newErrors.details = 'Por favor, proporciona algunos detalles del proyecto';
      }
    }
    
    if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name = 'El nombre es obligatorio';
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'El email es obligatorio';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'El formato del email no es válido';
      }
      
      const phoneRegex = /^\+?[\d\s-]{8,}$/;
      if (!formData.phone.trim()) {
        newErrors.phone = 'El teléfono es obligatorio';
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'El formato del teléfono no es válido';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      // In a real app, send data to backend
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setErrors({}); // Clear errors when going back
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const steps = [
    { id: 1, title: 'Proyecto', icon: ClipboardList },
    { id: 2, title: 'Detalles', icon: FileText },
    { id: 3, title: 'Contacto', icon: User },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-48 pb-24 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-lg px-6"
        >
          <CheckCircle2 size={100} className="text-brand-orange mx-auto mb-8" />
          <h2 className="text-5xl mb-4">¡SOLICITUD ENVIADA!</h2>
          <p className="text-xl text-gray-600 mb-10">
            Hemos recibido tu solicitud de cotización. Un asesor se pondrá en contacto contigo en menos de 24 horas.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="bg-brand-black text-white font-display text-2xl px-12 py-4 hover:bg-brand-orange hover:text-brand-black transition-all"
          >
            VOLVER A COTIZAR
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-6xl md:text-8xl mb-6">SOLICITAR <span className="text-brand-orange">COTIZACIÓN</span></h1>
          <p className="text-xl text-gray-600">
            Utiliza nuestra calculadora interactiva para obtener un estimado rápido o envíanos los detalles de tu proyecto para una cotización formal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Stepper and Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stepper Indicator */}
            <div className="bg-white p-6 border border-gray-200 shadow-sm mb-8">
              <div className="flex justify-between items-center relative">
                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
                <motion.div 
                  className="absolute top-1/2 left-0 h-0.5 bg-brand-orange -translate-y-1/2 z-0"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step) => (
                  <div key={step.id} className="relative z-10 flex flex-col items-center">
                    <motion.div 
                      animate={{ 
                        backgroundColor: currentStep >= step.id ? '#F27D26' : '#FFFFFF',
                        borderColor: currentStep >= step.id ? '#F27D26' : '#E5E7EB',
                        color: currentStep >= step.id ? '#141414' : '#9CA3AF'
                      }}
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-colors"
                    >
                      <step.icon size={20} />
                    </motion.div>
                    <span className={`font-display text-sm uppercase tracking-widest ${currentStep >= step.id ? 'text-brand-black' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm min-h-[500px] flex flex-col">
              <div className="flex-grow overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-3xl font-display mb-6">Información del Proyecto</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="font-display text-xl text-brand-black uppercase tracking-wider">Servicio</label>
                          <select 
                            value={formData.service}
                            onChange={(e) => handleInputChange('service', e.target.value)}
                            className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans ${errors.service ? 'border-red-500' : 'border-gray-200'}`}
                          >
                            {SERVICES.map(s => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                          </select>
                          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="font-display text-xl text-brand-black uppercase tracking-wider">Cantidad</label>
                          <input 
                            type="number" 
                            value={formData.quantity}
                            onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 0)}
                            className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans ${errors.quantity ? 'border-red-500' : 'border-gray-200'}`}
                            min="1"
                          />
                          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="font-display text-xl text-brand-black uppercase tracking-wider">Tipo de Papel</label>
                          <select 
                            value={formData.paperType}
                            onChange={(e) => handleInputChange('paperType', e.target.value)}
                            className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans ${errors.paperType ? 'border-red-500' : 'border-gray-200'}`}
                          >
                            <option value="standard">Estándar (Couché 150g)</option>
                            <option value="premium">Premium (Couché 300g / Mate)</option>
                            <option value="special">Especial (Texturizado / Ecológico)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-3xl font-display mb-6">Detalles Adicionales</h3>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-brand-black uppercase tracking-wider">Especificaciones</label>
                        <textarea 
                          rows={8}
                          value={formData.details}
                          onChange={(e) => handleInputChange('details', e.target.value)}
                          placeholder="Describe medidas, acabados especiales (barniz, troquelado, laminado), o cualquier requerimiento específico."
                          className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans resize-none ${errors.details ? 'border-red-500' : 'border-gray-200'}`}
                        />
                        {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-3xl font-display mb-6">Información de Contacto</h3>
                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-2">
                          <label className="font-display text-xl text-brand-black uppercase tracking-wider">Nombre Completo</label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Tu nombre"
                            className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="font-display text-xl text-brand-black uppercase tracking-wider">Email</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="correo@ejemplo.com"
                              className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                          </div>
                          <div className="space-y-2">
                            <label className="font-display text-xl text-brand-black uppercase tracking-wider">Teléfono</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="55 1234 5678"
                              className={`w-full p-4 border focus:border-brand-orange outline-none transition-colors bg-gray-50 font-sans ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-12 mt-auto">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center font-display text-xl px-8 py-4 transition-all ${
                    currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-brand-black hover:text-brand-orange'
                  }`}
                >
                  <ArrowLeft className="mr-2" size={20} /> ANTERIOR
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-brand-black text-white font-display text-xl px-12 py-4 hover:bg-brand-orange hover:text-brand-black transition-all flex items-center"
                  >
                    SIGUIENTE <ArrowRight className="ml-2" size={20} />
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="bg-brand-orange text-brand-black font-display text-xl px-12 py-4 hover:bg-brand-black hover:text-white transition-all flex items-center shadow-lg"
                  >
                    ENVIAR SOLICITUD <Send className="ml-3" size={20} />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Price Summary Sticky */}
          <div className="lg:col-span-1">
            <div className="bg-brand-black text-white p-10 sticky top-32 border-t-8 border-brand-orange shadow-2xl">
              <Calculator className="text-brand-orange mb-6" size={48} />
              <h3 className="text-3xl mb-8 uppercase tracking-widest">Resumen Estimado</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400">Servicio</span>
                  <span className="font-semibold">{SERVICES.find(s => s.id === formData.service)?.title}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400">Cantidad</span>
                  <span className="font-semibold">{formData.quantity} unidades</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400">Papel</span>
                  <span className="font-semibold capitalize">{formData.paperType}</span>
                </div>
              </div>

              <div className="mb-10">
                <span className="text-gray-400 block mb-2 uppercase text-sm tracking-widest">Total Estimado*</span>
                <span className="text-6xl font-display text-brand-orange">${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed italic">
                *Este es un precio estimado basado en parámetros estándar. El precio final puede variar según archivos, acabados específicos y urgencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

