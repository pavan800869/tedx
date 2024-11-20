'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar() {
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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <Disclosure as="nav" className="bg-[#010100] w-full z-50 lg:sticky top-0 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Image
              src={'/tedx/logo-white.png'}
              alt="TEDx Logo"
              width={400}
              height={400}
              className="w-auto h-8 md:h-20 lg:h-20 "
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8 text-base font-bold text-white">
              <a href="" className="transition-all duration-200 hover:opacity-80">
                <h1 className="underline underline-offset-8">Home</h1>
              </a>
              <a href="" className="transition-all duration-200 hover:opacity-80">
                <h1>Speakers</h1>
              </a>
            </div>
            <a
              href="https://tally.so/r/3N46PQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="border-2 px-8 py-4 rounded-full border-[#fa3f7b] text-[#fa3f7b] hover:bg-[#fa3f7b] hover:text-white transition-all duration-300">
                speaking at <span className="font-bold">Tedx AnuragU</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0  flex items-center sm:hidden">
            <DisclosureButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href=""
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#fa3f7b] hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href=""
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#fa3f7b] hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Speakers
          </a>
          <a
            href="https://tally.so/r/3N46PQ"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full"
          >
            <button className="w-full border-2 px-6 py-3 rounded-full border-[#fa3f7b] text-[#fa3f7b] hover:bg-[#fa3f7b] hover:text-white transition-all duration-300">
              speaking at <span className="font-bold">Tedx AnuragU</span>
            </button>
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default NavBar;
