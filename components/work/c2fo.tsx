import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const C2FO: React.FC = () => {
  const resumeList = [
    'Delivered a full-stack greenfield product for a physical card in a distributed system that increased cash flow for suppliers by allowing refunds for previously discounted invoices.',
    'Developed the frontend that allowed for the onboarding of supplemental card users, resulting in a 10% increase in issued cards and enabling the addition of new card users over time.',
    'Implemented backend API functionality with an internal app to enable resubmissions of errored onboarding submissions of users, ensuring uninterrupted onboarding within the app.',
    'Designed and implemented the frontend for an initiative that allowed suppliers to receive faster funding onto their card, generating an additional $2.8MM of spend in a month.',
    'Led Knowledge Transfers and mentored team members on utilizing new technologies, enhancing analytic metric visibility.',
  ];
  const awardNames = ['2023 “Outta-the-Park”', '2023 Fintech Breakthrough Award for B2B Payments Innovation'];
  const awardDescription = [
    'for rebranding the frontend design in the CashFlow+ application, increasing modularity and reusable components across multiple platforms.',
    'awarded to the team for the work on improving cash flow to suppliers with the CashFlow+ product.',
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
      title="Software Engineer"
      dateRange="December 2021 to Present"
      resumeList={resumeList}
      showAwards={true}
      awardNames={awardNames}
      awardDescription={awardDescription}
      showPresentations={false}
    />
  );
};
