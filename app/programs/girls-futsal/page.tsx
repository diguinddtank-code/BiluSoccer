'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { GF, GF_COPY } from '@/lib/girls-futsal';

// Girls Futsal / Fútbol de las Niñas. Collage look from the Las Niñas campaign
// (pink, BISA blue, yellow details, off-white paper, tilted stickers, tape)
// with GSAP: words land one by one, stickers slap in with a little rotation,
// cards pop with overshoot and the cut-out girls float and drift with scroll.

const PINK = '#EC0B63';
const BLUE = '#1F46B8';
const NAVY = '#1D2A5C';
const YELLOW = '#F5C400';
const PAPER = '#F4F0E6';
const SKY = '#7FD3F5';

const head = 'font-[family-name:var(--font-anton)] uppercase leading-[0.95] tracking-[0.005em]';
const body = 'font-[family-name:var(--font-mont)]';

function Tape({ color, className = '', rotate = -4 }: { color: string; className?: string; rotate?: number }) {
  return <span aria-hidden className={`absolute block h-7 w-24 opacity-90 ${className}`} style={{ background: color, transform: `rotate(${rotate}deg)`, boxShadow: '0 2px 6px rgba(0,0,0,.12)', maskImage: 'linear-gradient(90deg, transparent 0 3%, #000 3% 97%, transparent 97%)' }} />;
}

function Sticker({ children, bg, fg = '#fff', rotate, className = '' }: { children: React.ReactNode; bg: string; fg?: string; rotate: number; className?: string }) {
  return (
    <span data-slap data-rot={rotate} className={`absolute z-20 ${className.includes("hidden") ? "" : "inline-block"} rounded-xl px-4 py-2 text-[13px] font-extrabold uppercase tracking-wide shadow-[0_8px_20px_rgba(29,42,92,.25)] ring-2 ring-white md:text-[15px] ${body} ${className}`} style={{ background: bg, color: fg, transform: `rotate(${rotate}deg)` }}>
      {children}
    </span>
  );
}

/** The motto's beat, drawn: a futsal ball bounces with cartoon physics
 * (squash on impact, stretch in the air, a breathing shadow, impact strokes).
 * Each bounce slaps a sticker beside it (Kick / Pass / High five / Smile) and
 * pulses the matching pill on the left. Runs only while on screen. */
