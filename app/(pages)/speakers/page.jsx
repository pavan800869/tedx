import React from 'react';

const SpeakerCards = () => {
    const speakers = [
        {
            name: "Gauranga Darshan Das",
            title: "Author, Monk and Teacher",
            image: "/tedx/speaker1.jpeg",
            profileUrl: "https://www.ted.com/profiles/speaker1" // Add actual profile URLs
        },
        {
            name: "Ishmeet Kaur",
            title: "Psychologist and Counseling",
            image: "/tedx/ishmeet.jpg",
            profileUrl: "https://www.ted.com/profiles/speaker2"
        },
        {
            name: "Jagadeesh Reddy",
            title: "Natural Farmer",
            image: "/tedx/jagadeesh.jpeg",
            profileUrl: "https://www.ted.com/profiles/speaker3"
        },
        {
            name: "Ms. Anvitha Kollipara",
            title: "Founder of the non-profit organization Care Good",
            image: "/tedx/anvitha.jpeg",
            profileUrl: "https://www.ted.com/profiles/speaker4"
        },
        {
            name: "Nagarjuna Muppala",
            title: "Entrepreneur and Founder (Almond house)",
            image: "/tedx/nm.jpg",
            profileUrl: "https://www.ted.com/profiles/speaker5"
        },
        {
            name: "Naman Vankdari",
            title: "Advocate, Asst professor and Co-founder (The Indian Conclave)",
            image: "/tedx/naman.jpg",
            profileUrl: "https://www.ted.com/profiles/speaker6"
        },
        {
            name: "Nikhil Gunda",
            title: "Entrepreneur, Co-founder of an innovative transportation startup",
            image: "/tedx/nikhil.jpeg",
            profileUrl: "https://www.ted.com/profiles/speaker7"
        },
        {
            name: "Pullela Gopichand",
            title: "Indian badminton player and Chief National Coach for the India national badminton team",
            image: "/tedx/pg.png",
            profileUrl: "https://www.ted.com/profiles/speaker8"
        },
        {
            name: "Sekhar Kammula",
            title: "Indian film director, screenwriter and producer",
            image: "/tedx/sk.jpg",
            profileUrl: "https://www.ted.com/profiles/speaker9"
        },
        {
            name: "Zain Samdani",
            title: "Scientist, Artist, Speaker and Inventor of ExoHeal",
            image: "/tedx/zain.jpg",
            profileUrl: "https://www.ted.com/profiles/speaker10"
        },
    ];

    return (
        <div className="bg-black p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-bold text-center text-4xl bg-gradient-to-t text-red-600">
                    Be inspired by 12+ speakers
                </h1>
                <p className="text-white text-xl p-8 text-center">
                    Stay tuned for speaker announcements
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {speakers.map((speaker, index) => (
                        <a
                            key={index}
                            href={speaker.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative">
                                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-52 lg:h-52 rounded-full overflow-hidden bg-gradient-to-t from-[#fa3f7b] to-[#f10f48] p-[4px] transition-transform duration-300 group-hover:scale-105">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                                    </div>
                                </div>
                                {/* Profile link indicator */}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                                    View Profile
                                </div>
                            </div>
                            <h2 className="text-pink-500 text-base sm:text-lg lg:text-xl font-bold mt-4 text-center group-hover:text-red-500 transition-colors duration-300">
                                {speaker.name}
                            </h2>
                            <p className="text-white text-center mt-2 max-w-xs text-sm sm:text-base">
                                {speaker.title}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <button className="font-bold border-2 px-8 sm:px-12 py-2 border-white bg-white text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                    Get Tickets
                </button>
            </div>
        </div>
    );
};

export default SpeakerCards;