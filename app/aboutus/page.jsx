import React from 'react';

const TeamCards = () => {
  const speakers = [
    {
      name: "Anurag Palla",
      title: "Organizer",
      image: "/tedx/anuragSir.jpeg"
  },
  {
      name: "Tara Singh Thakur",
      title: "Co-organizer",
      image: "/tedx/taraSir.jpeg"
  },


  ];

  return (
    <div className="bg-black min-h-screen px-16 mt-14">
      <div className='text-neutral-500 text-center mb-14'>
        <h1 className='text-4xl font-extrabold p-8 '> <span className='text-red-600'>TED</span> is a nonprofit organization devoted to ideas worth spreading</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-start text-2xl mt-12'>
          <div>
            <h1 className='font-extrabold text-2xl'>About <span className='text-red-600 text-4xl'>TED</span></h1>
            <p>Technology, Entertainment and Design, the set of global conferences have been going with the spirit of ideas worth spreading since1984. TED isa global community, welcoming people from every discipline and culture who seek a deeper understanding of the world. TED believes passionately in the power of ideas to change attitudes, lives and, ultimately, the world. TED is owned by a nonprofit, nonpartisan foundation. The agenda is to make great ideas accessible and spark conversation.</p>
          </div>
          <div>
            <h1 className='font-extrabold text-2xl'>About <span className='text-red-600 text-4xl'>TEDx</span></h1>
            <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people to get her to share a TED-like experience. Ata TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.(Subject to certain rules and regulations.)</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className=" font-bold text-center text-6xl text-red-600">
          The #AnythingIsPossible Team

        </h1>
        <p className="text-neutral-500 text-xl mb-12 text-center">
          Stay tuned for speaker announcements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  py-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center py-8">
              <div className="relative group">
                <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gradient-to-t from-[#fa3f3f] to-[#f72121] p-[4px]">
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