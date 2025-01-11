import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer id="footer" className="w-full bg-red-600 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12">
                    {/* Left section with logo and text */}
                    <div className="flex flex-col items-start w-full md:w-1/3 -mt-9">
                        {/* TEDxAnuragU Logo */}
                        <div className="relative w-48 h-20 md:w-64 md:h-24 lg:w-80 lg:h-28 mb-4 -ml-3">
                            <Image
                                src="/tedx/footer_logo.webp"
                                alt="TEDx AnuragU Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        {/* License Text */}
                        <p className="text-sm text-gray-300 mb-2 -mt-8">
                            This independent TEDx event is operated under license from TED.
                        </p>
                        {/* Copyright */}
                        <p className="text-sm text-gray-300 mb-6">
                            © TEDxAnuragU 2025
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-6">
                            <a
                                href="https://x.com/TedxAnuragU?t=xg7trg0pg8sAMSPihCs7ug&s=09"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXTwitter size={24} strokeWidth={1.5} />
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
                            <a
                                href="https://youtube.com/@anuraguniversi1?feature=shared"
                                className="text-white hover:text-gray-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Youtube size={24} strokeWidth={1.5} />
                            </a>
                        </div>
                        {/* Event Photos Button */}
                        <a href="/gallery" className="mt-4">
                            <button className="font-bold border-2 px-6 py-2 border-white hover:bg-white hover:text-red-600 transition-colors">
                                Event Photos
                            </button>
                        </a>
                    </div>

                    {/* Middle Section with Links */}
                    <div className="flex flex-col gap-4 text-lg w-full sm:w-auto">
                        <a href="/aboutus" className="hover:underline">
                            About
                        </a>
                        <a href="/connect-with-us" className="hover:underline">
                            Contact Us
                        </a>
                        <a href="/register" className="hover:underline">
                            Nominate Speaker
                        </a>
                        <a href="#" className="hover:underline">
                            Sponsor
                        </a>
                        <a href="/rules-and-regulations" className="hover:underline">
                            Attendee Rules &<br /> Regulations
                        </a>
                    </div>

                    {/* Right Section with Map */}
                    <div className="w-full md:w-1/3">
                        <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.67668622274!2d78.51668553808736!3d17.416770927111912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1733766357708!5m2!1sen!2sin"
                                width="100%"
                                height="230px"
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
