import React from "react";
import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import BackToTopButton from "./BackToTopButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#9E2424] text-white py-8 px-4 font-['Roboto_Mono']">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="mb-8 lg:mb-0 text-center lg:text-left">
          <a
            href="https://g.co/kgs/opCE5wi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            <p className="font-bold mb-2">Address</p>
            <p>Seneca Polytechnic</p>
            <p>1750 Finch Ave East</p>
            <p>Toronto, Ontario, Canada</p>
            <p>M2J 2X5</p>
          </a>
          <p className="mt-4 text-sm">
            Copyright &copy; {new Date().getFullYear()} Seneca Innovators
          </p>
          <p className="text-sm">All rights reserved</p>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          {/* <div className="flex justify-center lg:justify-end space-x-4 mb-4">
            <SocialIcon
              href="https://www.instagram.com/seneca_sdc?igsh=enZ0d21kZnM4eXQ4"
              icon={FaInstagram}
            />
            <SocialIcon href="https://dribbble.com" icon={FaDribbble} />
            <SocialIcon href="https://twitter.com" icon={FaTwitter} />
            <SocialIcon href="https://www.youtube.com" icon={FaYoutube} />
            <SocialIcon
              href="https://www.linkedin.com/company/seneca-software-developers-club/"
              icon={FaLinkedin}
            />
          </div> */}
          <div className="text-center lg:text-right">
            <p className="font-bold mb-2">Email Us:</p>
            <a
              href="mailto:info.senecainnovators@gmail.com"
              className="hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              info.senecainnovators@gmail.com
            </a>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ElementType }> = ({
  href,
  icon: Icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-xl sm:text-2xl p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 ease-in-out transform hover:scale-110"
  >
    <Icon />
  </a>
);

export default Footer;
