import React from "react";
import Image from "next/image";

export const C2FO: React.FC = () => {
  return (
    <div className="max-h-sm w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-offWhite">
      <div className="px-6 py-4">
        <Image src="/logos/c2fo_logo.svg" alt="logo" width={100} height={100} />
        <div className="font-bold text-xl pt-8 font-gerhause">
          Software Engineer
        </div>
        <h3 className="text-lg italic">December 2021 to Present</h3>
        <ul className="text-sm">
          <li className="py-2">
            Delivered a full-stack greenfield product for a physical card in a
            distributed system that increased cash flow for suppliers by
            allowing refunds for previously discounted invoices
          </li>
          <li className="py-2">
            Developed the frontend for supplemental card users, resulting in a
            10% increase in issued cards and enabling the addition of new card
            users over time.
          </li>
          <li className="py-2">
            Implemented backend API functionality to enable users with errors in
            their onboarding submissions to quickly rectify and resubmit their
            applications, ensuring uninterrupted progress within the app.
          </li>
          <li className="py-2">
            Designed and implemented the frontend for the Express Funding
            initiative that allowed faster funding onto the card, generating an
            additional $2.8MM of spend in a month.
          </li>
          <li className="py-2">
            Delivered a full-stack greenfield product for a physical card in a
            distributed system that increased cash flow for suppliers by
            allowing refunds for previously discounted invoicesLed Knowledge
            Transfers and mentored team members on utilizing new technologies,
            enhancing analytic metric visibility.
          </li>
        </ul>
        <h3 className="text-lg font-bold pt-5">Awards:</h3>
        <ul className="text-sm">
          <li className="py-2">
            <span className="font-bold text-blue-dark">
              2023 “Outta-the-Park”
            </span>{" "}
            for rebranding the frontend design in the CashFlow+ application,
            increasing modularity and reusable components across multiple
            platforms.
          </li>
          <li className="py-2">
            <span className="font-bold text-blue-dark">
              2023 Fintech Breakthrough Award for B2B Payments Innovation
            </span>{" "}
            awarded to the team for the work on improving cash flow to suppliers
            with the CashFlow+ product.
          </li>
        </ul>
      </div>
    </div>
  );
};
