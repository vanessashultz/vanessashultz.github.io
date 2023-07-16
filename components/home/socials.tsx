import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';

export const Socials: React.FC = () => {
  return (
    <div className="flex justify-center gap-16 py-2 text-5xl text-gray-primary dark:text-blue-light lg:text-6xl">
      <a href="https://github.com/vanessashultz" target="_blank">
        <AiFillGithub className="transition-all duration-500 hover:text-primary hover:dark:text-blue-green" />
      </a>
      <a href="https://www.linkedin.com/in/vanessashultz/" target="_blank">
        <AiFillLinkedin className="transition-all duration-500 hover:text-primary hover:dark:text-blue-green" />
      </a>
      <a href="mailto:vanessa.shultz1@gmail.com" target="_blank">
        <AiFillGoogleCircle className="transition-all duration-500 hover:text-primary hover:dark:text-blue-green" />
      </a>
    </div>
  );
};
