import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Nav } from "./nav";
import { Header } from "./header";
import { Socials } from "./socials";
import { Avatar } from "./avatar";

export const Heading: React.FC = () => {
  return (
    <section className="min-h-screen">
        <Header />
        <Socials />
        <Avatar />
    </section>
  )
};
