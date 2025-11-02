'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.supply': 'Supply',
    'nav.serviceCenter': 'Service Center',
    'nav.training': 'Training',
    'nav.about': 'About',
    'nav.ourStory': 'Our Story',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.allServices': 'All Services',

    // Services
    'services.regulators': 'Regulators',
    'services.drysuits': 'Drysuits',
    'services.ccr': 'CCR',
    'services.bcd': 'BCD',
    'services.tanks': 'Tanks',
    'services.ebs': 'EBS',

    // Home page
    'home.hero.title1': 'Professional Diving Equipment Service',
    'home.hero.subtitle1': 'Expert maintenance and repair for all your diving gear',
    'home.hero.title2': 'Certified Technicians',
    'home.hero.subtitle2': 'Factory-trained specialists certified across all major brands',
    'home.hero.title3': 'Complete Equipment Solutions',
    'home.hero.subtitle3': 'From regulators to rebreathers, we service it all',
    'home.hero.title4': 'Trusted by Professionals',
    'home.hero.subtitle4': 'Serving dive teams, fire departments, and special forces worldwide',
    'home.hero.ourServices': 'Our Services',
    'home.hero.getInTouch': 'Get in Touch',

    'home.about.title': 'The New Generation of Diving Services',
    'home.about.text1': 'At BullDiving, we provide unparalleled service and expertise with certified technicians who specialize in maintaining and repairing professional diving equipment.',
    'home.about.text2': 'From regulators and drysuits to CCRs and emergency breathing systems, we handle everything with the highest standards of quality and precision.',
    'home.about.yearsExperience': 'Years Experience',
    'home.about.equipmentServiced': 'Equipment Serviced',
    'home.about.satisfactionRate': 'Satisfaction Rate',

    'home.services.title': 'Comprehensive Equipment Services',
    'home.services.subtitle': 'We specialize in maintaining mission-critical diving equipment for individual divers, professional teams, fire departments, and specialized underwater units.',
    'home.services.viewAll': 'View All Services',

    'home.why.title': 'Why Choose BullDiving?',
    'home.why.subtitle': 'Your safety underwater depends on perfectly maintained equipment. We don\'t compromise.',
    'home.why.certified.title': 'Certified Technicians',
    'home.why.certified.text': 'Our team includes factory-certified technicians trained by leading manufacturers with expertise across all major brands.',
    'home.why.transparency.title': 'Complete Transparency',
    'home.why.transparency.text': 'Follow your equipment\'s entire service journey through shared photo documentation. See every step from initial diagnosis to final testing.',
    'home.why.turnaround.title': 'Fast Turnaround',
    'home.why.turnaround.text': 'Most services completed within 30 days. We understand you need your gear mission-ready. Rush service available for professional teams.',
    'home.why.guarantee.title': 'Quality Guarantee',
    'home.why.guarantee.text': '60-day satisfaction guarantee on all services. If our work doesn\'t meet your expectations, we\'ll adjust or re-repair at no additional cost.',

    'home.clients.title': 'Trusted by Professionals',
    'home.clients.subtitle': 'We provide comprehensive maintenance for equipment used by the world\'s most demanding diving professionals.',

    'home.cta.title': 'Ready to Service Your Gear?',
    'home.cta.subtitle': 'Contact us today for a detailed quote. No maintenance will be carried out without your approval.',
    'home.cta.email': 'Email',
    'home.cta.phone': 'Phone',
    'home.cta.getQuote': 'Get Your Free Quote',

    // About page
    'about.hero.title': 'About BullDiving',
    'about.hero.subtitle': 'Professional diving equipment service built on expertise, precision, and a passion for safety.',
    'about.story.title': 'Our Story',
    'about.story.text1': 'BullDiving began in Miami with a simple mission: to provide divers with the highest quality equipment service and maintenance available. What started as a small operation has grown into a trusted name in professional diving equipment service.',
    'about.story.text2': 'From our Miami roots, we\'ve built a reputation on precision, reliability, and an unwavering commitment to safety. Every piece of equipment that passes through our shop receives the same meticulous attention, whether it belongs to a recreational diver or a special forces unit.',
    'about.story.text3': 'Today, we\'re proud to serve divers, fire departments, special forces, and commercial diving operations around the world. Our commitment remains the same: ensuring your equipment performs flawlessly when it matters most.',
    'about.founded.title': 'Founded on Excellence',
    'about.founded.miami': 'Born in Miami',
    'about.founded.miamiDesc': 'Started in the heart of diving culture',
    'about.founded.safety': 'Safety First',
    'about.founded.safetyDesc': 'Your safety is our highest priority',
    'about.founded.professional': 'Professional Service',
    'about.founded.professionalDesc': 'Trusted by professionals worldwide',
    'about.expertise.title': 'Certified Diving Experts',
    'about.expertise.subtitle': 'Our team consists of factory-certified technicians with extensive knowledge and experience in professional diving equipment maintenance and repair.',
    'about.expertise.certified': 'Factory Certified',
    'about.expertise.certifiedDesc': 'Our technicians are certified by leading manufacturers, ensuring we meet the highest standards for equipment service and repair.',
    'about.expertise.knowledge': 'Deep Knowledge',
    'about.expertise.knowledgeDesc': 'Years of hands-on experience with all major diving equipment brands gives us the expertise to handle any service challenge with confidence.',
    'about.expertise.training': 'Continuous Training',
    'about.expertise.trainingDesc': 'We stay current with the latest techniques and technologies through ongoing training and manufacturer certifications.',
    'about.provide.title': 'What We Provide',
    'about.provide.subtitle': 'Comprehensive diving equipment service and maintenance for professionals and enthusiasts alike.',
    'about.provide.equipment': 'Equipment Service',
    'about.provide.regulators': 'Regulators - Full maintenance for all brands',
    'about.provide.drysuits': 'Drysuits - Complete repair and restoration',
    'about.provide.ccr': 'CCR - Authorized rebreather servicing',
    'about.provide.bcd': 'BCD - Wing and jacket maintenance',
    'about.provide.tanks': 'Tanks - Inspection and valve service',
    'about.provide.ebs': 'EBS - Emergency breathing systems',
    'about.provide.commitment': 'Our Commitment',
    'about.provide.transparency': 'Complete transparency through photo documentation',
    'about.provide.turnaround': 'Fast turnaround - most services within 30 days',
    'about.provide.guarantee': '60-day satisfaction guarantee on all work',
    'about.provide.approval': 'No work performed without your approval',
    'about.provide.quality': 'Highest quality parts and materials',
    'about.provide.allLevels': 'Professional service for all skill levels',
    'about.cta.title': 'Ready to Work Together?',
    'about.cta.subtitle': 'Experience the difference that expert service makes. Contact us today to discuss your equipment needs.',
    'about.cta.services': 'View Our Services',
    'about.cta.contact': 'Get in Touch',

    // Contact page
    'contact.hero.title': 'Contact us',
    'contact.hero.subtitle': 'Need to get in touch with us? Either fill out the form with your inquiry or find the',
    'contact.hero.email': 'department email',
    'contact.hero.below': 'you\'d like to contact below.',
    'contact.general': 'General Inquiries',
    'contact.generalDesc': 'For general questions and information',
    'contact.service': 'Service Department',
    'contact.serviceDesc': 'Equipment service and maintenance',
    'contact.phoneWhatsapp': 'Phone & WhatsApp',
    'contact.hours': 'Mon-Fri, 9:00 AM - 6:00 PM EST',
    'contact.form.firstName': 'First name',
    'contact.form.lastName': 'Last name',
    'contact.form.email': 'Email',
    'contact.form.message': 'What can we help you with?',
    'contact.form.placeholder': 'Tell us about your inquiry...',
    'contact.form.submit': 'Submit',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your email client should open. Please send the email to complete your submission.',
    'contact.form.privacy': 'By submitting this form, you agree to our',
    'contact.form.privacyLink': 'privacy policy',
    'contact.cta.title': 'Ready to Get Started?',
    'contact.cta.subtitle': 'Whether you need equipment service or just have questions, we\'re here to help.',
    'contact.cta.services': 'View Our Services',

    // Services page
    'services.need.title': 'Need Service?',
    'services.need.subtitle': 'Contact us for a detailed quote. No maintenance will be carried out without prior acceptance.',
    'services.need.getInTouch': 'Get in touch',

    // Common
    'common.phone': 'Phone',
    'common.email': 'Email',
  },
  es: {
    // Navegación
    'nav.supply': 'Suministros',
    'nav.serviceCenter': 'Centro de Servicio',
    'nav.training': 'Entrenamiento',
    'nav.about': 'Nosotros',
    'nav.ourStory': 'Nuestra Historia',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'nav.allServices': 'Todos los Servicios',

    // Servicios
    'services.regulators': 'Reguladores',
    'services.drysuits': 'Trajes Secos',
    'services.ccr': 'CCR',
    'services.bcd': 'BCD',
    'services.tanks': 'Tanques',
    'services.ebs': 'EBS',

    // Página de inicio
    'home.hero.title1': 'Servicio Profesional de Equipos de Buceo',
    'home.hero.subtitle1': 'Mantenimiento y reparación experta para todo su equipo de buceo',
    'home.hero.title2': 'Técnicos Certificados',
    'home.hero.subtitle2': 'Especialistas entrenados en fábrica certificados en todas las marcas principales',
    'home.hero.title3': 'Soluciones Completas de Equipo',
    'home.hero.subtitle3': 'Desde reguladores hasta rebreathers, reparamos todo',
    'home.hero.title4': 'Confianza de Profesionales',
    'home.hero.subtitle4': 'Sirviendo equipos de buceo, departamentos de bomberos y fuerzas especiales en todo el mundo',
    'home.hero.ourServices': 'Nuestros Servicios',
    'home.hero.getInTouch': 'Contáctenos',

    'home.about.title': 'La Nueva Generación de Servicios de Buceo',
    'home.about.text1': 'En BullDiving, brindamos servicio y experiencia incomparables con técnicos certificados que se especializan en el mantenimiento y reparación de equipos de buceo profesionales.',
    'home.about.text2': 'Desde reguladores y trajes secos hasta CCR y sistemas de respiración de emergencia, manejamos todo con los más altos estándares de calidad y precisión.',
    'home.about.yearsExperience': 'Años de Experiencia',
    'home.about.equipmentServiced': 'Equipos Reparados',
    'home.about.satisfactionRate': 'Tasa de Satisfacción',

    'home.services.title': 'Servicios Completos de Equipo',
    'home.services.subtitle': 'Nos especializamos en mantener equipos de buceo de misión crítica para buceadores individuales, equipos profesionales, departamentos de bomberos y unidades submarinas especializadas.',
    'home.services.viewAll': 'Ver Todos los Servicios',

    'home.why.title': '¿Por Qué Elegir BullDiving?',
    'home.why.subtitle': 'Su seguridad bajo el agua depende de un equipo perfectamente mantenido. No hacemos compromisos.',
    'home.why.certified.title': 'Técnicos Certificados',
    'home.why.certified.text': 'Nuestro equipo incluye técnicos certificados de fábrica capacitados por fabricantes líderes con experiencia en todas las marcas principales.',
    'home.why.transparency.title': 'Transparencia Completa',
    'home.why.transparency.text': 'Siga todo el proceso de servicio de su equipo a través de documentación fotográfica compartida. Vea cada paso desde el diagnóstico inicial hasta las pruebas finales.',
    'home.why.turnaround.title': 'Entrega Rápida',
    'home.why.turnaround.text': 'La mayoría de los servicios se completan en 30 días. Entendemos que necesita su equipo listo para la misión. Servicio urgente disponible para equipos profesionales.',
    'home.why.guarantee.title': 'Garantía de Calidad',
    'home.why.guarantee.text': 'Garantía de satisfacción de 60 días en todos los servicios. Si nuestro trabajo no cumple con sus expectativas, lo ajustaremos o repararemos sin costo adicional.',

    'home.clients.title': 'Confianza de Profesionales',
    'home.clients.subtitle': 'Proporcionamos mantenimiento integral para equipos utilizados por los profesionales de buceo más exigentes del mundo.',

    'home.cta.title': '¿Listo para Reparar su Equipo?',
    'home.cta.subtitle': 'Contáctenos hoy para obtener un presupuesto detallado. No se realizará ningún mantenimiento sin su aprobación.',
    'home.cta.email': 'Correo Electrónico',
    'home.cta.phone': 'Teléfono',
    'home.cta.getQuote': 'Obtenga su Presupuesto Gratis',

    // Página Acerca de
    'about.hero.title': 'Acerca de BullDiving',
    'about.hero.subtitle': 'Servicio profesional de equipos de buceo construido sobre experiencia, precisión y pasión por la seguridad.',
    'about.story.title': 'Nuestra Historia',
    'about.story.text1': 'BullDiving comenzó en Miami con una misión simple: proporcionar a los buceadores el servicio y mantenimiento de equipos de la más alta calidad disponible. Lo que comenzó como una pequeña operación ha crecido hasta convertirse en un nombre confiable en el servicio profesional de equipos de buceo.',
    'about.story.text2': 'Desde nuestras raíces en Miami, hemos construido una reputación de precisión, confiabilidad y un compromiso inquebrantable con la seguridad. Cada pieza de equipo que pasa por nuestro taller recibe la misma atención meticulosa, ya sea que pertenezca a un buceador recreativo o a una unidad de fuerzas especiales.',
    'about.story.text3': 'Hoy, nos enorgullece servir a buceadores, departamentos de bomberos, fuerzas especiales y operaciones de buceo comercial en todo el mundo. Nuestro compromiso sigue siendo el mismo: garantizar que su equipo funcione perfectamente cuando más importa.',
    'about.founded.title': 'Fundado en la Excelencia',
    'about.founded.miami': 'Nacido en Miami',
    'about.founded.miamiDesc': 'Comenzó en el corazón de la cultura del buceo',
    'about.founded.safety': 'Seguridad Primero',
    'about.founded.safetyDesc': 'Su seguridad es nuestra máxima prioridad',
    'about.founded.professional': 'Servicio Profesional',
    'about.founded.professionalDesc': 'Confiado por profesionales en todo el mundo',
    'about.expertise.title': 'Expertos Certificados en Buceo',
    'about.expertise.subtitle': 'Nuestro equipo está formado por técnicos certificados de fábrica con amplio conocimiento y experiencia en el mantenimiento y reparación de equipos de buceo profesionales.',
    'about.expertise.certified': 'Certificado de Fábrica',
    'about.expertise.certifiedDesc': 'Nuestros técnicos están certificados por fabricantes líderes, asegurando que cumplimos con los más altos estándares para el servicio y reparación de equipos.',
    'about.expertise.knowledge': 'Conocimiento Profundo',
    'about.expertise.knowledgeDesc': 'Años de experiencia práctica con todas las principales marcas de equipos de buceo nos da la experiencia para manejar cualquier desafío de servicio con confianza.',
    'about.expertise.training': 'Capacitación Continua',
    'about.expertise.trainingDesc': 'Nos mantenemos actualizados con las últimas técnicas y tecnologías a través de capacitación continua y certificaciones de fabricantes.',
    'about.provide.title': 'Lo Que Proporcionamos',
    'about.provide.subtitle': 'Servicio y mantenimiento completo de equipos de buceo para profesionales y entusiastas por igual.',
    'about.provide.equipment': 'Servicio de Equipos',
    'about.provide.regulators': 'Reguladores - Mantenimiento completo para todas las marcas',
    'about.provide.drysuits': 'Trajes Secos - Reparación y restauración completa',
    'about.provide.ccr': 'CCR - Servicio autorizado de rebreathers',
    'about.provide.bcd': 'BCD - Mantenimiento de alas y chalecos',
    'about.provide.tanks': 'Tanques - Inspección y servicio de válvulas',
    'about.provide.ebs': 'EBS - Sistemas de respiración de emergencia',
    'about.provide.commitment': 'Nuestro Compromiso',
    'about.provide.transparency': 'Transparencia completa mediante documentación fotográfica',
    'about.provide.turnaround': 'Entrega rápida - la mayoría de los servicios en 30 días',
    'about.provide.guarantee': 'Garantía de satisfacción de 60 días en todo el trabajo',
    'about.provide.approval': 'No se realiza ningún trabajo sin su aprobación',
    'about.provide.quality': 'Piezas y materiales de la más alta calidad',
    'about.provide.allLevels': 'Servicio profesional para todos los niveles',
    'about.cta.title': '¿Listo para Trabajar Juntos?',
    'about.cta.subtitle': 'Experimente la diferencia que hace el servicio experto. Contáctenos hoy para discutir las necesidades de su equipo.',
    'about.cta.services': 'Ver Nuestros Servicios',
    'about.cta.contact': 'Contáctenos',

    // Página de Contacto
    'contact.hero.title': 'Contáctenos',
    'contact.hero.subtitle': '¿Necesita ponerse en contacto con nosotros? Complete el formulario con su consulta o encuentre el',
    'contact.hero.email': 'correo electrónico del departamento',
    'contact.hero.below': 'con el que desea contactar a continuación.',
    'contact.general': 'Consultas Generales',
    'contact.generalDesc': 'Para preguntas generales e información',
    'contact.service': 'Departamento de Servicio',
    'contact.serviceDesc': 'Servicio y mantenimiento de equipos',
    'contact.phoneWhatsapp': 'Teléfono y WhatsApp',
    'contact.hours': 'Lun-Vie, 9:00 AM - 6:00 PM EST',
    'contact.form.firstName': 'Nombre',
    'contact.form.lastName': 'Apellido',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.message': '¿En qué podemos ayudarle?',
    'contact.form.placeholder': 'Cuéntenos sobre su consulta...',
    'contact.form.submit': 'Enviar',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Su cliente de correo electrónico debería abrirse. Por favor envíe el correo para completar su envío.',
    'contact.form.privacy': 'Al enviar este formulario, acepta nuestra',
    'contact.form.privacyLink': 'política de privacidad',
    'contact.cta.title': '¿Listo para Comenzar?',
    'contact.cta.subtitle': 'Ya sea que necesite servicio de equipo o simplemente tenga preguntas, estamos aquí para ayudar.',
    'contact.cta.services': 'Ver Nuestros Servicios',

    // Página de Servicios
    'services.need.title': '¿Necesita Servicio?',
    'services.need.subtitle': 'Contáctenos para obtener un presupuesto detallado. No se realizará ningún mantenimiento sin aceptación previa.',
    'services.need.getInTouch': 'Póngase en contacto',

    // Común
    'common.phone': 'Teléfono',
    'common.email': 'Correo Electrónico',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
