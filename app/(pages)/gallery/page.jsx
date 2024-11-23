'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Gallery() {
  const images = [
    '/tedx/ishmeet.jpg',
    '/tedx/ishmeet.jpg',
    '/tedx/ishmeet.jpg',
    '/tedx/ishmeet.jpg',
    '/tedx/ishmeet.jpg',
    
  ]

  const [selectedId, setSelectedId] = useState(null)

  return (
    <section className="py-20 px-5">
      <h2 className="text-4xl font-bold mb-10 text-center">Get Ready to Save Big!</h2>
      <h3 className="text-3xl font-bold mb-10 text-center text-green-500">Fall Sale 50% OFF</h3>
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
              width={300}
              height={300}
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

