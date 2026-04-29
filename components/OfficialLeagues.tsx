'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const LEAGUES = [
  { name: 'US Soccer', src: 'https://i.imgur.com/hGJqHmi.png', heightScale: 'h-16 md:h-20' },
  { name: 'USYS', src: 'https://i.imgur.com/A0haz75.png', heightScale: 'h-14 md:h-16' },
  { name: 'USYS National League', src: 'https://i.imgur.com/UUWrbRu.png', heightScale: 'h-16 md:h-20' },
  { name: 'Presidents Cup', src: 'https://i.imgur.com/v59Qj8o.png', heightScale: 'h-16 md:h-20' },
  { name: 'SCYS', src: 'https://i.imgur.com/SSUPnqM.png', heightScale: 'h-16 md:h-20' },
  { name: 'South Carolina State Cup', src: 'https://i.imgur.com/qjGBmS0.png', heightScale: 'h-14 md:h-16' },
];

export default function OfficialLeagues() {
  return (
    <section className="py-16 md:py-24 bg-bisa-navy-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-[100%] blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Official <span className="text-bisa-gold">Competitions</span>
          </h2>
          <p className="text-sm md:text-lg text-white/70 font-medium max-w-2xl mx-auto uppercase tracking-widest">
            Competing in top-level state, regional, and national leagues
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {LEAGUES.map((league, index) => (
            <motion.div
              key={league.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  duration: 4 + (index % 3), 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className={`relative w-full flex items-center justify-center grayscale-0 lg:grayscale lg:hover:grayscale-0 opacity-100 lg:opacity-50 lg:hover:opacity-100 transition-all duration-500 hover:scale-110 drop-shadow-[0_4px_15px_rgba(255,255,255,0.15)] lg:drop-shadow-none lg:hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.25)] ${league.heightScale}`}
              >
                <Image
                  src={league.src}
                  alt={league.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
