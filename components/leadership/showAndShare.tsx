import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const ShowAndShare: React.FC = () => {
  const resumeList = [
    'Organize speakers and presentations for the monthly Show and Share event, which is a organization-wide meeting where employees present on a topic of their choice.',
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
      title="Show and Share: Speaker Relationship Manager"
      dateRange="February 2022 to Present"
      resumeList={resumeList}
      showAwards={false}
      showPresentations={false}
    />
  );
};
