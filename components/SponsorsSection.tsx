'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SponsorsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-bisa-navy-dark border-t border-bisa-white/5 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-bisa-white tracking-widest mb-4 uppercase flex flex-col items-center">
            <span className="text-bisa-gold block text-2xl md:text-3xl tracking-[0.2em] mb-2">Support Network</span>
            {t('sponsors.title') || 'Our Partners & Sponsors'}
          </h2>
          <div className="w-24 h-1 bg-bisa-gold mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-bisa-white/60 max-w-2xl mx-auto font-medium">
            {t('sponsors.subtitle') || 'Proudly supported by organizations that believe in the power of youth development.'}
          </p>
        </motion.div>

        {/* Premium Grid */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 items-center w-full">
          {[
            'https://i.imgur.com/lWFqLjy.png',
            'https://i.imgur.com/0gOfNB4.png',
            'https://i.imgur.com/XTN9xsB.png'
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative w-full lg:w-[30%] max-w-md lg:max-w-none h-48 sm:h-56 lg:h-48 xl:h-56 rounded-2xl overflow-hidden"
            >
              {/* Premium Gold Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700] via-[#f5a623] to-[#cc8400] transition-transform duration-700 group-hover:scale-105"></div>
              
              {/* Soft texture over the gold */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay"></div>
              
              {/* Inner depth shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.15)] rounded-2xl pointer-events-none"></div>

              {/* Logo Container */}
              <div className="absolute inset-1 sm:inset-2 bg-[#fdfaf2] rounded-xl sm:rounded-2xl flex items-center justify-center p-6 sm:p-8 transition-colors duration-500 shadow-inner group-hover:bg-white overflow-hidden">
                <img 
                  src={src} 
                  alt="Sponsor logo" 
                  className="relative z-10 w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-110 drop-shadow-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/sponsorship"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-bisa-gold text-bisa-gold px-8 py-4 rounded font-black text-sm md:text-base uppercase tracking-widest hover:bg-bisa-gold hover:text-bisa-navy-dark transition-all duration-300"
          >
            {t('sponsors.becomePartner') || 'Become a Partner'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
