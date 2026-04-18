'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck } from 'lucide-react';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative aspect-[3/2] flex flex-col items-center justify-center rounded-2xl border border-bisa-white/10 bg-gradient-to-br from-bisa-white/5 to-transparent backdrop-blur-sm overflow-hidden hover:border-bisa-gold/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] cursor-default"
            >
              <div className="absolute inset-0 bg-bisa-gold/0 group-hover:bg-bisa-gold/5 transition-colors duration-500 mix-blend-overlay"></div>
              
              <ShieldCheck className="w-10 h-10 text-bisa-gold/30 mb-3 group-hover:text-bisa-gold/70 transition-colors duration-500 group-hover:scale-110 transform" />
              <span className="text-bisa-gold/50 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm group-hover:text-bisa-gold/90 transition-colors duration-500">
                {t('sponsors.comingSoon') || 'Coming Soon'}
              </span>
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
            href="/contact"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-bisa-white/20 text-bisa-white px-8 py-4 rounded font-black text-sm md:text-base uppercase tracking-widest hover:border-bisa-gold hover:text-bisa-gold transition-all duration-300"
          >
            {t('sponsors.becomePartner') || 'Become a Partner'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
