'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// The Competitive Pathway as a staircase. On desktop the section pins and, as
// you scroll, a ball climbs the stairs (CPL → PMSL → N1L): the line draws
// behind it, each level lights up as the ball lands on it and the readout on
// the left shows the level, stage, age group and description. The pinned stage
// leaves room for the floating header and sizes itself by the screen height.
// On phones (or with reduced motion) it is a vertical ladder whose rail fills.

const LEVELS = [
  {
    code: 'CPL',
    name: 'Coastal Premier League',
    age: 'U9 – U12',
    role: 'Foundation',
    text: 'Where our youth teams build their tactical and technical base.',
  },
  {
    code: 'PMSL',
    name: "President's Medal Soccer League",
    age: 'U13 – U18',
    role: 'Proving ground',
    text: 'The highly competitive league for our advancing academy teams.',
  },
  {
    code: 'N1L',
    name: 'Top-tier regional competition',
    age: 'Elite / Qualified',
    role: 'The summit',
    text: 'As State Champions, our elite squads face the best teams in the country.',
    badge: 'Recently qualified',
  },
];

// Stair path in a 600×520 box: tread, riser, tread, riser, tread.
const STAIR = 'M 10 470 H 200 V 300 H 390 V 130 H 590';
// Where along the path each level's tread begins (lengths 190+170+190+170+200 = 920).
const LANDINGS = [0, 360 / 920, 720 / 920];
// Treads' heights, as a share of the box from the bottom.
const BOTTOMS = [470, 300, 130].map((y) => `${((520 - y) / 520) * 100}%`);

