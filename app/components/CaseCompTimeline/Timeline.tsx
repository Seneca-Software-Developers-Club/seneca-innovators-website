"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "daisyui/dist/full.css";
import "./Timeline.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timelineEvents = [
    { year: "2021", title: "Event One", description: "Description of event one" },
    { year: "2022", title: "Event Two", description: "Description of event two" },
    { year: "2023", title: "Event Three", description: "Description of event three" },
    { year: "2024", title: "Event Four", description: "Description of event four" },
  ];

  return (
    <section className="container mx-auto pt-20 pb-12 relative bg-gradient-to-b from-gray-800 to-black text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Timeline</h2>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white h-full animate-growVerticalLine"></div>
      <div className="space-y-8 mx-10">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start`}
            data-aos="fade-up"
            data-aos-delay={`${500 + index * 150}`}
          >
            <div className={`timeline-item w-full md:w-2/5 shadow-lg rounded-lg p-6`}>
              <span className="text-lg font-bold">{event.year}</span>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p>{event.description}</p>
            </div>
            {/* Dot and branch */}
            <div className="relative flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-500 timeline-dot"></div>
              {/* Branch line */}
              <div className={`timeline-branch-line ${index % 2 === 0 ? "left-0" : "right-0"} animate-growHorizontalLine`}
                   style={{animationDelay: `${0.5 * index}s`}}></div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Timeline;
