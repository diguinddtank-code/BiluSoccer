'use client';

import { motion } from 'motion/react';

export default function TryoutDatesCard({ ageGroup, dates }: { ageGroup: string, dates: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-bisa-navy border-l-4 border-bisa-gold p-6 md:p-8"
    >
      <h3 className="text-2xl font-black text-bisa-white uppercase tracking-tight mb-6">
        {ageGroup}
      </h3>
      <div className="flex flex-col gap-3">
        {dates.map((date, i) => (
          <div key={i} className="flex items-center bg-bisa-navy-light p-4 rounded-sm">
            <div className="w-2 h-2 bg-bisa-gold rounded-full mr-4" />
            <span className="text-bisa-white font-bold uppercase tracking-wider text-sm md:text-base">
              {date}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
