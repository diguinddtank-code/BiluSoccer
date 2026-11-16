'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS } from '@/lib/site';

// One template for every program page (Academy Development, Junior Academy,
// Elite, Futsal, Summer Camps). Each page passes its own words; the layout and
// motion live here, in the same language as the new home page: Bebas display
// type, mono labels, hairline rules, volt accents and GSAP that stays calm and
// never pins or hijacks the scroll (the header floats over everything).

export const REGISTER_URL =
  'https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc4MTkwNTQwNXxvL1ZERU5WK3NXeVh6eWFNTFBtdUZIS2pOZUVWM0ZnTmlIdnhocTJHV2pvPQ==';

export interface ProgramData {
  /** Small line above the title, e.g. "U15 to U18 · Professional and college preparation". */
  kicker: string;
  /** First title line (white), optional. */
  titleTop?: string;
  /** Second title line (volt). */
  title: string;
  subtitle: string;
  /** Age range for the ruler on the program file (omit for all ages / seasonal). */
  ages?: { from: number; to: number; label: string };
  /** Label shown instead of the ruler when there is no age range. */
  agesNote?: string;
  ticker: string[];
  overview: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  steps: { num: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  registerLabel: string;
  labels?: Partial<{
    heroCta: string;
    heroCta2: string;
    file: string;
    overview: string;
    features: string;
    globalA: string;
    globalB: string;
    globalDesc: string;
    joinA: string;
    joinB: string;
    faq: string;
    contact: string;
  }>;
  /** Closing call to action (Summer Camps). */
  cta?: { badge: string; title: string; subtitle: string; button: string; micro: string };
}

const DEFAULT_LABELS = {
  heroCta: 'Secure your spot →',
  heroCta2: 'See program details',
  file: 'Program file',
  overview: 'The program',
  features: 'What your child will experience',
  globalA: 'BISA',
  globalB: 'global DNA',
  globalDesc: 'Our methodology draws from the best soccer cultures around the world.',
  joinA: 'Become a',
  joinB: 'champion',
  faq: 'Still have questions?',
  contact: 'Contact us directly at',
};

const FLAGS = ['br', 'us', 'mx', 'co', 'hn', 'gt', 'ec', 'pe', 'pt', 'fr', 'ng', 'ma', 'jp', 'de', 'ar', 'uy', 'cr', 'pa', 'do', 've', 'cu', 'cl', 'gb'];
const regionName = (() => {
  try {
    const dn = new Intl.DisplayNames(['en'], { type: 'region' });
    return (code: string) => dn.of(code.toUpperCase()) ?? code.toUpperCase();
  } catch {
    return (code: string) => code.toUpperCase();
  }
})();

const MIN_AGE = 4;
const MAX_AGE = 18;
const agePct = (a: number) => ((a - MIN_AGE) / (MAX_AGE - MIN_AGE)) * 100;

function Faq({ i, q, a }: { i: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = body.current;
    if (!el) return;
    gsap.to(el, { height: open ? 'auto' : 0, autoAlpha: open ? 1 : 0, duration: 0.45, ease: 'expo.out' });
  }, [open]);
  return (
    <li className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="group flex w-full items-start gap-5 py-6 text-left">
        <span className="mt-1.5 font-mono text-[11px] text-white/35">{String(i + 1).padStart(2, '0')}</span>
        <span className="font-bebas flex-1 text-[26px] leading-tight text-white transition-colors group-hover:text-bisa-gold md:text-[30px]">{q}</span>
        <span className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-white/20 text-bisa-gold transition-transform duration-500 ${open ? 'rotate-45' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div ref={body} className="h-0 overflow-hidden opacity-0">
        <p className="max-w-2xl pb-6 pl-10 text-base leading-relaxed text-white/65">{a}</p>
      </div>
    </li>
  );
}

export default function ProgramPage({ data }: { data: ProgramData }) {
  const root = useRef<HTMLElement>(null);
  const L = { ...DEFAULT_LABELS, ...data.labels };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // Ticker: steady loop that speeds up with the scroll.
      const track = el.querySelector<HTMLElement>('[data-ticker]');
      if (track) {
        const loop = gsap.to(track, { xPercent: -50, duration: 26, ease: 'none', repeat: -1 });
        if (reduce) loop.pause();
        else {
          // One eased speed value (quickTo), no new tweens per scroll event.
          const speed = { v: 1 };
          const toSpeed = gsap.quickTo(speed, 'v', { duration: 0.6, ease: 'power2.out', onUpdate: () => void loop.timeScale(speed.v) });
          const settle = gsap.delayedCall(0.15, () => toSpeed(1)).pause();
          const st = ScrollTrigger.create({
            trigger: track,
            start: 'top bottom',
            end: 'bottom top',
            onToggle: (self) => loop.paused(!self.isActive),
            onUpdate: (self) => {
              toSpeed(1 + Math.min(1, Math.abs(self.getVelocity()) / 1500) * 3);
              settle.restart(true);
            },
          });
          loop.paused(!st.isActive);
          cleanups.push(() => st.kill());
        }
      }
      // Flag rows (Global DNA), opposite directions; paused while off screen.
      gsap.utils.toArray<HTMLElement>('[data-flags]').forEach((row, i) => {
        const loop = gsap.fromTo(row, { xPercent: i ? -50 : 0 }, { xPercent: i ? 0 : -50, duration: 40 + i * 6, ease: 'none', repeat: -1 });
        if (reduce) {
          loop.pause();
          return;
        }
        const st = ScrollTrigger.create({ trigger: row, start: 'top bottom', end: 'bottom top', onToggle: (self) => loop.paused(!self.isActive) });
        loop.paused(!st.isActive);
        cleanups.push(() => st.kill());
      });

      if (reduce) return;

      // Hero: chalk lines draw, title rises, the program file slides in.
      gsap.utils.toArray<SVGGeometryElement>('[data-chalk]').forEach((p) => {
        const l = p.getTotalLength();
        gsap.fromTo(p, { strokeDasharray: l, strokeDashoffset: l }, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut', delay: 0.2 });
      });
      gsap
        .timeline({ delay: 0.15 })
        .from('[data-h-kicker]', { y: 16, autoAlpha: 0, duration: 0.6, ease: 'expo.out' })
        .from('[data-h-line]', { yPercent: 105, duration: 1, stagger: 0.1, ease: 'expo.out' }, 0.05)
        .from('[data-h-sub], [data-h-cta]', { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'expo.out' }, 0.35)
        .from('[data-file]', { x: 40, autoAlpha: 0, duration: 1, ease: 'expo.out' }, 0.3)
        .from('[data-file-row]', { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.07, ease: 'expo.out' }, 0.6)
        .from('[data-age-range]', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.9, ease: 'expo.out' }, 0.7);

      // Section heads and lists reveal as they enter.
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((sec) => {
        gsap.from(sec.querySelectorAll('[data-r]'), { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: sec, start: 'top 80%', once: true } });
      });

