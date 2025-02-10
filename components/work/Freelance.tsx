import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const Freelance: React.FC = () => {
    const resumeList = [
        'Design and develop custom websites for individuals and small businesses, tailoring solutions to client needs.',
        'Build responsive, user-friendly web applications using React, JavaScript, Node, and other necessary ' +
        'technologies for the application.',
        'Collaborate with clients to define project requirements, improve UI/UX, and optimize site performance.',
        'Managed end-to-end development, from concept and design to deployment and maintenance.'
    ];

    return (
        <Card
            image={
                <Image
                    src="/logos/Pattern.jpg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="dark:rounded-md dark:border-2 dark:border-blue-dark dark:bg-offWhite dark:p-2"
                />
            }
            companyLink="https://simplynessa.dev/"
            title="Software Engineer"
            dateRange="January 2020 - Present"
            resumeList={resumeList}
            showAwards={false}
            showPresentations={false}
        />
    );
};