"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const CaseCompIntro: React.FC = () => {
  return (
    <section className="py-28 px-8 md:px-24 bg-[#1F1E1E] text-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#E63946] mb-8">
          Seneca Innovators Case Competition
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-6 text-center">
          Seneca Innovators is partnering with{" "}
          <span className="font-bold">OVHcloud</span>, the largest cloud hosting
          provider in Europe and the third largest globally by physical servers,
          to present a real-world, ongoing business case to Seneca students.
        </p>

        <h3 className="text-3xl md:text-4xl font-semibold text-left mb-4 text-[#E63946]">
          Why Participate?
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Resume Boost */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Resume Boost</h4>
              <p className="text-gray-300">
                Enhance your resume with case competition participation.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Experience</h4>
              <p className="text-gray-300">
                Gain experience & exposure to solving real-world business
                problems.
              </p>
            </div>
          </div>

          {/* Prize Money */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Prize Money</h4>
              <p className="text-gray-300">
                Stand a chance to win up to $1,000.
              </p>
            </div>
          </div>

          {/* Networking */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Networking</h4>
              <p className="text-gray-300">
                Connect with peers, faculty, and industry leaders.
              </p>
            </div>
          </div>

          {/* Coaching & Training */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Coaching & Training</h4>
              <p className="text-gray-300">
                Improve your public speaking skills with professional coaching.
              </p>
            </div>
          </div>

          {/* Certificate of Achievement */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Certificate of Achievement</h4>
              <p className="text-gray-300">
                Earn a certificate to showcase your involvement.
              </p>
            </div>
          </div>

          {/* Teamwork */}
          <div className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
            <FiCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h4 className="text-xl font-bold">Teamwork</h4>
              <p className="text-gray-300">
                Encourages collaboration, mirroring workplace environments.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed mt-8 text-center">
          By engaging with a live business case, students will have the chance
          to make a meaningful impact on OVHcloud’s decision-making and advance
          their academic and professional growth.
        </p>
      </div>
    </section>
  );
};

export default CaseCompIntro;
