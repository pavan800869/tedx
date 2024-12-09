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

export default function Home() {
  const lenisRef = useRef();
  const [showSplash, setShowSplash] = useState(true); // State to manage splash screen visibility
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }
  
    const rafId = requestAnimationFrame(update);
  
    return () => cancelAnimationFrame(rafId);
  }, []);

 

  return (
    <div className="bg-black">
      
      <BlurFade delay={0.2}>
        <HeroSection />
      </BlurFade>
      {/* <TEDxStatsPage /> */}
      <TalksSection />
      <TicketPricing />
      <Gallery />
      <Query />
      
      <ScrollToTop />
    </div>
  );
}