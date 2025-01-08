'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <main className="bg-black text-white relative">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between px-4 relative">
        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-screen">
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

        {/* Text Below the Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 mb-10 text-center"
        >
          <p className="text-red-600 mb-2 text-2xl sm:text-2xl lg:text-4xl font-bold">01.03.2025</p>
          <p className="tracking-widest text-sm sm:text-base lg:text-lg">Anurag University</p>
        </motion.div>
      </div>
    </main>
  )
}
