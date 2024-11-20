"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { heroData } from "../data/siteData";

function HeroSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

    return (
        <div className="container mx-auto ">


            <div className="flex flex-col lg:flex-row items-center justify-between ">
                {/* Left Content */}
                <div className="flex flex-col gap-5 px-4 justify-center lg:ml-20 xl:ml-40 text-white w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                        Navigating the Unknown
                    </h1>
                    <p className="text-[#fa3f7b] font-bold text-sm md:text-base">
                        TO CREATE A FUTURE WORTH HAVING
                    </p>

                    <div className="flex flex-col justify-start">
                        <div>
                            <p className="text-sm">March 2, 2025</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 mt-4">
                            {/* Talks Section */}
                            <div className="flex flex-col gap-4 justify-start">
                                <h1 className="text-transparent bg-clip-text font-bold text-2xl md:text-3xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48]">
                                    Talks
                                </h1>
                                <button className="font-bold border-2 px-8 md:px-12 py-2 border-white bg-white text-black rounded-full hover:opacity-90 transition-opacity">
                                    Watch Talks
                                </button>
                            </div>

                            {/* Music Section */}
                            <div className="flex flex-col gap-4 justify-start">
                                <h1 className="text-transparent bg-clip-text font-bold text-2xl md:text-3xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48]">
                                    Music
                                </h1>
                                <button className="font-bold border-2 px-8 md:px-12 py-2 border-[#fa3f7b] text-[#fa3f7b] hover:bg-[#fa3f7b] hover:text-white rounded-full transition-colors">
                                    Performances
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="relative opacity-80 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[600px]">
                        <Image
                            src="/tedx/bg-img.svg"
                            alt="TEDx Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
            <ContainerScroll

            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="mx-auto rounded-2xl object-cover h-full object-left-to"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                >
                    <source src={heroData.backgroundVideo} type="video/mp4" />
                </video>
            </ContainerScroll>
        </div>
    )
}

export default HeroSection


