import React from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface ButtonMailToProps {

}
export const ButtonMailTo: React.FC<ButtonMailToProps> = () => {
  return (
    <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-xl ml-8">
            Contact
          </button>
  )
};
