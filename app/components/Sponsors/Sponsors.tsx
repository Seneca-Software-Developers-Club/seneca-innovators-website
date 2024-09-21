import React from "react";
import SponsorCard from "./SponsorCard";

const Sponsors: React.FC = () => {
  return (
    <>
      <p className="text-3xl font-bold mb-16">Meet Our Sponsors</p>
      <div className="flex flex-wrap gap-2 justify-evenly">
        <SponsorCard src="/media/ovhcloud.png" alt="OVHCloud" href="" />
        <SponsorCard src="/media/ssf.png" alt="SSF" href="https://ssfinc.ca/" />
        <SponsorCard
          src="/media/helix.png"
          alt="Seneca Helix"
          href="https://www.senecapolytechnic.ca/innovation/helix.html"
        />
      </div>
    </>
  );
};

export default Sponsors;
