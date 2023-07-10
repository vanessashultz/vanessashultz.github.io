import React from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Socials: React.FC = () => {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-text-secondary">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillGoogleCircle />
        </div>
  )
};
