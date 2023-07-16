import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export const Header: React.FC = () => {
  return (
    <div className="p-10 text-center font-gerhause">
      <h2 className="py-2 font-gerhause text-5xl tracking-widest text-primary dark:text-blue-dark lg:text-7xl">
        Vanessa Shultz
      </h2>
      <h3 className="py-3 text-3xl tracking-wider text-secondary dark:text-blue-light lg:text-5xl">
        Software engineer
      </h3>
      <p className="pt-7 text-xl tracking-wide text-gray-primary dark:text-blue-green lg:text-xl">
        Innovator, creator, leader and world student.
      </p>
    </div>
  );
};
