import React from "react";
import Image from "next/image";

export const KCWiT: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/kcwit.png" alt="kcwit logo" width={100} height={100} />
        <div className="font-bold text-xl pt-8 font-gerhause">Presentation Director with{' '}
          <a href="https://codingandcocktails.kcwomenintech.org/#mentors" target="_blank" className="text-secondary">
            Coding and Cocktails
          </a>
        </div>
        <h3 className="text-lg italic">October 2022 to Present</h3>
        <ul className="text-sm">
          <li className="py-2">
            Teach fundamental coding principles in monthly interactive sessions to excite women about technology and increase diversity in the field.
          </li>
        </ul>
        <h3 className="text-lg font-bold pt-5">Presentations to Date:</h3>
        <ul className="text-sm">
          <li className="py-1">
            <span className="font-bold text-blue-dark">GitHub Profiles and the Secret Sauce</span>
          </li>
          <li className="py-1">
            <span className="font-bold text-blue-dark">The Glass | HTML and Front-End Architecture</span>
          </li>
          <li className="py-1">
            <span className="font-bold text-blue-dark">The Garnish | Introduction to CSS</span>
          </li>
          <li className="py-1">
            <span className="font-bold text-blue-dark">The Liquor | Intro to JavaScript</span>
          </li>
          <li className="py-1">
            <span className="font-bold text-blue-dark">Open Source: Hacktoberfest Edition</span>
          </li>
        </ul>
      </div>
    </div>
  )
};
