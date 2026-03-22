'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function TryoutsCTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-bisa-navy-dark">
      {/* Diagonal Gold Slash Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-bisa-navy" />
        <div 
          className="absolute top-0 left-0 w-full h-full bg-bisa-gold opacity-90"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transform: 'skewY(-6deg) scale(1.1)' }}
        />
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-bisa-navy-dark opacity-40 bg-[radial-gradient(circle_at_center,_var(--color-bisa-gold)_0%,_transparent_100%)] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-bisa-navy-dark/90 backdrop-blur-md p-6 sm:p-10 md:p-16 border-l-4 md:border-l-8 border-bisa-gold inline-block w-full shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter mb-3 md:mb-4 leading-none">
            Ready to Compete?
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-bisa-white/90 font-medium tracking-wide mb-8 md:mb-10">
            Tryouts open for all age groups — U8 through U18
          </p>
          
          <Link
            href="/tryouts"
            className="block w-full md:inline-block md:w-auto bg-bisa-gold text-bisa-navy px-8 py-4 md:px-12 md:py-5 rounded font-black text-lg md:text-xl uppercase tracking-widest hover:bg-white transition-colors mb-8 md:mb-10"
          >
            Secure Your Spot
          </Link>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="bg-white/10 border border-white/20 text-bisa-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
              Mon Apr 28 · 6:30 PM
            </span>
            <span className="bg-white/10 border border-white/20 text-bisa-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
              Wed Apr 30 · 6:30 PM
            </span>
            <span className="bg-white/10 border border-white/20 text-bisa-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
              Sat May 3 · 3:00 PM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
