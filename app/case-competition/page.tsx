import React from "react";
import Sponsors from "../components/Sponsors/Sponsors";
import CaseCompBanner from "../components/CaseCompBanner/CaseCompBanner";
import CaseCompIntro from "../components/CaseCompIntro/CaseCompIntro";
import CaseCompActionFlow from "../components/CaseCompActionFlow/CaseCompActionFlow";
import CaseCompPrize from "../components/CaseCompPrize/CaseCompPrize";

const CaseCompetitionPage: React.FC = () => {
  return (
    <div className="pt-16">
      <CaseCompBanner />
      <CaseCompPrize />
      <CaseCompIntro />
      <CaseCompActionFlow />
      <Sponsors />
    </div>
  );
};

export default CaseCompetitionPage;
