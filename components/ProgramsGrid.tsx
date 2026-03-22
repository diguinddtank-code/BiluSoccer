'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'High Performance',
    age: 'U13–U18',
    desc: 'High-intensity training for performance-focused athletes.',
    href: '/programs/high-performance',
  },
  {
    title: 'Elite',
    age: 'U15–U18',
    desc: 'Top-tier development for elite athletes.',
    href: '/programs/elite',
  },
  {
    title: 'Futsal',
    age: 'All Ages',
    desc: 'Small court. Big skills. Focus on technique.',
    href: '/programs/futsal',
  },
  {
    title: 'Summer Camps',
    age: 'Seasonal',
    desc: 'A full summer of soccer, development, and fun.',
    href: '/programs/summer-camps',
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-24 bg-bisa-navy-light relative overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bisa-gold/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-bisa-navy-dark/80 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Diagonal Slash */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bisa-navy-dark transform skew-x-12 translate-x-1/4 opacity-40 pointer-events-none border-l border-white/5" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-bisa-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Programs</span>
          <h2 className="text-5xl md:text-6xl font-black text-bisa-white uppercase tracking-tighter">Find Your Level</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-bisa-navy/80 backdrop-blur-sm border-t-4 border-bisa-gold p-5 sm:p-6 md:p-8 hover:bg-bisa-navy-dark transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start gap-3 mb-3 md:mb-5">
                <h3 className="text-2xl sm:text-3xl font-black text-bisa-white uppercase tracking-tight group-hover:text-bisa-gold transition-colors leading-none">
                  {program.title}
                </h3>
                <span className="bg-white/10 text-bisa-white px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded whitespace-nowrap shrink-0 mt-0.5 border border-white/5">
                  {program.age}
                </span>
              </div>
              <p className="relative z-10 text-bisa-white/70 font-medium text-sm sm:text-base md:text-lg mb-5 md:mb-8 flex-grow">
                {program.desc}
              </p>
              <Link 
                href={program.href} 
                className="relative z-10 inline-flex items-center text-bisa-gold font-bold uppercase tracking-widest text-xs sm:text-sm hover:text-white transition-colors mt-auto w-max"
              >
                Learn More <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
