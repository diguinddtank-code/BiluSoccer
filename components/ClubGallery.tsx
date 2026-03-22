'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function ClubGallery() {
  const row1 = [
    'https://i.imgur.com/skXQNVs.jpeg',
    'https://i.imgur.com/tokFWqm.jpeg',
    'https://i.imgur.com/s9pNNni.jpeg',
    'https://i.imgur.com/9rU8PaI.jpeg',
    'https://i.imgur.com/1UAUWpN.jpeg',
  ];
  
  const row2 = [
    'https://i.imgur.com/9rU8PaI.jpeg',
    'https://i.imgur.com/1UAUWpN.jpeg',
    'https://i.imgur.com/skXQNVs.jpeg',
    'https://i.imgur.com/tokFWqm.jpeg',
    'https://i.imgur.com/s9pNNni.jpeg',
  ];

  return (
    <section className="py-24 bg-bisa-navy-dark text-bisa-white overflow-hidden border-t border-white/5 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bisa-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 mb-16">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center"
        >
          <span className="font-sans font-bold text-[11px] tracking-[6px] text-bisa-gold uppercase mb-6 block">
            {`// CLUB LIFE`}
          </span>
          <h2 className="font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-bisa-white mb-8 italic drop-shadow-2xl flex flex-col items-center">
            <span className="block">MORE THAN A TEAM.</span>
            <span className="block text-bisa-gold drop-shadow-[0_0_30px_rgba(245,166,35,0.3)]">A FAMILY.</span>
          </h2>
          <div className="w-16 h-1 bg-bisa-gold rounded-full shadow-[0_0_10px_rgba(245,166,35,0.5)] mx-auto"></div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 md:gap-6 w-full overflow-hidden">
        {/* Row 1 - Moving Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-6 min-w-max px-2 md:px-3"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...row1, ...row1, ...row1].map((src, i) => (
              <div key={i} className="relative w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] rounded-2xl overflow-hidden group shadow-2xl shrink-0">
                <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-bisa-navy/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-6 min-w-max px-2 md:px-3"
            animate={{ x: ["-33.333333%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          >
            {[...row2, ...row2, ...row2].map((src, i) => (
              <div key={i} className="relative w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] rounded-2xl overflow-hidden group shadow-2xl shrink-0">
                <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-bisa-navy/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Gradient fades on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 md:w-48 bg-gradient-to-r from-bisa-navy-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 md:w-48 bg-gradient-to-l from-bisa-navy-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
}
