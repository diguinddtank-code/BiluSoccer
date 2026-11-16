'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// One strip of logos, in full color on small light badges (several logos have
// navy lettering that vanished on the dark background). GSAP: the badges pop in
// as a wave when the strip scrolls into view, then keep a slow wave going; on
// desktop each badge follows the cursor a little and lifts with its name.
const LEAGUES = [
  { name: 'U.S. Soccer', src: 'https://i.imgur.com/hGJqHmi.png' },
  { name: 'US Youth Soccer', src: 'https://i.imgur.com/A0haz75.png' },
  { name: 'USYS National League', src: 'https://i.imgur.com/UUWrbRu.png' },
  { name: 'SC Presidents Cup', src: 'https://i.imgur.com/v59Qj8o.png' },
  { name: 'South Carolina Youth Soccer', src: 'https://i.imgur.com/SSUPnqM.png' },
  { name: 'SC State Cup', src: 'https://i.imgur.com/qjGBmS0.png' },
];

export default function OfficialLeagues() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      const badges = gsap.utils.toArray<HTMLElement>('[data-ol-badge]');
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 78%', once: true } });
      tl.from('[data-ol-head] > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'expo.out' })
        .from(badges, { y: 50, scale: 0.4, rotate: (i) => (i % 2 ? 14 : -14), autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: 'back.out(1.8)' }, 0.15)
        .from('[data-ol-rule]', { scaleX: 0, duration: 1, ease: 'expo.inOut' }, 0.2)
        .add(() => {
          // A slow wave across the strip, forever.
          badges.forEach((b, i) =>
            gsap.to(b.querySelector('[data-ol-float]'), { y: -7, duration: 1.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.18 }),
          );
        });
    }, el);

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      el.querySelectorAll<HTMLElement>('[data-ol-badge]').forEach((b) => {
        const x = gsap.quickTo(b, 'x', { duration: 0.45, ease: 'power3.out' });
        const y = gsap.quickTo(b, 'y', { duration: 0.45, ease: 'power3.out' });
        const move = (e: PointerEvent) => {
          const r = b.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * 0.2);
          y((e.clientY - (r.top + r.height / 2)) * 0.2 - 6);
        };
        const leave = () => {
          x(0);
          y(0);
        };
        b.addEventListener('pointermove', move);
        b.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          b.removeEventListener('pointermove', move);
          b.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden border-t border-white/5 bg-bisa-navy-dark py-16 md:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-bisa-gold/[0.06] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div data-ol-head className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">
            Official <span className="text-bisa-gold">Competitions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium uppercase tracking-widest text-white/70 md:text-lg">
            Competing in top-level state, regional, and national leagues
          </p>
        </div>

        <div className="relative">
          <div data-ol-rule className="absolute top-1/2 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-bisa-gold/40 to-transparent lg:block" />
          <ul className="relative grid grid-cols-3 gap-x-4 gap-y-8 lg:grid-cols-6 lg:gap-6">
            {LEAGUES.map((league) => (
              <li key={league.name} data-ol-badge className="group flex flex-col items-center">
                <div data-ol-float className="flex flex-col items-center">
                  <div className="relative grid size-[88px] place-items-center rounded-[22px] bg-white/95 p-3 shadow-[0_12px_30px_-12px_rgba(0,0,0,.8)] ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-10px_rgba(204,255,0,.45)] md:size-[104px] md:rounded-[26px]">
                    <div className="relative h-full w-full">
                      <Image src={league.src} alt={league.name} fill sizes="104px" className="object-contain" />
                    </div>
                  </div>
                  <span className="mt-3 max-w-[120px] text-center text-[10px] leading-tight font-bold uppercase tracking-[0.14em] text-white/55 transition-colors duration-300 group-hover:text-bisa-gold md:text-[11px]">
                    {league.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
