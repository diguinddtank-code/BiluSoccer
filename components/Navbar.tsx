'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Language Selector Component (Extracted to prevent creation during render)
const LanguageSelector = ({ language, setLanguage }: { language: string, setLanguage: (l: 'en' | 'pt' | 'es') => void }) => (
  <div className="flex items-center gap-2 bg-bisa-navy-light/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
    <button 
      onClick={() => setLanguage('en')}
      className={`relative w-6 h-4 rounded-sm overflow-hidden transition-transform ${language === 'en' ? 'ring-2 ring-bisa-gold scale-110' : 'opacity-50 hover:opacity-100'}`}
      title="English"
    >
      <Image src="https://flagcdn.com/w40/us.png" alt="English" fill className="object-cover" unoptimized />
    </button>
    <button 
      onClick={() => setLanguage('pt')}
      className={`relative w-6 h-4 rounded-sm overflow-hidden transition-transform ${language === 'pt' ? 'ring-2 ring-bisa-gold scale-110' : 'opacity-50 hover:opacity-100'}`}
      title="Português"
    >
      <Image src="https://flagcdn.com/w40/br.png" alt="Português" fill className="object-cover" unoptimized />
    </button>
    <button 
      onClick={() => setLanguage('es')}
      className={`relative w-6 h-4 rounded-sm overflow-hidden transition-transform ${language === 'es' ? 'ring-2 ring-bisa-gold scale-110' : 'opacity-50 hover:opacity-100'}`}
      title="Español"
    >
      <Image src="https://flagcdn.com/w40/es.png" alt="Español" fill className="object-cover" unoptimized />
    </button>
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t('nav.programs'), href: '/programs' },
    { name: t('nav.tryouts'), href: '/tryouts' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkContainerVariants: Variants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-bisa-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative w-24 h-10 md:w-36 md:h-12 lg:w-48 lg:h-16 transition-transform duration-300 hover:scale-105 mt-2 md:mt-0">
                <Image 
                  src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                  alt="BILU International Soccer Academy" 
                  fill 
                  className="object-contain object-left" 
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] lg:text-sm font-bold uppercase tracking-wider text-bisa-white hover:text-bisa-gold transition-colors relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bisa-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Desktop Language Selector */}
              <div className="pl-2 lg:pl-4 border-l border-white/20">
                <LanguageSelector language={language} setLanguage={setLanguage as any} />
              </div>

              <Link
                href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bisa-gold text-bisa-navy px-4 py-2 lg:px-6 lg:py-2.5 rounded font-bold uppercase tracking-wide hover:bg-white transition-colors hover:scale-105 active:scale-95 text-[11px] lg:text-sm whitespace-nowrap"
              >
                {t('nav.register')}
              </Link>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden relative z-50">
              {/* Mobile Language Selector */}
              <div className="scale-95 origin-right">
                <LanguageSelector language={language} setLanguage={setLanguage as any} />
              </div>
              
              {/* Mobile Menu Button */}
              <button
                className="p-2 text-bisa-white hover:text-bisa-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={32} className="text-bisa-gold" /> : <Menu size={32} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-bisa-navy/98 backdrop-blur-2xl z-40 flex flex-col justify-center px-6 pt-20"
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 right-[-20%] w-96 h-96 bg-bisa-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-[-20%] w-96 h-96 bg-bisa-navy-light/50 rounded-full blur-3xl" />
            </div>

            <motion.nav 
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-6 relative z-10"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between border-b border-bisa-white/10 pb-4 text-3xl font-black uppercase tracking-widest text-bisa-white active:text-bisa-gold transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-8 h-8 text-bisa-gold opacity-50" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={linkVariants} className="pt-8">
                <Link
                  href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-bisa-gold text-bisa-navy px-8 py-5 rounded-lg font-black text-xl uppercase tracking-wider hover:bg-white transition-colors active:scale-95"
                >
                  {t('nav.register')}
                </Link>
              </motion.div>
            </motion.nav>
            
            {/* Mobile Footer Info */}
            <motion.div 
              variants={linkVariants}
              className="absolute bottom-10 left-6 right-6 flex justify-between items-center border-t border-bisa-white/10 pt-6"
            >
              <span className="text-bisa-white/50 text-xs font-bold uppercase tracking-widest">Bilu International</span>
              <span className="text-bisa-gold text-xs font-bold uppercase tracking-widest">Est. 2025</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
