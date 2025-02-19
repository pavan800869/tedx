'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const speakersByYear = {
  2019: [
    {
      name: "Laxmi Bhawani",
      title: "Chief of UNICEF Gujarat",
      image: "/tedx/laxmiBhavani.jpg",
      profileUrl: "https://www.ted.com/profiles/laxmi-bhawani",
      description: "Dr. Laxmi Bhavani, Chief of UNICEF Gujarat is currently responsible for the coordination and management of the UNICEF Programmes in Gujarat State. She undertakes policy dialogue and advocacy with government and other partners for enhancement of children and women's rights. She served as the Child Development and Nutrition Specialist in UNICEF in Rajasthan, Andhra Pradesh, Telangana and Karnataka. She provided leadership to Early Child Development and Nutrition programmes in the states with upstreaming and evidence-based policy advocacy for children and women's rights to create enabling policy environment and its mainstreaming in poverty reduction and other development programmes. She has developed multisectoral and multi stakeholder networks and tried out inclusive and sustainable community based care models for promoting child development and nutrition with focus on tribal communities. She tried out knowledge models such as Community based Systems Dynamics on nutrition and Nutrition surveillance.",
    },
    {
      name: "Lokesh Nathany",
      title: "Founder, DiSRUPPt Thinking, Life, Business & Financial Coach",
      image: "/tedx/lokeshNathany.jpg",
      profileUrl: "https://www.ted.com/profiles/lokesh-nathany",
      description: "Lokesh Nathany, Founder, DiSRUPPt Thinking, Life, Business & Financial Coach & Networker. Before starting DiSRUPPt Thinking, he have worked for over 25 years in financial services industry for names like Franklin Templeton. HDFC, ICICI, MOTILAL OSWAL, Karvy etc. and managed both India and Middle East markets. He has done various programs on business TV channels & wrote regularly in all leading business newspapers, English Dailies, websites & magazines.",
    },
    {
      name: "Nag Ashwin",
      title: "Indian Film Director and Screenwriter",
      image: "/tedx/NagAshwin.jpg",
      profileUrl: "https://www.ted.com/profiles/nag-ashwin",
      description: "Nag Ashwin Reddy is an Indian film director and screenwriter from Hyderabad, Telangana. He is most known as a director for a Telugu-Tamil bilingual biopic \"Mahanati\", based on the life of late legendary south Indian actress Savitri.",
    },
    {
      name: "Nandita Sethi",
      title: "Founder & MD, The Entrepreneur Zone",
      image: "/tedx/nandithaSethi.jpg",
      profileUrl: "https://www.ted.com/profiles/nandita-sethi",
      description: "Dr. Nandita Sethi Founder & MD, The Entrepreneur Zone Vice-Chair, CII-Indian Women Network, Telangana, Mentor for Startups, Professor in Economics, Trainer and Author.",
    },
    {
      name: "Olly Esse",
      title: "International Music Artist and Performer",
      image: "/tedx/OllyEsse.jpeg",
      profileUrl: "https://www.ted.com/profiles/olly-esse",
      description: "Olly Esse is no stranger to the limelight. Known for her energetic performances on stage, she's a force to recon with. Having been performing around the globe for the past 13 years, she's humbled to have performed alongside some great musicians. With the success of her music, she's considered among the most anticipated upcoming music artists. Her music and charisma has earned her a huge fan base in India and globally.",
    },
    {
      name: "R. S. Praveen Kumar",
      title: "IPS Officer and Social Change Leader",
      image: "/tedx/RSPk.jpg",
      profileUrl: "https://www.ted.com/profiles/rs-praveen-kumar",
      description: "R. S. PRAVEEN KUMAR is an IPS officer of the 1995 batch, India. Dr Praveen Kumar is widely known as the brain behind the success story of the Everest conquerors Malavath Purna and Sandhanapalli Anand Kumar.",
    },
    {
      name: "Rakesh Pulapa",
      title: "Award-winning Landscape/Aerial Photographer",
      image: "/tedx/rakeshPulapa.avif",
      profileUrl: "https://www.ted.com/profiles/rakesh-pulapa",
      description: "He is a computer science engineer turned into Landscape/ Aerial photographer. He started photography as a hobby and soon evolved into a passionate Photographer. Achievements: Winner of National Geographic India Competition 2018, Finalist in National Geographic Travel Photographer of the year 2018, Winner of China tourism competition 2018, Winner of Click India Photography 2018, Gold Medalist in Eyewin awards 2018, and declared one of the 100 incredible passionate photographers in world 2018 by Palsmaniaa, Theme winner of Canon India 2017.",
    },
    {
      name: "Swami Bodhamayananda",
      title: "Director, Ramakrishna Math, Hyderabad",
      image: "/tedx/SwamiB.jpeg",
      profileUrl: "https://www.ted.com/profiles/swami-bodhamayananda",
      description: "Inspired by the teachings of Sri Ramakrishna, Swami Vivekananda and Vedanta during his school days, Swami Bodhamayananda joined the Ramakrishna Order after graduation in the Bangalore centre in 1984 and was initiated into monastic vows in 1993. After initial training, he served the Mission in Hyderabad, Visakhapatnam and Chennai between 1989 and 2010 and was involved in various youth activities during that period. Since May 2010 he is serving as the Director in Ramakrishna Math, Hyderabad.",
    },
    {
      name: "Tanya Mittal",
      title: "Miss Asia 2018, CEO of HANDMADE LOVE",
      image: "/tedx/taniyaMittal.jpg",
      profileUrl: "https://www.ted.com/profiles/tanya-mittal",
      description: "Tanya Mittal is 22 years old and hails from Gwalior, Madhya Pradesh. She is a student from Chandigarh University and has won the crown \"Miss Asia 2018\" at Lebanon. In addition to winning the crown \"Miss Asia Tourism Universe India 2018\", she is also one of the youngest millionaires of India running her brand, \"HANDMADE LOVE\" as the Chief Executive Officer which exemplifies her exceptional beauty with brains personality. She became a business woman at an ephebic age as she had the urge to make difference in the society through her positive work influence. Tanya is also Associate Director of Bliss Foundation, a successful YouTuber, a motivational speaker, poet & author. Apart from her extraordinary merits, she masters more than 55 crafts and her NGOs are working for the underprivileged across India. Adding to this, she was also declared \"The Outstanding Young Person of Gwalior 2018\" honoured by Yashodhara Raje Scindia.",
    },
  ],
  
  2023: [
    {
        name: "Gauranga Darshan Das",
        title: "Author, Monk and Teacher",
        image: "/tedx/speaker1.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker1", // Add actual profile URLs
        description: "Gauranga Darshan Das, an IIScian turned into a monk, and a disciple of His Holiness Radhanath Swami, he is a renowned spiritual teacher and author of over 30 books including the Subodhini series and Bhagavatam Tales. With over 7000 hours of discourses, he has been spreading the wisdom of spirituality in various forums including schools, colleges, and corporate events. As the Dean of the Bhaktivedanta Vidyapitha at ISKCON Govardhan Ecovillage and a member of the ISKCON Board of Examinations, Gauranga Darshan Das is a true leader in the spiritual community. Don't miss this chance to be guided on a journey of self-enrichment! \"Embark on a journey of self-discovery with Gauranga Darshan Das, a spiritual teacher and author of over 30 books. With a wealth of knowledge and experience, he'll guide you towards a deeper understanding of the self and a more fulfilling life. Join him at TEDxAnuragU for a transformative experience.\"",
      },
      {
        name: "Ishmeet Kaur",
        title: "Psychologist and Counseling",
        image: "/tedx/ishmeet.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker2",
        description: "Ishmeet Kaur With a Masters in Psychology and over 13 years of experience in counseling and training, Ishmeet is a true expert in the field. From relationship management to stress management, her clients and organizations, including Microsoft, Amazon, Google and the American Institute of Foreign Studies, have experienced the impact of her client-centric approach. Don't miss the opportunity to learn from this amazing speaker.",
      },
      {
        name: "Jagadeesh Reddy",
        title: "Natural Farmer",
        image: "/tedx/jagadeesh.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker3",
        description: "A deep understanding of nature and its behavior, which he believes is crucial for farming. He firmly believes that natural farming is the closest form of farming to nature, Join us in supporting Mr. Jagadeesh's mission to practice natural farming and save our soil from harmful chemicals only harm the nutritious soil. His strongest desire is to save the soil from these chemicals and pesticides .He is dedicated in promoting the use of natural manure and ZBNF practices.",
      },
      {
        name: "Ms. Anvitha Kollipara",
        title: "Founder of the non-profit organization Care Good",
        image: "/tedx/anvitha.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker4",
        description: "The first few steps to effective leadership include putting your age aside and periodically revisiting your goals! Ms. Anvitha Kollipara is an Indian-American social activist and the founder of the non-profit organisation \"Care Good\". Elderly people in need of resources are located by Care Good, and they are given medical assistance. She won several awards at a young age, including T Hub's Women Entrepreneur of the Year 2021. Anvitha was a featured speaker at the New Indian Express and Edex's 75th Indian Independence Day.",
      },
      {
        name: "Nagarjuna Muppala",
        title: "Entrepreneur and Founder (Almond House)",
        image: "/tedx/nm.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker5",
        description: "Nagarjuna Muppala retired from Almond House in the year 2014, he is now advocating entrepreneurial path to all the youngsters arguing that it can offer greater Security, Autonomy and Satisfaction irrespective of whether they succeed in making big wealth or not. In the past, he worked as a Systems Analysist, also as a management consultant with APPC and thereafter co-founded Plasti Lami Coats Pvt Ltd. He is interested in working for improvements in Primary School Education in rural India, with emphasis on Child Centric approach.",
      },
      {
        name: "Naman Vankdari",
        title: "Advocate, Asst professor and Co-founder (The Indian Conclave)",
        image: "/tedx/naman.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker6",
        description: "Naman is a renowned public speaker and a practicing advocate. He has served as the Advisory Board member of National Services Scheme (Bangalore University unit); Assistant Professor of Law (Guest Faculty) BMS College of Law, Bengaluru and President of University Law College & Department of Studies in Law Bangalore University Model United Nations Conference, among others. Naman's expertise in the field has earned him the opportunity to deliver lectures and conduct workshops at educational institutions and intergovernmental organizations across the globe. He has addressed the 1st Global Youth Forum Conference hosted by The Ministry of Justice, Government of Japan, and UNODC, and has trained and interacted with students from national and international diaspora on various important topics. As a young advocate, Naman is dedicated to serving justice to the youth and representing their aspirations.",
      },
      {
        name: "Nikhil Gunda",
        title: "Entrepreneur, Co-founder of an innovative transportation startup",
        image: "/tedx/nikhil.jpeg",
        profileUrl: "https://www.ted.com/profiles/speaker7",
        description: "Exciting news, everyone! We are thrilled to announce that Nikhil Gunda, a visionary entrepreneur, co-founder of an innovative transportation startup, and an alumnus of Anurag, will be speaking at our upcoming event. We are incredibly proud to invite one of our own as a speaker, and we can't wait to hear more about Nikhil's mission to create sustainable and cost-effective transportation solutions. His journey is truly inspiring, and we know that our audience will gain valuable insights from his experiences. Don't miss out on the chance to learn from Nikhil and other amazing speakers at our event! Stay tuned for more details.",
      },
      {
        name: "Pullela Gopichand",
        title: "Indian badminton player and Chief National Coach for the India national badminton team",
        image: "/tedx/pg.png",
        profileUrl: "https://www.ted.com/profiles/speaker8",
        description: "As the founder of the Gopichand Badminton Academy and coach to numerous Indian badminton champions, Gopichand has dedicated his life to the sport he loves and helped shape the future of Indian badminton. His relentless pursuit of excellence and unwavering commitment to his goals make him a true inspiration for all of us. We can't wait to hear Gopichand's insights on what it takes to overcome obstacles, chase your dreams, and achieve greatness. This is a once-in-a-lifetime opportunity to learn from one of the greatest athletes and coaches of our time.",
      },
      {
        name: "Sekhar Kammula",
        title: "Indian film director, screenwriter and producer",
        image: "/tedx/sk.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker9",
        description: "Sekhar Kammula With a multitude of awards to his credit, including two Filmfare Awards South and six state Nandi Awards, he is a force to reckon with in the industry. His prowess in the art of storytelling has captured the hearts of audiences worldwide, and his creative vision has inspired many. His achievements in the industry have earned him the honor of representing South Indian Cinema at the prestigious Cannes Film Festival in 2011, making him a true ambassador of Indian cinema. His unwavering passion for cinema and his commitment to excellence continue to make him a leading figure in the industry.",
      },
      {
        name: "Zain Samdani",
        title: "Scientist, Artist, Speaker and Inventor of ExoHeal",
        image: "/tedx/zain.jpg",
        profileUrl: "https://www.ted.com/profiles/speaker10",
        description: "A scientist, artist, and captivating speaker all rolled into one, this young prodigy has already achieved numerous awards and accolades. Don't miss this opportunity to hear from a true visionary and be prepared to have your perspective on art, science and life forever changed. We are thrilled to announce that Zain Samdani, who defies boundaries and blurs the lines between science, art, and public speaking the inventor of ExoHeal, a revolutionary robotic medical device that helps paralyzed patients have a faster, accessible and affordable recovery, will be speaking at TEDxAnuragU on 4th March. As a World Champion, Diana Award winner, and a Global Finalist in the Google Science Fair, Zain's dedication to improving the lives of others through his innovation and technology is truly inspiring. His feature in tech crunch ,Forbes ,times of India and many more, is a testimony of his hard work and dedication.",
      },
  ],
  2025: [
    {
        "name": "Sandilya Pisapati",
        "title": "Violinist, Singer, and Music Composer in the Telugu Film Industry",
        "image": "/tedx/sandy.jpg",
        "profileUrl": "https://www.instagram.com/sandilya_pisapati?igsh=MTYwamlwYjR6a3lwOA==",
        "description": "Sandilya Pisapati is a distinguished musician renowned for his expertise as a violinist, singer, and composer in the Telugu film industry. With a remarkable ability to blend classical and contemporary styles, his compositions have significantly contributed to critically acclaimed films such as Manam and Bimbisara. As the leader of the fusion band Denique Grooves, he continues to push musical boundaries, creating innovative soundscapes that resonate with audiences worldwide. His deep understanding of music, combined with a passion for storytelling through sound, makes him an influential figure in the Indian music industry."
    },
    {
        "name": "Riddhish Soni",
        "title": "CEO of Aumsat Technologies",
        "image": "/tedx/riddhish_soni.png",
        "profileUrl": "https://www.linkedin.com/in/riddhish-soni-b29225b8/",
        "description": "Riddhish Soni is the visionary CEO of Aumsat Technologies, a pioneering company specializing in satellite-based radar analytics for sustainable water management. Under his leadership, Aumsat Technologies has developed cutting-edge solutions to detect underground water sources, monitor pipeline leaks, and optimize water resource utilization. His work plays a crucial role in addressing global water security challenges by leveraging advanced space technology and artificial intelligence. With a strong commitment to sustainability, Riddhish aims to revolutionize the way governments and industries manage water resources, ensuring long-term ecological balance and efficient water conservation."
    },
    {
        "name": "Nishanth Dongari",
        "title": "Founder and Managing Director of PUR EV",
        "image": "/tedx/nishanth.jpg",
        "profileUrl": "https://www.linkedin.com/in/nishanthdongari/",
        "description": "Dr. Nishanth Dongari is an esteemed innovator, entrepreneur, and academic, recognized as the Founder and Managing Director of PUR EV, a leading electric vehicle (EV) and battery technology company. With a strong research background in energy storage systems, he has spearheaded the development of high-performance lithium-ion batteries, accelerating the transition toward sustainable mobility solutions in India. Under his leadership, PURE EV has grown into a key player in the electric two-wheeler market, delivering eco-friendly transportation solutions that prioritize efficiency, affordability, and environmental consciousness. His groundbreaking contributions to clean energy and EV technology are shaping the future of smart and sustainable urban mobility."
    },
    {
        "name": "Karthi Subbaraman",
        "title": "Design Leadership at Salesforce",
        "image": "/tedx/karthi.png",
        "profileUrl": "https://www.linkedin.com/in/skarthi/?originalSubdomain=in",
        "description": "A seasoned design leader currently driving Design Leadership at Salesforce, this individual is passionate about creating impactful user experiences and fostering innovation in product design. Beyond their role at Salesforce, they are also the Founder of #pifo, a not-for-profit foundation dedicated to supporting Product Innovators by providing resources, mentorship, and a collaborative environment focused on Betterment and Belonging. Their work emphasizes the importance of inclusive design, leadership, and social impact, shaping the future of product innovation through meaningful initiatives.",
    },
    {
        "name": "Nishtha Yogesh",
        "title": "Founder & CEO Hunar, Business 30 under 30",
        "image": "/tedx/nishitha2.png",
        "profileUrl": "https://www.linkedin.com/in/nishthay/",
        "description": "Nishtha Yogesh is a visionary entrepreneur and the Founder & CEO of Hunar Online Courses, a platform dedicated to empowering individuals with creative skills through online learning. Recognized in Business World’s 30 Under 30, she has made significant contributions to the edtech industry by helping learners, especially women, turn their creative passions into careers. Nishtha holds an MBA from Babson College, one of the world’s leading institutions for entrepreneurship. Based in the Greater Hyderabad Area, she is well-connected in the industry, with 500+ professional connections on LinkedIn. Through her leadership at Hunar Online Courses, she continues to drive innovation in skill-based education, fostering financial independence and professional growth for thousands of students.",
    },
    {
        "name": "Agniv Vinoth",
        "title": "Little Explorer, young video creator",
        "image": "/tedx/agniv.png",
        "profileUrl": "https://www.instagram.com/agniv_2018?igsh=MW55azFncXV6azRv",
        "description": "Agniv is a curious and creative child who loves rockets, robots, and all things fast! Encouraged to explore freely, he started his own channel at four, sharing his world with joy. His journey is entirely child-driven, allowing him to follow his passions and make his own choices.As an open-schooler, Agniv learns beyond textbooks, exploring the world at his own pace. From fun videos to global opportunities, his voice has inspired many."
    },
    {
        "name": "Amala Akkineni",
        "title": "Founder-Blue Cross, Director of Annapurna College of Film and Media, Indian Film Actress, Bharatanatyam Dancer, and Animal Welfare Advocate",
        "image": "/tedx/amala.png",
        "profileUrl": "https://www.instagram.com/akkineniamala?igsh=MWNjcTl4c2xyNGl6OA==",
        "description": "Amala Akkineni is the Director of Annapurna College of Film and Media, a renowned Indian actress, a Bharatanatyam dancer, a philanthropist, and an animal welfare advocate. She is a true changemaker from cinema to education and animal rights, her journey is all about passion and purpose. At TEDxAnuragU 2025 - Next Is Now, she takes the stage to share how compassion, creativity, and conscious choices are shaping the future."
    },
  ],
};

