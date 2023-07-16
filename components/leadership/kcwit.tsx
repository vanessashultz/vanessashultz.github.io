import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const KCWiT: React.FC = () => {
  const resumeList = [
    'Teach fundamental coding principles in monthly interactive sessions to excite women about technology and increase diversity in the field.',
  ];

  const presentationList = [
    'GitHub Profiles and the Secret Sauce',
    'The Glass | HTML and Front-End Architecture',
    'The Garnish | Introduction to CSS',
    'The Liquor | Intro to JavaScript',
    'Open Source: Hacktoberfest Edition',
  ];
  return (
    <Card
      image={
        <Image
          src="/logos/kcwit.png"
          alt="kcwit logo"
          width={100}
          height={100}
          className="dark:rounded-md dark:border-2 dark:border-blue-dark dark:bg-offWhite dark:p-2"
        />
      }
      companyLink="https://codingandcocktails.kcwomenintech.org/#mentors"
      title="Presentation Director with Coding and Cocktails"
      dateRange="October 2022 to Present"
      resumeList={resumeList}
      showAwards={false}
      showPresentations={true}
      presentationList={presentationList}
    />
  );
};
