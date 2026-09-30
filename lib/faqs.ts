import { translations } from '@/lib/translations';

export type Faq = { q: string; a: string };

/** FAQs shown on each program page. The same list feeds the FAQPage JSON-LD, so schema always matches the visible text. */
export const PROGRAM_FAQS: Record<string, Faq[]> = {
  'academy-development': [
    { q: "What ages does Academy Development cover?", a: "This program is tailored specifically for boys and girls from U4 up to U14." },
    { q: "Do I need previous experience?", a: "Players should have a passion for the game, we will evaluate skill level to place them correctly." },
    { q: "What is the commitment?", a: "Trainings are held multiple times a week with weekend game opportunities depending on the group." },
    { q: "How are teams formed?", a: "Teams and training pools are formed objectively based on technical, tactical, physical, and psychological traits." }
  ],
  'junior-academy': [
    { q: "How does this differ from Academy Development?", a: "Junior Academy is an accelerated track for players demonstrating high potential and commitment at U8-U12." },
    { q: "What if my child is not selected?", a: "They can continue developing in our Academy program until they are ready to step up." },
    { q: "Is travel required?", a: "Yes, some regional travel is expected for standardized competitive matches." },
    { q: "Can girls join?", a: "Absolutely. We have comprehensive tracks for both boys and girls." }
  ],
  'elite': [
    { q: "Is this only for players wanting to go pro?", a: "No, it is for any highly committed player looking to maximize their potential, whether for college or professional levels." },
    { q: "How many showcases do we attend?", a: "Typically 2-4 major showcases a year, dependent on team level and exact age group." },
    { q: "Do you help with college recruiting?", a: "Yes! We actively guide players on putting together highlight reels and communicating with coaches." },
    { q: "What is the practice intensity?", a: "High. Training requires maximum focus and physical readiness, mirroring collegiate requirements." }
  ],
  'futsal': [
    { q: "Can anyone join Futsal?", a: "Yes! Futsal is for all BISA players looking to sharpen their skills." },
    { q: "Do I need special shoes?", a: "Yes, mandatory indoor flat-soled soccer shoes (no cleats on the court!)." },
    { q: "Is it a massive difference from outdoor?", a: "The principles of the game carry over, but the speed of thought required is much higher." },
    { q: "Why do elite players play Futsal?", a: "The brightest global stars started in Futsal—it forces technical perfection under extreme pressure." }
  ],
  // Summer Camps renders these keys through t() so they follow the selected language; schema uses English.
  'summer-camps': [1, 2, 3, 4, 5, 6].map((n) => ({
    q: translations.en[`sc.faq.${n}.q`],
    a: translations.en[`sc.faq.${n}.a`],
  })),
};
