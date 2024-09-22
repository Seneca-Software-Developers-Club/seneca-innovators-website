import { url } from "inspector";
import React from "react";

const FAQ: React.FC = () => {
  // Sample data for questions and answers
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="font-sans relative h-screen flex flex-col items-center justify-center text-white px-4 md:px-16">
      <img
        alt="Background"
        src="/media/images/Background-rotated.jpeg"
        className="absolute inset-0 object-cover w-full h-full"
      />
    <div
      className="faq-container w-full max-w-6xl mx-auto my-10 p-4"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        padding: "2rem",
        position: "relative",
      }}
    >
      <h1
        className="text-4xl font-bold text-center mb-10"
        style={{
          color: "#E63946",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
        }}
      >
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div>
          {faqs.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              className="collapse mb-2 rounded-md"
              style={{
                backgroundColor: "#1c1c1e",
                border: "1px solid #E63946",
              }}
            >
              <input type="checkbox" />
              <div
                className="collapse-title text-xl font-medium"
                style={{ color: "#E63946" }}
              >
                {faq.question}
              </div>
              <div className="collapse-content" style={{ color: "#ffffff" }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Second Column */}
        <div>
          {faqs.slice(4, 8).map((faq, index) => (
            <div
              key={index + 4}
              className="collapse mb-2 rounded-md"
              style={{
                backgroundColor: "#1c1c1e",
                border: "1px solid #E63946",
              }}
            >
              <input type="checkbox" />
              <div
                className="collapse-title text-xl font-medium"
                style={{ color: "#E63946" }}
              >
                {faq.question}
              </div>
              <div className="collapse-content" style={{ color: "#ffffff" }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default FAQ;
