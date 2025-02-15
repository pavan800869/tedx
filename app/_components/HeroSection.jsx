'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <main className="bg-black text-white relative">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between px-4 relative">
        {/* Image Section with Extra Space on Smartphones */}
        <div className="relative w-[95%] sm:w-[90%] mx-auto h-[220px] sm:h-[370px] md:h-[400px] lg:h-screen xl:h-[650px] overflow-hidden 
                        mt-6 sm:mt-12 md:mt-0"> {/* Added margin-top for small screens */}
          <Image
            src="/tedx/NextisNow-new.png"
            alt="Next is Now"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 95vw, 
                   (max-width: 768px) 90vw,
                   (max-width: 1200px) 100vw,
                   100vw"
            style={{
                objectPosition: 'center',
            }}
          />
        </div>

        {/* Text Below the Image */}
        <div className="mt-4 mb-10 text-center">
          <p className="text-red-600 mb-2 text-2xl sm:text-2xl lg:text-4xl font-bold">01.03.2025</p>
          <p className="tracking-widest text-sm sm:text-base lg:text-lg">Anurag University</p>
        </div>
      </div>
    </main>
  )
}
