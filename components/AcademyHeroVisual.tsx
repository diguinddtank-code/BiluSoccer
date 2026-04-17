'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Trophy, Users, Target, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const IMAGES = [
  "https://i.imgur.com/skXQNVs.jpeg",
  "https://i.imgur.com/tokFWqm.jpeg",
  "https://i.imgur.com/s9pNNni.jpeg",
  "https://i.imgur.com/9rU8PaI.jpeg",
  "https://i.imgur.com/1UAUWpN.jpeg"
];

export default function AcademyHeroVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[350px] sm:max-w-[450px] lg:max-w-[350px] xl:max-w-[450px] 2xl:max-w-[550px] mx-auto flex items-center justify-center mt-8 lg:mt-0">
      {/* Background glow */}
      <div className="absolute inset-0 bg-bisa-gold/20 blur-[80px] sm:blur-[100px] rounded-full" />

      {/* Main Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[90%] h-[90%] sm:w-[80%] sm:h-[80%] rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl"
      >
        {IMAGES.map((src, index) => (
          <Image 
            key={src}
            src={src} 
            alt={`Youth Soccer Training ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
            referrerPolicy="no-referrer"
          />
        ))}
        
        {/* Inner gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-bisa-navy-dark/90 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="flex gap-1 mb-1 sm:mb-2 lg:mb-1 xl:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-bisa-gold fill-bisa-gold w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
            ))}
          </div>
          <p className="text-white font-black text-lg sm:text-2xl lg:text-lg xl:text-2xl leading-tight">
            {t('visual.quote')}
          </p>
        </div>
      </motion.div>

      {/* Floating Card 1: Stats */}
      <motion.div 
        initial={{ opacity: 0, x: 50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute top-[5%] right-[2%] sm:-right-[2%] lg:right-[2%] xl:-right-[2%] bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-4 hover:bg-white/20 transition-colors cursor-default z-10 scale-90 sm:scale-100 lg:scale-90 xl:scale-100 origin-top-right"
      >
        <div className="bg-bisa-gold p-2 sm:p-3 rounded-full text-bisa-navy">
          <Trophy size={18} className="w-4 h-4 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6" />
        </div>
        <div>
          <p className="text-white font-black text-sm sm:text-xl lg:text-sm xl:text-xl leading-tight">{t('visual.card1.title')}</p>
          <p className="text-white/70 text-[10px] sm:text-sm lg:text-[10px] xl:text-sm font-medium uppercase tracking-wider">{t('visual.card1.subtitle')}</p>
        </div>
      </motion.div>

      {/* Floating Logo (Replaces Youth Academy Card) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
        className="absolute bottom-[25%] sm:bottom-[30%] left-[2%] sm:-left-[2%] lg:left-[2%] xl:-left-[2%] bg-bisa-navy/80 backdrop-blur-md border border-bisa-gold/30 w-16 h-16 sm:w-28 sm:h-28 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full shadow-[0_0_30px_rgba(242,169,0,0.3)] flex items-center justify-center p-2 sm:p-4 z-10 scale-90 sm:scale-100 lg:scale-90 xl:scale-100 origin-center hover:scale-105 transition-transform"
      >
        <div className="relative w-full h-full">
          <Image 
            src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
            alt="Bilu Soccer Academy Logo"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </motion.div>

      {/* Floating Card 3: Focus */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-[2%] sm:bottom-[5%] right-[5%] sm:right-[10%] lg:right-[8%] xl:right-[10%] bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl flex items-center gap-2 sm:gap-3 hover:bg-white/20 transition-colors cursor-default z-10 scale-90 sm:scale-100 lg:scale-90 xl:scale-100"
      >
        <Target size={14} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-bisa-gold" />
        <span className="text-white font-bold tracking-wide text-xs sm:text-base lg:text-xs xl:text-base">{t('visual.card3.title')}</span>
      </motion.div>
    </div>
  );
}
