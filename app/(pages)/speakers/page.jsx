'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const speakersByYear = {
  2019: [
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
  
  2023: [
    {
        name: "Gauranga Darshan Das",
        title: "Author, Monk and Teacher",
        image: "/tedx/speaker1.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker1", // Add actual profile URLs
        description: "Gauranga Darshan Das, an IIScian turned into a monk, and a disciple of His Holiness Radhanath Swami, he is a renowned spiritual teacher and author of over 30 books including the Subodhini series and Bhagavatam Tales. With over 7000 hours of discourses, he has been spreading the wisdom of spirituality in various forums including schools, colleges, and corporate events. As the Dean of the Bhaktivedanta Vidyapitha at ISKCON Govardhan Ecovillage and a member of the ISKCON Board of Examinations, Gauranga Darshan Das is a true leader in the spiritual community. Don't miss this chance to be guided on a journey of self-enrichment! \"Embark on a journey of self-discovery with Gauranga Darshan Das, a spiritual teacher and author of over 30 books. With a wealth of knowledge and experience, he'll guide you towards a deeper understanding of the self and a more fulfilling life. Join him at TEDxAnuragU for a transformative experience.\"",
      },
      {
        name: "Ishmeet Kaur",
        title: "Psychologist and Counseling",
        image: "/tedx/ishmeet.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker2",
        description: "Ishmeet Kaur With a Masters in Psychology and over 13 years of experience in counseling and training, Ishmeet is a true expert in the field. From relationship management to stress management, her clients and organizations, including Microsoft, Amazon, Google and the American Institute of Foreign Studies, have experienced the impact of her client-centric approach. Don't miss the opportunity to learn from this amazing speaker.",
      },
      {
        name: "Jagadeesh Reddy",
        title: "Natural Farmer",
        image: "/tedx/jagadeesh.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker3",
        description: "A deep understanding of nature and its behavior, which he believes is crucial for farming. He firmly believes that natural farming is the closest form of farming to nature, Join us in supporting Mr. Jagadeesh's mission to practice natural farming and save our soil from harmful chemicals only harm the nutritious soil. His strongest desire is to save the soil from these chemicals and pesticides .He is dedicated in promoting the use of natural manure and ZBNF practices.",
      },
      {
        name: "Ms. Anvitha Kollipara",
        title: "Founder of the non-profit organization Care Good",
        image: "/tedx/anvitha.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker4",
        description: "The first few steps to effective leadership include putting your age aside and periodically revisiting your goals! Ms. Anvitha Kollipara is an Indian-American social activist and the founder of the non-profit organisation \"Care Good\". Elderly people in need of resources are located by Care Good, and they are given medical assistance. She won several awards at a young age, including T Hub's Women Entrepreneur of the Year 2021. Anvitha was a featured speaker at the New Indian Express and Edex's 75th Indian Independence Day.",
      },
      {
        name: "Nagarjuna Muppala",
        title: "Entrepreneur and Founder (Almond House)",
        image: "/tedx/nm.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker5",
        description: "Nagarjuna Muppala retired from Almond House in the year 2014, he is now advocating entrepreneurial path to all the youngsters arguing that it can offer greater Security, Autonomy and Satisfaction irrespective of whether they succeed in making big wealth or not. In the past, he worked as a Systems Analysist, also as a management consultant with APPC and thereafter co-founded Plasti Lami Coats Pvt Ltd. He is interested in working for improvements in Primary School Education in rural India, with emphasis on Child Centric approach.",
      },
      {
        name: "Naman Vankdari",
        title: "Advocate, Asst professor and Co-founder (The Indian Conclave)",
        image: "/tedx/naman.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker6",
        description: "Naman is a renowned public speaker and a practicing advocate. He has served as the Advisory Board member of National Services Scheme (Bangalore University unit); Assistant Professor of Law (Guest Faculty) BMS College of Law, Bengaluru and President of University Law College & Department of Studies in Law Bangalore University Model United Nations Conference, among others. Naman's expertise in the field has earned him the opportunity to deliver lectures and conduct workshops at educational institutions and intergovernmental organizations across the globe. He has addressed the 1st Global Youth Forum Conference hosted by The Ministry of Justice, Government of Japan, and UNODC, and has trained and interacted with students from national and international diaspora on various important topics. As a young advocate, Naman is dedicated to serving justice to the youth and representing their aspirations.",
      },
      {
        name: "Nikhil Gunda",
        title: "Entrepreneur, Co-founder of an innovative transportation startup",
        image: "/tedx/nikhil.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker7",
        description: "Exciting news, everyone! We are thrilled to announce that Nikhil Gunda, a visionary entrepreneur, co-founder of an innovative transportation startup, and an alumnus of Anurag, will be speaking at our upcoming event. We are incredibly proud to invite one of our own as a speaker, and we can't wait to hear more about Nikhil's mission to create sustainable and cost-effective transportation solutions. His journey is truly inspiring, and we know that our audience will gain valuable insights from his experiences. Don't miss out on the chance to learn from Nikhil and other amazing speakers at our event! Stay tuned for more details.",
      },
      {
        name: "Pullela Gopichand",
        title: "Indian badminton player and Chief National Coach for the India national badminton team",
        image: "/tedx/pg.png",
        profileUrl: "https://www.ted.com/profiles/speaker8",
        description: "As the founder of the Gopichand Badminton Academy and coach to numerous Indian badminton champions, Gopichand has dedicated his life to the sport he loves and helped shape the future of Indian badminton. His relentless pursuit of excellence and unwavering commitment to his goals make him a true inspiration for all of us. We can't wait to hear Gopichand's insights on what it takes to overcome obstacles, chase your dreams, and achieve greatness. This is a once-in-a-lifetime opportunity to learn from one of the greatest athletes and coaches of our time.",
      },
      {
        name: "Sekhar Kammula",
        title: "Indian film director, screenwriter and producer",
        image: "/tedx/sk.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker9",
        description: "Sekhar Kammula With a multitude of awards to his credit, including two Filmfare Awards South and six state Nandi Awards, he is a force to reckon with in the industry. His prowess in the art of storytelling has captured the hearts of audiences worldwide, and his creative vision has inspired many. His achievements in the industry have earned him the honor of representing South Indian Cinema at the prestigious Cannes Film Festival in 2011, making him a true ambassador of Indian cinema. His unwavering passion for cinema and his commitment to excellence continue to make him a leading figure in the industry.",
      },
      {
        name: "Zain Samdani",
        title: "Scientist, Artist, Speaker and Inventor of ExoHeal",
        image: "/tedx/zain.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker10",
        description: "A scientist, artist, and captivating speaker all rolled into one, this young prodigy has already achieved numerous awards and accolades. Don't miss this opportunity to hear from a true visionary and be prepared to have your perspective on art, science and life forever changed. We are thrilled to announce that Zain Samdani, who defies boundaries and blurs the lines between science, art, and public speaking the inventor of ExoHeal, a revolutionary robotic medical device that helps paralyzed patients have a faster, accessible and affordable recovery, will be speaking at TEDxAnuragU on 4th March. As a World Champion, Diana Award winner, and a Global Finalist in the Google Science Fair, Zain's dedication to improving the lives of others through his innovation and technology is truly inspiring. His feature in tech crunch ,Forbes ,times of India and many more, is a testimony of his hard work and dedication.",
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
              className="bg-white text-black p-8 rounded-lg max-w-md w-full mx-4 relative shadow-lg overflow-hidden"
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
              <div className="w-full relative">
              <Image
                src={speakersByYear[selectedYear][selectedId].image}
                alt={speakersByYear[selectedYear][selectedId].name}
                width={400}
                height={200}
                objectFit="cover"
                className="rounded-lg"
              />
              </div>
              <div className="mt-4 max-h-60 overflow-y-auto">
                <h2 className="text-2xl font-bold text-red-600 mb-2">
                  {speakersByYear[selectedYear][selectedId].name}
                </h2>
              <p className="text-sm text-gray-700">
                {speakersByYear[selectedYear][selectedId].title}
              </p>
              <p className="text-sm mb-6">
                {speakersByYear[selectedYear][selectedId].description}
              </p>
              </div>
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

