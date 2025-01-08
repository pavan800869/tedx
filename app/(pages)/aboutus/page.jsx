'use client'
import React from "react";
import { motion } from "framer-motion";

const TeamCards = () => {
  const speakers = [
    {
      name: "Anurag Palla",
      title: "Organizer",
      image: "/tedx/anuragSir.jpeg",
      profileUrl: "https://www.ted.com/profiles/15544804/about",
    },
    {
      name: "Tara Singh Thakur",
      title: "Co-organizer",
      image: "/taraSir.jpeg",
      profileUrl: "https://www.ted.com/profiles/18764268/about",
    },
  ];

  // Smooth animation variants
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-black text-neutral-300 px-6 lg:px-16 pb-16 mt-10 lg:mt-12">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-red-600">TED</span> is a nonprofit organization
          devoted to ideas worth spreading
        </h1>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          Discover inspiring ideas, connect with passionate speakers, and join
          the global movement for innovation and creativity.
        </p>
      </motion.div>

      {/* About TED and TEDx */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={staggerChildren}
      >
        <motion.div 
          className="bg-neutral-900 p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
            About <span className="text-red-600">TED</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Technology, Entertainment, and Design have driven global
            conferences with the spirit of ideas worth spreading since 1984.
            TED welcomes people from every discipline and culture, passionately
            believing in the power of ideas to change attitudes, lives, and
            ultimately the world.
          </p>
        </motion.div>
        <motion.div 
          className="bg-neutral-900 p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
            About <span className="text-red-600">TEDx</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            TEDx is a program of self-organized events bringing people together
            to share TED-like experiences. Local events branded as TEDx spark
            deep discussions and connections, guided by TED's overarching
            principles.
          </p>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-red-600 mb-4">
          The #AnythingIsPossible Team
        </h1>
        <p className="text-neutral-400 text-lg">
          Meet the passionate individuals who make it all happen.
        </p>
      </motion.div>

      {/* Speaker Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={staggerChildren}
      >
        {speakers.map((speaker, index) => (
          <motion.a
            key={index}
            href={speaker.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center group transition-all duration-500 ease-out hover:-translate-y-2"
            variants={fadeInUp}
          >
            <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-gradient-to-t from-red-500 to-red-700 p-[4px] group-hover:scale-105 transition-all duration-500 ease-out">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out rounded-full"></div>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold mt-6 text-neutral-100 group-hover:text-red-500 transition-all duration-500 ease-out">
              {speaker.name}
            </h2>
            <p className="text-neutral-400 mt-2">{speaker.title}</p>
            <div className="mt-4 bg-red-600 text-white text-sm py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              View Profile
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Call-to-Action */}
      <motion.div 
        className="flex justify-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={fadeInUp}
      >
        <a
          href="mailto:tedx@anurag.edu.in"
          className="font-bold text-lg px-12 py-3 border-2 border-red-600 text-black-600 hover:bg-red-600 hover:text-white transition-all duration-500 ease-out"
        >
          Keep in touch
        </a>
      </motion.div>

      {/* YouTube Video */}
      <motion.div 
        className="flex justify-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={fadeInUp}
      >
        <iframe
          width="660"
          height="515"
          src="https://www.youtube.com/embed/HUvuJEs0gvU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-5xl aspect-video rounded-lg shadow-lg"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default TeamCards;