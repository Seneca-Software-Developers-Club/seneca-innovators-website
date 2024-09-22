import React from "react";
<<<<<<< HEAD
import CaseCompetitionBanner from "../components/CaseCompetitionBanner/CaseCompetitionBanner";
import FAQ from "../components/FAQ/FAQ";
=======
import Sponsors from "../components/Sponsors/Sponsors";
import CaseCompBanner from "../components/CaseCompBanner/CaseCompBanner";
import CaseCompIntro from "../components/CaseCompIntro/CaseCompIntro";
import CaseCompActionFlow from "../components/CaseCompActionFlow/CaseCompActionFlow";
import CaseCompPrize from "../components/CaseCompPrize/CaseCompPrize";
>>>>>>> d2a47c1a0f1816e37d1b51004101e5ffb9af7ee8

const CaseCompetitionPage: React.FC = () => {
  return (
    <div className="pt-16">
<<<<<<< HEAD
      <CaseCompetitionBanner />
      <FAQ/>
=======
      <CaseCompBanner />
      <CaseCompPrize />
      <CaseCompIntro />
      <CaseCompActionFlow />
      <Sponsors />
>>>>>>> d2a47c1a0f1816e37d1b51004101e5ffb9af7ee8
    </div>
  );
};

export default CaseCompetitionPage;
