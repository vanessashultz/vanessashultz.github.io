import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const OnboardingAmbassador: React.FC = () => {
  const resumeList = [
    'Mentor new employees through the Onboarding Ambassadors program, integrating them into the company culture and improving time to productivity.',
  ];

  return (
    <Card
      image={
        <Image
          src="/logos/c2fo_logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="dark:rounded-md dark:border-2 dark:border-blue-dark dark:bg-offWhite dark:p-2"
        />
      }
      companyLink="https://c2fo.com/"
      title="Onboarding Ambassador"
      dateRange="May 2023 to Present"
      resumeList={resumeList}
      showAwards={false}
      showPresentations={false}
    />
  );
};
