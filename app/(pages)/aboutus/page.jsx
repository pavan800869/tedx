import React from "react";

const TeamCards = () => {
  const speakers = [
    {
      name: "Anurag Palla",
      title: "Organizer",
      image: "/tedx/anuragSir.jpeg",
      profileUrl: "https://www.ted.com/profiles/15544804/about",
    },
    {
      name: "Tara Singh Thakur",
      title: "Co-organizer",
      image: "/taraSir.jpeg",
      profileUrl: "https://www.ted.com/profiles/18764268/about",
    },
  ];

  return (
    <div className="bg-black text-neutral-300 px-6 lg:px-16 pb-16 mt-10 lg:mt-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-red-600">TED</span> is a nonprofit organization
          devoted to ideas worth spreading
        </h1>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          Discover inspiring ideas, connect with passionate speakers, and join
          the global movement for innovation and creativity.
        </p>
      </div>

      {/* About TED and TEDx */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
            About <span className="text-red-600">TED</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Technology, Entertainment, and Design have driven global
            conferences with the spirit of ideas worth spreading since 1984.
            TED welcomes people from every discipline and culture, passionately
            believing in the power of ideas to change attitudes, lives, and
            ultimately the world.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
            About <span className="text-red-600">TEDx</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            TEDx is a program of self-organized events bringing people together
            to share TED-like experiences. Local events branded as TEDx spark
            deep discussions and connections, guided by TED’s overarching
            principles.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-red-600 mb-4">
          The #AnythingIsPossible Team
        </h1>
        <p className="text-neutral-400 text-lg">
          Meet the passionate individuals who make it all happen.
        </p>
      </div>

      {/* Speaker Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {speakers.map((speaker, index) => (
          <a
            key={index}
            href={speaker.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-gradient-to-t from-red-500 to-red-700 p-[4px] group-hover:scale-105 transition-transform duration-300">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold mt-6 text-neutral-100 group-hover:text-red-500 transition-colors duration-300">
              {speaker.name}
            </h2>
            <p className="text-neutral-400 mt-2">{speaker.title}</p>
            <div className="mt-4 bg-red-600 text-white text-sm py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Profile
            </div>
          </a>
        ))}
      </div>

      {/* Footer Call-to-Action */}
      <div className="flex justify-center mt-16">
        <button className="font-bold text-lg px-12 py-3 border-2 border-red-600 text-black-600  hover:bg-red-600 hover:text-white transition-colors duration-300">
          Keep in touch
        </button>
      </div>
    </div>
  );
};

export default TeamCards;
