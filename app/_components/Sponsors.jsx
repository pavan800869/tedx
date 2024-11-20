import Image from 'next/image';
import React from 'react';

function Sponsors() {
  return (
    <div id='partners' className="bg-[#010100] text-center py-8">
      {/* Heading */}
      <div>
        <p className="text-transparent bg-clip-text font-bold text-3xl sm:text-4xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48]">
          Thank you to our Sponsors
        </p>
      </div>

      {/* Sponsors Logos */}
      <div className="flex flex-wrap gap-6 justify-center p-4 sm:p-8 mt-8">
        <Image
          src={'/tedx/sponsor1.png'}
          alt="Sponsor 1"
          width={350}
          height={250}
          className="w-full sm:w-auto max-w-[300px]"
        />
        <Image
          src={'/tedx/sponsors.png'}
          alt="Sponsor 2"
          width={500}
          height={500}
          className="w-full sm:w-auto max-w-[400px]"
        />
      </div>
    </div>
  );
}

export default Sponsors;
