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
            <div className="grid grid-cols-1 w-full gap-2">
                <div>
                    <Tallgrass />
                </div>
                <div>
                    <C2FO />
                </div>
                <div>
                    <Cerner />
                </div>
                <div>
                    <Freelance />
                </div>
            </div>
        </div>
    );
};
