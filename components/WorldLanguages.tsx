'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// "Everyone is welcome": two rows of real flags (with the country name) gliding
// in opposite directions. GSAP drives the rows: they speed up and lean with
// the scroll, ease back to cruising speed, and slow to a stop under the cursor.

const NATIONS = [
  ['br', 'Brazil'], ['us', 'USA'], ['mx', 'Mexico'], ['co', 'Colombia'], ['ma', 'Morocco'], ['za', 'South Africa'],
  ['au', 'Australia'], ['ec', 'Ecuador'], ['hn', 'Honduras'], ['gt', 'Guatemala'], ['ar', 'Argentina'], ['es', 'Spain'],
  ['pt', 'Portugal'], ['gb', 'United Kingdom'], ['fr', 'France'], ['it', 'Italy'], ['de', 'Germany'], ['jp', 'Japan'],
  ['kr', 'South Korea'], ['uy', 'Uruguay'], ['cl', 'Chile'], ['pe', 'Peru'], ['cr', 'Costa Rica'], ['py', 'Paraguay'],
] as const;
const ROW_A = NATIONS.slice(0, 12);
const ROW_B = NATIONS.slice(12);

function Flag({ code, name }: { code: string; name: string }) {
  return (
    <li className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pr-5 pl-2 transition-colors duration-300 hover:border-bisa-gold/50 hover:bg-white/[0.08]">
      <span className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/80 md:h-11 md:w-11">
        <Image src={`https://flagcdn.com/w160/${code}.png`} alt="" fill sizes="44px" className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
      </span>
      <span className="whitespace-nowrap text-sm font-black uppercase tracking-tight text-white md:text-base">{name}</span>
    </li>
  );
}

export default function WorldLanguages() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      if (!reduce) {
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 72%', once: true } });
        tl.from('[data-w-kicker]', { y: 14, autoAlpha: 0, duration: 0.6, ease: 'expo.out' })
          .from('[data-w-line]', { yPercent: 105, duration: 0.9, stagger: 0.1, ease: 'expo.out' }, 0.05)
          .from('[data-w-copy]', { y: 20, autoAlpha: 0, duration: 0.7, ease: 'expo.out' }, 0.3)
          .from('[data-w-row]', { autoAlpha: 0, x: (i) => (i ? 80 : -80), duration: 1, stagger: 0.1, ease: 'expo.out' }, 0.35)
          .from('[data-w-stat]', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'expo.out' }, 0.6);
        const n = { v: 0 };
        tl.to(n, { v: 19, duration: 1.6, ease: 'power2.out', onUpdate: () => { const t = el.querySelector('[data-w-count]'); if (t) t.textContent = String(Math.round(n.v)); } }, 0.6);
      }

      // Marquees: each row holds its list twice; xPercent -50 is one full loop.
      gsap.utils.toArray<HTMLElement>('[data-w-track]').forEach((track, i) => {
        const dir = i % 2 ? 1 : -1;
        const loop = gsap.fromTo(track, { xPercent: dir < 0 ? 0 : -50 }, { xPercent: dir < 0 ? -50 : 0, duration: 38 + i * 6, ease: 'none', repeat: -1 });
        if (reduce) {
          loop.pause();
          return;
        }
        const row = track.parentElement!;
        let hovering = false;
        // One speed value per row, eased with quickTo (no new tweens per scroll
        // event): scrolling speeds the row up, it settles back once scrolling stops.
        const speed = { v: 1 };
        const toSpeed = gsap.quickTo(speed, 'v', { duration: 0.6, ease: 'power2.out', onUpdate: () => void loop.timeScale(speed.v) });
        const settle = gsap.delayedCall(0.15, () => toSpeed(hovering ? 0 : 1)).pause();
        const st = ScrollTrigger.create({
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          // Rows off screen do not animate at all.
          onToggle: (self) => loop.paused(!self.isActive),
          onUpdate: (self) => {
            if (hovering) return;
            toSpeed(1 + Math.min(1, Math.abs(self.getVelocity()) / 1500) * 3);
            settle.restart(true);
          },
        });
        loop.paused(!st.isActive);
        const enter = () => {
          hovering = true;
          toSpeed(0);
        };
        const leave = () => {
          hovering = false;
          toSpeed(1);
        };
        if (window.matchMedia('(hover: hover)').matches) {
          row.addEventListener('pointerenter', enter);
          row.addEventListener('pointerleave', leave);
        }
        cleanups.push(() => {
          st.kill();
          row.removeEventListener('pointerenter', enter);
          row.removeEventListener('pointerleave', leave);
        });
      });
    }, el);

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden border-t border-white/5 bg-bisa-navy-dark py-20 md:py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-bisa-gold/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-12 xl:px-16">
        <p data-w-kicker className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bisa-gold">
          <span className="h-px w-8 bg-bisa-gold" /> The world trains here <span className="h-px w-8 bg-bisa-gold" />
        </p>
        <h2 className="font-bebas text-[clamp(64px,10vw,140px)] leading-[0.84] text-white">
          <span className="block overflow-hidden">
            <span data-w-line className="block">Everyone</span>
          </span>
          <span className="block overflow-hidden">
            <span data-w-line className="block text-bisa-gold">is welcome</span>
          </span>
        </h2>
        <p data-w-copy className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          USA, Brazil, Morocco, South Africa, Australia, Mexico, Colombia, Ecuador, Honduras, Guatemala and beyond: our pitch is home to athletes from over 19 nations. Soccer is the only language that matters.
        </p>
      </div>

      {/* Flags */}
      <div className="relative z-10 mt-12 space-y-3 md:mt-16 md:space-y-4" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
        {[ROW_A, ROW_B].map((row, i) => (
          <div key={i} data-w-row className="overflow-hidden">
            <ul data-w-track className="flex w-max gap-3 md:gap-4">
              {[...row, ...row].map(([code, name], k) => (
                <Flag key={`${code}-${k}`} code={code} name={name} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="relative z-10 mx-auto mt-14 grid max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 md:mt-16 lg:grid-cols-[auto_1fr] lg:gap-16 lg:px-12 xl:px-16">
        <div className="flex gap-10 border-white/10 lg:border-r lg:pr-16">
          <div data-w-stat>
            <p className="font-bebas text-[64px] leading-none text-bisa-gold">
              <span data-w-count>19</span>+
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/55">Nations on our pitch</p>
          </div>
          <div data-w-stat>
            <p className="font-bebas text-[64px] leading-none text-white">U4–U18</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/55">Age groups</p>
          </div>
        </div>
        <p data-w-stat className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          BISA is built on global experience. Led by Sports Director Paulo, who has coached athletes from over 19 nations, BISA brings a world-class methodology to the Charleston metro area.
        </p>
      </div>
    </section>
  );
}
