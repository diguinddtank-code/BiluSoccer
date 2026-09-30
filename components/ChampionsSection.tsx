'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './champions-section.css';

const FLAG_SRC = '/champions/us-flag.svg';
const LOGO_SRC = '/champions/presidents-cup.png';
const FLAG_SLICES = 22;

export default function ChampionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    gsap.registerPlugin(ScrollTrigger);
    sec.classList.add('is-animated');

    const ctx = gsap.context(() => {
      const logo = sec.querySelector<HTMLElement>('.champ-logo');
      const big = sec.querySelector<HTMLElement>('.champ-big');

      // slow zoom on the background image while scrolling
      gsap.fromTo('.champ-img', { scale: 1.18 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // entrance timeline
      const kls = sec.querySelectorAll('.champ-kicker .kl');
      const kick = sec.querySelectorAll('.champ-kicker .kt, .champ-kicker .us-flag');
      gsap.set(logo, { opacity: 0, y: 30, scale: 0.86, filter: 'blur(10px)' });
      gsap.set(kls, { scaleX: 0 });
      if (kls[0]) gsap.set(kls[0], { transformOrigin: '100% 50%' });
      if (kls[1]) gsap.set(kls[1], { transformOrigin: '0% 50%' });
      gsap.set(kick, { opacity: 0, y: 10 });
      gsap.set(big, { clipPath: 'inset(0 50% 0 50%)', scale: 1.08 });

      const tl = gsap.timeline({ paused: true });
      tl.to(logo, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' })
        .add(() => logo?.classList.add('shine'), 0.9)
        .to(kls, { scaleX: 1, duration: 0.8, ease: 'power3.out' }, 0.5)
        .to(kick, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, 0.6)
        .to(big, { clipPath: 'inset(0 0% 0 0%)', scale: 1, duration: 1.2, ease: 'power4.out' }, 0.8)
        .to('.champ-h2 .lh > span', { y: 0, duration: 1, ease: 'power4.out' }, 1.3)
        .add(() => big?.classList.add('shine'), 2);

      ScrollTrigger.create({ trigger: sec, start: 'top 45%', once: true, onEnter: () => { tl.play(); } });
    }, sec);

    return () => {
      ctx.revert();
      sec.classList.remove('is-animated');
    };
  }, []);

  return (
    <section ref={sectionRef} className="champ">
      <div className="champ-media">
        <Image
          className="champ-img"
          src="/champions/champions.png"
          alt="BISA — U15 Presidents Cup State Champions"
          fill
          sizes="100vw"
        />
      </div>
      <div className="champ-ov" />
      <div className="champ-rays" aria-hidden="true" />
      <div className="champ-content">
        <div className="champ-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC} alt="US Youth Soccer Presidents Cup" />
          {/* glint masked to the logo shape */}
          <span
            className="glint"
            aria-hidden="true"
            style={{ WebkitMaskImage: `url("${LOGO_SRC}")`, maskImage: `url("${LOGO_SRC}")` }}
          />
        </div>
        <div className="champ-kicker">
          <span className="kl" />
          {/* waving flag: the image is split into vertical slices */}
          <span className="us-flag" role="img" aria-label="United States flag">
            {Array.from({ length: FLAG_SLICES }, (_, k) => (
              <i
                key={k}
                style={{
                  backgroundImage: `url("${FLAG_SRC}")`,
                  backgroundSize: `${FLAG_SLICES * 100}% 100%`,
                  backgroundPosition: `${(k / (FLAG_SLICES - 1)) * 100}% 0`,
                  animationDelay: `${-k * 0.09}s`,
                  ['--a' as string]: `${(0.4 + (k / (FLAG_SLICES - 1)) * 2.8).toFixed(2)}px`,
                }}
              />
            ))}
          </span>
          <span className="kt">U15</span>
          <span className="kl" />
        </div>
        <div className="champ-big">State Champions</div>
        <h2 className="champ-h2">
          <span className="lh"><span>The Next Generation Is Already <em>Winning.</em></span></span>
        </h2>
      </div>
    </section>
  );
}
