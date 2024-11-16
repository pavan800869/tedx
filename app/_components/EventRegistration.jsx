import Image from 'next/image';
import React from 'react';

function EventRegistration() {
  return (
    <div className='mt-8 md:mt-14'>
      {/* Attend in Person Section */}
      <div className="bg-white text-black flex flex-col md:flex-row items-center gap-8 py-6 ">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={'/tedx/attend-in-person-2.png'}
            width={700}
            height={600}
            alt="Attend in person"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:p-12">
          <p className="text-transparent bg-clip-text font-bold text-3xl md:text-4xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48] text-center md:text-left">
            Attend in Person
          </p>
          <p className="text-center md:text-left">
            Join us at Anurag University’s APJ Abdul Kalam Hall for the Performing Arts on March 2, 2025, to connect with a diverse community on the timely examination of our ability to navigate the unknown.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="https://www.youtube.com/watch?v=HUvuJEs0gvU"><button className="font-bold border-2 px-8 py-2 border-[#fa3f7b] text-[#fa3f7b] hover:bg-[#fa3f7b] hover:text-white rounded-full">
              Performances
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Become a Volunteer Section */}
      <div className="bg-white text-black flex flex-col-reverse md:flex-row items-center gap-8 py-6 ">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:px-12">
          <p className="text-transparent bg-clip-text font-bold text-3xl md:text-4xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48] text-center md:text-left">
            Become a Volunteer
          </p>
          <p className="text-center md:text-left">
            Volunteers are the reason why TEDx AnuragU is one of the largest TEDx events in the world. In addition to being part of a great event, TEDx AnuragU volunteers get exclusive TEDx AnuragU details and behind-the-scenes opportunities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="font-bold border-2 px-6 py-2 border-black bg-black text-white rounded-full">
              Sign up for Volunteer
            </button>
            <button className="font-bold border-2 px-6 py-2 border-[#fa3f7b] text-[#fa3f7b] hover:bg-[#fa3f7b] hover:text-white rounded-full">
              Volunteer Updates
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={'/tedx/volunteer-2.png'}
            width={700}
            height={600}
            alt="Become a volunteer"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default EventRegistration;
