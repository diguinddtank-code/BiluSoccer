'use client';

import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationsSection() {
  return (
    <section className="py-24 bg-bisa-navy relative overflow-hidden">
      {/* Topographic SVG Background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }} 
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bisa-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bisa-gold/10 text-bisa-gold rounded-full font-bold text-xs uppercase tracking-widest mb-4 border border-bisa-gold/20">
            <MapPin className="w-4 h-4" />
            Official Training Ground
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-bisa-white uppercase tracking-tighter">
            Our Home
          </h2>
          <div className="w-24 h-1 bg-bisa-gold mx-auto mt-6 shadow-[0_0_15px_rgba(245,166,35,0.5)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative bg-[#0a1120]/80 backdrop-blur-md border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-10"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-bisa-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-bisa-navy flex items-center justify-center shrink-0 border-4 border-bisa-gold/30 group-hover:border-bisa-gold transition-colors duration-500 shadow-[0_0_30px_rgba(245,166,35,0.15)] relative">
            <div className="absolute inset-2 border border-bisa-gold/20 rounded-full border-dashed animate-spin-slow" />
            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-bisa-gold drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="text-center md:text-left flex-1">
            <h3 className="text-3xl md:text-4xl font-black text-bisa-white uppercase tracking-tighter mb-3 relative z-10 drop-shadow-md">
              Sangaree Middle School
            </h3>
            <p className="text-bisa-white/70 font-medium text-lg md:text-xl mb-8 relative z-10 max-w-lg">
              1050 Discovery Dr, Ladson, SC 29456
            </p>
            
            <a 
              href="https://maps.google.com/?q=1050+Discovery+Dr,+Ladson,+SC+29456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-bisa-gold hover:bg-yellow-400 text-bisa-navy-dark px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(235,171,4,0.4)] relative z-10 w-full md:w-auto min-h-[56px]"
            >
              Get Directions
              <Navigation className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
