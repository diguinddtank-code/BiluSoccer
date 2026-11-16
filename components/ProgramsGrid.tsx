'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// "Find your level" as a compact index: one row per program with an age ruler
// (U4–U18) that marks the program's range. Picking the player's age at the top
// lights the programs that fit. GSAP: rows wipe in on scroll; hovering a row
// floods it with volt and slides the arrow (desktop).

const AGES = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const MIN = 4;
const MAX = 18;

const PROGRAMS = [
  { title: 'Academy Development', age: 'U4–U14', from: 4, to: 14, desc: 'Foundational and progressive training for performance-focused athletes.', href: '/programs/academy-development' },
  { title: 'Junior Academy', age: 'U8–U12', from: 8, to: 12, desc: 'Accelerated development: technical mastery and game intelligence.', href: '/programs/junior-academy' },
  { title: 'Elite', age: 'U15–U18', from: 15, to: 18, desc: 'Top-tier development with college and pro exposure.', href: '/programs/elite' },
  { title: 'Futsal', age: 'All ages', from: 4, to: 18, desc: 'Small court, big skills: technique and decision making.', href: '/programs/futsal' },
  { title: 'Summer Camps', age: 'Seasonal', from: 4, to: 18, desc: 'A full summer of soccer and fun at Sangaree Middle School.', href: '/programs/summer-camps', soft: true },
];

const pct = (a: number) => ((a - MIN) / (MAX - MIN)) * 100;

export default function ProgramsGrid() {
  const root = useRef<HTMLElement>(null);
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: (() => void)[] = [];
    const ctx = gsap.context(() => {
      if (reduce) return;
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 72%', once: true } });
      tl.from('[data-p-head] > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.07, ease: 'expo.out' })
        .from('[data-p-row]', { clipPath: 'inset(0 100% 0 0)', duration: 0.9, stagger: 0.08, ease: 'expo.inOut' }, 0.15)
        .from('[data-p-range]', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.8, stagger: 0.08, ease: 'expo.out' }, 0.6);
    }, el);

    if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      el.querySelectorAll<HTMLElement>('[data-p-row]').forEach((row) => {
        const fill = row.querySelector('[data-p-fill]');
        const arrow = row.querySelector('[data-p-arrow]');
        const enter = () => {
          gsap.to(fill, { scaleX: 1, duration: 0.45, ease: 'expo.out', overwrite: true });
          gsap.to(arrow, { x: 6, rotate: -45, duration: 0.4, ease: 'expo.out', overwrite: true });
        };
        const leave = () => {
          gsap.to(fill, { scaleX: 0, duration: 0.35, ease: 'power3.in', overwrite: true });
          gsap.to(arrow, { x: 0, rotate: 0, duration: 0.35, ease: 'power3.out', overwrite: true });
        };
        row.addEventListener('pointerenter', enter);
        row.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          row.removeEventListener('pointerenter', enter);
          row.removeEventListener('pointerleave', leave);
        });
      });
    }
    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, []);

  const fits = (p: (typeof PROGRAMS)[number]) => age === null || (age >= p.from && age <= p.to);

  return (
    <section ref={root} className="relative overflow-hidden bg-bisa-navy-light py-20 md:py-24">
      <style>{`
        .programs [data-p-row] .ink { transition: color .3s; }
        @media (hover: hover) and (pointer: fine) {
          .programs [data-p-row]:hover .ink { color: #0a1f14; }
          .programs [data-p-row]:hover .ink-soft { color: rgba(10,31,20,.7); }
          .programs [data-p-row]:hover .ruler-base { background: rgba(10,31,20,.18); }
          .programs [data-p-row]:hover [data-p-range] { background: #0a1f14; }
        }
      `}</style>
      <div className="programs relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Head + age picker */}
        <div data-p-head className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bisa-gold">
              <span className="h-px w-8 bg-bisa-gold" /> Our programs
            </p>
            <h2 className="font-bebas text-[clamp(56px,7vw,96px)] leading-[0.86] text-white">
              Find your <span className="text-bisa-gold">level</span>
            </h2>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Player&apos;s age group</p>
            <div className="flex flex-wrap gap-1" role="group" aria-label="Player's age group">
              {AGES.map((a) => (
                <button
                  key={a}
                  onClick={() => setAge(age === a ? null : a)}
                  aria-pressed={age === a}
                  className={`h-8 min-w-[38px] rounded-md px-1.5 font-mono text-[11px] font-bold transition-colors ${age === a ? 'bg-bisa-gold text-bisa-navy-dark' : 'bg-white/[0.06] text-white/70 hover:bg-white/15'}`}
                >
                  U{a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ruler legend (desktop) */}
        <div className="mb-2 hidden grid-cols-[56px_1.15fr_1fr_1.2fr_40px] gap-6 px-4 lg:grid">
          <span />
          <span />
          <div className="relative h-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
            {[4, 8, 12, 15, 18].map((a) => (
              <span key={a} className="absolute top-0 -translate-x-1/2 first:translate-x-0 last:-translate-x-full" style={{ left: `${pct(a)}%` }}>
                U{a}
              </span>
            ))}
          </div>
        </div>

        <ul className="border-t border-white/10">
          {PROGRAMS.map((p, i) => {
            const on = fits(p);
            return (
              <li key={p.title} className="border-b border-white/10 transition-opacity duration-300" style={{ opacity: on ? 1 : 0.28 }}>
                <Link href={p.href} data-p-row className="relative grid grid-cols-[36px_1fr_auto] items-center gap-x-4 gap-y-2 px-1 py-5 lg:grid-cols-[56px_1.15fr_1fr_1.2fr_40px] lg:gap-6 lg:px-4 lg:py-6">
                  <span data-p-fill className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-bisa-gold" />
                  <span className="ink-soft ink relative font-mono text-[12px] text-white/40">0{i + 1}</span>
                  <span className="relative min-w-0">
                    <span className="ink font-bebas block text-[34px] leading-none text-white md:text-[42px]">{p.title}</span>
                    <span className="ink-soft ink mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-bisa-gold lg:hidden">{p.age}</span>
                  </span>

                  {/* Age ruler */}
                  <span className="relative col-span-3 row-start-2 block lg:col-span-1 lg:row-start-auto">
                    <span className="ruler-base relative block h-[6px] rounded-full bg-white/10">
                      <span
                        data-p-range
                        className={`absolute top-0 h-full rounded-full ${p.soft ? 'bg-bisa-gold/45' : 'bg-bisa-gold'}`}
                        style={{ left: `${pct(p.from)}%`, width: `${pct(p.to) - pct(p.from)}%` }}
                      />
                      {age !== null && <span className="absolute top-1/2 h-4 w-[2px] -translate-y-1/2 bg-white" style={{ left: `calc(${pct(age)}% - 1px)` }} />}
                    </span>
                    <span className="ink-soft ink mt-1.5 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 lg:block">{p.age}</span>
                  </span>

                  <span className="ink-soft ink relative col-span-3 hidden text-[15px] leading-snug text-white/60 lg:col-span-1 lg:block">{p.desc}</span>
                  <span data-p-arrow className="ink relative col-start-3 row-start-1 grid size-9 place-items-center justify-self-end rounded-full border border-current text-white lg:col-start-auto lg:row-start-auto">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {age !== null && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            Showing programs for U{age} ·{' '}
            <button onClick={() => setAge(null)} className="text-bisa-gold underline-offset-4 hover:underline">
              show all
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
