'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeSection() {


  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Animation Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/main.webp"
            alt="Next is Now"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 100vw,
               100vw"
          />
        </div>

        {/* Date and Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-red-600 mb-2 text-sm sm:text-sm lg:text-lg">01.03.25</p>
          <p className="tracking-widest text-sm sm:text-base lg:text-lg">Anurag University</p>
        </motion.div>

        {/* Countdown and Register Button */}

      </div>
    </main>
  )
}
