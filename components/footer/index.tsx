import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

export const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 flex items-baseline justify-center gap-x-2 bg-offWhite py-3 text-center text-xs text-gray-primary dark:bg-darkMode-gray-primary dark:text-blue-light lg:px-2">
      Brought to you by{' '}
      <a href="https://www.linkedin.com/in/vanessashultz/" target="_blank">
        <div className="flex align-baseline font-gerhause text-2xl">
          Vanessa Shultz
          <AiFillLinkedin />
        </div>
      </a>
    </footer>
  );
};
