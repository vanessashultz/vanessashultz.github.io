import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const SQLLab: React.FC = () => {
  const resumeList = [
    'Conducted interactive sessions to educate non-technical employees on utilizing SQL queries in company databases.',
  ];
  const presentationList = ['SQL: Basic Queries', 'SQL: Intermediate Queries and Joins'];
  const presentationLinks = [
    'https://docs.google.com/presentation/d/1BcHLx-1M0AW84WCY4bUezs2ps0V5DIc1jyc-lv3mL34/edit?usp=sharing',
    'https://docs.google.com/presentation/d/1dqjzanHjs0Skd8jaazjmflp9RT9t3KYG17XKaCu4h_M/edit?usp=sharing',
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
      title="SQL Lab Teacher"
      dateRange="Summer 2022"
      resumeList={resumeList}
      showAwards={false}
      showPresentations={true}
      presentationList={presentationList}
      presentationLinks={presentationLinks}
    />
  );
};
