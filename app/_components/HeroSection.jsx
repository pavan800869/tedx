'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HomeSection() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Main Content */}
      <div className="h-screen flex flex-col items-center justify-center px-4 relative">
        {/* X Logo with Overlay */}
        <div className="w-1/2 h-1/2 relative z-10">
          {/* Overlay Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl tracking-[0.3em] text-center font-light text-white z-20"
          >
            TedX Anurag U
          </motion.h1>
          {/* Lottie Animation */}
          <iframe
            src="https://lottie.host/embed/74783913-f68f-411d-870b-a3f711d52f56/NZt8BHovyw.lottie"
            style={{ width: "100%", height: "100%" }}
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* Date and Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-8 z-10"
        >
          <p className="text-red-600 mb-2">033.03.25</p>
          <p className="tracking-widest ">Anurag University</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="mt-16 flex flex-col items-center z-10"
        >
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
