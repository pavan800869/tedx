'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Gallery() {
  const images = [
    '/tedx/ishmeet.jpg',
    '/tedx/events/stage.jpg',
    '/tedx/events/performance.jpg',
    '/tedx/events/performance1.jpg',
    '/tedx/events/performance2.jpg',
    '/tedx/events/indoor.jpg',
    '/tedx/events/speaker1.jpg',
    '/tedx/events/speaker2.png',
    '/tedx/events/speaker3.jpg',
    '/tedx/events/speaker4.png',
    '/tedx/events/speaker5.jpg',
    '/tedx/events/speaker6.jpg',
    '/tedx/events/speaker6.png',
    '/tedx/events/speaker8.png',
    '/tedx/events/outdoor.png',
    
  ]

  const [selectedId, setSelectedId] = useState(null)

  return (
    <section className="py-20 px-5">
      <h2 className="text-4xl font-bold mb-10 text-center text-red-600">Get Ready for something Big!</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <motion.div
            key={index}
            layoutId={`image-${index}`}
            onClick={() => setSelectedId(index)}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={400}
              className="rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={`image-${selectedId}`}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div className="bg-white p-5 rounded-lg">
              <Image
                src={images[selectedId]}
                alt={`Gallery image ${selectedId + 1}`}
                width={600}
                height={600}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

