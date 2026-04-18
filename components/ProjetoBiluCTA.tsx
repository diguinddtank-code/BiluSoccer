'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjetoBiluCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 lg:py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCFF00] rounded-full blur-[150px] opacity-[0.03] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CCFF00] rounded-full blur-[120px] opacity-[0.02] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Output Logo / Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex-shrink-0 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-[#CCFF00]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image 
                src="https://i.imgur.com/V6cPinz.jpeg" 
                alt="Projeto BILU"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12 flex flex-col"
          >
            <div className="inline-block mb-4">
              <span className="bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] px-3 py-1 text-xs font-black uppercase tracking-widest rounded-full">
                {t('projetobilu.label') || '// PROJETO SOCIAL'}
              </span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-widest leading-[0.9] mb-6 drop-shadow-lg">
              {t('projetobilu.title') || 'O FUTEBOL QUE TRANSFORMA VIDAS'}
            </h2>

            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mb-10 border-l-2 border-[#CCFF00]/50 pl-4">
              {t('projetobilu.subtitle') || 'Projeto BILU é uma iniciativa humanitária global que usa o futebol como ferramenta de transformação social, presente em 10 países e impactando crianças em todo o mundo.'}
            </p>

            <div className="flex flex-wrap gap-6 md:gap-10 mb-10">
              <div className="flex flex-col">
                <span className="font-bebas text-4xl md:text-5xl text-[#CCFF00] tracking-widest">{t('projetobilu.stat1.value') || '10'}</span>
                <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">{t('projetobilu.stat1.label') || 'Países'}</span>
              </div>
              <div className="w-px h-12 bg-white/10 self-center hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-bebas text-4xl md:text-5xl text-[#CCFF00] tracking-widest">{t('projetobilu.stat2.value') || '23'}</span>
                <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">{t('projetobilu.stat2.label') || 'Núcleos'}</span>
              </div>
              <div className="w-px h-12 bg-white/10 self-center hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-bebas text-4xl md:text-5xl text-[#CCFF00] tracking-widest">{t('projetobilu.stat3.value') || '153+'}</span>
                <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">{t('projetobilu.stat3.label') || 'Voluntários'}</span>
              </div>
            </div>

            <div>
              <Link 
                href="/projeto-bilu" 
                className="inline-flex items-center gap-2 bg-[#CCFF00] text-black px-8 py-4 font-black uppercase text-sm md:text-base tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(204,255,0,0.2)]"
              >
                {t('projetobilu.cta') || 'Conheça o Projeto'}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
