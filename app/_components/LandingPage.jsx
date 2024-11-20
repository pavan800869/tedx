import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MenuIcon, X, ChevronDown, Calendar, MapPin, 
  Clock, Play, ExternalLink, ArrowRight,
  Twitter, Instagram, Linkedin, Facebook 
} from 'lucide-react';
import {
  navigationData,
  heroData,
  previousSpeakers,
  featuredTalks,
  eventDetails,
  stats,
  socialLinks
} from '../data/siteData';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold flex items-center"
            >
              <img src={navigationData.logo} alt="TEDx" className="h-8 mr-2" />
              <span>AnuragU</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navigationData.navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:text-red-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-black"
        >
          <div className="container mx-auto px-4 py-4">
            {navigationData.navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover inline-block p-8 border-8 border-red-600"
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
        >
          <source src={heroData.backgroundVideo} type="video/mp4" />
        </video>

        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              {heroData.title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              {heroData.subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl transition-colors">
                Register Now
              </button>
              <button className="border border-white hover:border-red-600 hover:text-red-600 px-8 py-3 rounded-xl transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 w-full text-center"
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border border-gray-800">
              <Calendar className="w-12 h-12 text-red-600" />
              <h3 className="text-xl font-bold">Date</h3>
              <p className="text-gray-400">{eventDetails.date}</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border border-gray-800">
              <MapPin className="w-12 h-12 text-red-600" />
              <h3 className="text-xl font-bold">Venue</h3>
              <p className="text-gray-400">{eventDetails.venue}</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl border border-gray-800">
              <Clock className="w-12 h-12 text-red-600" />
              <h3 className="text-xl font-bold">Time</h3>
              <p className="text-gray-400">{eventDetails.time}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Previous Speakers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Previous Speakers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {previousSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-xl overflow-hidden border border-gray-800"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                    <p className="text-gray-300 mb-1">{speaker.talk}</p>
                    <p className="text-red-500">{speaker.year}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 bg-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(speaker.videoUrl, '_blank')}
                  >
                    <Play className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talks */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Talks</h2>
            <motion.a
              href="/talks"
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-red-600 hover:text-red-500"
            >
              View All <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTalks.map((talk, index) => (
              <motion.div
                key={talk.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-black rounded-xl overflow-hidden border border-gray-800"
              >
                <div className="relative aspect-video">
                  <img
                    src={talk.thumbnail}
                    alt={talk.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(talk.videoUrl, '_blank')}
                  >
                    <Play className="w-12 h-12 text-red-600" />
                  </motion.button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{talk.title}</h3>
                  <p className="text-gray-400 mb-4">{talk.speaker}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{talk.views} views</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-red-600 hover:text-red-500"
                      onClick={() => window.open(talk.videoUrl, '_blank')}
                    >
                      Watch Now <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-red-600"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <img src={navigationData.logo} alt="TEDx" className="h-8" />
              <span className="text-xl font-bold">AnuragU</span>
            </div>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  {link.platform === 'twitter' && <Twitter />}
                  {link.platform === 'instagram' && <Instagram />}
                  {link.platform === 'linkedin' && <Linkedin />}
                  {link.platform === 'facebook' && <Facebook />}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TEDxAnuragU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;