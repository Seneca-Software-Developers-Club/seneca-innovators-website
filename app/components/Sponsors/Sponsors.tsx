import React from "react";
import SponsorCard from "./SponsorCard";

const Sponsors: React.FC = () => {
  return (
    <div className="flex pt-32 flex-col mb-32 min-h-[730px] md:min-h-[500px]">
      <p className="text-4xl md:text-5xl font-bold text-center text-[#E63946] mb-16">
        Meet Our Sponsors
      </p>
      <div className="flex flex-wrap gap-12 justify-evenly">
        <SponsorCard src="/media/ovhcloud.png" alt="OVHCloud" href="" />
        <SponsorCard src="/media/ssf.png" alt="SSF" href="https://ssfinc.ca/" />
        <SponsorCard
          src="/media/helix.png"
          alt="Seneca Helix"
          href="https://www.senecapolytechnic.ca/innovation/helix.html"
        />
      </div>
    </div>
  );
};

export default Sponsors;
