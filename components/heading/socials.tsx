import React from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";

export const Socials: React.FC = () => {
  return (
    <div className="text-5xl lg:text-6xl flex justify-center gap-16 py-2 text-gray-primary">
      <a href="https://github.com/vanessashultz" target="_blank">
        <AiFillGithub className="hover:text-primary transition-all duration-500" />
      </a>
      <a href="https://www.linkedin.com/in/vanessashultz/" target="_blank">
        <AiFillLinkedin className="hover:text-primary transition-all duration-500" />
      </a>
      <a href="mailto:vanessa.shultz1@gmail.com" target="_blank">
        <AiFillGoogleCircle className="hover:text-primary transition-all duration-500" />
      </a>
    </div>
  );
};