function BounceBall({ words }: { words: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const q = gsap.utils.selector(el);
    const chips = gsap.utils.toArray<HTMLElement>('[data-chip]');
    const ctx = gsap.context(() => {
      const ball = q('[data-b-ball]')[0];
      const bodyEl = q('[data-b-body]')[0];
      const shadow = q('[data-b-shadow]')[0];
      const stickers = q('[data-b-sticker]');
      const bursts = q('[data-b-burst]');
      gsap.set(stickers, { autoAlpha: 0, scale: 0.4 });
      gsap.set(bursts, { autoAlpha: 0 });
      gsap.set(bodyEl, { svgOrigin: '200 372' });
      gsap.set(shadow, { svgOrigin: '200 372' });
      gsap.set(bursts, { svgOrigin: '200 372' });

      const UP = 0.42;
      const DOWN = 0.36;
      const BEAT = UP + DOWN + 0.16;
      const tl = gsap.timeline({ repeat: -1, paused: true });
      words.forEach((_, i) => {
        const t = i * BEAT;
        const land = t + UP + DOWN;
        // rise (stretch), fall, squash on the floor, recover
        tl.to(ball, { y: -170, duration: UP, ease: 'power2.out' }, t)
          .fromTo(bodyEl, { scaleX: 0.86, scaleY: 1.16 }, { scaleX: 1, scaleY: 1, duration: UP, ease: 'power2.out' }, t)
          .to(shadow, { scale: 0.45, opacity: 0.25, duration: UP, ease: 'power2.out' }, t)
          .to(ball, { y: 0, duration: DOWN, ease: 'power2.in' }, t + UP)
          .to(bodyEl, { scaleX: 0.9, scaleY: 1.1, duration: DOWN, ease: 'power2.in' }, t + UP)
          .to(shadow, { scale: 1, opacity: 0.55, duration: DOWN, ease: 'power2.in' }, t + UP)
          .to(bodyEl, { scaleX: 1.22, scaleY: 0.78, duration: 0.07, ease: 'power1.out' }, land)
          .to(bodyEl, { scaleX: 1, scaleY: 1, duration: 0.32, ease: 'elastic.out(1, 0.4)' }, land + 0.07)
          .fromTo(bursts, { autoAlpha: 1, scale: 0.6 }, { autoAlpha: 0, scale: 1.4, duration: 0.35, ease: 'power2.out' }, land)
          // this beat's sticker slaps in, the previous one leaves
          .to(stickers, { autoAlpha: 0, scale: 0.6, duration: 0.15 }, land - 0.05)
          .fromTo(stickers[i], { autoAlpha: 0, scale: 1.9, rotate: i % 2 ? 22 : -22 }, { autoAlpha: 1, scale: 1, rotate: i % 2 ? 7 : -7, duration: 0.4, ease: 'back.out(2.6)' }, land);
        if (chips[i]) tl.fromTo(chips[i], { scale: 1 }, { scale: 1.14, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' }, land);
      });
      // the ball keeps spinning through the whole loop
      tl.to(q('[data-b-spin]')[0], { rotate: 360 * words.length, transformOrigin: '50% 50%', duration: tl.duration(), ease: 'none' }, 0);
      const st = ScrollTrigger.create({ trigger: el, start: 'top bottom', end: 'bottom top', onToggle: (self) => (self.isActive ? tl.play() : tl.pause()) });
      return () => st.kill();
    }, el);
    return () => ctx.revert();
  }, [words]);

  // pentagon points for the ball panels
  const pent = (cx: number, cy: number, r: number, rot = -90) =>
    Array.from({ length: 5 }, (_, k) => {
      const a = ((rot + k * 72) * Math.PI) / 180;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ');

  const spots = [
    { left: '0%', top: '12%' },
    { right: '0%', top: '6%' },
    { left: '0%', top: '48%' },
    { right: '0%', top: '44%' },
  ];

  return (
    <div ref={ref} className="relative mx-auto aspect-[10/11] w-full max-w-[300px] md:max-w-[440px]" aria-hidden>
      {/* backdrop: a tilted pink card with a dashed edge, like the stickers */}
      <div className="absolute inset-[8%] -rotate-6 rounded-[36px]" style={{ background: PINK }} />
      <div className="absolute inset-[11%] -rotate-6 rounded-[30px] border-2 border-dashed border-white/40" />
      <div className="absolute inset-[18%] rotate-3 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,.2), transparent 65%)' }} />

      <svg viewBox="0 0 400 440" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <radialGradient id="gf-ball-shade" cx="35%" cy="30%" r="80%">
            <stop offset="55%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#1D2A5C" stopOpacity=".35" />
          </radialGradient>
          <clipPath id="gf-ball-clip">
            <circle cx="200" cy="300" r="70" />
          </clipPath>
        </defs>
        {/* floor shadow */}
        <ellipse data-b-shadow cx="200" cy="372" rx="70" ry="13" fill="#0b1336" opacity=".55" />
        {/* impact strokes */}
        <g data-b-burst stroke="#fff" strokeWidth="6" strokeLinecap="round">
          <line x1="112" y1="366" x2="88" y2="352" />
          <line x1="128" y1="350" x2="114" y2="326" />
          <line x1="288" y1="366" x2="312" y2="352" />
          <line x1="272" y1="350" x2="286" y2="326" />
        </g>
        {/* the ball */}
        <g data-b-ball>
          <g data-b-body>
            <circle cx="200" cy="300" r="72" fill="#fff" stroke={NAVY} strokeWidth="5" />
            <g clipPath="url(#gf-ball-clip)">
              <g transform="translate(200 300)">
                <g data-b-spin>
                  <polygon points={pent(0, 0, 24)} fill={PINK} stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
                  {[0, 1, 2, 3, 4].map((k) => {
                    const a = ((-90 + 36 + k * 72) * Math.PI) / 180;
                    return <polygon key={k} points={pent(Math.cos(a) * 62, Math.sin(a) * 62, 24, -90 + 36 + k * 72 + 180)} fill={k % 2 ? YELLOW : PINK} stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />;
                  })}
                  {[0, 1, 2, 3, 4].map((k) => {
                    const a1 = ((-90 + k * 72) * Math.PI) / 180;
                    const a2 = ((-90 + 36 + k * 72) * Math.PI) / 180;
                    return <line key={k} x1={Math.cos(a1) * 24} y1={Math.sin(a1) * 24} x2={Math.cos(a2) * 42} y2={Math.sin(a2) * 42} stroke={NAVY} strokeWidth="3" />;
                  })}
                </g>
              </g>
              <circle cx="200" cy="300" r="70" fill="url(#gf-ball-shade)" />
            </g>
            <ellipse cx="174" cy="266" rx="16" ry="9" fill="#fff" opacity=".75" transform="rotate(-30 174 266)" />
          </g>
        </g>
      </svg>

      {/* beat stickers */}
      {words.map((w, i) => (
        <span
          key={w}
          data-b-sticker
          className={`absolute z-10 whitespace-nowrap rounded-xl px-4 py-2 text-[15px] font-extrabold uppercase tracking-wide shadow-[0_10px_22px_rgba(0,0,0,.3)] ring-2 ring-white md:text-[18px] ${body}`}
          style={{ ...spots[i % 4], background: [YELLOW, SKY, '#fff', YELLOW][i % 4], color: i === 2 ? PINK : NAVY }}
        >
          {w}!
        </span>
      ))}
    </div>
  );
}

export default function GirlsFutsalPage() {
  const { language } = useLanguage();
  const c = GF_COPY[language] ?? GF_COPY.en;
  const root = useRef<HTMLElement>(null);
  // Google's keyless embed endpoint (the ?output=embed form redirects here).
  const map = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${encodeURIComponent(GF.mapQuery).replace(/%20/g, '+')}!6i15`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GF.mapQuery)}`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      // Stickers: slap in with a little extra rotation, then settle.
      const slap = (targets: Element[], trigger?: Element, delay = 0) =>
        gsap.from(targets, {
          scale: 1.9,
          autoAlpha: 0,
          rotate: (_, t) => Number((t as HTMLElement).dataset.rot ?? 0) + (Math.random() > 0.5 ? 14 : -14),
          duration: 0.55,
          stagger: 0.12,
          ease: 'back.out(2.6)',
          delay,
          ...(trigger ? { scrollTrigger: { trigger, start: 'top 75%', once: true } } : {}),
        });

      // Hero
      const hero = el.querySelector('[data-hero]')!;
      gsap
        .timeline({ delay: 0.1 })
        .from('[data-logo]', { scale: 0.3, rotate: -18, autoAlpha: 0, duration: 0.7, ease: 'back.out(2.2)' })
        .from('[data-badge]', { y: 16, autoAlpha: 0, duration: 0.5, ease: 'expo.out' }, 0.2)
        .from('[data-hero-word]', { yPercent: 110, rotate: 6, duration: 0.7, stagger: 0.12, ease: 'back.out(1.8)' }, 0.25)
        .from('[data-alt]', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.5, ease: 'expo.out' }, 0.6)
        .from('[data-hero-copy] > *', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'expo.out' }, 0.65)
        .from('[data-hero-block]', { scale: 0.85, rotate: 6, autoAlpha: 0, duration: 0.8, ease: 'back.out(1.6)' }, 0.3)
        .from('[data-hero-girls]', { y: 80, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.4)' }, 0.5);
      slap(gsap.utils.toArray(hero.querySelectorAll('[data-slap]')), undefined, 1.1);

      // Cut-outs: gentle float, and drift with the scroll.
      gsap.utils.toArray<HTMLElement>('[data-float]').forEach((g, i) => {
        gsap.to(g, { y: -10, duration: 2 + i * 0.3, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
      gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((g) => {
        const amt = Number(g.dataset.drift) || 60;
        gsap.fromTo(g, { y: amt }, { y: -amt, ease: 'none', scrollTrigger: { trigger: g.closest('section'), start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      // Motto: words land one at a time; the runner crosses the band.
      const motto = el.querySelector('[data-motto]')!;
      gsap
        .timeline({ scrollTrigger: { trigger: motto, start: 'top 70%', once: true } })
        .from('[data-motto-word]', { yPercent: 120, rotate: -8, autoAlpha: 0, duration: 0.6, stagger: 0.18, ease: 'back.out(2)' })
        .from('[data-motto-sub] > span', { scale: 0.4, autoAlpha: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(3)' }, 0.6);

      // Why: cards pop with overshoot.
      const why = el.querySelector('[data-why]')!;
      gsap.from('[data-why-head] > *', { y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: why, start: 'top 75%', once: true } });
      gsap.from('[data-card]', { scale: 0.55, y: 50, autoAlpha: 0, rotate: (i) => (i % 2 ? 8 : -8), duration: 0.7, stagger: 0.12, ease: 'back.out(1.9)', scrollTrigger: { trigger: why, start: 'top 65%', once: true } });

      // Gallery: photos drop in like they were taped up, stickers slap.
      const gal = el.querySelector('[data-gallery]')!;
      gsap.from('[data-photo]', { y: -60, rotate: (i) => (i % 2 ? 10 : -10), autoAlpha: 0, duration: 0.8, stagger: 0.14, ease: 'back.out(1.7)', scrollTrigger: { trigger: gal, start: 'top 70%', once: true } });
      slap(gsap.utils.toArray(gal.querySelectorAll('[data-slap]')), gal, 0.5);
      gsap.from('[data-gal-head] > *', { y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: gal, start: 'top 75%', once: true } });

      // When & where
      const when = el.querySelector('[data-when]')!;
      gsap
        .timeline({ scrollTrigger: { trigger: when, start: 'top 70%', once: true } })
        .from('[data-when-item]', { x: -40, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'expo.out' })
        .from('[data-map]', { rotate: 8, scale: 0.85, autoAlpha: 0, duration: 0.8, ease: 'back.out(1.6)' }, 0.2);

      // Final call
      const fin = el.querySelector('[data-final]')!;
      gsap
        .timeline({ scrollTrigger: { trigger: fin, start: 'top 70%', once: true } })
        .from('[data-final-word]', { yPercent: 110, autoAlpha: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(2)' })
        .from('[data-final-copy] > *', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'expo.out' }, 0.4)
        .from('[data-final-girls]', { x: 120, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.5)' }, 0.2);
      slap(gsap.utils.toArray(fin.querySelectorAll('[data-slap]')), fin, 0.7);
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className={`overflow-x-clip ${body}`} style={{ background: PAPER, color: NAVY }}>
      {/* 1 · Hero */}
      <section data-hero className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div aria-hidden className="absolute -right-[20%] top-[38%] h-40 w-[140%] -rotate-[8deg] md:h-56" style={{ background: `repeating-linear-gradient(90deg, ${PINK} 0 60px, #f2357d 60px 120px)`, opacity: 0.12 }} />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <div data-logo className="mb-6 w-[220px] md:w-[280px]">
              <Image src="/girls-futsal/logo-las-ninas.webp" alt="Día de las Niñas" width={616} height={298} priority className="h-auto w-full drop-shadow-[0_8px_18px_rgba(29,42,92,.25)]" />
            </div>
            <p data-badge className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-wider text-white" style={{ background: NAVY }}>
              <span className="size-2 rounded-full" style={{ background: PINK }} /> {c.badge}
            </p>
            <h1 className={`${head} text-[clamp(84px,13vw,190px)]`}>
              <span className="block overflow-hidden pt-[0.12em] pb-1 -mt-[0.06em]">
                <span data-hero-word className="block" style={{ color: NAVY }}>{c.title1}</span>
              </span>
              <span className="block overflow-hidden pt-[0.12em] pb-1 -mt-[0.06em]">
                <span data-hero-word className="block" style={{ color: PINK }}>{c.title2}</span>
              </span>
            </h1>
            <p data-alt className={`${head} mt-3 inline-block -rotate-2 px-4 py-1.5 text-[26px] md:text-[34px]`} style={{ background: YELLOW, color: NAVY }}>
              {c.alt}
            </p>
            <div data-hero-copy>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed font-semibold text-[#1D2A5C]/80 md:text-lg">{c.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#free" className="inline-flex min-h-[56px] items-center justify-center rounded-full px-8 text-[15px] font-extrabold uppercase tracking-wider text-white shadow-[0_10px_24px_rgba(236,11,99,.35)] transition-transform hover:-translate-y-0.5" style={{ background: PINK }}>
                  {c.ctaFree} →
                </a>
                <a href="#when" className="inline-flex min-h-[56px] items-center justify-center rounded-full border-2 px-8 text-[15px] font-extrabold uppercase tracking-wider transition-colors hover:bg-[#1D2A5C] hover:text-white" style={{ borderColor: NAVY, color: NAVY }}>
                  {c.ctaSchedule}
                </a>
              </div>
            </div>
          </div>

          {/* Color block with the girls breaking out of it */}
          <div className="relative mx-auto mt-6 w-full max-w-[560px] lg:mt-0">
            <div data-hero-block className="relative aspect-[5/4] -rotate-3 rounded-[28px]" style={{ background: PINK }}>
              <div aria-hidden className="absolute inset-3 rounded-[22px] border-2 border-dashed border-white/40" />
              <Tape color={SKY} className="-top-3 left-8" rotate={-6} />
              <Tape color={YELLOW} className="-bottom-3 right-10" rotate={5} />
            </div>
            <div data-hero-girls className="absolute inset-x-[-6%] bottom-[2%] z-10">
              <div data-float>
                <Image src="/girls-futsal/trio-cut2.webp" alt="Three girls in futsal kits, smiling" width={967} height={730} priority sizes="(max-width: 1024px) 90vw, 600px" className="h-auto w-full drop-shadow-[0_18px_24px_rgba(29,42,92,.35)]" />
              </div>
            </div>
            <Sticker bg={YELLOW} fg={NAVY} rotate={-8} className="-top-4 left-0 md:-left-6">{c.heroStickers[0]}</Sticker>
            <Sticker bg={BLUE} rotate={7} className="top-[38%] -right-2 md:-right-8">{c.heroStickers[1]}</Sticker>
            <Sticker bg="#fff" fg={PINK} rotate={-5} className="-bottom-6 left-[12%]">{c.heroStickers[2]}</Sticker>
          </div>
        </div>
      </section>

      {/* 2 · Motto */}
      <section data-motto className="relative overflow-hidden py-24 text-white md:py-32" style={{ background: NAVY }}>
        <div aria-hidden className="absolute -left-[10%] top-0 h-full w-[30%] -skew-x-12" style={{ background: BLUE, opacity: 0.5 }} />
        <div aria-hidden className="absolute -right-[5%] bottom-0 h-3 w-[60%] -rotate-3" style={{ background: PINK }} />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div>
          <h2 className={`${head} text-[clamp(56px,9vw,140px)]`}>
            {c.motto.map((w, i) => (
              <span key={i} className="block overflow-hidden pt-[0.12em] pb-1 -mt-[0.06em]">
                <span data-motto-word className="block" style={{ color: [ '#fff', YELLOW, PINK ][i] }}>{w}</span>
              </span>
            ))}
          </h2>
          <p data-motto-sub className="mt-8 flex flex-wrap gap-3 text-[15px] font-extrabold uppercase tracking-wider md:text-lg">
            {c.mottoSub.split('. ').map((w, i, a) => (
              <span key={i} data-chip className="inline-block rounded-full px-4 py-2" style={{ background: ['#fff', SKY, YELLOW, PINK][i % 4], color: i === 3 ? '#fff' : NAVY, transform: `rotate(${i % 2 ? 3 : -3}deg)` }}>
                {w}
                {i < a.length - 1 ? '.' : ''}
              </span>
            ))}
          </p>
          </div>
          <BounceBall words={c.mottoSub.replace(/\.$/, '').split('. ')} />
        </div>
      </section>

      {/* 3 · Why she'll love it */}
      <section data-why className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div data-why-head className="max-w-2xl">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em]" style={{ color: PINK }}>{c.whyKicker}</p>
            <h2 className={`${head} mt-3 text-[clamp(48px,7vw,104px)]`}>{c.whyTitle}</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.why.map((w, i) => {
              const bg = [PINK, BLUE, YELLOW, '#fff'][i];
              const fg = i === 2 || i === 3 ? NAVY : '#fff';
              return (
                <div key={w.title} data-card className="relative rounded-[22px] p-7 pt-9 shadow-[0_16px_34px_-14px_rgba(29,42,92,.45)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1" style={{ background: bg, color: fg, transform: `rotate(${[-2, 1.5, -1, 2][i]}deg)` }}>
                  <Tape color={[YELLOW, PINK, SKY, PINK][i]} className="-top-3 left-1/2 -translate-x-1/2" rotate={[-4, 3, -2, 5][i]} />
                  <p className={`${head} absolute top-5 right-6 text-[44px] opacity-25`}>0{i + 1}</p>
                  <h3 className={`${head} mt-6 pr-12 text-[30px] !leading-[0.95]`}>{w.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed font-semibold">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · Gallery collage */}
      <section data-gallery className="relative overflow-hidden py-24 text-white md:py-32" style={{ background: PINK }}>
        <div aria-hidden className="absolute -left-[10%] top-[18%] h-24 w-[130%] rotate-[4deg]" style={{ background: `repeating-linear-gradient(90deg, ${YELLOW} 0 40px, transparent 40px 80px)`, opacity: 0.25 }} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div data-gal-head className="max-w-xl">
            <h2 className={`${head} text-[clamp(52px,8vw,120px)]`}>{c.galleryTitle}</h2>
            <p className="mt-4 text-[17px] font-semibold text-white">{c.gallerySub}</p>
          </div>

          {/* Phones: stickers in a row (no overlap with the photos) */}
          <div className="mt-8 flex flex-wrap gap-3 md:hidden">
            {c.galleryStickers.map((t, i) => (
              <span key={t} className={`rounded-xl px-4 py-2 text-[13px] font-extrabold uppercase tracking-wide shadow-md ring-2 ring-white ${body}`} style={{ background: [YELLOW, NAVY, '#fff'][i], color: [NAVY, '#fff', PINK][i], transform: `rotate(${[-4, 3, -2][i]}deg)` }}>
                {t}
              </span>
            ))}
          </div>

          <div className="relative mt-10 grid grid-cols-1 items-center gap-12 md:mt-14 md:grid-cols-12 md:gap-8">
            <figure data-photo className="relative md:col-span-7">
              <div className="rotate-[-2deg] rounded-md bg-white p-3 pb-10 shadow-[0_24px_40px_-16px_rgba(0,0,0,.45)]">
                <Image src="/girls-futsal/pass.webp" alt="Two girls passing a futsal ball on an indoor court" width={1150} height={660} sizes="(max-width: 768px) 100vw, 60vw" className="h-auto w-full rounded-sm" />
              </div>
              <Tape color={SKY} className="-top-3 left-10" rotate={-8} />
              <Tape color={YELLOW} className="-top-3 right-12" rotate={6} />
            </figure>
            <figure data-photo className="relative md:col-span-5">
              <div className="rotate-[3deg] rounded-md bg-white p-3 pb-10 shadow-[0_24px_40px_-16px_rgba(0,0,0,.45)]">
                <div className="relative overflow-hidden rounded-sm pt-6" style={{ background: YELLOW }}>
                  <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: `repeating-linear-gradient(135deg, transparent 0 18px, #fff 18px 22px)` }} />
                  <Image src="/girls-futsal/highfive-cut2.webp" alt="Two girls giving a high five" width={1000} height={821} sizes="(max-width: 768px) 100vw, 40vw" className="relative h-auto w-full" />
                </div>
              </div>
              <Tape color={BLUE} className="-top-3 left-1/2 -translate-x-1/2" rotate={2} />
            </figure>
            <Sticker bg={YELLOW} fg={NAVY} rotate={-10} className="hidden md:inline-block md:-top-6 md:left-[50%]">{c.galleryStickers[0]}</Sticker>
            <Sticker bg={NAVY} rotate={8} className="hidden md:inline-block md:right-[1%] md:-bottom-6">{c.galleryStickers[1]}</Sticker>
            <Sticker bg="#fff" fg={PINK} rotate={-6} className="hidden md:inline-block md:-bottom-6 md:left-[3%]">{c.galleryStickers[2]}</Sticker>
          </div>
        </div>
      </section>

      {/* 5 · When & where */}
      <section id="when" data-when className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p data-when-item className="text-[13px] font-extrabold uppercase tracking-[0.2em]" style={{ color: PINK }}>{c.whenKicker}</p>
            <h2 data-when-item className={`${head} mt-3 text-[clamp(48px,6.5vw,96px)]`}>{c.whenTitle}</h2>
            <div className="mt-10 space-y-6">
              <div data-when-item className="flex items-end gap-4">
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#1D2A5C]/80">{c.dayLabel}</p>
                  <p className={`${head} text-[64px]`} style={{ color: NAVY }}>{c.day}</p>
                </div>
                <span className={`${head} mb-2 -rotate-2 px-3 py-1 text-[26px]`} style={{ background: YELLOW }}>{c.time}</span>
              </div>
              <div data-when-item className="border-t-2 border-dashed pt-5" style={{ borderColor: 'rgba(29,42,92,.2)' }}>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#1D2A5C]/80">{c.startLabel}</p>
                <p className={`${head} mt-1 text-[34px]`} style={{ color: PINK }}>{c.start}</p>
              </div>
              <div data-when-item className="border-t-2 border-dashed pt-5" style={{ borderColor: 'rgba(29,42,92,.2)' }}>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#1D2A5C]/80">{c.whereLabel}</p>
                <p className={`${head} mt-1 text-[34px]`}>{GF.venue}</p>
                <p className="mt-1 text-[16px] font-semibold text-[#1D2A5C]/85">{GF.address}</p>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[14px] font-extrabold uppercase tracking-wider underline-offset-4 hover:underline" style={{ color: BLUE }}>
                  {c.openMap} ↗
                </a>
              </div>
            </div>
          </div>
          <div data-map className="relative">
            <div className="rotate-[2deg] rounded-md bg-white p-3 shadow-[0_24px_40px_-16px_rgba(29,42,92,.45)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                {/* Shown until (or if) the Google map loads on top of it */}
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center" style={{ background: `linear-gradient(#e9eef8 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, #e9eef8 1px, transparent 1px) 0 0 / 28px 28px, #f7f9fd` }}>
                  <svg width="40" height="52" viewBox="0 0 40 52" aria-hidden>
                    <path d="M20 0C9 0 0 9 0 20c0 15 20 32 20 32s20-17 20-32C40 9 31 0 20 0z" fill={PINK} />
                    <circle cx="20" cy="20" r="7" fill="#fff" />
                  </svg>
                  <span className={`${head} text-[26px]`} style={{ color: NAVY }}>{GF.venue}</span>
                  <span className="text-[14px] font-semibold text-[#1D2A5C]/85">{GF.address}</span>
                  <span className="mt-1 text-[13px] font-extrabold uppercase tracking-wider" style={{ color: BLUE }}>{c.openMap} ↗</span>
                </a>
                <iframe title={`${GF.venue}, ${GF.address}`} src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" />
              </div>
            </div>
            <Tape color={PINK} className="-top-3 left-10" rotate={-6} />
            <Tape color={SKY} className="-top-3 right-10" rotate={5} />
          </div>
        </div>
      </section>

      {/* 6 · First session free */}
      <section id="free" data-final className="relative scroll-mt-24 overflow-hidden py-24 text-white md:py-32" style={{ background: PINK }}>
        <div aria-hidden className="absolute inset-y-0 right-0 w-[45%] skew-x-[-10deg] translate-x-16" style={{ background: BLUE }} />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="relative">
            <Sticker bg={YELLOW} fg={NAVY} rotate={-8} className="-top-10 left-0">{c.finalBadge}</Sticker>
            <h2 className={`${head} text-[clamp(64px,10vw,150px)]`}>
              {c.finalTitle.split(' ').map((w, i) => (
                <span key={i} className="mr-[0.18em] inline-block overflow-hidden pt-[0.12em] pb-1 -mt-[0.06em] align-bottom">
                  <span data-final-word className="inline-block">{w}</span>
                </span>
              ))}
            </h2>
            <div data-final-copy>
              <p className="mt-5 max-w-lg text-[18px] font-semibold text-white">{c.finalText}</p>
              <a href={GF.tel} className={`${head} mt-7 block text-[clamp(44px,6vw,80px)] text-white transition-colors hover:text-[#F5C400]`}>
                {GF.phone}
              </a>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={GF.tel} className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-extrabold uppercase tracking-wider shadow-[0_10px_24px_rgba(0,0,0,.2)] transition-transform hover:-translate-y-0.5" style={{ color: PINK }}>
                  {c.call} · {GF.phone}
                </a>
                <a href={GF.sms} className="inline-flex min-h-[56px] items-center justify-center rounded-full px-8 text-[15px] font-extrabold uppercase tracking-wider text-white ring-2 ring-white transition-colors hover:bg-white/10" style={{ background: NAVY }}>
                  {c.text}
                </a>
              </div>
              <p className="mt-6 text-[13px] font-bold uppercase tracking-wider text-white">{c.finalNote}</p>
            </div>
          </div>
          <div data-final-girls className="relative">
            <div data-float>
              <Image src="/girls-futsal/run-cut2.webp" alt="Two girls running on a futsal court" width={544} height={519} sizes="(max-width: 1024px) 90vw, 520px" className="h-auto w-full drop-shadow-[0_20px_26px_rgba(0,0,0,.35)]" />
            </div>
            <div className="absolute -bottom-4 left-4 w-[150px] rotate-[-6deg] md:w-[190px]">
              <Image src="/girls-futsal/logo-las-ninas.webp" alt="" width={616} height={298} className="h-auto w-full drop-shadow-[0_8px_18px_rgba(0,0,0,.3)]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
