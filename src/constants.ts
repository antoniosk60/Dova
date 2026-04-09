import { Printer, Palette, Layout, Megaphone, Package, FileText } from 'lucide-react';

export const SERVICES = [
  {
    id: 'business-cards',
    title: 'Tarjetas de Presentación',
    description: 'Impresión en couché de 300g con acabado barniz UV. La mejor presentación para tu negocio.',
    icon: FileText,
    price: '$450.00 / Millar',
    features: ['Couché 300g', 'Barniz UV', 'Mínimo 1,000 unidades']
  },
  {
    id: 'offset',
    title: 'Impresión Offset',
    description: 'Alta calidad para grandes volúmenes. Ideal para revistas, catálogos y papelería corporativa.',
    icon: Printer,
    price: 'Desde $0.50/unidad',
    features: ['Calidad superior', 'Grandes tirajes', 'Colores Pantone']
  },
  {
    id: 'digital',
    title: 'Impresión Digital',
    description: 'Rapidez y flexibilidad para tirajes cortos. Entrega inmediata y personalización.',
    icon: FileText,
    price: 'Desde $1.00/unidad',
    features: ['Entrega rápida', 'Tirajes cortos', 'Personalización']
  },
  {
    id: 'design',
    title: 'Diseño Gráfico',
    description: 'Creatividad que comunica. Identidad visual, logotipos y diseño publicitario.',
    icon: Palette,
    price: 'Desde $50.00/proyecto',
    features: ['Conceptos únicos', 'Archivos editables', 'Revisiones ilimitadas']
  },
  {
    id: 'large-format',
    title: 'Gran Formato',
    description: 'Lonas, vinilos y banners. Haz que tu marca se vea a lo grande.',
    icon: Layout,
    price: 'Desde $15.00/m²',
    features: ['Resistente al exterior', 'Alta resolución', 'Instalación disponible']
  },
  {
    id: 'marketing',
    title: 'Publicidad',
    description: 'Estrategias visuales para tu negocio. Volantes, tarjetas y promocionales.',
    icon: Megaphone,
    price: 'Desde $30.00/paquete',
    features: ['Impacto visual', 'Distribución lista', 'Asesoría experta']
  },
  {
    id: 'packaging',
    title: 'Empaque y Etiquetas',
    description: 'Soluciones de empaque personalizadas que protegen y venden tu producto.',
    icon: Package,
    price: 'Desde $0.20/unidad',
    features: ['Troquelado especial', 'Acabados premium', 'Diseño estructural']
  }
];

export const PORTFOLIO = [
  {
    id: 1,
    title: 'Revista Gourmet',
    category: 'Editorial',
    image: 'https://picsum.photos/seed/gourmet/800/600',
  },
  {
    id: 2,
    title: 'Packaging Cosmético',
    category: 'Empaque',
    image: 'https://picsum.photos/seed/cosmetic/800/1000',
  },
  {
    id: 3,
    title: 'Identidad Corporativa Tech',
    category: 'Diseño',
    image: 'https://picsum.photos/seed/tech/800/600',
  },
  {
    id: 4,
    title: 'Banner Evento Deportivo',
    category: 'Gran Formato',
    image: 'https://picsum.photos/seed/sports/800/800',
  },
  {
    id: 5,
    title: 'Menú Restaurante',
    category: 'Publicidad',
    image: 'https://picsum.photos/seed/menu/800/1200',
  },
  {
    id: 6,
    title: 'Etiquetas Cerveza Artesanal',
    category: 'Empaque',
    image: 'https://picsum.photos/seed/beer/800/600',
  }
];

export const CONTACT_INFO = {
  address: 'Calle Industria 123, Zona Industrial, Ciudad de México',
  phone: '+52 55 1234 5678',
  whatsapp: '525512345678',
  email: 'contacto@imprentadova.com',
  hours: 'Lun - Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 2:00 PM'
};
