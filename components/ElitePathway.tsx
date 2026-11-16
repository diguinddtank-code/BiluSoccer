'use client';

import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import ChampionsSection from './ChampionsSection';
import CompetitivePathway from './CompetitivePathway';

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

      {/* The Competitive Pathway: pinned staircase climb (components/CompetitivePathway.tsx) */}
      <CompetitivePathway />
    </section>
  );
}
