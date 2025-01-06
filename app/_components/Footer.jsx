import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id='contact' className="w-full h-fit bg-red-600 text-white py-8 ">
            <div className="max-w-7xl mx-auto px-12">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    {/* Left section with logo and text */}
                    <div className="flex flex-col justify-start">
                        {/* TEDxAnuragU Logo */}
                        <div className="relative w-96 h-28 mb-2 mt-0">
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
                        <p className="text-sm text-gray-300">
                            © TEDxAnuragU 2025
                        </p>
                        <div className='flex flex-col items-start gap-6 my-auto'>
                            <div className="flex gap-6 mt-5">
                                <a href="#" className="text-white hover:text-gray-300 transition-colors" target="_blank" 
  rel="noopener noreferrer">
                                    <Facebook size={28} strokeWidth={1.5} />
                                </a>
                                <a href="https://www.instagram.com/tedxanuragu/" className="text-white hover:text-gray-300 transition-colors" target="_blank" 
  rel="noopener noreferrer">
                                    <Instagram size={28} strokeWidth={1.5} />
                                </a>
                                <a href="https://www.linkedin.com/company/tedxanuragu/?originalSubdomain=in" className="text-white hover:text-gray-300 transition-colors" target="_blank" 
  rel="noopener noreferrer">
                                    <Linkedin size={28} strokeWidth={1.5} />
                                </a>
                            </div>
                            <a href="/gallery">
                                <button className="font-bold border-2 px-8 md:px-12 py-2 border-black text-black hover:bg-red-500 hover:text-black transition-colors">
                                    Event Photos
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Middle section with links */}
                    <div className='flex flex-col gap-5 text-lg'>

                        <a href="/aboutus">About</a>
                        <a href="/connect-with-us">Contact Us</a>

                    </div>
                    <div className='flex flex-col gap-5 text-lg '>

                        <a href="">Nominate Speaker</a>
                        <a href="">Sponsor</a>
                        <a href="">Attendee Rules &<br /> Regulations</a>
                    </div>

                    {/* Right section with button and map */}
                    <div className="">
                        {/* Event Photos Button */}


                        {/* Google Maps Embed */}
                        <div className="w-full">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.67668622274!2d78.51668553808736!3d17.416770927111912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1733766357708!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                className="w-full h-64 rounded-lg"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
