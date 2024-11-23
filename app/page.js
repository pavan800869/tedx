'use client'
import { useEffect, useRef, useState } from "react";
import NavBar from "./_components/NavBar";
import HeroSection from "./_components/HeroSection";
import Sponsors from "./_components/Sponsors";
import EventRegistration from "./_components/EventRegistration";
import SpeakerCards from "./_components/Speakers";
import { Query } from "./_components/Queries";
import TeamCards from "./_components/Team";
import Footer from "./_components/Footer";
import BlurFade from "./_components/blur-fade";
import { ReactLenis } from 'lenis/react';
import Maps from "./_components/Maps";
import TalksSection from "./_components/Talks";
import LandingPage from "./_components/LandingPage";
import TEDxStatsPage from "./_components/Stats";
import ScrollToTop from "./_components/TopButton";
import Gallery from "./_components/Gallery";
import SplashScreen from './_components/SplashScreen'; // Import the SplashScreen component

export default function Home() {
  const lenisRef = useRef();
  const [showSplash, setShowSplash] = useState(false); // Default state to hide splash screen
  
  useEffect(() => {
    // Check localStorage to determine if the splash screen should be shown
    const hasShownSplash = localStorage.getItem("hasShownSplash");

    if (!hasShownSplash) {
      setShowSplash(true); // Show splash screen
      localStorage.setItem("hasShownSplash", "true"); // Mark splash screen as shown
    }

    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleSplashEnd = () => {
    setShowSplash(false); // Hide splash screen when animation ends
  };

  return (
    <div className="bg-black relative h-[200vh]">
      {showSplash && <SplashScreen onAnimationEnd={handleSplashEnd} />}
      <BlurFade delay={0.4}>
        <HeroSection />
      </BlurFade>
      <TEDxStatsPage />
      <TalksSection />
      <Gallery />
      <Query />
      <Sponsors />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
