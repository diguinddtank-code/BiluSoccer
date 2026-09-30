'use client';

import { motion } from 'motion/react';
import { Trophy, Medal, Target } from 'lucide-react';
import ChampionsSection from './ChampionsSection';

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

      </div>

      {/* U15 State Champions — trophy moment (full width) */}
      <ChampionsSection />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 mt-24">

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
