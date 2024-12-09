'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const speakersByYear = {
  2020: [
    {
      name: "Speaker 2020 A",
      title: "Title 2020 A",
      image: "/placeholder.svg?height=300&width=300",
      profileUrl: "https://www.ted.com/profiles/speaker2020a"
    },
    {
      name: "Speaker 2020 B",
      title: "Title 2020 B",
      image: "/placeholder.svg?height=300&width=300",
      profileUrl: "https://www.ted.com/profiles/speaker2020b"
    },
  ],
  2021: [
    {
      name: "Speaker 2021 A",
      title: "Title 2021 A",
      image: "/placeholder.svg?height=300&width=300",
      profileUrl: "https://www.ted.com/profiles/speaker2021a"
    },
    {
      name: "Speaker 2021 B",
      title: "Title 2021 B",
      image: "/placeholder.svg?height=300&width=300",
      profileUrl: "https://www.ted.com/profiles/speaker2021b"
    },
  ],
  2022: [
    {
      name: "Jagadeesh Reddy",
      title: "Natural Farmer",
      image: "/tedx/jagadeesh.jpeg",
      profileUrl: "https://www.ted.com/profiles/speaker3"
    },
    {
      name: "Ms. Anvitha Kollipara",
      title: "Founder of the non-profit organization Care Good",
      image: "/tedx/anvitha.jpeg",
      profileUrl: "https://www.ted.com/profiles/speaker4"
    },
  ],
  2023: [
    {
      name: "Gauranga Darshan Das",
      title: "Author, Monk and Teacher",
      image: "/tedx/speaker1.jpeg",
      profileUrl: "https://www.ted.com/profiles/speaker1"
    },
    {
      name: "Ishmeet Kaur",
      title: "Psychologist and Counseling",
      image: "/tedx/ishmeet.jpg",
      profileUrl: "https://www.ted.com/profiles/speaker2"
    },
  ],
  2024: [
    {
        name: "Gauranga Darshan Das",
        title: "Author, Monk and Teacher",
        image: "/tedx/speaker1.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker1", // Add actual profile URLs
      },
      {
        name: "Ishmeet Kaur",
        title: "Psychologist and Counseling",
        image: "/tedx/ishmeet.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker2",
      },
      {
        name: "Jagadeesh Reddy",
        title: "Natural Farmer",
        image: "/tedx/jagadeesh.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker3",
      },
      {
        name: "Ms. Anvitha Kollipara",
        title: "Founder of the non-profit organization Care Good",
        image: "/tedx/anvitha.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker4",
      },
      {
        name: "Nagarjuna Muppala",
        title: "Entrepreneur and Founder (Almond House)",
        image: "/tedx/nm.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker5",
      },
      {
        name: "Naman Vankdari",
        title: "Advocate, Asst professor and Co-founder (The Indian Conclave)",
        image: "/tedx/naman.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker6",
      },
      {
        name: "Nikhil Gunda",
        title: "Entrepreneur, Co-founder of an innovative transportation startup",
        image: "/tedx/nikhil.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker7",
      },
      {
        name: "Pullela Gopichand",
        title: "Indian badminton player and Chief National Coach for the India national badminton team",
        image: "/tedx/pg.png",
        profileUrl: "https://www.ted.com/profiles/speaker8",
      },
      {
        name: "Sekhar Kammula",
        title: "Indian film director, screenwriter and producer",
        image: "/tedx/sk.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker9",
      },
      {
        name: "Zain Samdani",
        title: "Scientist, Artist, Speaker and Inventor of ExoHeal",
        image: "/tedx/zain.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker10",
      },
  ],
};

const years = Object.keys(speakersByYear).sort((a, b) => Number(a) - Number(b));

const SpeakerCards = () => {
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Year selection */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          {/* <h2 className="text-2xl font-bold text-neutral-600 mb-4">Select Year</h2> */}
          <div className="flex flex-col space-y-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`py-2 px-4 rounded-full text-lg font-extralight transition-colors duration-300 ${
                  selectedYear === year
                    ? ' text-white'
                    : ' text-neutral-600  hover:text-white'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Speakers grid */}
        <div className="md:w-3/4">
          <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
            Speakers of {selectedYear}
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakersByYear[selectedYear].map((speaker, index) => (
                <motion.div
                  key={index}
                  layoutId={`${selectedYear}-${index}`}
                  onClick={() => setSelectedId(index)}
                  className="flex flex-col items-center cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-red-600 text-center group-hover:text-red-400 transition-colors duration-300">
                    {speaker.name}
                  </h2>
                  <p className="text-sm text-center mt-2">{speaker.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black p-8 rounded-lg max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl"
              >
                &times;
              </button>
              <Image
                src={speakersByYear[selectedYear][selectedId].image}
                alt={speakersByYear[selectedYear][selectedId].name}
                width={400}
                height={200}
                objectFit="cover"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                {speakersByYear[selectedYear][selectedId].name}
              </h2>
              <p className="text-lg mb-4">
                {speakersByYear[selectedYear][selectedId].title}
              </p>
              <p className="text-sm mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo. Magnam explicabo saepe
                possimus voluptate voluptatem praesentium doloribus quisquam delectus.
              </p>
              <a
                href={speakersByYear[selectedYear][selectedId].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 bg-red-600 text-white text-center font-bold rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                View Full Profile
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpeakerCards;

