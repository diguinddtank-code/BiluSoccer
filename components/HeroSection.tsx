'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import AcademyHeroVisual from './AcademyHeroVisual';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden bg-bisa-navy-dark">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-bisa-navy-dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://i.imgur.com/Mikmi09.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bisa-navy-dark/90 via-bisa-navy-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-bisa-navy-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl font-black text-bisa-white uppercase tracking-tighter leading-[0.9] mb-6"
            >
              {t('hero.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bisa-gold to-white">{t('hero.title2')}</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-bisa-white/80 font-medium tracking-wide mb-10 max-w-2xl border-l-4 border-bisa-gold pl-4"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc0NzQzMzA1N3xkS2RTeERnQ0d4TlNqcEVlWnI3M1EzRnRQeThEd28xSGx4WFdVWkhYTWVFPQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bisa-gold text-bisa-navy px-8 py-4 rounded font-black uppercase tracking-widest text-center hover:bg-white transition-colors"
              >
                {t('hero.cta.primary')}
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border-2 border-bisa-white text-bisa-white px-8 py-4 rounded font-black uppercase tracking-widest text-center hover:bg-bisa-white hover:text-bisa-navy transition-colors"
              >
                {t('hero.cta.secondary')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Academy Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex relative w-full aspect-square max-w-[600px] mx-auto items-center justify-center"
          >
            <AcademyHeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-bisa-gold py-3 z-20 border-t-4 border-bisa-navy">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        >
          {/* Duplicate content for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 px-4">
              <span className="text-bisa-navy font-black text-sm md:text-base uppercase tracking-widest">{t('hero.marquee.1')}</span>
              <span className="text-bisa-navy/50 font-black">·</span>
              <span className="text-bisa-navy font-black text-sm md:text-base uppercase tracking-widest">{t('hero.marquee.2')}</span>
              <span className="text-bisa-navy/50 font-black">·</span>
              <span className="text-bisa-navy font-black text-sm md:text-base uppercase tracking-widest">{t('hero.marquee.3')}</span>
              <span className="text-bisa-navy/50 font-black">·</span>
              <span className="text-bisa-navy font-black text-sm md:text-base uppercase tracking-widest">{t('hero.marquee.4')}</span>
              <span className="text-bisa-navy/50 font-black">·</span>
              <span className="text-bisa-navy font-black text-sm md:text-base uppercase tracking-widest">{t('hero.marquee.5')}</span>
              <span className="text-bisa-navy/50 font-black">·</span>
              <span className="text-bisa-navy font-black text-sm md:text-base uppercase tracking-widest">{t('hero.marquee.6')}</span>
              <span className="text-bisa-navy/50 font-black">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
