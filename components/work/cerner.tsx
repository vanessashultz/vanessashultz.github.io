import React from 'react';
import { Card } from '../card';

export const Cerner: React.FC = () => {
  const resumeList = [
    'Enhanced analytics applications by migrating supplemental medical risk data into multiple data warehouses used by 53 health systems.',
    'Validated new and existing code, which increased project&apos;s unit testing coverage by 10%.',
  ];
  const awardNames = ['ShipIt Coding Competition: Intern 2nd Place and Company-wide Runner-up'];
  const awardDescription = [
    'for chatbot project, a witty chatbot with company-specific terms and resources to assist incoming company employees to optimize new employee adjustment times.',
  ];
  return (
    <Card
      image={
        <img
          src="https://www.cerner.com/-/media/oc-logos-and-assets/oc_logo.png?vs=1"
          alt="OC_logo"
          className="h-12 w-52 dark:rounded-md dark:border-2 dark:border-blue-dark dark:bg-offWhite dark:p-1"
        />
      }
      companyLink="https://www.cerner.com/"
      title="Software Engineer Intern"
      dateRange="May 2021 to August 2021"
      resumeList={resumeList}
      showAwards={true}
      awardNames={awardNames}
      awardDescription={awardDescription}
      showPresentations={false}
    />
  );
};
