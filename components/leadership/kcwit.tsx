import React from 'react';
import Image from 'next/image';
import { Card } from '../card';

export const KCWiT: React.FC = () => {
  const resumeList = [
    'Teach fundamental coding principles in monthly interactive sessions to excite women about technology and increase diversity in the field.',
  ];

  const presentations = [
    {
      name: 'GitHub Profiles and the Secret Sauce',
      link: 'https://docs.google.com/presentation/d/e/2PACX-1vScc99CpE-xfOh3a_sOuFSBBu7XH_-Y-KIJRlcB3K3aOB0zU47ufo65OY4BwxJoYQ/pub?start=false&loop=false&delayms=3000',
    },
    {
      name: 'The Glass | HTML and Front-End Architecture',
      link: 'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/01-glasswork/2023-front-end-html.html#/',
    },
    {
      name: 'The Garnish | Introduction to CSS',
      link: 'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/css-series/2023-css.html#/',
    },
    {
      name: 'The Liquor | Intro to JavaScript',
      link: 'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/03-liquor/javascript.html#/',
    },
    {
      name: 'Open Source: Hacktoberfest Edition',
      link: 'https://docs.google.com/presentation/d/e/2PACX-1vSPDAqSrr_VY8zZ6KraJKnIouNtwC9vAGeG-I-_y1Ubnjthxp_QmeIz47dn2Z3NC75seuFHQ4vRguby/pub?start=false&loop=false&delayms=3000',
    },
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
      presentations={presentations}
    />
  );
};
