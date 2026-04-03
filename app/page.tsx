import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import WorldLanguages from '@/components/WorldLanguages';
import ProgramsGrid from '@/components/ProgramsGrid';
import CoachesGrid from '@/components/CoachesGrid';
import TryoutsCTA from '@/components/TryoutsCTA';
import ExperienceStrip from '@/components/ExperienceStrip';
import ClubGallery from '@/components/ClubGallery';
import LocationsSection from '@/components/LocationsSection';
import LeadForm from '@/components/LeadForm';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ExperienceStrip />
      <ClubGallery />
      <ProgramsGrid />
      <WorldLanguages />
      <CoachesGrid />
      <LocationsSection />
      <TryoutsCTA />
      <LeadForm />
      <FinalCTA />
    </>
  );
}
