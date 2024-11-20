import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id='contact' className="w-full h-fit bg-red-800 text-white py-8 ">
            <div className="max-w-7xl mx-auto px-12">
                <div className="flex flex-col md:flex-row justify-between  gap-6">
                    {/* Left section with logo and text */}
                    <div className="flex flex-col justify-start my-auto ">
                        {/* TEDxKC Logo */}
                        <h1 className='text-5xl font-bold mb-2'>TedX <span className='font-extralight'>AnuragU</span> </h1>
                        {/* <Image src="/tedx/logo-white.png" width={400} height={50} alt="TEDxAnuragU Logo" /> */}


                        {/* License Text */}
                        <p className="text-sm text-gray-300 mb-2">
                            This independent TEDx event is operated under license from TED.
                        </p>

                        {/* Copyright */}
                        <p className="text-sm text-gray-300">
                            © TEDxAnuragU 2024
                        </p>
                    </div>
                    <div className='grid grid-col-2 gap-5 text-lg'>

                        
                        <a href="">Events</a>
                        <a href="">About</a>
                        <a href="">Contact Us</a>
                        <a href="">Attendee
                        Rules &<br /> Regulations</a>
                            



                    </div>
                    <div className='flex flex-col gap-5 text-lg '>

                        <a href="">Volunteer</a>
                        <a href="">Nominate Speaker</a>
                        <a href="">Sponsor</a>



                    </div>

                    {/* Right section with button and social media */}
                    <div className="flex flex-col items-start gap-6 my-auto">
                        {/* Event Photos Button */}
                        <a href="https://www.instagram.com/tedxanuragu/" target='_blank'><button className="font-bold border-2 px-8 md:px-12 py-2 border-red-500 text-white hover:bg-red-500 hover:text-white rounded-full transition-colors">
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