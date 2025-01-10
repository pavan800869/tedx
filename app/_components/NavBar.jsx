'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/aboutus' },
    { label: 'Speakers', href: '/speakers' },
    // { label: 'Gallery', href: '/gallery' },
    { label: 'Connect with us', href: '/connect-with-us' },
    
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <Disclosure as="nav" className="bg-neutral-950 w-full z-50 lg:sticky top-0 shadow-md py-2 border-b-2 border-neutral-900">
      <div className="flex flex-col justify-between max-w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/"><Image
              src="/tedx/logo-white.png"
              alt="TEDx Logo"
              width={200}
              height={400}
              className="h-10 md:h-14 lg:h-16 w-auto"
              priority
            /></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center ">
            <div className="flex gap-8 text-sm md:text-base font-semibold text-white ">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:underline underline-offset-8 hover:text-gray-300 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="border-2 px-6 py-2 font-bold border-red-600 bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                Register
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <DisclosureButton
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-4 px-6 pb-4 pt-2">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block text-white text-base font-semibold rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/3N46PQ"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            <button className="w-full border-2 px-6 py-2 rounded-full font-semibold border-red-600 bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
              Register Now
            </button>
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default NavBar;
