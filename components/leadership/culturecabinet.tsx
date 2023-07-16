import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const CultureCabinet: React.FC = () => {
  const resumeList = [
    'Lead, organize, and host quarterly game nights 🎮 for the Product and Tech organization to enhance team bonding.',
    'Conducted culture surveys to assess the engineering culture and gather feedback on potential improvements through administering the surveys, analyzing the results, and presenting the findings to leadership.',
    'Played a key role in organizing and leading a company-wide competition as a committee member of Hack Week, which promotes cross-team collaboration and encouraging innovation where participants take a week to develop their project ideas and showcase them to the entire company.',
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
      title="Engineering Culture Cabinet Member"
      dateRange="April 2022 to Present"
      resumeList={resumeList}
      showAwards={false}
      showPresentations={false}
    />
  );
};
