import React from 'react';

const SpeakerCards = () => {
    const speakers = [
        {
            name: "Gauranga Darshan Das",
            title: "Author, Monk and Teacher",
            image: "/tedx/speaker1.jpeg"
        },
        {
            name: "Ishmeet Kaur",
            title: "Psychologist and Counseling",
            image: "/tedx/ishmeet.jpg"
        },
        {
            name: "Jagadeesh Reddy",
            title: "Natural Farmer",
            image: "/tedx/jagadeesh.jpeg"
        },
        {
            name: "Ms. Anvitha Kollipara",
            title: "Founder of the non-profit organization Care Good",
            image: "/tedx/anvitha.jpeg"
        },
        {
            name: "Nagarjuna Muppala",
            title: "Entrepreneur and Founder (Almond house)",
            image: "/tedx/nm.jpg"
        },
        {
            name: "Naman Vankdari",
            title: "Advocate, Asst professor and Co-founder (The Indian Conclave)",
            image: "/tedx/naman.jpg"
        },
        {
            name: "Nikhil Gunda",
            title: "Entrepreneur, Co-founder of an innovative transportation startup",
            image: "/tedx/nikhil.jpeg"
        },
        {
            name: "Pullela Gopichand",
            title: "Indian badminton player and Chief National Coach for the India national badminton team",
            image: "/tedx/pg.png"
        },
        {
            name: "Sekhar Kammula",
            title: "Indian film director, screenwriter and producer",
            image: "/tedx/sk.jpg"
        },
        {
            name: "Zain Samdani",
            title: "Scientist, Artist, Speaker and Inventor of ExoHeal",
            image: "/tedx/zain.jpg"
        },
    ];

    return (
        <div className="bg-black min-h-screen p-6 sm:p-8 mt-14">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-transparent bg-clip-text font-bold text-center text-2xl sm:text-4xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48]">
                    Be inspired by 12+ speakers
                </h1>
                <p className="text-white text-base sm:text-xl mb-8 text-center">
                    Stay tuned for speaker announcements
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-800 hover:scale-105 transition-transform"
                        >
                            <div className="relative group">
                                <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gradient-to-t from-[#fa3f7b] to-[#f10f48] p-[4px]">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-pink-500 text-sm sm:text-lg font-bold mt-4">
                                {speaker.name}
                            </h2>
                            <p className="text-white mt-2 text-xs sm:text-base max-w-xs">
                                {speaker.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex items-center justify-center mt-8">
                <button className="font-bold border-2 px-8 sm:px-12 py-2 border-white bg-white text-black rounded-full hover:bg-gray-200 transition">
                    Get Tickets
                </button>
            </div>
        </div>
    );
};

export default SpeakerCards;
