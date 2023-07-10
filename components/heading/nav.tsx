import React from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Nav: React.FC = () => {
  return (
    <nav className="py-6 w-full px-10 flex justify-between lg:sticky lg:top-0 bg-text-secondary z-10 text-xl">
      <h1 className="">Nessa</h1>
      <ul className="flex items-center gap-4 text-3xl">
        <li>
          <AiFillGithub />
        </li>
        <li>
          <AiFillLinkedin />
        </li>
        <li>
          <AiFillGoogleCircle />
        </li>
        <li className="text-xl">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-xl ml-8">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
};
