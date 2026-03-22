'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration = 2, suffix = '' }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function StatsBar() {
  const stats = [
    { value: 200, suffix: '+', label: 'Players Developed', isNumber: true },
    { value: 'U4–U18', label: 'Age Groups', isNumber: false },
    { value: 4, label: 'Field Locations', isNumber: true },
    { value: 'US Soccer', label: 'Licensed Coaches', isNumber: false },
  ];

  return (
    <section className="bg-bisa-gold py-6 sm:py-8 md:py-12 border-y-4 border-bisa-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 divide-x-0 md:divide-x-2 divide-bisa-navy/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-bisa-navy tracking-tighter mb-1 md:mb-2">
                {stat.isNumber ? (
                  <Counter from={0} to={stat.value as number} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-bisa-navy/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
