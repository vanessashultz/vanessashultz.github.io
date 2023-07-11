import React from "react";
import Image from "next/image";

export const OnboardingAmbassador: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/c2fo_logo.svg" alt="logo" width={100} height={100} />
        <div className="font-bold text-xl pt-8 font-gerhause">
          Onboarding Ambassador
        </div>
        <h3 className="text-lg italic">May 2023 to Present</h3>
        <ul className="text-sm">
          <li className="py-2">
            Mentor new employees through the Onboarding Ambassadors program,
            integrating them into the company culture and improving time to
            productivity.
          </li>
        </ul>
      </div>
    </div>
  );
};
