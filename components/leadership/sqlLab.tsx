import React from "react";
import Image from "next/image";

export const SQLLab: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/c2fo_logo.svg" alt="logo" width={100} height={100} />
        <div className="font-bold text-xl pt-8 font-gerhause">
          SQL Lab Teacher
        </div>
        <h3 className="text-lg italic">Summer 2022</h3>
        <ul className="text-sm">
          <li className="py-2">
            Conducted interactive sessions to educate non-technical employees on
            utilizing SQL queries in company databases.
          </li>
        </ul>
        <h3 className="text-lg font-bold pt-5">Presentations to Date:</h3>
        <ul className="text-sm">
          <li className="py-1">
            <span className="font-bold text-blue-dark">SQL: Basic Queries</span>
          </li>
          <li className="py-1">
            <span className="font-bold text-blue-dark">
              SQL: Intermediate Queries and Joins
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
