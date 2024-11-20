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
import { useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react'
import Maps from "./_components/Maps";
import TalksSection from "./_components/Talks";
import LandingPage from "./_components/LandingPage";


export default function Home() {
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])
  return (
    
      
    
    
    <main className="bg-[#010100] relative h-[200vh]">
      <BlurFade delay={0.2}>
        <NavBar />
      </BlurFade>
      <BlurFade delay={0.4}>
        <HeroSection />
      </BlurFade>
      {/* <LandingPage /> */}
      <Sponsors />
      <TalksSection />
      <EventRegistration />
      <SpeakerCards />
      <Query />
      <TeamCards />
      {/* <Maps /> */}
      <Footer />
    // </main>
    
  );
}
