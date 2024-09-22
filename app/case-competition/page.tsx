import React from "react";
import CaseCompetitionBanner from "../components/CaseCompetitionBanner/CaseCompetitionBanner";
import FAQ from "../components/FAQ/FAQ";

const CaseCompetitionPage: React.FC = () => {
  return (
    <div className="pt-16">
      <CaseCompetitionBanner />
      <FAQ/>
    </div>
  );
};

export default CaseCompetitionPage;
