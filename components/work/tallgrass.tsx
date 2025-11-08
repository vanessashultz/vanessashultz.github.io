import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const Tallgrass: React.FC = () => {
    const resumeList = [
        'Refine a Customer Relationship Management (CRM) system to meet the evolving needs of a freight brokerage company, streamlining workflows and improving operational efficiency.',
        'Pioneer role-based access controls, enabling larger agent companies to define and manage employee permissions with greater flexibility, security, and administrative control.',
        'Led full-stack refactoring, optimizing the frontend, backend, and database to improve CRM performance by up to 50%, accelerate development, and integrate agent-requested features.'
    ];

    return (
        <Card
            image={
                <Image
                    src="/logos/tgf_logo.png"
                    alt="logo"
                    width={208}
                    height={48}
                    className="h-12 w-52 dark:rounded-md dark:border-2 dark:border-blue-dark dark:bg-offWhite dark:p-1"
                />
            }
            companyLink="https://tallgrassfreight.com/"
            title="Software Engineer"
            dateRange="January 2024 - Present"
            resumeList={resumeList}
            showAwards={false}
            showPresentations={false}
        />
    );
};