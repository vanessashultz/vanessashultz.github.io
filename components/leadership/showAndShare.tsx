import React from "react";
import Image from "next/image";

export const ShowAndShare: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/c2fo_logo.svg" alt="logo" width={100} height={100} />
        <div className="font-bold text-xl pt-8 font-gerhause">Show and Share: Speaker RelationShip Manager</div>
        <h3 className="text-lg italic">February 2022 to Present</h3>
        <ul className="text-sm">
          <li className="py-2">
            Organize speakers and presentations for the monthly Show and Share event, which is a organization-wide meeting where employees present on a topic of their choice.
          </li>
        </ul>
      </div>
    </div>
  )
};
