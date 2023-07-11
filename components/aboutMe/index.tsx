import React from "react";
import Image from "next/image";
import { HouseModal } from "./houseModal";

export const AboutMe: React.FC = () => {
  return (
    <section>
      <div
        className="flex relative mx-auto
          bg-gradient-to-b from-blue-dark to blue-light rounded-full w-80 h-80 mt-14 overflow-hidden"
      >
        <Image
          src="/nessaAvatar.svg"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-2xl lg:text-7xl pt-20 pb-10 text-primary font-gerhause">
        About Nessa
      </h3>
      <div className="items-center text-lg leading-8 pb-4">
        <p className="py-2 lg:py-4">
          I am a software engineer with a passion for creating and building{" "}
          <span className="text-tertiary font-bold">clean</span> and{" "}
          <span className="text-tertiary font-bold">innovative</span> web
          applications.
        </p>
        <p className="py-2 lg:py-4">
          I started in speech pathology where I was introduced to the
          transformative impact of Augmentative and Alternative Communication (AAC)
          devices, which enabled individuals with communication challenges to
          express themselves. Motivated by this experience, I transitioned to
          software engineering, where I could make a broader difference while
          leveraging my problem-solving skills. By combining my passion for
          helping others, ability to quickly research and learn, and desire to
          innovate, I found a path to create meaningful and lasting impact in
          the lives of many.
        </p>
        <p className="py-2 lg:py-4">
          In my free time, I enjoy playing videos games, such as the{" "}
          <span className="text-tertiary font-bold">Mass Effect Series</span>{" "}
          and <span className="text-tertiary font-bold">It Takes Two</span>. I
          have recently rediscovered my love for reading sci-fi books and am
          currently emersed into{" "}
          <span className="text-tertiary font-bold">The Expanse Series</span>.
          Crafting and DIY projects take up a large part of my time. My crafts
          include crocheting, drawing, restoring antique furniture and my
          proudest achievement:{" "}
          <button type="button">
            <span className="text-tertiary font-bold">
              a DIY miniture house project
            </span>
          </button>
          . On video, you can find me with a cup of tea in hand surrounded by
          one of my three cats 🐈‍⬛ and two dogs 🐕‍🦺. My two standard poodles,
          Violet and Lola, love joining me on daily walks around the city. My
          favorite place in the world is{" "}
          <span className="text-tertiary font-bold">
            12,000 feet above sea level
          </span>{" "}
          on a mountain (after the altitude sickness wears off of course). I
          dream to one day own a mountain where I can hike and play my
          piano/sing as loud as I want!
        </p>
        <p className="py-2 lg:pb-2 lg:pt-4">
          I can never learn enough and I'm always finding new avenues I want to
          explore! This is apparent in my{" "}
          <span className="text-tertiary font-bold">3 university degrees</span>{" "}
          that I've collected over the years:
        </p>
        <ul className="list-disc list-inside">
          <li className="pb-2">
            <span className="text-tertiary font-bold">
              B.S. in Software Engineering
            </span>{" "}
            from University of Central Missouri
          </li>
          <li className="py-2">
            <span className="text-tertiary font-bold">
              B.S. in Speech Pathology
            </span>{" "}
            from Kansas State Univeristy
          </li>
          <li className="py-2">
            <span className="text-tertiary font-bold">
              Minor in Vocal Performance
            </span>{" "}
            from Kansas State Univeristy
          </li>
        </ul>
      </div>
    </section>
  );
};