const years = Object.keys(speakersByYear).sort((a, b) => Number(b) - Number(a));

const SpeakerCards = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Year selection */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          {/* <h2 className="text-2xl font-bold text-neutral-600 mb-4">Select Year</h2> */}
          <div className="flex flex-col space-y-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`py-2 px-4 rounded-full text-lg font-extralight transition-colors duration-300 ${
                  selectedYear === year
                    ? ' text-white'
                    : ' text-neutral-600  hover:text-white'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Speakers grid */}
        <div className="md:w-3/4">
          <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
            Speakers of {selectedYear}
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakersByYear[selectedYear].map((speaker, index) => (
                <motion.div
                  key={index}
                  layoutId={`${selectedYear}-${index}`}
                  onClick={() => setSelectedId(index)}
                  className="flex flex-col items-center cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-red-600 text-center group-hover:text-red-400 transition-colors duration-300">
                    {speaker.name}
                  </h2>
                  <p className="text-sm text-center mt-2">{speaker.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
        {/*Modal*/}
      <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg max-w-6xl w-full mx-4 relative shadow-lg overflow-hidden overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, y: -50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ maxHeight: '90vh' }}
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl"
                >
                  &times;
                </button>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <Image
                      src={speakersByYear[selectedYear][selectedId].image}
                      alt={speakersByYear[selectedYear][selectedId].name}
                      width={384}
                      height={512}
                      className="rounded-lg md:rounded-xl mx-auto md:mx-0"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1 space-y-4 text-center md:text-left relative pb-8">
                    <h2 className="text-2xl font-bold text-red-600">
                      {speakersByYear[selectedYear][selectedId].name}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {speakersByYear[selectedYear][selectedId].title}
                    </p>
                    <p className="text-sm mb-6">
                      {speakersByYear[selectedYear][selectedId].description}
                    </p>
                    <a
                      href={speakersByYear[selectedYear][selectedId].profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bottom-2 py-2 px-4 bg-red-600 text-white text-center font-bold rounded-full hover:bg-red-700 transition-colors duration-300"
                    >
                      View Full Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

export default SpeakerCards;

