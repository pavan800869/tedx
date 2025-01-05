"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function TalkSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    (<div className="w-full h-fit mb-20  bg-black">
      <h2
        className="text-4xl md:text-7xl font-bold text-neutral-200 font-sans px-12">
        Featured Talks at <br /> <span className="text-3xl text-red-500"> TedxAnuragU</span>
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}
const DummyContent = ({ source }) => {
  return (
    <div
      key={"dummy-content"}
      className="bg-black p-8 md:p-14 rounded-3xl mb-4"
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
    title: "Empathy – Highest Form of Knowledge",
    src: "/tedx/speakers/1.webp",
    content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  },
  {
    category: "Tanya Mittal",
    title: "How To Start a Startup",
    src: "/tedx/speakers/5.webp",
    content: <DummyContent source={"https://youtu.be/NRc7tVYy7CM?si=V1Bqa0LxTvTHAhff"} />,

  },
  {
    category: "Nag Ashwin",
    title: "Dopamine and The Future of Cinema",
    src: "/tedx/speakers/2.webp",
    content: <DummyContent source={"https://youtu.be/NRc7tVYy7CM?si=V1Bqa0LxTvTHAhff"} />,

  },
  {
    category: "Pullela Gopichand ",
    title: "Sports for Physical Literacy",
    src: "/tedx/speakers/4.webp",
    content: <DummyContent source={"https://youtu.be/ob-1JSRdVzo?si=P_PppSIcNjqMAPMW"} />,

  },
  {
    category: "Olly Esse",
    title: "Never Fear The Change",
    src: "/tedx/speakers/3.webp",
    content: <DummyContent source={"https://youtu.be/Ol544Hu3jSQ?si=clLBpDshOv0W5CNI"} />,

  },


  {
    category: "R. S. Praveen Kumar ",
    title: "The Power of Vulnerability ",
    src: "/tedx/speakers/6.webp",
    content: <DummyContent source={"https://youtu.be/_0zwG2fwLOU?si=G8V57yIJmY7NBIMY"} />,

  },
  // {
  //   category: " Sekhar Kammula ",
  //   title: "Empathy – Highest Form of Knowledge |",
  //   src: "/tedx/speakers/1.webp",
  //   content: <DummyContent source={"https://youtu.be/dhsiWSpEBBc?si=AbDP0zM-XhvurH5o"} />,

  // },
];
