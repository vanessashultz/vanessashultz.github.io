import React from "react";
import Image from "next/image";

export const CultureCabinet: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/c2fo_logo.svg" alt="logo" width={100} height={100} />
        <div className="font-bold text-xl pt-8 font-gerhause">
          Engineering Culture Cabinet Member
        </div>
        <h3 className="text-lg italic">April 2022 to Present</h3>
        <ul className="text-sm">
          <li className="py-2">
            Lead, organize, and host quarterly game nights 🎮 for the Product
            and Tech organization to enhance team bonding.
          </li>
          <li className="py-2">
            Conducted culture surveys to assess the engineering culture and
            gather feedback on potential improvements through administering the
            surveys, analyzing the results, and presenting the findings to
            leadership.
          </li>
          <li className="py-2">
            Played a key role in organizing and leading a company-wide
            competition as a committee member of Hack Week, which promotes
            cross-team collaboration and encouraging innovation where
            participants take a week to develop their project ideas and showcase
            them to the entire company.
          </li>
        </ul>
      </div>
    </div>
  );
};
