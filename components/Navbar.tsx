'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Language Selector Component
const LanguageSelector = ({ language, setLanguage }: { language: string, setLanguage: (l: 'en' | 'pt' | 'es') => void }) => (
  <div className="flex items-center gap-2 sm:gap-3 lg:gap-2.5 bg-bisa-navy-light/50 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-2 rounded-full border border-white/10 shadow-lg">
    <button 
      onClick={() => setLanguage('en')}
      className={`relative w-7 h-5 sm:w-9 sm:h-6 lg:w-7 lg:h-5 rounded-sm overflow-hidden transition-transform ${language === 'en' ? 'ring-2 ring-[#CCFF00] scale-110 shadow-[0_0_8px_rgba(204,255,0,0.4)]' : 'opacity-60 hover:opacity-100'}`}
      title="English"
    >
      <Image src="https://flagcdn.com/w40/us.png" alt="English" fill className="object-cover" unoptimized />
    </button>
    <button 
      onClick={() => setLanguage('pt')}
      className={`relative w-7 h-5 sm:w-9 sm:h-6 lg:w-7 lg:h-5 rounded-sm overflow-hidden transition-transform ${language === 'pt' ? 'ring-2 ring-[#CCFF00] scale-110 shadow-[0_0_8px_rgba(204,255,0,0.4)]' : 'opacity-60 hover:opacity-100'}`}
      title="Português"
    >
      <Image src="https://flagcdn.com/w40/br.png" alt="Português" fill className="object-cover" unoptimized />
    </button>
    <button 
      onClick={() => setLanguage('es')}
      className={`relative w-7 h-5 sm:w-9 sm:h-6 lg:w-7 lg:h-5 rounded-sm overflow-hidden transition-transform ${language === 'es' ? 'ring-2 ring-[#CCFF00] scale-110 shadow-[0_0_8px_rgba(204,255,0,0.4)]' : 'opacity-60 hover:opacity-100'}`}
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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
          isMobileMenuOpen 
            ? 'bg-bisa-navy/95 backdrop-blur-md shadow-lg' 
            : isScrolled
              ? 'bg-bisa-navy/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none shadow-lg lg:shadow-none'
              : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          
          {/* MOBILE & TABLET NAV (Hidden on lg desktop) */}
          <div className="flex lg:hidden justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative w-24 h-10 mt-2">
                <Image 
                  src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                  alt="BISA" 
                  fill 
                  className="object-contain object-left drop-shadow-md" 
                  unoptimized
                />
              </div>
            </Link>

            {/* Mobile Controls */}
            <div className="flex items-center gap-4 relative z-50">
              {/* Mobile Language Selector (Hidden when menu is open) */}
              {!isMobileMenuOpen && (
                <div className="flex items-center">
                  <LanguageSelector language={language} setLanguage={setLanguage as any} />
                </div>
              )}
              
              {/* Mobile Menu Button */}
              <button
                className="p-2 text-bisa-white hover:text-[#CCFF00] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                  {isMobileMenuOpen ? <X size={32} className="text-[#CCFF00]" /> : <Menu size={32} />}
                </motion.div>
              </button>
            </div>
          </div>

          {/* DESKTOP NAV LAYOUT (Hidden on mobile) */}
          <div className={`hidden lg:flex justify-center w-full transition-all duration-500 ${isScrolled ? 'pt-4 pb-2' : 'pt-8 pb-4'}`}>
            <div className={`relative flex items-center justify-between w-full max-w-6xl rounded-full border border-white/10 px-4 xl:px-10 h-16 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300 ${
              isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/60 backdrop-blur-md'
            }`}>
              
              {/* Left Links */}
              <div className="flex-1 flex items-center justify-end space-x-3 xl:space-x-8 pr-28 xl:pr-32">
                <Link href="/programs" className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-bisa-white hover:text-[#CCFF00] transition-colors whitespace-nowrap">
                  {navLinks[0].name}
                </Link>
                <Link href="/tryouts" className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-bisa-white hover:text-[#CCFF00] transition-colors whitespace-nowrap">
                  {navLinks[1].name}
                </Link>
                <Link href="/about" className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-bisa-white hover:text-[#CCFF00] transition-colors whitespace-nowrap">
                  {navLinks[2].name}
                </Link>
                <Link href="/contact" className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-bisa-white hover:text-[#CCFF00] transition-colors whitespace-nowrap">
                  {navLinks[3].name}
                </Link>
              </div>

              {/* Center Logo (Overlapping) */}
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 z-[60] pointer-events-auto transition-transform duration-500 ${
                isScrolled ? '-translate-y-[40%]' : '-translate-y-[35%]'
              }`}>
                <Link href="/">
                  <div className={`relative drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105 ${
                    isScrolled ? 'w-20 h-20 xl:w-24 xl:h-24' : 'w-28 h-28 xl:w-36 xl:h-36'
                  }`}>
                    <Image 
                      src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                      alt="BISA" 
                      fill 
                      className="object-contain" 
                      unoptimized
                    />
                  </div>
                </Link>
              </div>

              {/* Right Links */}
              <div className="flex-1 flex items-center justify-start space-x-4 lg:space-x-6 xl:space-x-10 pl-28 xl:pl-32">
                {/* Desktop Language Selector */}
                <div className="shrink-0 flex items-center">
                  <LanguageSelector language={language} setLanguage={setLanguage as any} />
                </div>
                <Link
                  href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#CCFF00] text-black px-4 py-2 lg:py-2 xl:px-6 xl:py-2.5 rounded-sm font-black uppercase tracking-widest hover:bg-white transition-colors hover:scale-105 active:scale-95 text-[10px] xl:text-sm whitespace-nowrap shrink-0 border border-black/10"
                >
                  {t('nav.register')}
                </Link>
              </div>

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
              <div className="absolute top-1/4 right-[-20%] w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl" />
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
                    className="flex items-center justify-between border-b border-bisa-white/10 pb-4 text-3xl font-black uppercase tracking-widest text-bisa-white active:text-[#CCFF00] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-8 h-8 text-[#CCFF00] opacity-50" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={linkVariants} className="pt-8">
                <Link
                  href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#CCFF00] text-bisa-navy px-8 py-5 rounded-lg font-black text-xl uppercase tracking-wider hover:bg-white transition-colors active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
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
              <span className="text-bisa-white/50 text-xs font-bold uppercase tracking-widest">BISA</span>
              <span className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest">Est. 2025</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
