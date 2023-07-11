import React from "react";
import { C2FO } from "./c2fo";
import { Cerner } from "./cerner";

export const WorkExperiences: React.FC = () => {
  return (
    <div className="text-center lg:text-left text-5xl lg:text-6xl justify-center py-2 text-gray-primary">
      <h3 className="text-2xl lg:text-7xl pt-20 pb-14 text-primary font-gerhause">Work Experiences</h3>
      <div className="space-y-3 lg:flex lg:space-x-3 text-left lg:align-top lg:space-y-0">
        <C2FO />
        <Cerner />
      </div>
    </div>
  )
};
