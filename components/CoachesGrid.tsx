'use client';

import {motion} from 'motion/react';
import Image from 'next/image';

export default function CoachesGrid() {
  const featuredCoach = {
    name: 'Coach PC',
    role: 'Sports Director',
    photo: 'https://i.imgur.com/2yYRzpU.png',
    bio: 'Former professional player with over 15 years of international coaching experience. Dedicated to developing elite youth talent.',
    badges: ['National D License', 'Global Experience']
  };

  const staffCoaches = [
    {
      name: 'Manuel Luxgonzalez',
      role: 'Licensed Staff',
      photo: 'https://i.imgur.com/WSvSZ4c.png',
    },
    {
      name: 'Paulo Oliveira',
      role: 'Licensed Staff',
      photo: 'https://i.imgur.com/uy6yZxm.png',
    },
    {
      name: 'Tony Leal',
      role: 'Licensed Staff',
      photo: 'https://i.imgur.com/trDxKdC.png',
    },
  ];

  return (
    <section className="relative py-24 bg-bisa-navy-dark text-bisa-white overflow-hidden border-t border-white/5">
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bisa-gold/5 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bisa-navy-light/40 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <span className="font-sans font-bold text-[11px] tracking-[6px] text-bisa-gold uppercase mb-6 block drop-shadow-md">
            {`// OUR COACHING STAFF`}
          </span>
          <h2 className="font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-bisa-white mb-8 italic drop-shadow-2xl flex flex-col items-center">
            <span className="block">NATIONALLY LICENSED.</span>
            <span className="block text-bisa-gold drop-shadow-[0_0_30px_rgba(245,166,35,0.3)]">GLOBALLY EXPERIENCED.</span>
          </h2>
          <div className="w-16 h-1 bg-bisa-gold rounded-full shadow-[0_0_10px_rgba(245,166,35,0.5)] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-bisa-white/80 font-medium tracking-wide leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Every BISA coach holds national licenses and shares a unified philosophy of player development.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Featured Coach */}
          <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.5}}
            className="w-full bg-bisa-navy/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-bisa-gold/20 flex flex-col md:flex-row group relative"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto md:min-h-[400px] overflow-hidden">
              <Image
                src={featuredCoach.photo}
                alt={featuredCoach.name}
                fill
                className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-bisa-navy via-bisa-navy/50 to-transparent opacity-90 md:opacity-100" />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center w-full md:w-3/5 relative z-10 -mt-20 md:mt-0">
              <span className="text-bisa-gold font-bold text-xs sm:text-sm uppercase tracking-widest mb-2 drop-shadow-md">
                {featuredCoach.role}
              </span>
              <h3 className="font-sans font-black text-4xl md:text-5xl uppercase text-bisa-white mb-4 tracking-tight drop-shadow-lg">
                {featuredCoach.name}
              </h3>
              <p className="text-bisa-white/80 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl drop-shadow-sm">
                {featuredCoach.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredCoach.badges.map((badge, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 rounded-lg text-xs sm:text-sm font-bold text-bisa-white/90 border border-white/10 uppercase tracking-wider backdrop-blur-sm shadow-inner">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            {/* Accent line */}
            <div className="absolute bottom-0 left-0 w-full md:w-1 md:h-full bg-bisa-gold shadow-[0_0_15px_rgba(245,166,35,0.5)]" />
          </motion.div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {staffCoaches.map((coach, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-100px'}}
                transition={{duration: 0.5, delay: (i + 1) * 0.15}}
                className="group relative bg-bisa-navy/80 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-row sm:flex-col border border-white/5 sm:border-none"
              >
                <div className="relative w-28 sm:w-full aspect-square sm:aspect-[3/4] overflow-hidden shrink-0">
                  <Image
                    src={coach.photo}
                    alt={coach.name}
                    fill
                    className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-bisa-navy via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                
                <div className="flex flex-col justify-center p-5 sm:p-6 sm:absolute sm:bottom-0 sm:left-0 sm:w-full sm:z-10">
                  <h3 className="font-sans font-black text-lg sm:text-2xl uppercase text-bisa-white mb-1 tracking-tight leading-tight drop-shadow-md">
                    {coach.name}
                  </h3>
                  <p className="text-bisa-gold font-bold text-[10px] sm:text-xs uppercase tracking-widest drop-shadow-md">
                    {coach.role}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-bisa-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_rgba(245,166,35,0.5)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
