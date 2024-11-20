"use client";
import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/tedx/bg-img.svg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-20">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
          8th December 2024 <br /> 9 AM – 6 PM <br /> Hyderabad, India
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          Discover the magic of unexpected connections and explore the power of
          ideas unfolding into life’s little miracles!
        </p>
        <div>
          <p className="text-sm md:text-base font-semibold">
            March 2, 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
