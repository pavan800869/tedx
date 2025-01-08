'use client'
import { ArrowRight, ArrowRightCircleIcon, Facebook, FacebookIcon, Handshake, Instagram, Linkedin, Mail, Mic, Mic2Icon, Twitter, TwitterIcon, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

function ConnectWithUs() {
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
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerChildren}
      className="min-h-screen bg-black text-neutral-600 p-8 flex flex-col items-start"
    >
      <motion.div 
        variants={staggerChildren}
        className="grid md:grid-cols-1 gap-8 w-full"
      >
        {/* Nominate Speaker Card */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 py-12 shadow-xl transition-all duration-500 ease-out border-b hover:border-red-600"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Mic className="text-white font-bold transition duration-500 ease-out h-24 w-24" />
          </motion.div>

          <p className="text-white mb-4 mt-4">Know someone who belongs on our stage ?</p>
          <div className='flex gap-2 items-center'>
            <Link href="/nominate-speaker" className="text-white transition duration-500 ease-out group">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 group-hover:text-red-600">
                Nominate Speaker
              </h2>
            </Link>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/nominate-speaker" className="text-white">
                <ArrowRightCircleIcon className='h-12 w-12' />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Partner with Us Card */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 py-12 shadow-xl transition-all duration-500 ease-out border-b hover:border-red-600"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Handshake className="text-white font-bold transition duration-500 ease-out h-24 w-24" />
          </motion.div>

          <p className="text-white mb-4">Want to support TEDx Hyderabad as a sponsor ?</p>
          <div className='flex gap-2 items-center'>
            <Link href="/nominate-speaker" className="text-white transition duration-500 ease-out group">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 group-hover:text-red-600">
                Partner With us
              </h2>
            </Link>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/nominate-speaker" className="text-white">
                <ArrowRightCircleIcon className='h-12 w-12' />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Us Card */}
        <motion.div 
          variants={fadeInUp}
          className="p-6 py-12 shadow-xl transition-all duration-500 ease-out border-b hover:border-red-600"
        >
          <p className="text-white mb-4">Feel free to reach out through our social media or email.</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <motion.div 
            variants={staggerChildren}
            className="flex justify-start gap-6 mt-6"
          >
            {[
              { icon: <Twitter />, href: "https://twitter.com" },
              { icon: <Facebook />, href: "https://facebook.com" },
              { icon: <Instagram />, href: "https://www.instagram.com/tedxanuragu/" },
              { icon: <Linkedin />, href: "https://www.linkedin.com/company/tedxanuragu/?originalSubdomain=in" },
              { icon: <Mail />, href: "mailto:tedx@anurag.edu.in" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-red-600 transition-colors duration-500 ease-out"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ConnectWithUs;