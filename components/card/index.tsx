import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: JSX.Element;
  companyLink: string;
  title: string;
  dateRange: string;
  resumeList: string[];
  showAwards: boolean;
  awardNames?: string[];
  awardDescription?: string[];
  showPresentations: boolean;
  presentationList?: string[];
}

export const Card: React.FC<CardProps> = ({
  image,
  companyLink,
  title,
  dateRange,
  resumeList,
  showAwards,
  awardNames,
  awardDescription,
  showPresentations,
  presentationList,
}) => {
  const awards =
    showAwards && awardNames && awardDescription
      ? awardNames.map((award, index) => {
          const description = awardDescription[index];
          return (
            <li className="py-2">
              <span className="font-bold text-blue-light">{award}</span> {description}
            </li>
          );
        })
      : null;

  return (
    <div className="max-h-sm w-full overflow-hidden rounded-xl bg-offWhite shadow-lg dark:bg-darkMode-gray-tertiary dark:text-offWhite lg:w-1/2">
      <div className="px-6 py-4">
        <a href={companyLink} target="_blank">
          {image}
        </a>
        <div className="pt-8 font-gerhause text-xl font-bold tracking-widest">{title}</div>
        <h3 className="text-lg italic">{dateRange}</h3>
        <ul className="pb-3 text-base">
          {resumeList.map((item) => (
            <li className="py-2">{item}</li>
          ))}
        </ul>
        {showAwards && (
          <>
            <h3 className="border-t-2 pt-5 text-lg font-bold">Awards:</h3>
            <ul className="text-base">{awards}</ul>
          </>
        )}
        {showPresentations && (
          <>
            <h3 className="pt-5 text-lg font-bold">Presentations to Date:</h3>
            <ul className="text-base">
              {presentationList?.map((presentation) => (
                <li className="py-1">
                  <span className="font-bold text-blue-light">{presentation}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
