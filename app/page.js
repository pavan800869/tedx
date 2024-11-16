import NavBar from "./_components/NavBar";
import HeroSection from "./_components/HeroSection";

import Sponsors from "./_components/Sponsors";
import EventRegistration from "./_components/EventRegistration";
import SpeakerCards from "./_components/Speakers";
import { Query } from "./_components/Queries";
import TeamCards from "./_components/Team";
import Footer from "./_components/Footer";
import BlurFade from "./_components/blur-fade";


export default function Home() {
  return (
    <div className="bg-[#010100]">
      <BlurFade delay={0.2}>
        <NavBar />
      </BlurFade>
      <BlurFade delay={0.4}>
        <HeroSection />
      </BlurFade>
      <Sponsors />
      <EventRegistration />
      <SpeakerCards />
      <Query />
      <TeamCards />
      <Footer />
    </div>
  );
}