export default function CompetitivePathway() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    // ── Desktop: pinned climb ───────────────────────────────
    mm.add('(min-width: 1024px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(el);
      const steps = q('[data-step]');
      const progress = el.querySelector<SVGPathElement>('[data-progress]')!;
      const track = el.querySelector<SVGPathElement>('[data-track]')!;
      const len = progress.getTotalLength();
      const out = [q('[data-level]')[0], q('[data-role]')[0], q('[data-age]')[0], q('[data-desc]')[0]];
      let shown = -1;
      const show = (i: number) => {
        if (i === shown) return;
        shown = i;
        steps.forEach((s, k) => {
          s.classList.toggle('is-on', k <= i);
          s.classList.toggle('is-now', k === i);
        });
        out[0].textContent = String(i + 1).padStart(2, '0');
        out[1].textContent = LEVELS[i].role;
        out[2].textContent = LEVELS[i].age;
        out[3].textContent = LEVELS[i].text;
        gsap.fromTo(out, { yPercent: 50, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.45, stagger: 0.04, ease: 'expo.out', overwrite: true });
      };

      gsap.set(progress, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(steps, { autoAlpha: 0.18, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: q('[data-stage]')[0],
          start: 'top top',
          end: '+=170%',
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => show(self.progress >= LANDINGS[2] * 0.92 ? 2 : self.progress >= LANDINGS[1] * 0.92 ? 1 : 0),
        },
      });
      tl.to(progress, { strokeDashoffset: 0, duration: 1 }, 0)
        .to(q('[data-ball]')[0], { duration: 1, motionPath: { path: track, align: track, alignOrigin: [0.5, 0.5] } }, 0)
        .to(q('[data-spin]')[0], { rotate: 720, svgOrigin: '0 0', duration: 1 }, 0);
      LEVELS.forEach((_, i) => {
        tl.to(steps[i], { autoAlpha: 1, y: 0, duration: 0.1, ease: 'power2.out' }, Math.max(0, LANDINGS[i] - 0.04));
      });
      show(0);
      return () => steps.forEach((s) => s.classList.remove('is-on', 'is-now'));
    });

    // ── Phones, short screens or reduced motion: vertical ladder ──
    mm.add('(max-width: 1023px), (max-height: 559px), (prefers-reduced-motion: reduce)', () => {
      const q = gsap.utils.selector(el);
      q('[data-step]').forEach((s) => s.classList.add('is-on'));
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.fromTo(q('[data-rail]')[0], { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: q('[data-list]')[0], start: 'top 75%', end: 'bottom 60%', scrub: true } });
      q('[data-list] [data-step]').forEach((s) =>
        gsap.from(s, { x: 30, autoAlpha: 0, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 85%', once: true } }),
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="pathway relative mt-24">
      <style>{`
        .pathway [data-step] .code { color: rgba(255,255,255,.22); transition: color .5s; }
        .pathway [data-step].is-on .code { color: #fff; }
        .pathway [data-step].is-now .code { color: var(--color-bisa-gold); }
        .pathway [data-step] .tread { background: rgba(255,255,255,.12); transition: background .5s; }
        .pathway [data-step].is-on .tread { background: rgba(255,255,255,.55); }
        .pathway [data-step].is-now .tread { background: var(--color-bisa-gold); }
        /* Desktop stage only when the climb runs; otherwise the ladder shows. */
        @media (min-width: 1024px) and (min-height: 560px) {
          .pathway .stairs { display: block; }
          .pathway .ladder { display: none; }
          .pathway .readout { display: block; }
        }
      `}</style>

      {/* The pinned stage: header-safe top padding, content sized by screen height */}
      <div data-stage className="relative lg:flex lg:h-[100svh] lg:items-center lg:pt-[104px] lg:pb-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-12 xl:px-16">
          {/* Left: title + live readout */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/45">
              <span className="h-px w-8 bg-bisa-gold" /> Three levels · one ladder
            </p>
            <h3 className="font-bebas text-[60px] leading-[0.95] text-white sm:text-[80px] lg:text-[clamp(52px,10vh,100px)]">
              The competitive <br className="hidden lg:block" />
              <span className="text-bisa-gold">pathway</span>
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              From foundational leagues to the highest tier of competition, every player has a next step to climb.
            </p>

            <div className="readout mt-[clamp(16px,4vh,40px)] hidden border-t border-white/10 pt-5">
              <div className="flex items-end gap-7">
                <p className="font-bebas flex items-baseline text-[clamp(48px,8vh,76px)] leading-none text-white">
                  <span data-level className="inline-block">01</span>
                  <span className="ml-1 text-[24px] text-white/30">/03</span>
                </p>
                <div className="pb-1.5">
                  <p data-role className="text-lg font-black uppercase tracking-tight text-bisa-gold">{LEVELS[0].role}</p>
                  <p data-age className="font-mono text-sm text-white/70">{LEVELS[0].age}</p>
                </div>
              </div>
              <p data-desc className="mt-3 min-h-[3em] max-w-sm text-[15px] leading-snug text-white/60">{LEVELS[0].text}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to climb ↓</p>
            </div>
          </div>

          {/* Right: staircase (desktop) / ladder (phones) */}
          <div className="relative flex items-center">
            <div className="stairs relative mx-auto hidden aspect-[600/520] w-full max-w-[min(680px,calc((100svh-210px)*600/520))]">
              <svg viewBox="0 0 600 520" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
                <path data-track d={STAIR} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
                <path data-progress d={STAIR} fill="none" stroke="var(--color-bisa-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <g data-ball>
                  <circle r="15" fill="#fff" />
                  <g data-spin>
                    <path d="M0 -6 L5.7 -1.9 L3.5 4.9 L-3.5 4.9 L-5.7 -1.9 Z" fill="#0a1f14" />
                    <path d="M0 -6 V-14 M5.7 -1.9 L13 -4.5 M3.5 4.9 L8 11 M-3.5 4.9 L-8 11 M-5.7 -1.9 L-13 -4.5" stroke="#0a1f14" strokeWidth="1.4" />
                  </g>
                </g>
              </svg>
              {LEVELS.map((l, i) => (
                <div key={l.code} data-step className="absolute w-[30%]" style={{ left: `${[1.7, 33.3, 65][i]}%`, bottom: BOTTOMS[i] }}>
                  <div className="pb-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                      0{i + 1} · {l.age}
                    </p>
                    <p className="code font-bebas mt-1 text-[clamp(44px,min(6vw,10vh),92px)] leading-[0.95]">{l.code}</p>
                    <p className="mt-1.5 text-[11px] font-bold uppercase leading-snug tracking-[0.14em] text-white/70">{l.name}</p>
                    {l.badge && (
                      <span className="mt-2 inline-block rounded-sm bg-bisa-gold px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-bisa-navy-dark">{l.badge}</span>
                    )}
                  </div>
                  <div className="tread h-[3px] w-full" />
                </div>
              ))}
            </div>

            <ol data-list className="ladder relative w-full space-y-10 pl-8">
              <span className="absolute top-2 bottom-2 left-[5px] w-px bg-white/10" />
              <span data-rail className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-bisa-gold" />
              {LEVELS.map((l, i) => (
                <li key={l.code} data-step className="relative">
                  <span className="absolute top-3 -left-8 size-[11px] rounded-full border-2 border-bisa-gold bg-bisa-navy-dark" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                    0{i + 1} · {l.role} · {l.age}
                  </p>
                  <p className="code font-bebas mt-1 text-[64px] leading-[0.95]">{l.code}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">{l.name}</p>
                  <p className="mt-2 text-[15px] leading-snug text-white/55">{l.text}</p>
                  {l.badge && (
                    <span className="mt-3 inline-block rounded-sm bg-bisa-gold px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-bisa-navy-dark">{l.badge}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
