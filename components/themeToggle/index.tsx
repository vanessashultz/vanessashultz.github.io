import React from 'react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  handleThemeSwitch: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ handleThemeSwitch }) => {
  return (
    <label className="group relative flex items-center justify-between p-2 text-xl">
      <input
        type="checkbox"
        className="peer absolute left-1/2 h-full w-full -translate-x-1/2 appearance-none rounded-md"
        onClick={handleThemeSwitch}
      />
      <span className="ml-4 flex h-10 w-16 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-8 after:w-8 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:bg-primary peer-checked:after:translate-x-6"></span>
    </label>
    //   <button
    //   type="button"
    //   className="group fixed right-4 top-4 z-50 -m-2.5 p-2.5"
    //   onClick={() => setTheme(otherTheme)}
    // >
    //   <span className="sr-only">Switch to {otherTheme} theme</span>
    //   <ThemeIcon className="h-6 w-6 fill-gray-900 opacity-50 transition-opacity group-hover:opacity-100 dark:fill-white" />
    // </button>
  );
};
