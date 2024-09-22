// components/Ovhcloudsection/Ovhcloudsection.tsx

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import OvhCloudDiagram from "/public/ovh-cloud-diagram.jpg"; // adjust path if necessary

const Ovhcloudsection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-gray-200 container mx-auto py-12 px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      aria-labelledby="ovh-cloud-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2
            id="ovh-cloud-heading"
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            What is OVH Cloud?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            OVHcloud is a leading global cloud provider specializing in offering
            scalable, secure, and reliable solutions to businesses of all sizes.
            Whether you need web hosting, dedicated servers, or virtual cloud
            infrastructure, OVHcloud provides cost-effective services tailored
            to your needs.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Scalable Cloud Infrastructure</li>
            <li>High Availability and Security</li>
            <li>Cost-Effective and Transparent Pricing</li>
          </ul>
          <a
            href="https://www.ovhcloud.com/en-ca/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            Learn More
          </a>
        </div>

        {/* Visual or Graphic */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={OvhCloudDiagram}
            alt="OVH Cloud Diagram"
            className="max-w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Ovhcloudsection;
