import React from 'react';
import { CultureCabinet } from './culturecabinet';
import { KCWiT } from './kcwit';
import { SQLLab } from './sqlLab';
import { OnboardingAmbassador } from './onboardingAmbassador';
import { ShowAndShare } from './showAndShare';

export const LeadershipExperience: React.FC = () => {
  return (
    <div className="justify-center py-2 text-center text-5xl text-gray-primary lg:text-left lg:text-6xl">
      <h3 className="pb-14 pt-20 font-gerhause text-2xl tracking-widest text-primary dark:text-blue-dark lg:text-7xl">
        Leadership Experiences
      </h3>
      <div className="space-y-3 text-left lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 lg:align-top">
        <KCWiT />
        <CultureCabinet />
        <SQLLab />
      </div>
      <div className="space-y-3 py-3 text-left lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 lg:align-top">
        <ShowAndShare />
        <OnboardingAmbassador />
      </div>
    </div>
  );
};
