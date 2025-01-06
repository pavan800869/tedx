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
        <section className="bg-black mb-12 mt-20">
            {/* Hero Section */}
            <div className="max-w-6xl mb-8 px-6">   
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-100">
                    Captured Moments at
                    <br />
                    <span className="text-2xl text-red-500">TedxAnuragU</span>
                </h2>
                <p className="text-neutral-400 mt-4 max-w-xl">
                    Relive the vibrant energy and memorable moments from our events through these snapshots.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-6 gap-2 max-w-5xl mx-auto px-4">
                <div className="col-span-4 row-span-2">
                    <motion.div
                        layoutId={`image-0`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(0)}
                    >
                        <Image
                            src={images[0]}
                            alt="Gallery image 1"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="col-span-2 row-span-1">
                    <motion.div
                        layoutId={`image-1`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(1)}
                    >
                        <Image
                            src={images[1]}
                            alt="Gallery image 2"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="col-span-2 row-span-1">
                    <motion.div
                        layoutId={`image-2`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(2)}
                    >
                        <Image
                            src={images[2]}
                            alt="Gallery image 3"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="col-span-2 row-span-2">
                    <motion.div
                        layoutId={`image-3`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(3)}
                    >
                        <Image
                            src={images[3]}
                            alt="Gallery image 4"
                            width={400}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="col-span-4 row-span-1">
                    <motion.div
                        layoutId={`image-4`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(4)}
                    >
                        <Image
                            src={images[4]}
                            alt="Gallery image 5"
                            width={800}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="col-span-2 row-span-1">
                    <motion.div
                        layoutId={`image-5`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(5)}
                    >
                        <Image
                            src={images[5]}
                            alt="Gallery image 6"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
                <div className="col-span-2 row-span-1">
                    <motion.div
                        layoutId={`image-6`}
                        className="relative rounded-lg overflow-hidden shadow-md"
                        onClick={() => setSelectedId(6)}
                    >
                        <Image
                            src={images[6]}
                            alt="Gallery image 7"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
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
                            className="relative bg-neutral-800 p-4 rounded-lg shadow-lg"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
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
