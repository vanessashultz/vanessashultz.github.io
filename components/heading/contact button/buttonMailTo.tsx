import React from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface ButtonMailToProps {
  mailTo: string;
  label: string;
}
export const ButtonMailTo: React.FC<ButtonMailToProps> = ({mailTo, label}) => {
  return (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-3 bg-gradient-to-r from-primary to-secondary ring-1 ring-gray-900/5 rounded-lg">
                <div className="space-y-2 text-2xl font-medium text-white">
                  <a href={mailTo}>{label}</a>
                </div>
          </div>
        </div>
  )
};
