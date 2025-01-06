import { ArrowRight, ArrowRightCircleIcon, Facebook, FacebookIcon, Handshake, Instagram, Linkedin, Mail, Mic, Mic2Icon, Twitter, TwitterIcon, X } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function ConnectWithUs() {
  return (
    <div className="min-h-screen bg-black text-neutral-600 p-8 flex flex-col items-start">



      <div className="grid md:grid-cols-1 gap-8 w-full ">
        {/* Nominate Speaker Card */}
        <div className="p-6 py-12 shadow-xl transition-all duration-300 ease-in-out border-b">
          <Mic className=" text-white font-bold transition duration-200 h-24 w-24" />

          <p className="text-white mb-4 mt-4">Know someone who belongs on our stage ?</p>
          <div className='flex gap-2'>
          <Link
              href="/nominate-speaker"
              className=" text-white  transition duration-200"
            >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Nominate Speaker</h2>
            </Link>
            <Link
              href="/nominate-speaker"
              className=" text-white"
            >
              <ArrowRightCircleIcon className='h-12 w-12' />
            </Link>
          </div>
        </div>

        {/* Partner with Us Card */}
        <div className="p-6 py-12  shadow-xl transition-all duration-300 ease-in-out border-b">
          <Handshake className=" text-white font-bold transition duration-200 h-24 w-24" />

          <p className="text-white mb-4">Want to support TEDx Hyderabad as a sponsor ?</p>
          <div className='flex gap-2'>
          <Link
              href="/nominate-speaker"
              className=" text-white  transition duration-200"
            >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Partner With us</h2>
            </Link>
            <Link
              href="/nominate-speaker"
              className=" text-white  transition duration-200"
            >
              <ArrowRightCircleIcon className='h-12 w-12' />
            </Link>
          </div>
        </div>

        {/* Contact Us Card */}
        <div className=" p-6 py-12 shadow-xl transition-all duration-300 ease-in-out  border-b">
         
          <p className="text-white mb-4">Feel free to reach out through our social media or email.</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <div className="flex justify-start gap-6 mt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
              <Twitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/tedxanuragu/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
              < Instagram />
            </a>
            <a href="https://www.linkedin.com/company/tedxanuragu/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400">
              <Linkedin />
            </a>

            <a href="mailto:tedx@anurag.edu.in" className="text-white text-3xl hover:text-gray-400"><Mail /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWithUs;
