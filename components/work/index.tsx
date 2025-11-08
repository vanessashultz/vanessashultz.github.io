import React from 'react';
import {C2FO} from './c2fo';
import {Cerner} from './cerner';
import {Tallgrass} from "./tallgrass";
import {Freelance} from "@/components/work/Freelance";

export const WorkExperiences: React.FC = () => {
    return (
        <div className="justify-center py-2 text-center text-5xl text-gray-primary lg:text-left lg:text-6xl">
            <h3 className="pb-14 pt-20 font-gerhause text-2xl tracking-widest text-primary dark:text-blue-dark lg:text-7xl">
                Work Experiences
            </h3>
            <div className="space-y-3 text-left lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 lg:align-top">
                <Tallgrass />
                <C2FO />
            </div>
            <div className="space-y-3 py-3 text-left lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 lg:align-top">
                <Cerner />
                <Freelance />
            </div>
        </div>
    );
};
