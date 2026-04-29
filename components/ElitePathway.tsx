'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Trophy, Medal, Target, ChevronRight, ShieldCheck, Star } from 'lucide-react';

const leagues = [
  {
    name: 'CPL',
    description: 'Coastal Premier League. Building the foundation. Where our youth teams develop their tactical and technical mastery.',
    age: 'U9 - U12',
    color: 'from-bisa-white to-gray-200',
    icon: <Target className="w-6 h-6 text-black" />,
  },
  {
    name: 'PMSL',
    description: "President's Medal Soccer League. The highly competitive proving ground for our advancing academy teams.",
    age: 'U13 - U18',
    color: 'from-slate-300 to-slate-400',
    icon: <Medal className="w-6 h-6 text-black" />,
  },
  {
    name: 'N1L',
    description: 'The pinnacle of regional competition. As State Champions, our elite squads test their mettle against the best teams in the country.',
    age: 'Elite / Qualified',
    color: 'from-bisa-gold to-yellow-500',
    icon: <Trophy className="w-6 h-6 text-black" />,
  }
];

export default function ElitePathway() {
  return (
    <section className="bg-bisa-navy-dark py-24 relative overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bisa-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-bisa-gold" />
            <h2 className="text-bisa-gold font-bold uppercase tracking-widest text-sm lg:text-base">
              A Legacy of Excellence
            </h2>
            <Trophy className="w-8 h-8 text-bisa-gold" />
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-bisa-white uppercase tracking-tighter mb-6 leading-[1.1]">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-bisa-gold to-yellow-300">Champions</span>
          </h3>
          <p className="text-lg md:text-xl text-bisa-white/80 font-medium leading-relaxed">
            Recognized among the nation’s elite, BISA builds a definitive pathway from youth development to top-tier competition.
          </p>
        </motion.div>

        {/* Feature: State Champions Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-[#0A1020] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-24 group flex flex-col md:block"
        >
          {/* ---- MOBILE LAYOUT ---- */}
          {/* Mobile Image Banner (Only visible on small screens) */}
          <div className="relative h-[300px] sm:h-[400px] w-full md:hidden">
            <Image 
              src="https://i.imgur.com/JBYxTIU.png"
              alt="BISA State Champions Mobile"
              fill
              className="object-cover object-top"
            />
            {/* Soft gradient into the background color */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020] via-transparent to-transparent" />

            {/* Mobile Badge Overlay */}
            <div className="absolute top-6 left-6 right-6 flex justify-center z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bisa-gold text-bisa-navy-dark rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(235,171,4,0.3)]">
                <ShieldCheck className="w-4 h-4" />
                Current Title Holders
              </div>
            </div>
          </div>

          {/* ---- DESKTOP LAYOUT Background ---- */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <Image 
              src="https://i.imgur.com/wZZMCRa.png"
              alt="BISA State Champions Desktop"
              fill
              className="object-cover opacity-90 object-[70%_top] lg:object-right transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1020] via-[#0A1020]/90 lg:via-[#0A1020]/40 to-transparent" />
          </div>
          
          <div className="relative z-10 px-6 pb-10 pt-0 md:p-14 lg:p-20 flex flex-col md:flex-row md:items-center gap-6 md:gap-14 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left w-full flex flex-col items-center md:items-start z-10">
              <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-bisa-gold text-bisa-navy-dark rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_4px_15px_rgba(235,171,4,0.3)] mt-2 md:mt-0">
                <ShieldCheck className="w-5 h-5" />
                Current Title Holders
              </div>
              
              <h4 className="text-[2.75rem] sm:text-6xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter leading-[0.95] drop-shadow-lg">
                U15 State <br className="hidden md:block" /> 
                <span className="text-bisa-gold drop-shadow-[0_0_20px_rgba(235,171,4,0.3)]">Champions</span>
              </h4>
              
              <p className="text-base sm:text-lg md:text-2xl text-bisa-white/90 font-medium max-w-xl leading-relaxed drop-shadow-md">
                Reigning Supreme in the President's Cup. Our U15 squad demonstrated unmatched tactical discipline and technical mastery to claim the State Title.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 md:pt-2">
                <div className="relative group shrink-0 transition-transform duration-700 hover:scale-110 flex items-center justify-center">
                  {/* Logo Container */}
                  <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] z-10 flex items-center justify-center">
                    <Image 
                      src="https://i.imgur.com/3Pb5Djj.png"
                      alt="USYS Presidents Cup"
                      fill
                      className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] md:drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/30" />
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 md:w-6 md:h-6 text-bisa-gold fill-bisa-gold filter drop-shadow" />)}
                  </div>
                  <span className="text-bisa-white/80 font-bold uppercase tracking-widest text-xs sm:text-sm pt-1">USYS Presidents Cup<br className="sm:hidden" /> <span className="hidden sm:inline">•</span> Elite Squad</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The League Pathway */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-bisa-white uppercase tracking-tighter mb-4">
            The Competitive Pathway
          </h3>
          <p className="text-bisa-white/60 font-medium max-w-2xl mx-auto text-lg">
            From foundational leagues to the highest tiers of national competition, our ecosystem is designed to elevate every player.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 mt-12">
          {leagues.map((league, index) => (
            <motion.div
              key={league.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group bg-bisa-navy/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-bisa-gold/50 transition-colors duration-500 flex flex-col z-10"
            >
              {/* Premium Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-bisa-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex flex-row justify-between items-start mb-8 gap-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${league.color} flex items-center justify-center shadow-lg shrink-0 transform group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-bisa-navy-dark scale-125 sm:scale-150">
                      {league.icon}
                    </div>
                  </div>
                  
                  <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-widest border border-white/10 whitespace-nowrap">
                    <span className="text-bisa-gold mr-1.5 sm:mr-2 text-lg sm:text-xl leading-none">•</span> {league.age}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-4xl sm:text-5xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tighter uppercase mb-3">
                    {league.name}
                  </h4>
                  {league.name === 'N1L' && (
                    <span className="inline-block text-bisa-navy-dark font-black text-[10px] sm:text-xs uppercase tracking-widest bg-[#CCFF00] px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                      Recently Qualified
                    </span>
                  )}
                </div>
                
                <p className="text-white/70 font-medium leading-relaxed text-base sm:text-lg mt-auto">
                  {league.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
