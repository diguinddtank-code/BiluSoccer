'use client';

import { motion } from 'motion/react';

export default function ExperienceStrip() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-bisa-white">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
          {/* Soccer ball pentagon in center */}
          <polygon points="12,9 15,11 14,14 10,14 9,11" fill="currentColor" opacity="0.2" />
        </svg>
      ),
      title: 'Brazilian Methodology',
      desc: 'Technical excellence rooted in South American soccer culture',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-bisa-white">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          {/* Star above trophy */}
          <polygon points="12,2 13,4 15,4 13.5,5.5 14,7.5 12,6.5 10,7.5 10.5,5.5 9,4 11,4" fill="currentColor" transform="translate(0, -3) scale(0.6) transform-origin-center" />
        </svg>
      ),
      title: 'Competitive Leagues',
      desc: 'CPL, PMSL and regional tournaments',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-bisa-white">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          {/* Flight path arrow */}
          <path d="M2 22 L22 2" strokeDasharray="2 2" />
          <polygon points="22,2 18,2 22,6" fill="currentColor" />
        </svg>
      ),
      title: 'International Vision',
      desc: 'Developing players with a global mindset',
    },
  ];

  return (
    <section className="bg-bisa-navy-dark py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full group-hover:bg-bisa-gold group-hover:text-bisa-navy transition-colors duration-300">
                {feature.icon}
              </div>
              <div className="w-12 h-1 bg-bisa-gold mb-6" />
              <h3 className="text-2xl font-black text-bisa-white uppercase tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-bisa-white/70 font-medium text-sm uppercase tracking-wide leading-relaxed max-w-xs">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
