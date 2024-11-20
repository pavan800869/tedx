"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function TalkSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    (<div className="w-full h-full py-20 bg-black">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Featured Talks at <span className="text-red-500">TedxAnuragU</span>
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}
const DummyContent = ({ source }) => {
  return (
    <div
      key={"dummy-content"}
      className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
    >
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <iframe
        
          src={`https://www.youtube-nocookie.com/embed/${getYouTubeVideoId(source)}?autoplay=1`} // Use the function to extract video ID
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </div>
  );
};

// Helper function to extract the YouTube video ID from the URL
const getYouTubeVideoId = (url) => {
  const urlObj = new URL(url);
  if (urlObj.hostname === "youtu.be") {
    return urlObj.pathname.split("/")[1];
  } else if (urlObj.hostname === "www.youtube.com" || urlObj.hostname === "youtube.com") {
    const params = new URLSearchParams(urlObj.search);
    return params.get("v");
  }
  return null; // Return null if not a valid YouTube URL
};

export default TalkSection;

const data = [
  {
    category: " Sekhar Kammula ",
    title: "Empathy – Highest Form of Knowledge |",
    src: "/tedx/speakers/1.svg",
    content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  },
  {
    category: " Sekhar Kammula ",
    title: "Empathy – Highest Form of Knowledge |",
    src: "/tedx/speakers/2.svg",
    content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  },
  {
    category: " Sekhar Kammula ",
    title: "Empathy – Highest Form of Knowledge |",
    src: "/tedx/speakers/3.svg",
    content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  },

  {
    category: " Sekhar Kammula ",
    title: "Empathy – Highest Form of Knowledge |",
    src: "/tedx/speakers/4.svg",
    content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  },
  {
    category: "Nagarjuna Muppala ",
    title: "Autonomy, Reclaiming Autonomy",
    src: "/tedx/speakers/5.svg",
    content: <DummyContent source={"https://youtu.be/_0zwG2fwLOU"} />,

  },
  {
    category: " Sekhar Kammula ",
    title: "Empathy – Highest Form of Knowledge |",
    src: "/tedx/speakers/1.svg",
    content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  },
];
