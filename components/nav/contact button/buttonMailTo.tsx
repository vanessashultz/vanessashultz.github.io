import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';

interface ButtonMailToProps {
  mailTo: string;
  label: string;
}
export const ButtonMailTo: React.FC<ButtonMailToProps> = ({ mailTo, label }) => {
  return (
    <div className="group relative">
      <div className="“editor.fontLigatures”: true, absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative rounded-lg bg-gradient-to-r from-primary to-secondary px-7 py-3 ring-1 ring-gray-900/5">
        <div className="space-y-2 text-2xl font-medium uppercase text-white">
          <a href={mailTo}>{label}</a>
        </div>
      </div>
    </div>
  );
};
