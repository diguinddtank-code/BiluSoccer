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
              
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 md:pt-2">
                <div className="flex gap-1.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 md:w-6 md:h-6 text-bisa-gold fill-bisa-gold filter drop-shadow" />)}
                </div>
                <div className="hidden sm:block h-px w-10 sm:w-16 bg-white/30" />
                <span className="text-bisa-white/80 font-bold uppercase tracking-widest text-xs sm:text-sm">Elite Squad</span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {leagues.map((league, index) => (
            <motion.div
              key={league.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group bg-bisa-navy rounded-3xl p-8 border border-white/5 hover:border-bisa-gold/30 transition-all shadow-xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Visual Header / Logo Area */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${league.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {league.icon}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-black/40 text-bisa-white/80 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                      {league.age}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-4xl font-black text-white tracking-tighter mb-1">
                    {league.name}
                  </h4>
                  {league.name === 'N1L' && (
                    <span className="inline-block text-[#CCFF00] font-bold text-xs uppercase tracking-widest bg-[#CCFF00]/10 px-2 py-1 rounded">
                      Recently Qualified
                    </span>
                  )}
                </div>

                <p className="text-white/70 font-medium leading-relaxed mb-8 flex-grow">
                  {league.description}
                </p>

                {/* Progress / Next level indicator */}
                {index < leagues.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 w-10 h-10 lg:w-12 lg:h-12 bg-bisa-navy border-4 border-bisa-navy-dark rounded-full items-center justify-center z-20 translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-white/50" />
                  </div>
                )}
                <div className="pt-6 mt-auto border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors">
                  <span className="text-sm font-bold text-white/50 uppercase tracking-widest group-hover:text-white transition-colors">
                    Official League
                  </span>
                  {/* Small circular logo placeholder */}
                  <div className="w-10 h-10 rounded-full bg-white/5 relative overflow-hidden border border-white/20 flex items-center justify-center">
                     <span className="text-[10px] font-black text-white/80">{league.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
