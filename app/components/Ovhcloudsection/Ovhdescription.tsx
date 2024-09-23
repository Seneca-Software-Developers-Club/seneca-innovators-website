// components/Ovhcloudsection/Ovhcloudsection.tsx

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
//import AOS from "aos";
//import "aos/dist/aos.css";

const Ovhcloudsection = () => {
  useEffect(() => {
    //AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-[#1f1e1e] container mx-auto py-12 md:!px-36 sm:px-6 lg:px-8 mt-16 md:mt-32 mb-12"
      //data-aos="fade-up"
      aria-labelledby="ovh-cloud-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2
            id="ovh-cloud-heading"
            className="text-4xl font-bold text-[#E63946] mb-4"
          >
            Who is OVH Cloud?
          </h2>
          <p className="text-lg text-gray-200 font-semibold mb-6">
            OVHcloud is the largest cloud hosting provider in Europe and the
            third largest globally by the number of physical servers. Operating
            over 400,000 servers across 43 data centers on 4 continents, they
            provide a variety of cloud and hosting services, including public,
            private, and bare-metal cloud solutions. We are so excited to have
            these experts apart of our competition directly judging your
            submissions.
          </p>
          <ul className="list-disc pl-5 text-gray-200 mb-6">
            <li>Scalable Cloud Infrastructure</li>
            <li>High Availability and Security</li>
            <li>Cost-Effective and Transparent Pricing</li>
          </ul>
          <a
            href="https://www.ovhcloud.com/en-ca/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block px-6 py-3 bg-ovhc-blue text-gray-200 rounded-lg hover:bg-[#000b83] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            Learn More
          </a>
        </div>

        {/* Visual or Graphic */}

        <div
          className="flex mx-auto justify-center items-center bg-ovhc-blue w-[250px] h-[200px] lg:w-[350px] lg:h-[300px] rounded-[50px] lg:ml-40 lg:mr-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          onClick={() => window.open("https://www.ovhcloud.com/en-ca/")}
        >
          <Image
            src="/media/images/OVHcloud_stacked_logo_white_RGB.svg"
            alt="OVH Cloud Diagram"
            width={250}
            height={250}
            className="w-[150px] h-[100px] lg:w-[250px] lg:h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Ovhcloudsection;