      // How to join: the bar loads across the four steps.
      const join = el.querySelector('[data-join]');
      if (join) {
        const steps = join.querySelectorAll('[data-step]');
        const tl = gsap.timeline({ scrollTrigger: { trigger: join, start: 'top 75%', once: true } });
        tl.from(steps, { y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'expo.out' })
          .fromTo(join.querySelectorAll('[data-join-fill]'), { scaleX: 0, scaleY: 0 }, { scaleX: 1, scaleY: 1, duration: 2, ease: 'power2.inOut' }, 0.3)
          .add(() => steps.forEach((s, i) => gsap.delayedCall(i * 0.45, () => s.classList.add('is-on'))), 0.3);
      }
    }, el);

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root} className="program-page bg-bisa-navy-dark text-white selection:bg-bisa-gold selection:text-bisa-navy-dark">
      <style>{`
        .program-page [data-step] .dot { background: transparent; transition: background .4s, box-shadow .4s; }
        .program-page [data-step].is-on .dot { background: var(--color-bisa-gold); box-shadow: 0 0 0 6px rgba(204,255,0,.15); }
        .program-page [data-step] .num { color: rgba(255,255,255,.25); transition: color .4s; }
        .program-page [data-step].is-on .num { color: var(--color-bisa-gold); }
        .program-page .feat:hover .feat-line { transform: scaleX(1); }
      `}</style>

      {/* 1 · Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="2">
            <rect data-chalk x="60" y="60" width="1320" height="780" rx="4" />
            <line data-chalk x1="720" y1="60" x2="720" y2="840" />
            <circle data-chalk cx="720" cy="450" r="120" />
            <rect data-chalk x="60" y="270" width="180" height="360" />
            <rect data-chalk x="1200" y="270" width="180" height="360" />
          </g>
        </svg>
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-bisa-gold/[0.06] blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <p data-h-kicker className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-bisa-gold">
              <span className="h-px w-8 shrink-0 bg-bisa-gold" /> {data.kicker}
            </p>
            <h1 className="font-bebas leading-[0.84]">
              {data.titleTop && (
                <span className="block overflow-hidden">
                  <span data-h-line className="block text-[clamp(72px,11vw,168px)] text-white">{data.titleTop}</span>
                </span>
              )}
              <span className="block overflow-hidden">
                <span data-h-line className="block text-[clamp(72px,11vw,168px)] text-bisa-gold">{data.title}</span>
              </span>
            </h1>
            <p data-h-sub className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">{data.subtitle}</p>
            <div data-h-cta className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-bisa-gold px-8 text-base font-black uppercase tracking-widest text-bisa-navy-dark transition-colors hover:bg-white">
                {L.heroCta}
              </Link>
              <a href="#program" className="inline-flex min-h-[56px] items-center justify-center gap-2 px-2 font-mono text-[12px] uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-bisa-gold">
                {L.heroCta2} <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

          {/* Program file */}
          <aside data-file className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">{L.file}</p>
              <Image src="/brand/crest.png" alt="" width={30} height={32} />
            </div>
            <div className="border-b border-white/10 py-5">
              {data.ages ? (
                <>
                  <div className="flex items-baseline justify-between">
                    <p className="font-bebas text-[44px] leading-none text-white">{data.ages.label}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">Age groups</p>
                  </div>
                  <div className="relative mt-4 h-[6px] rounded-full bg-white/10">
                    <span data-age-range className="absolute top-0 h-full rounded-full bg-bisa-gold" style={{ left: `${agePct(data.ages.from)}%`, width: `${agePct(data.ages.to) - agePct(data.ages.from)}%` }} />
                  </div>
                  <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                    <span>U4</span>
                    <span>U18</span>
                  </div>
                </>
              ) : (
                <p className="font-bebas text-[44px] leading-none text-white">{data.agesNote}</p>
              )}
            </div>
            <ul>
              {data.overview.map((o, i) => (
                <li key={o.title} data-file-row className="flex gap-4 border-b border-white/[0.07] py-4 last:border-0">
                  <span className="mt-1 font-mono text-[11px] text-bisa-gold">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-[15px] font-black uppercase tracking-tight text-white">{o.title}</p>
                    <p className="mt-0.5 text-[14px] leading-snug text-white/55">{o.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 2 · Ticker */}
      <div className="overflow-hidden border-y border-black bg-bisa-gold py-3.5">
        <div data-ticker className="flex w-max">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {[...data.ticker, ...data.ticker].map((t, i) => (
                <span key={i} className="font-bebas flex items-center gap-6 px-6 text-[28px] uppercase tracking-wide text-bisa-navy-dark md:text-[32px]">
                  {t} <span className="text-bisa-navy-dark/30">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3 · Experience */}
      <section id="program" data-reveal className="scroll-mt-28 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p data-r className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bisa-gold">
                <span className="h-px w-8 bg-bisa-gold" /> {L.overview}
              </p>
              <h2 data-r className="font-bebas max-w-3xl text-[clamp(48px,6vw,88px)] leading-[0.88] text-white">{L.features}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <div key={f.title} data-r className="feat relative border-b border-white/10 py-8 sm:pr-8 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n))]:pr-10 lg:[&:nth-child(3n+2)]:pl-10 lg:[&:nth-child(3n)]:pl-10 sm:max-lg:[&:nth-child(odd)]:border-r sm:max-lg:[&:nth-child(even)]:pl-8">
                <span className="feat-line absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-bisa-gold transition-transform duration-500" />
                <p className="font-mono text-[11px] text-white/35">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-bebas mt-3 text-[32px] leading-none text-white">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Global DNA */}
      <section data-reveal className="border-y border-white/5 bg-black/20 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
          <h2 data-r className="font-bebas text-[clamp(44px,5.5vw,76px)] leading-[0.9] text-white">
            {L.globalA} <span className="text-bisa-gold">{L.globalB}</span>
          </h2>
          <p data-r className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">{L.globalDesc}</p>
        </div>
        <div className="mt-10 space-y-3" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
          {[FLAGS.slice(0, 12), FLAGS.slice(12)].map((row, r) => (
            <div key={r} className="overflow-hidden">
              <ul data-flags className="flex w-max gap-3">
                {[...row, ...row, ...row, ...row].map((code, k) => (
                  <li key={`${code}-${k}`} className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-4 pl-1.5">
                    <span className="relative size-8 overflow-hidden rounded-full ring-2 ring-white/80">
                      <Image src={`https://flagcdn.com/w80/${code}.png`} alt="" fill sizes="32px" className="object-cover" unoptimized />
                    </span>
                    <span className="whitespace-nowrap text-[13px] font-black uppercase tracking-tight text-white">{regionName(code)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5 · How to join */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-bebas mb-14 text-[clamp(48px,6vw,88px)] leading-[0.88] text-white">
            {L.joinA} <span className="text-bisa-gold">{L.joinB}</span>
          </h2>
          <div data-join className="relative">
            {/* Desktop rail */}
            <div className="absolute top-[7px] right-0 left-0 hidden h-[2px] bg-white/10 md:block">
              <span data-join-fill className="absolute inset-0 origin-left bg-bisa-gold" />
            </div>
            {/* Phone rail */}
            <div className="absolute top-2 bottom-2 left-[7px] w-[2px] bg-white/10 md:hidden">
              <span data-join-fill className="absolute inset-0 origin-top bg-bisa-gold" />
            </div>
            <ol className="grid grid-cols-1 gap-10 pl-10 md:grid-cols-4 md:gap-8 md:pl-0">
              {data.steps.map((s) => (
                <li key={s.num} data-step className="relative md:pt-10">
                  <span className="dot absolute top-1 -left-10 size-4 rounded-full border-2 border-bisa-gold md:top-0 md:left-0" />
                  <p className="num font-bebas text-[56px] leading-none">{s.num}</p>
                  <h3 className="font-bebas mt-2 text-[28px] leading-none text-white">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-14">
            <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-md bg-bisa-gold px-10 text-lg font-black uppercase tracking-widest text-bisa-navy-dark transition-colors hover:bg-white">
              {data.registerLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* 6 · FAQ */}
      <section data-reveal className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <h2 data-r className="font-bebas text-[clamp(48px,5.5vw,80px)] leading-[0.88] text-white">{L.faq}</h2>
            <p data-r className="mt-5 text-base text-white/60">
              {L.contact}{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-bisa-gold underline-offset-4 hover:underline">
                {BUSINESS.email}
              </a>
            </p>
          </div>
          <ul data-r className="border-t border-white/10">
            {data.faqs.map((f, i) => (
              <Faq key={f.q} i={i} q={f.q} a={f.a} />
            ))}
          </ul>
        </div>
      </section>

      {/* 7 · Closing call (optional) */}
      {data.cta && (
        <section data-reveal className="relative overflow-hidden bg-bisa-gold py-20 text-bisa-navy-dark md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
            <p data-r className="font-mono text-[11px] font-bold uppercase tracking-[0.3em]">{data.cta.badge}</p>
            <h2 data-r className="font-bebas mt-4 text-[clamp(52px,7vw,104px)] leading-[0.88]">{data.cta.title}</h2>
            <p data-r className="mx-auto mt-5 max-w-xl text-lg font-medium text-bisa-navy-dark/75">{data.cta.subtitle}</p>
            <div data-r className="mt-9">
              <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[60px] items-center justify-center rounded-md bg-bisa-navy-dark px-10 text-lg font-black uppercase tracking-widest text-bisa-gold transition-colors hover:bg-black">
                {data.cta.button}
              </Link>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bisa-navy-dark/60">{data.cta.micro}</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
