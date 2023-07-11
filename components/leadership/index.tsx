import React from "react";
import { CultureCabinet } from "./culturecabinet";
import { KCWiT } from "./kcwit";
import { SQLLab } from "./sqlLab";
import { OnboardingAmbassador } from "./onboardingAmbassador";
import { ShowAndShare } from "./showAndShare";

export const LeadershipExperience: React.FC = () => {
  return (
    <div className="text-center lg:text-left text-5xl lg:text-6xl justify-center py-2 text-gray-primary">
      <h3 className="text-2xl lg:text-7xl pt-20 pb-14 text-primary font-gerhause">Leadership Experiences</h3>
      <div className="space-y-3 lg:flex lg:flex-row lg:space-x-3 text-left lg:align-top lg:space-y-0">
        <KCWiT />
        <CultureCabinet />
        <SQLLab />
      </div>
      <div className="py-3 space-y-3 lg:flex lg:flex-row lg:space-x-3 text-left lg:align-top lg:space-y-0">
        <ShowAndShare />
        <OnboardingAmbassador />
      </div>
    </div>
  )
};
