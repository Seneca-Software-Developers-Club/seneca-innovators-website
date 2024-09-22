'use client';
import React, { useState } from "react";

const FAQ: React.FC = () => {
    const faqs = [
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
      ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="font-sans relative flex flex-col items-center justify-center text-white px-4 md:px-16">
      <img
        alt="Background"
        src="/media/images/Background-rotated.jpeg"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div
        className="faq-container w-full max-w-6xl mx-auto my-10 p-4 md:p-8 bg-opacity-80"
        style={{ borderRadius: "8px", position: "relative" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#E63946", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}>
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"> {/* Changed to items-start */}
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="collapse"
      style={{ backgroundColor: "#1c1c1e", border: "1px solid #040404" }}
      onClick={() => toggleFAQ(index)}
    >
      <input type="checkbox" checked={expandedIndex === index} readOnly />
      <div className="collapse-title flex justify-between items-center text-lg md:text-xl font-medium" style={{ color: "#E63946" }}>
        <span>{faq.question}</span>
        <span style={{ color: "#E63946", transition: "transform 0.5s", transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
          &#x2193;
        </span>
      </div>
      {expandedIndex === index && (
        <div className="collapse-content" style={{ color: "#ffffff" }}>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default FAQ;