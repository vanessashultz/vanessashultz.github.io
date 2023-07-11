import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ButtonMailTo } from "../contact button/buttonMailTo";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Leadership",
    href: "/leadership",
  },
  // {
  //   title: 'Tech Stack',
  //   href: '/tech-stack',
  // },
  {
    title: "Contact",
    href: "mailto:vanessa.shultz1@gmail.com",
  },
];

export const Nav: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <div className="text-gray-primary shadow-lg py-4 w-full justify-between sticky top-0 bg-gradient-to-r from-gray-200 to-white z-10">
        <div className="mx-auto px-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-4xl flex gap-4 font-gerhause">
                <BsFillMoonStarsFill className="text-primary mt-0.5" />
                Nessa
              </a>
            </div>
            {/* navlinks */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navlinks.map((link, index) =>
                  link.title == "Contact" ? (
                    <ButtonMailTo
                      mailTo="mailto:vanessa.shultz1@gmail.com"
                      label="Contact"
                    />
                  ) : (
                    <a
                      key={link.title}
                      href={link.href}
                      className="text-2xl transition-all duration-500 font-medium hover:bg-gray-primary hover:bg-opacity-10 px-3 py-2 rounded-md"
                    >
                      {link.title}
                    </a>
                  )
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-primary hover:text-tertiary hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-text-primary focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {navbarOpen == true ? (
                  <FaTimes className="w-8 h-8" />
                ) : (
                  <FaBars className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
      </div>
      {navbarOpen ? (
        <div className="absolute z-10 w-full lg:hidden bg-text-secondary bg-gray-300">
          <div className="px-2 py-10 space-y-4 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                className="text-primary hover:bg-gray-10 hover:bg-opacity-10 block px-3 py-2 rounded-md text-4xl font-medium"
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
