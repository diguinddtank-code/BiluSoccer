'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SponsorsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-bisa-navy-dark border-t border-bisa-white/5 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bisa-gold/[0.03] rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bisa-gold/[0.02] rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-bisa-white tracking-widest mb-4 uppercase">
            {t('sponsors.title') || 'Our Partners & Sponsors'}
          </h2>
          <div className="w-24 h-1 bg-bisa-gold mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-bisa-white/60 max-w-2xl mx-auto font-medium">
            {t('sponsors.subtitle') || 'Proudly supported by organizations that believe in the power of youth development.'}
          </p>
        </motion.div>

        {/* Premium Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {[
            'https://i.imgur.com/lWFqLjy.png',
            'https://i.imgur.com/0gOfNB4.png',
            'https://i.imgur.com/XTN9xsB.png'
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative w-48 h-32 sm:w-64 sm:h-40 flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/15 transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.2)] p-6"
            >
              <img src={src} alt="Sponsor logo" className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-500" />
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
            className="inline-flex items-center gap-3 bg-transparent border-2 border-bisa-white/20 text-bisa-white px-8 py-4 rounded font-black text-sm md:text-base uppercase tracking-widest hover:border-bisa-gold hover:text-bisa-gold transition-all duration-300"
          >
            {t('sponsors.becomePartner') || 'Become a Partner'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
