import React from "react";
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
    </div>
  );
};

export default CaseCompetitionPage;
