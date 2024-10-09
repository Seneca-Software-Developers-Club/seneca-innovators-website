"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ITimeRemaining } from "@/app/interfaces";
//import { Button } from "@nextui-org/react";
//import { FiArrowRight } from "react-icons/fi";

const CaseCompBanner: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<ITimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const endDate = new Date("2024-10-23T16:00:00Z");

  const calculateTimeRemaining = () => {
    const now = new Date();
    const totalSeconds = Math.floor((endDate.getTime() - now.getTime()) / 1000);
    const days = Math.max(Math.floor(totalSeconds / 86400), 0);
    const hours = Math.max(Math.floor((totalSeconds % 86400) / 3600), 0);
    const minutes = Math.max(Math.floor((totalSeconds % 3600) / 60), 0);

    setTimeRemaining({ days, hours, minutes });
  };

  useEffect(() => {
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="font-sans relative h-screen flex flex-col items-center justify-center text-white px-4 md:px-16">
      <Image
        alt="Background"
        src="/media/images/Background.png"
        layout="fill"
        quality={100}
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1F1E1E] to-transparent flex flex-col items-center justify-center p-6 text-left">
        <div className="flex flex-col items-center mb-4 text-center md:w-2/3">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[#E63946] drop-shadow-2xl">
            Case Competition 2024
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold mb-6 text-[#FFFFFF] flex items-center">
            In partnership with{" "}
            <Image
              alt="OVH Cloud Logo"
              src="/media/images/OVHcloud_master_logo_white_RGB.svg"
              width={100}
              height={100}
              className="ml-2 h-10 w-auto hidden md:inline"
            />
          </h2>
          <Image
            alt="OVH Cloud Logo"
            src="/media/images/OVHcloud_master_logo_white_RGB.svg"
            width={100}
            height={100}
            className="ml-2 h-10 w-auto mb-6 md:hidden"
          />
          <h3 className="text-sm md:text-lg font-medium mb-6 text-[#E0E0E0]">
            Brought to you by Seneca Innovators
          </h3>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            {Object.entries(timeRemaining).map(([unit, value], index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-[#9E2424] rounded-lg shadow-2xl text-white transform transition-transform hover:scale-105"
              >
                <span
                  className="countdown font-mono text-3xl md:text-4xl"
                  // @ts-expect-error: This is responsible for the animation
                  style={{ "--value": value }}
                >
                  <span></span>
                </span>
                <span className="text-sm md:text-lg mt-2">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:w-2/6">
          {/*<Button
            className="flex items-center mx-2 py-4 mb-2 bg-[#9E2424] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
            onClick={() =>
              window.open(
                "",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Register Now
            <FiArrowRight className="ml-2 animate-pulse" />
          </Button>
          <Button
            className="flex items-center mx-2 py-4 mb-2 bg-[#E63946] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
            disabled
            onClick={() =>
              window.open(
                "https://forms.office.com/r/DgCQWtMKgh",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Round 1 Submission
            <FiArrowRight className="ml-2 animate-pulse" />
          </Button>
          <Button
            className="flex items-center mx-2 py-4 bg-[#463636] hover:bg-[#1F1E1E] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
            onClick={() =>
              window.open("/case.pdf", "_blank", "noopener,noreferrer")
            }
          >
            Download Case
            <FiArrowRight className="ml-2 animate-pulse" />
          </Button>*/}
        </div>
      </div>
    </div>
  );
};

export default CaseCompBanner;
