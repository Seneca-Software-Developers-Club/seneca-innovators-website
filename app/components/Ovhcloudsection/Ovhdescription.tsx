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
      className="bg-[#1f1e1e] container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-32 mb-12"
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
            What is OVH Cloud?
          </h2>
          <p className="text-lg text-gray-200 font-semibold mb-6 ">
            OVHcloud is a leading global cloud provider specializing in offering
            scalable, secure, and reliable solutions to businesses of all sizes.
            Whether you need web hosting, dedicated servers, or virtual cloud
            infrastructure, OVHcloud provides cost-effective services tailored
            to your needs.
          </p>
          <ul className="list-disc pl-5 text-gray-200 mb-6">
            <li>Scalable Cloud Infrastructure</li>
            <li>High Availability and Security</li>
            <li>Cost-Effective and Transparent Pricing</li>
          </ul>
          <a
            href="https://www.ovhcloud.com/en-ca/"
            className="inline-block px-6 py-3 bg-ovhc-blue text-white rounded-lg hover:bg-[#000b83] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            Learn More
          </a>
        </div>

        {/* Visual or Graphic */}
        <div className="flex justify-center items-center bg-ovhc-blue w-[350px] h-[300px] rounded-[50px] md:ml-40">
          <Image
            src="/media/images/OVHcloud_stacked_logo_white_RGB.svg"
            alt="OVH Cloud Diagram"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Ovhcloudsection;
