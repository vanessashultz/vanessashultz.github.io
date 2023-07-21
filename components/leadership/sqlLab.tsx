import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const SQLLab: React.FC = () => {
  const resumeList = [
    'Conducted interactive sessions to educate non-technical employees on utilizing SQL queries in company databases.',
  ];

  const presentations = [
    {
      name: 'SQL: Basic Queries',
      link: 'https://docs.google.com/presentation/d/e/2PACX-1vQ9Vtvij_L18YXbeJh3a3hhCodcvZovSLc0h6NxIZOsMYwQ3m2F_mY6T53NwWoTvvmtm_btejrI8IiO/pub?start=false&loop=false&delayms=3000',
    },
    {
      name: 'SQL: Intermediate Queries and Joins',
      link: 'https://docs.google.com/presentation/d/e/2PACX-1vRd4PzNkUxed3c0HiQOfl0ictCs_kagL1-A4EfwQnl-U1m_MmvnnlEB4frQHgdaZ3OJ2jzFxe0c26-N/pub?start=false&loop=false&delayms=3000',
    },
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
      presentations={presentations}
    />
  );
};
