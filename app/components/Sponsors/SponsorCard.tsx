import React from "react";
import Image from "next/image";

interface SponsorCardProps {
  src: string;
  alt: string;
  href: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ src, alt, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="h-[100px] hover:h-[115px] w-[200px] hover:w-[230px] transition-all duration-300 p-3 rounded-xl bg-white flex items-center shadow-seneca-bright-red">
        <Image height={250} width={250} alt={alt} src={src} />
      </div>
    </a>
  );
};

export default SponsorCard;
