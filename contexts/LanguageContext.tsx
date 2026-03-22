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
