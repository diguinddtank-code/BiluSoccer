'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.tryouts': 'Tryouts',
    'nav.contact': 'Contact',
    'nav.register': 'Register Now',
    
    // Hero Section
    'hero.title1': 'Where Champions',
    'hero.title2': 'Are Built',
    'hero.subtitle': 'Elite youth soccer development in Metro Charleston, SC',
    'hero.cta.primary': 'Register Now',
    'hero.cta.secondary': 'View Programs',
    'hero.marquee.1': 'Junior Academy',
    'hero.marquee.2': 'Select',
    'hero.marquee.3': 'Elite',
    'hero.marquee.4': 'Futsal',
    'hero.marquee.5': 'Summer Camps',
    'hero.marquee.6': 'U4 TO U18',
    
    // AcademyHeroVisual
    'visual.quote': 'Developing the next generation of players.',
    'visual.card1.title': 'Elite',
    'visual.card1.subtitle': 'Training',
    'visual.card3.title': 'Pro Pathway',
    
    // Lead Form
    'form.title': 'Get in Touch',
    'form.subtitle': 'Interested in joining Bilu Soccer Academy? Fill out the form below and our team will get back to you.',
    'form.parentName': 'Parent/Guardian Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.playerName': 'Player Name',
    'form.birthYear': 'Player Birth Year',
    'form.program': 'Program of Interest',
    'form.program.notSure': 'Not Sure Yet',
    'form.message': 'Message / Questions',
    'form.messagePlaceholder': 'How can we help you?',
    'form.submit': 'Send Message',
    'form.success.title': 'Message Sent!',
    'form.success.message': 'Thank you for reaching out. We will contact you shortly.',
    'form.success.button': 'Send another message',
    'form.error': 'There was an error sending your message. Please try again later.',
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.programs': 'Programas',
    'nav.tryouts': 'Seletivas',
    'nav.contact': 'Contato',
    'nav.register': 'Inscreva-se',
    
    // Hero Section
    'hero.title1': 'Onde Campeões',
    'hero.title2': 'São Construídos',
    'hero.subtitle': 'Desenvolvimento de futebol juvenil de elite na região de Charleston, SC',
    'hero.cta.primary': 'Inscreva-se Agora',
    'hero.cta.secondary': 'Ver Programas',
    'hero.marquee.1': 'Academia Júnior',
    'hero.marquee.2': 'Seleção',
    'hero.marquee.3': 'Elite',
    'hero.marquee.4': 'Futsal',
    'hero.marquee.5': 'Acampamentos de Verão',
    'hero.marquee.6': 'U4 AO U18',
    
    // AcademyHeroVisual
    'visual.quote': 'Desenvolvendo a próxima geração de jogadores.',
    'visual.card1.title': 'Treinamento',
    'visual.card1.subtitle': 'de Elite',
    'visual.card3.title': 'Caminho Profissional',
    
    // Lead Form
    'form.title': 'Entre em Contato',
    'form.subtitle': 'Interessado em se juntar à Bilu Soccer Academy? Preencha o formulário abaixo e nossa equipe entrará em contato.',
    'form.parentName': 'Nome do Responsável',
    'form.email': 'Endereço de E-mail',
    'form.phone': 'Número de Telefone',
    'form.playerName': 'Nome do Jogador',
    'form.birthYear': 'Ano de Nascimento do Jogador',
    'form.program': 'Programa de Interesse',
    'form.program.notSure': 'Ainda não tenho certeza',
    'form.message': 'Mensagem / Dúvidas',
    'form.messagePlaceholder': 'Como podemos ajudar?',
    'form.submit': 'Enviar Mensagem',
    'form.success.title': 'Mensagem Enviada!',
    'form.success.message': 'Obrigado por entrar em contato. Retornaremos em breve.',
    'form.success.button': 'Enviar outra mensagem',
    'form.error': 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.programs': 'Programas',
    'nav.tryouts': 'Pruebas',
    'nav.contact': 'Contacto',
    'nav.register': 'Regístrate',
    
    // Hero Section
    'hero.title1': 'Donde los Campeones',
    'hero.title2': 'Se Construyen',
    'hero.subtitle': 'Desarrollo de fútbol juvenil de élite en el área de Charleston, SC',
    'hero.cta.primary': 'Regístrate Ahora',
    'hero.cta.secondary': 'Ver Programas',
    'hero.marquee.1': 'Academia Junior',
    'hero.marquee.2': 'Selección',
    'hero.marquee.3': 'Élite',
    'hero.marquee.4': 'Futsal',
    'hero.marquee.5': 'Campamentos de Verano',
    'hero.marquee.6': 'U4 AL U18',
    
    // AcademyHeroVisual
    'visual.quote': 'Desarrollando la próxima generación de jugadores.',
    'visual.card1.title': 'Entrenamiento',
    'visual.card1.subtitle': 'de Élite',
    'visual.card3.title': 'Camino Profesional',
    
    // Lead Form
    'form.title': 'Ponte en Contacto',
    'form.subtitle': '¿Interesado en unirte a Bilu Soccer Academy? Completa el formulario a continuación y nuestro equipo se comunicará contigo.',
    'form.parentName': 'Nombre del Padre/Tutor',
    'form.email': 'Correo Electrónico',
    'form.phone': 'Número de Teléfono',
    'form.playerName': 'Nombre del Jugador',
    'form.birthYear': 'Año de Nacimiento del Jugador',
    'form.program': 'Programa de Interés',
    'form.program.notSure': 'Aún no estoy seguro',
    'form.message': 'Mensaje / Preguntas',
    'form.messagePlaceholder': '¿Cómo podemos ayudarte?',
    'form.submit': 'Enviar Mensaje',
    'form.success.title': '¡Mensaje Enviado!',
    'form.success.message': 'Gracias por contactarnos. Nos comunicaremos contigo en breve.',
    'form.success.button': 'Enviar otro mensaje',
    'form.error': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage if available
    const savedLang = localStorage.getItem('bisa_language') as Language;
    if (savedLang && ['en', 'pt', 'es'].includes(savedLang)) {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('bisa_language', lang);
  };

  const t = (key: string): string => {
    // Return translation or fallback to key if not found
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
