import ProgramPage, { type ProgramData } from '@/components/program/ProgramPage';
import { PROGRAM_FAQS } from '@/lib/faqs';

// Words for this program; layout and motion live in components/program/ProgramPage.tsx.
const DATA: ProgramData = {
  kicker: "U4 to U14 · High quality foundational training",
  titleTop: "ACADEMY",
  title: "DEVELOPMENT",
  subtitle: "High-quality foundational and progressive training for performance-focused athletes.",
  ticker: [
    "Academy Development",
    "U4 to U14",
    "Skill Building",
    "Game Understanding",
    "Professional Coaching",
    "Open Registration"
  ],
  overview: [
    {
      "title": "U4–U14 Program",
      "desc": "Age-appropriate modules designed for steady progression."
    },
    {
      "title": "Professional Environment",
      "desc": "Training designed to maximize touches, skills, and decision making."
    },
    {
      "title": "Multiple Venues",
      "desc": "Convenient training locations in Metro Charleston area."
    },
    {
      "title": "Pathway to Elite",
      "desc": "The fundamental stepping stone towards highest competitive level."
    }
  ],
  features: [
    {
      "title": "Progressive Curriculum",
      "desc": "Step-by-step methodology building on fundamentals into advanced play."
    },
    {
      "title": "Technical Mastery",
      "desc": "Deep focus on 1v1 skills, passing, receiving, and first touch."
    },
    {
      "title": "Tactical Awareness",
      "desc": "Learning structural play and positional awareness on the field."
    },
    {
      "title": "Physical Conditioning",
      "desc": "Age-specific athletic development to build agility and stamina."
    },
    {
      "title": "Psychological Growth",
      "desc": "Fostering winning mentalities, resilience, and sportsmanship."
    },
    {
      "title": "Holistic Development",
      "desc": "Creating excellent athletes and outstanding individuals off the field."
    }
  ],
  steps: [
    {
      "num": "01",
      "title": "Register Online",
      "desc": "Complete our secure Playmetrics registration."
    },
    {
      "num": "02",
      "title": "Evaluation",
      "desc": "Initial placement to ensure right competitive challenge."
    },
    {
      "num": "03",
      "title": "Orientation",
      "desc": "Meet the coaches and learn the BISA methodology."
    },
    {
      "num": "04",
      "title": "Start Training",
      "desc": "Join the sessions and begin your elite journey."
    }
  ],
  registerLabel: "REGISTER FOR DEVELOPMENT",
  ages: { from: 4, to: 14, label: 'U4–U14' },
  faqs: PROGRAM_FAQS['academy-development'],
};

export default function AcademyDevelopmentPage() {
  return <ProgramPage data={DATA} />;
}
