import React from "react";
import CaseCompetitionBanner from "../components/CaseCompetitionBanner/CaseCompetitionBanner";
import Sponsors from "../components/Sponsors/Sponsors";

const CaseCompetitionPage: React.FC = () => {
  return (
    <div className="pt-14">
      <CaseCompetitionBanner />
      <Sponsors />
    </div>
  );
};

export default CaseCompetitionPage;
