'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <main className="bg-black text-white relative">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between px-4 relative">
        {/* Image Section with Responsive Adjustments */}
        <div className="relative w-[90%] sm:w-[70%] mx-auto 
                        h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px] 
                        2xl:h-[450px] overflow-hidden mt-7 sm:mt-8 md:mt-20">
          <Image
            src="/tedx/NextisNow-new.png"
            alt="Next is Now"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 95vw, 
                   (max-width: 768px) 90vw,
                   (max-width: 1024px) 80vw,
                   (max-width: 1280px) 75vw,
                   60vw"
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
