import React from "react";
import Image from "next/image";

export const Cerner: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/cerner_logo.png" alt="logo" width={50} height={50} />
        <div className="font-bold text-xl pt-8 font-gerhause">
          Software Engineer Intern
        </div>
        <h3 className="text-lg italic">May 2021 to August 2021</h3>
        <ul className="text-sm">
          <li className="py-2">
            Enhanced analytics applications by migrating supplemental medical
            risk data into multiple data warehouses used by 53 health systems.
          </li>
          <li className="py-2">
            Validated new and existing code, which increased project&apos;s unit
            testing coverage by 20%.
          </li>
        </ul>
        <h3 className="text-lg font-bold pt-5">Awards:</h3>
        <ul className="text-sm">
          <li className="py-2">
            <span className="font-bold text-blue-dark">
              ShipIt Coding Competition: Intern 2nd Place and Company-wide
              Runner-up
            </span>{" "}
            for chatbot project, a witty chatbot with company-specific terms and
            resources to assist incoming company employees to optimize new
            employee adjustment times.
          </li>
        </ul>
      </div>
    </div>
  );
};
