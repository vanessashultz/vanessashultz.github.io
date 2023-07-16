import React, { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ButtonMailTo } from './contact button/buttonMailTo';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from '../themeToggle';

const navlinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Leadership',
    href: '/leadership',
  },
  {
    title: 'Contact',
    href: 'mailto:vanessa.shultz1@gmail.com',
  },
];

interface NavProps {
  handleThemeSwitch: () => void;
}

export const Nav: React.FC<NavProps> = ({ handleThemeSwitch }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-10 w-full justify-between bg-gradient-to-r from-gray-200 to-white py-4 text-gray-primary shadow-lg dark:bg-gradient-to-b dark:from-darkMode-gray-secondary dark:to-darkMode-gray-primary dark:text-offWhite dark:shadow-none">
        <div className="mx-auto px-4 sm:px-6 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4 font-gerhause text-4xl">
              <ThemeToggle handleThemeSwitch={handleThemeSwitch} />
              <a href="/" className="tracking-wider">
                Nessa
              </a>
            </div>
            {/* navlinks */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navlinks.map((link) =>
                  link.title == 'Contact' ? (
                    <ButtonMailTo mailTo="mailto:vanessa.shultz1@gmail.com" label="Contact" />
                  ) : (
                    <a
                      key={link.title}
                      href={link.href}
                      className="rounded-md px-3 py-2 text-2xl font-medium transition-all duration-500 hover:bg-gray-primary hover:bg-opacity-10"
                    >
                      {link.title}
                    </a>
                  ),
                )}
              </div>
            </div>
            {/* hamburger menu */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => {
                  handleHamburgerClick();
                }}
                className="focus:ring-offset-text-primary inline-flex items-center justify-center rounded-md p-2 text-gray-primary hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {navbarOpen == true ? (
                  <FaTimes className="h-8 w-8 dark:text-blue-dark" />
                ) : (
                  <FaBars className="h-8 w-8 dark:text-blue-dark" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
      </div>
      {navbarOpen ? (
        <div className="bg-text-secondary absolute z-10 w-full bg-gray-300 dark:bg-gradient-to-b dark:from-darkMode-gray-secondary dark:to-darkMode-gray-primary lg:hidden">
          <div className="space-y-4 px-2 py-10 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                className="hover:bg-gray-10 block rounded-md px-3 py-2 text-4xl font-medium text-primary hover:bg-opacity-10 dark:text-offWhite"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
