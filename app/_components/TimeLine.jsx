'use client'
import React from 'react'
import { useState, useEffect } from 'react'

function TimeLine() {
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
    <div>
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-between items-center mb-8 px-4 sm:px-16 lg:px-32">
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
            <a
              href="https://tally.so/r/3N46PQ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            ><button
              className="bg-red-600 hover:bg-red-700 text-white font-bold 
                       py-3 px-6 lg:py-4 lg:px-8 
                       text-sm sm:text-base lg:text-lg
                       transition duration-300 ease-in-out transform hover:scale-105 
                       tracking-wider uppercase"
            >
                Register Now
              </button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default TimeLine