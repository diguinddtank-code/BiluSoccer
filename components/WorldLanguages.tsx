'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import Image from 'next/image';

// Componente de Contador Animado
function Counter({from, to, duration = 2}: {from: number; to: number; duration?: number}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '0px'});
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

// Hook de Revelação no Scroll
function useScrollReveal(options = { threshold: 0.2 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [options]);

  return { elementRef, isIntersecting };
}

export default function WorldLanguages() {
  const { elementRef, isIntersecting } = useScrollReveal();

  const headlineLine1 = "EVERYONE".split('');
  const headlineLine2 = "IS WELCOME".split('');

  const flagCodes = ['br', 'us', 'es', 'fr', 'it', 'de', 'ar', 'mx', 'co', 'gb', 'jp', 'kr', 'pt', 'uy', 'cl', 'pe', 'ec', 'cr', 'hn', 'py'];
  const flags1 = flagCodes.map(code => ({
    src: `https://flagcdn.com/w80/${code}.png`,
    alt: code.toUpperCase()
  }));

  return (
    <section 
      ref={elementRef}
      className="relative bg-bisa-navy-dark overflow-hidden flex flex-col items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 border-t border-white/5"
    >
      {/* World Map SVG Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='500' viewBox='0 0 1000 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 100h10v10h-10zM120 100h10v10h-10zM140 110h10v10h-10zM160 120h10v10h-10zM180 130h10v10h-10zM200 140h10v10h-10zM220 150h10v10h-10zM240 160h10v10h-10zM260 170h10v10h-10zM280 180h10v10h-10zM300 190h10v10h-10zM320 200h10v10h-10zM340 210h10v10h-10zM360 220h10v10h-10zM380 230h10v10h-10zM400 240h10v10h-10zM420 250h10v10h-10zM440 260h10v10h-10zM460 270h10v10h-10zM480 280h10v10h-10zM500 290h10v10h-10zM520 300h10v10h-10zM540 310h10v10h-10zM560 320h10v10h-10zM580 330h10v10h-10zM600 340h10v10h-10zM620 350h10v10h-10zM640 360h10v10h-10zM660 370h10v10h-10zM680 380h10v10h-10zM700 390h10v10h-10zM720 400h10v10h-10zM740 410h10v10h-10zM760 420h10v10h-10zM780 430h10v10h-10zM800 440h10v10h-10zM820 450h10v10h-10zM840 460h10v10h-10zM860 470h10v10h-10zM880 480h10v10h-10zM900 490h10v10h-10z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />

      {/* Atmosfera Radial */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(204,255,0,0.04) 0%, transparent 70%)' }} />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-bisa-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-bisa-navy-light/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center pointer-events-none px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <span 
          className="font-sans font-bold text-[11px] tracking-[6px] text-bisa-gold uppercase mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: '100ms'
          }}
        >
          {`// THE WORLD TRAINS HERE`}
        </span>

        <h2 className="font-sans font-black text-[clamp(44px,10vw,130px)] leading-[0.85] tracking-tight flex flex-col items-center mb-8 drop-shadow-lg">
          <div className="overflow-hidden flex">
            {headlineLine1.map((char, i) => (
              <span 
                key={i} 
                className="inline-block text-bisa-white transition-all duration-500"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(-40px)',
                  transitionDelay: `${100 + (i * 20)}ms`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div className="overflow-hidden flex">
            {headlineLine2.map((char, i) => (
              <span 
                key={i} 
                className="inline-block text-bisa-gold transition-all duration-500"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(-40px)',
                  transitionDelay: `${100 + (headlineLine1.length * 20) + (i * 20)}ms`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </h2>

        <p 
          className="text-lg text-bisa-white/80 max-w-lg text-center transition-all duration-700 ease-out mb-12 drop-shadow-md"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '300ms'
          }}
        >
          USA, Brazil, Morocco, South Africa, Australia, Mexico, Colombia, Ecuador, Honduras, Guatemala, and beyond — our pitch is home to athletes from over 19 nations. Soccer is the only language that matters.
        </p>

        {/* Marquee de Bandeiras */}
        <div className="w-full overflow-hidden flex flex-col gap-4 mb-16 relative"
             style={{
               opacity: isIntersecting ? 1 : 0,
               transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
               transition: 'all 1s ease-out 400ms'
             }}>
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-32 bg-bisa-gold/10 blur-[50px] -z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap animate-marquee py-4" style={{ animationDuration: '40s' }}>
            {[...flags1, ...flags1].map((flag, i) => (
              <div key={i} className="mx-6 sm:mx-10 relative w-12 h-8 sm:w-20 sm:h-12 flex-shrink-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Image src={flag.src} alt={flag.alt} fill className="object-cover rounded-sm" unoptimized />
              </div>
            ))}
          </div>
        </div>

        {/* Grid de Estatísticas */}
        <div 
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left pointer-events-auto"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 500ms'
          }}
        >
          <div className="grid grid-cols-2 gap-6 sm:gap-8 bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-bisa-gold/5 to-transparent pointer-events-none" />
            <div className="flex flex-col relative z-10">
              <span className="font-black text-4xl sm:text-5xl text-bisa-gold mb-1 drop-shadow-[0_0_10px_rgba(245,166,35,0.3)]">
                <Counter from={0} to={19} />+
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-bisa-white/60 uppercase tracking-[0.08em]">
                Countries of experience
              </span>
            </div>
            <div className="flex flex-col relative z-10">
              <span className="font-black text-4xl sm:text-5xl text-bisa-gold mb-1 drop-shadow-[0_0_10px_rgba(245,166,35,0.3)]">U4-U18</span>
              <span className="text-[10px] sm:text-xs font-bold text-bisa-white/60 uppercase tracking-[0.08em]">Age Groups</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg sm:text-xl leading-relaxed font-medium text-bisa-white/90 drop-shadow-md">
              Bilu International Soccer Academy is built on global experience. Led by Sports Director Paulo, who has coached athletes from over 19 nations, BISA brings a world-class methodology to the Charleston metro area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
