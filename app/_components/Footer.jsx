import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="contact" className="w-full bg-red-600 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Left section with logo and text */}
                    <div className="flex flex-col items-start w-full md:w-1/3">
                        {/* TEDxAnuragU Logo */}
                        <div className="relative w-56 h-16 md:w-96 md:h-28 mb-4">
                            <Image
                                src="/tedx/logo-white ted white.webp"
                                alt="TedX AnuragU Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        {/* License Text */}
                        <p className="text-sm text-gray-300 mb-2">
                            This independent TEDx event is operated under license from TED.
                        </p>
                        {/* Copyright */}
                        <p className="text-sm text-gray-300 mb-6">
                            © TEDxAnuragU 2025
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={24} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://www.instagram.com/tedxanuragu/"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={24} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/tedxanuragu/?originalSubdomain=in"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={24} strokeWidth={1.5} />
                            </a>
                        </div>
                        <a href="/gallery" className="mt-4">
                            <button className="font-bold border-2 px-6 py-2 border-white hover:bg-white hover:text-red-600 transition-colors">
                                Event Photos
                            </button>
                        </a>
                    </div>

                    {/* Middle section with links */}
                    <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-12">
                        {/* Links */}
                        <div className="flex flex-col gap-4 w-full md:w-1/2">
                            <a href="/aboutus" className="text-lg hover:text-gray-300">
                                About
                            </a>
                            <a href="/connect-with-us" className="text-lg hover:text-gray-300">
                                Contact Us
                            </a>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/2">
                            <a href="#" className="text-lg hover:text-gray-300">
                                Nominate Speaker
                            </a>
                            <a href="#" className="text-lg hover:text-gray-300">
                                Sponsor
                            </a>
                            <a href="#" className="text-lg hover:text-gray-300">
                                Attendee Rules &<br /> Regulations
                            </a>
                        </div>
                    </div>

                    {/* Right section with map */}
                    <div className="w-full md:w-1/3">
                        <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.67668622274!2d78.51668553808736!3d17.416770927111912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1733766357708!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
