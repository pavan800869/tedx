'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HomeSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date('2025-03-01') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      clearInterval(timer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Animation Section */}
        <div className="w-full sm:w-1/2 h-1/2 relative">
          {/* Overlay Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-5xl tracking-[0.3em] text-center font-light text-white z-20"
          >
            TedX Anurag U
          </motion.h1>

          {/* Lottie Animation */}
          <iframe
            src="https://lottie.host/embed/74783913-f68f-411d-870b-a3f711d52f56/NZt8BHovyw.lottie"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen
            aria-label="TedX Animation"
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* Date and Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center mt-8"
        >
          <p className="text-red-600 mb-2 text-sm sm:text-sm lg:text-lg">01.03.25</p>
          <p className="tracking-widest text-sm sm:text-base lg:text-lg">Anurag University</p>
        </motion.div>

        {/* Countdown and Register Button */}
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-between items-center mt-8 px-4 sm:px-16 lg:px-32">
          {/* Countdown */}
          <div className="text-left">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-red-600 mb-2">Countdown</p>
            <div className="flex space-x-2">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div
                  key={unit}
                  className="bg-white/10 p-3 sm:p-4 rounded-lg min-w-[60px] sm:min-w-[80px] lg:min-w-[100px] text-center"
                >
                  <span className="block text-xl sm:text-3xl lg:text-5xl font-bold">{timeLeft[unit] || '0'}</span>
                  <span className="block text-[10px] sm:text-xs lg:text-sm uppercase">{unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="text-right">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold 
                       py-3 px-6 lg:py-4 lg:px-8 
                       text-sm sm:text-base lg:text-lg
                       transition duration-300 ease-in-out transform hover:scale-105 
                       tracking-wider uppercase"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
