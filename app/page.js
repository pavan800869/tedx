'use client'
import NavBar from "./_components/NavBar";
import HeroSection from "./_components/HeroSection";
import Sponsors from "./_components/Sponsors";
import EventRegistration from "./_components/EventRegistration";
import SpeakerCards from "./_components/Speakers";
import { Query } from "./_components/Queries";
import TeamCards from "./_components/Team";
import Footer from "./_components/Footer";
import BlurFade from "./_components/blur-fade";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react';
import Maps from "./_components/Maps";
import TalksSection from "./_components/Talks";
import LandingPage from "./_components/LandingPage";
import TEDxStatsPage from "./_components/Stats";
import ScrollToTop from "./_components/TopButton";
import Gallery from "./_components/Gallery";
import SplashScreen from './_components/SplashScreen'; // Import the SplashScreen component
import TicketPricing from "./_components/Tickecting";
import TimeLine from "./_components/TimeLine";
import ScrollReveal from "./_components/ScrollAnimation";
import ScrollProgress from "./_components/Progress";
export default function Home() {
  const lenisRef = useRef();
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }
    const rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="bg-black">
      <ScrollProgress />
      <BlurFade delay={0.2}>
        <HeroSection />
      </BlurFade>
      
      <ScrollReveal delay={0.2}>
        <TimeLine />
      </ScrollReveal>
      
      <ScrollReveal delay={0.3}>
        <TalksSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <TicketPricing />
      </ScrollReveal>
      
      <ScrollReveal delay={0.3}>
        <Gallery />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <Query />
      </ScrollReveal>
      
      <ScrollToTop />
    </div>
  );
}