'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
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
        <section className="bg-black mb-12 mt-20">
            {/* Hero Section */}
            <div className="w-full h-fit mt-20 bg-black">
                <h2
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-200 font-sans px-4 sm:px-12">
                    The Glimpse at
                    <br />
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600">
                    Tedx AnuragU
                    </span>
                </h2>
                <p className="text-neutral-400 mt-4 w-full px-4 sm:px-12">
                    Memorable moments from our events through these snapshots.
                </p>
            </div>


            {/* Gallery Grid */}
            <div className="grid grid-cols-6 gap-2 max-w-5xl mx-auto px-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        layoutId={`image-${index}`}
                        className={`relative rounded-lg overflow-hidden shadow-md ${
                            index === 0 ? 'col-span-4 row-span-2' : index === 3 ? 'col-span-2 row-span-2' : 'col-span-2 row-span-1'
                        }`}
                        onClick={() => {setSelectedId(index)
                            router.push('/gallery')}}
                    >
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-semibold text-lg">View Image</span>
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
                        onClick={() => {setSelectedId(null)
                            router.push('/gallery')}}
                    >
                        <motion.div
                            className="relative bg-neutral-800 p-4 rounded-lg shadow-lg"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={() => {setSelectedId(null)
                                router.push('/gallery')}} // Prevents modal close on inner div click
                        >
                            <Image
                                src={images[selectedId]}
                                alt={`Gallery image ${selectedId + 1}`}
                                width={600}
                                height={600}
                                className="rounded-lg object-cover"
                            />
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                                onClick={() => {
                                    setSelectedId(null) 
                                }}
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
