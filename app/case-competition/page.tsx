import React from "react";
import Sponsors from "../components/Sponsors/Sponsors";
import CaseCompBanner from "../components/CaseCompBanner/CaseCompBanner";
import CaseCompIntro from "../components/CaseCompIntro/CaseCompIntro";
import CaseCompActionFlow from "../components/CaseCompActionFlow/CaseCompActionFlow";
import CaseCompPrize from "../components/CaseCompPrize/CaseCompPrize";
import Ovhcloudsection from "../components/Ovhcloudsection/Ovhdescription";

const CaseCompetitionPage: React.FC = () => {
  return (
    <div className="pt-16">
      <CaseCompBanner />
      <CaseCompPrize />
      <Ovhcloudsection />
      <CaseCompIntro />
      <CaseCompActionFlow />
      <Sponsors />
    </div>
  );
};

export default CaseCompetitionPage;
