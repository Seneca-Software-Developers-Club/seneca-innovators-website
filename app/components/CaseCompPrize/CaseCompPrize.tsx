import React from "react";
import { FaTrophy } from "react-icons/fa";

const CaseCompPrize: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-8 md:p-16 max-w-full mx-auto text-center border-t-4 border-[#9E2424]">
      <div className="flex items-center justify-center mb-6">
        <FaTrophy className="text-8xl text-yellow-500 mb-4" />
      </div>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
        Win <span className="text-[#9E2424]">$1000</span> in Prizes
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Participate for a chance to win up to $100 in cash prizes. Showcase your
        skills and get recognized by industry leaders.
      </p>
      <button className="bg-[#9E2424] hover:bg-[#E63946] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        Join Now
      </button>
    </div>
  );
};

export default CaseCompPrize;
