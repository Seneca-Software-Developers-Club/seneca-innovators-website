"use client";
import React, { useState } from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who makes up a team?",
      answer:
        "A team consists of a minimum of 2- and a maximum of 4 students, and it is recommended to have a student from each area of study, business, marketing and software development to ensure concept comprehension. However, this is not mandatory, and we still recommend you participate even if you can't form a diverse team.",
    },
    {
      question: "What if I can't form a diverse team?",
      answer:
        "Join our Seneca Innovators <a href='https://chat.whatsapp.com/DreSesvx2TE0nd3U2pCKbt' target='_blank' rel='noopener noreferrer' class='underline text-[#E63946] font-bold'>WhatsApp Group Chat</a> and communicate with students from different programs.",
    },
    {
      question: "What is a Case Competition?",
      answer:
        "A case competition is an academic competition in which students come together to solve a case that is presented. Students utilize their teamwork, critical thinking, analyzing, and organizational skills to deduce a recommendation that they support in a presentation in front of judges or company sponsors.",
    },
    {
      question:
        "Do I need to be in either Business, Marketing or Software Development programs to participate?",
      answer:
        "No, you do not need to be in any of these programs to participate. We encourage students from all programs to participate.",
    },
    {
      question: "Will this be held in-person or virtually?",
      answer:
        "A large part of this competition will be held virtually (which accomodates students from all campuses), but the final event (October 23rd) will be held in-person at the Newnham Campus, where the top 4 teams will present their solutions to the judges, and the winners will be announced.",
    },
    {
      question: "How much will it cost me?",
      answer: "It's free! There is no cost to participate in the competition.",
    },
    {
      question: "Is there only 1 prize?",
      answer:
        "No, there are multiple prizes to be won, with a $2000+ total prize pool.",
    },
    {
      question:
        "Are only active seneca students allowed or can I team up with students from other institutions/seneca alumini?",
      answer:
        "Currently we are only accepting active Seneca students, but we are looking to expand in the future.",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="font-sans relative flex flex-col items-center justify-center text-white px-4 md:px-16">
      <div
        className="faq-container w-full max-w-6xl mx-auto my-10 p-4 md:p-8 bg-opacity-80"
        style={{ borderRadius: "8px", position: "relative" }}
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-12 mb:mb-20"
          style={{
            color: "#E63946",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
          }}
        >
          Frequently Asked Questions
        </h1>
        <div className="min-h-[480px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {" "}
            {/* Changed to items-start */}
            {faqs.map((faq, index) => (
              <div
                key={faq.question + index}
                className="collapse collapse-plus"
                style={{
                  backgroundColor: "#1c1c1e",
                  border: "1px solid #040404",
                }}
                onClick={() => toggleFAQ(index)}
              >
                <input
                  type="checkbox"
                  checked={expandedIndex === index}
                  readOnly
                />
                <div
                  className="collapse-title flex justify-between items-center text-lg md:text-xl font-medium"
                  style={{ color: "#E63946" }}
                >
                  <span>{faq.question}</span>
                </div>
                {expandedIndex === index && (
                  <div
                    className="collapse-content"
                    style={{ color: "#e5e7eb" }}
                  >
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
