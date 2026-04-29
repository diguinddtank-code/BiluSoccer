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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl mb-24 group"
        >
          <div className="absolute inset-0">
            {/* Mobile Image */}
            <Image 
              src="https://i.imgur.com/JBYxTIU.png"
              alt="BISA State Champions Mobile"
              fill
              className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 md:hidden object-top"
            />
            {/* Desktop Image */}
            <Image 
              src="https://i.imgur.com/wZZMCRa.png"
              alt="BISA State Champions Desktop"
              fill
              className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 hidden md:block object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-bisa-navy-dark/95 via-bisa-navy-dark/80 md:via-bisa-navy-dark/40 to-transparent md:to-transparent" />
          </div>
          
          <div className="relative z-10 p-8 md:p-14 lg:p-20 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bisa-gold text-bisa-navy-dark rounded-full font-bold text-xs md:text-sm uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(235,171,4,0.4)]">
                <ShieldCheck className="w-5 h-5" />
                Current Title Holders
              </div>
              <h4 className="text-5xl md:text-7xl font-black text-bisa-white uppercase tracking-tighter leading-none drop-shadow-lg">
                U15 State <br /> <span className="text-bisa-gold">Champions</span>
              </h4>
              <p className="text-xl md:text-2xl text-bisa-white/90 font-medium max-w-xl leading-relaxed">
                Reigning Supreme in the President's Cup. Our U15 squad demonstrated unmatched tactical discipline and technical mastery to claim the State Title.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 text-bisa-gold fill-bisa-gold" />)}
                </div>
                <div className="h-px w-16 bg-white/20" />
                <span className="text-bisa-white/60 font-bold uppercase tracking-widest text-sm">Elite Squad</span>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] shrink-0 relative bg-bisa-navy rounded-full border-4 border-bisa-gold flex items-center justify-center shadow-[0_0_50px_rgba(235,171,4,0.3)]">
               <div className="absolute inset-2 border border-bisa-gold/30 rounded-full border-dashed animate-spin-slow" />
               <div className="text-center p-6">
                 <Trophy className="w-20 h-20 md:w-28 md:h-28 text-bisa-gold mx-auto mb-2 drop-shadow-lg" />
                 <span className="block font-black text-white text-xl md:text-2xl uppercase tracking-tighter">President's</span>
                 <span className="block font-bold text-white/80 text-sm md:text-base uppercase tracking-widest">Cup</span>
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
