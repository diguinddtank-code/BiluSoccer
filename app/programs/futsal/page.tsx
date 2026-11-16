import ProgramPage, { type ProgramData } from '@/components/program/ProgramPage';
import { PROGRAM_FAQS } from '@/lib/faqs';

// Words for this program; layout and motion live in components/program/ProgramPage.tsx.
const DATA: ProgramData = {
  kicker: "All ages · Small court, huge impact",
  titleTop: "BISA",
  title: "FUTSAL",
  subtitle: "Small court. Big skills. Intensive focus on technique and decision making.",
  ticker: [
    "Futsal",
    "All Ages",
    "Fast Paced",
    "Technical Edge",
    "Quick Decisions",
    "Global Elite Secret"
  ],
  overview: [
    {
      "title": "Indoor Surface",
      "desc": "Hard courts that enforce rapid ball movement."
    },
    {
      "title": "Heavier Ball",
      "desc": "Low-bounce ball demands precise control and passing."
    },
    {
      "title": "Tight Spaces",
      "desc": "Forces players to think quickly and escape pressure."
    },
    {
      "title": "All-Year Supplement",
      "desc": "The perfect complement to outdoor team training."
    }
  ],
  features: [
    {
      "title": "1v1 Dominance",
      "desc": "Creates players comfortable beating defenders in tight areas."
    },
    {
      "title": "Quick Thinking",
      "desc": "Speeds up cognitive processing and decision making."
    },
    {
      "title": "Creative Flair",
      "desc": "Unlocks the global elite flair of imaginative play."
    },
    {
      "title": "Ball Mastery",
      "desc": "Extreme repetition of sole control and intricate touches."
    },
    {
      "title": "Transitional Play",
      "desc": "Constant shifting from attack to defense builds stamina and tactical awareness."
    },
    {
      "title": "Fun Factor",
      "desc": "High scoring, fast-moving games that players love."
    }
  ],
  steps: [
    {
      "num": "01",
      "title": "Find a Session",
      "desc": "Check our schedule for current Futsal blocks."
    },
    {
      "num": "02",
      "title": "Register",
      "desc": "Sign up via Playmetrics to secure a spot on the court."
    },
    {
      "num": "03",
      "title": "Gear Up",
      "desc": "Bring your flat-soled indoor shoes."
    },
    {
      "num": "04",
      "title": "Play Fast",
      "desc": "Jump in and transform your game."
    }
  ],
  registerLabel: "REGISTER FOR FUTSAL",
  agesNote: 'All ages',
  faqs: PROGRAM_FAQS['futsal'],
};

export default function FutsalProgramPage() {
  return <ProgramPage data={DATA} />;
}
