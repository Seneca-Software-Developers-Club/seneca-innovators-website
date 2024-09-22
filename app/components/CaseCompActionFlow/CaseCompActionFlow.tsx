import React from "react";
import {
  FaCalendarDay,
  FaCheckCircle,
  FaUsers,
  FaFileAlt,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";

const timelineSteps = [
  {
    icon: <FaUsers />,
    title: "Create a Team",
    description: "Create a team of 2-4 members.",
    label: "Starts",
    styleClass: "justify-end md:mr-8",
    date: "Monday, September 23, 2024",
  },
  {
    icon: <FaFileAlt />,
    title: "Executive Submission",
    description:
      "Analyze OVHcloud's challenges. Write a strategic recommendation (250 words max) and a biography of contributors (100 words max).",
    label: "Submission Deadline",
    styleClass: "justify-left md:ml-8",
    date: "Monday, September 30, 2024",
  },
  {
    icon: <FaCheckCircle />,
    title: "Selection Confirmation",
    description:
      "Wait for selection confirmation. Notifications will be sent to successful teams.",
    label: "Notification Date",
    styleClass: "justify-end md:mr-8",
    date: "Friday, October 4, 2024",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Prepare Your Presentation",
    description:
      "Create a 10-15 minute presentation deck. Register for the conference and submit your presentation to the organizers.",
    label: "Submission Deadline",
    styleClass: "justify-left md:ml-8",
    date: "Friday, October 18, 2024",
  },
  {
    icon: <FaCalendarDay />,
    title: "Attend the Competition",
    description:
      "Present your solutions to OVHcloud representatives at Seneca Polytechnic.",
    label: "Event Date",
    styleClass: "justify-end md:mr-8",
    date: "Wednesday, October 23, 2024",
  },
  {
    icon: <FaCertificate />,
    title: "Receive Your Certification",
    description:
      "Receive your certification for participation in the competition.",
    styleClass: "justify-left md:ml-8",
  },
];

const CaseCompActionFlow: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#1F1E1E]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#E63946] mb-10">
          Action Flow Timeline
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute h-full border-l-4 border-[#E63946] left-1/2 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 md:px-6">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl text-[#E63946]">{step.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                    <div className="mt-4 text-lg text-white">
                      <div className="font-bold">{step.label}</div>
                      {step.date && (
                        <span className="font-semibold text-gray-900 bg-[#f9f9f9] border border-gray-300 rounded-md px-2 py-1 mt-3 shadow-sm">
                          {step.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex relative">
                  <div className={`w-full flex ${step.styleClass}`}>
                    <div className="h-12 w-12 bg-[#E63946] rounded-full flex items-center justify-center text-white font-bold text-2xl z-10">
                      {index + 1}
                    </div>
                  </div>

                  <div className="block md:hidden w-full border-t-4 border-[#E63946] absolute top-1/2 transform -translate-y-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseCompActionFlow;
