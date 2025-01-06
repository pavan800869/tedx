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
        '/tedx/events/team.jpg',
        '/tedx/events/indoor.jpg',
        '/tedx/events/outdoor.png',
    ]

    const [selectedId, setSelectedId] = useState(null)

    return (
        <section className="bg-black mb-12 mt-20  ">
            {/* Hero Section */}
            <div className="max-w-6xl mb-12 px-12">   
                <h2 className="text-3xl lg:text-5xl md:text-7xl font-bold text-neutral-100">
                    Captured Moments at
                    <br />
                    <span className="tedx-3xl lg:text-5xl text-red-600">Tedx AnuragU</span>
                </h2>
                <p className="text-neutral-400 mt-4 max-w-2xl">
                    Relive the vibrant energy and memorable moments from our events through these snapshots.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto px-8 ">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        layoutId={`image-${index}`}
                        onClick={() => setSelectedId(index)}
                        className={`cursor-pointer group relative `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-semibold text-lg">
                                    View Image
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        layoutId={`image-${selectedId}`}
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className="relative bg-neutral-800 p-5 rounded-lg shadow-xl"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <Image
                                src={images[selectedId]}
                                alt={`Gallery image ${selectedId + 1}`}
                                width={800}
                                height={800}
                                className="rounded-lg object-cover"
                            />
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                                onClick={() => setSelectedId(null)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
