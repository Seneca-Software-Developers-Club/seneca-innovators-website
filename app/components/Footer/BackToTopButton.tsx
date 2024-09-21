"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#CC0000] text-white p-3 rounded-full shadow-lg hover:bg-[#9E2424] transition-all duration-300 ease-in-out transform hover:scale-110"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
