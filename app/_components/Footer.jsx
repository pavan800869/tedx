import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-8 ">
            <div className="max-w-7xl mx-auto px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left section with logo and text */}
                    <div className="flex flex-col justify-start">
                        {/* TEDxKC Logo */}

                        <Image src="/tedx/logo-white.png" width={400} height={50} alt="TEDxAnuragU Logo" />


                        {/* License Text */}
                        <p className="text-sm text-gray-300 mb-2">
                            This independent TEDx event is operated under license from TED.
                        </p>

                        {/* Copyright */}
                        <p className="text-sm text-gray-300">
                            © 2024 TEDxAnuragU
                        </p>
                    </div>

                    {/* Right section with button and social media */}
                    <div className="flex flex-col items-end gap-6">
                        {/* Event Photos Button */}
                        <a href="https://www.instagram.com/tedxanuragu/" target='_blank'><button className="font-bold border-2 px-8 md:px-12 py-2 border-[#fa3f7b] text-[#fa3f7b] hover:bg-[#fa3f7b] hover:text-white rounded-full transition-colors">
                            Event Photos
                        </button>
                        </a>

                        {/* Social Media Icons */}
                        <div className="flex gap-6">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Facebook size={28} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Instagram size={28} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Linkedin size={28} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;