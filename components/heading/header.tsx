import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header: React.FC = () => {
  return (
    <div className="text-center p-10 font-gerhause">
      <h2 className="text-5xl lg:text-7xl py-2 text-primary font-gerhause">
        Vanessa Shultz
      </h2>
      <h3 className="text-3xl lg:text-5xl py-3 text-secondary">
        Software engineer
      </h3>
      <p className="text-xl lg:text-xl pt-7 text-gray-primary">
        Innovator, creator, leader and world student.
      </p>
    </div>
  );
};
