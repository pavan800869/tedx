import React from 'react';

const TeamCards = () => {
    const speakers = [
        {
            name: "Tara Singh Thakur",
            title: "Organizer",
            image: "/tedx/taraSir.jpeg"
        },
        {
            name: "Anurag Palla",
            title: "Co-organizer",
            image: "/tedx/anuragSir.jpeg"
        },
       
        
    ];

    return (
        <div className="bg-black min-h-screen p-8 mt-14">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-transparent bg-clip-text font-bold text-center text-4xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48]">
                The TEDxAnuragU Team

                </h1>
                <p className="text-neutral-500 text-xl mb-12 text-center">
                    Stay tuned for speaker announcements
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  py-8">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col items-center py-8">
                            <div className="relative group">
                                <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gradient-to-t from-[#fa3f7b] to-[#f10f48] p-[4px]">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover grayscale"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                    </div>
                                </div>

                            </div>
                            <h2 className="text-pink-500 text-xl font-bold mt-4 text-center">
                                {speaker.name}
                            </h2>
                            <p className="text-neutral-500 text-center mt-2 max-w-xs">
                                {speaker.title}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
            <div className='flex items-center justify-center'> 
                <button className=" font-bold border-2 px-12 py-2 border-white bg-white text-black rounded-full ">
                Keep in touch
            </button>
            </div>

        </div>
    );
};

export default TeamCards;