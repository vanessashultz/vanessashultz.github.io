import React from 'react';
import Image from 'next/image';
import { HouseModal } from './houseModal';

export const AboutMe: React.FC = () => {
  return (
    <div className="pt-14">
      <div
        className="relative mx-auto
          flex h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-blue-dark pt-14 dark:bg-none"
      >
        <Image src="/nessaAvatar.svg" alt="logo" layout="fill" objectFit="cover" />
      </div>
      <h3 className="pb-10 pt-20 font-gerhause text-2xl tracking-widest text-primary dark:text-blue-dark lg:text-7xl">
        About Nessa
      </h3>
      <div className="items-center pb-4 text-xl leading-8 lg:text-2xl">
        <p className="py-2 lg:py-4">
          I am a software engineer with a passion for creating and building{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">clean</span> and{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">innovative</span> web applications.
        </p>
        <p className="py-2 lg:py-4">
          I started in speech pathology where I was introduced to the transformative impact of Augmentative and
          Alternative Communication (AAC) devices, which enabled individuals with communication challenges to express
          themselves. Motivated by this experience, I transitioned to software engineering, where I could make a broader
          difference while leveraging my problem-solving skills. By combining my passion for helping others, ability to
          quickly research and learn, and desire to innovate, I found a path to create meaningful and lasting impact in
          the lives of many.
        </p>
        <p className="py-2 lg:py-4">
          In my free time, I enjoy playing videos games, such as the{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">Mass Effect Series</span> and{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">It Takes Two</span>. I have recently
          rediscovered my love for reading sci-fi books and am currently emersed into{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">The Expanse Series</span>. Crafting and DIY
          projects take up a large part of my time. My crafts include crocheting, drawing, restoring antique furniture
          and my proudest achievement:{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">a DIY miniture house project</span>. On video,
          you can find me with a cup of tea in hand surrounded by one of my three cats 🐈‍⬛ and two dogs 🐕‍🦺. My two
          standard poodles, Violet and Lola, love joining me on daily walks around the city. My favorite place in the
          world is <span className="font-bold text-tertiary dark:text-blue-light">12,000 feet above sea level</span> on
          a mountain (after the altitude sickness wears off of course). I dream to one day own a mountain where I can
          hike and play my piano/sing as loud as I want!
        </p>
        <p className="py-2 lg:pb-2 lg:pt-4">
          I can never learn enough and I'm always finding new avenues I want to explore! This is apparent in my{' '}
          <span className="font-bold text-tertiary dark:text-blue-light">3 university degrees</span> that I've collected
          over the years:
        </p>
        <ul className="list-inside list-disc">
          <li className="pb-2">
            <span className="font-bold text-tertiary dark:text-blue-light">B.S. in Software Engineering</span> from
            University of Central Missouri
          </li>
          <li className="py-2">
            <span className="font-bold text-tertiary dark:text-blue-light">B.S. in Speech Pathology</span> from Kansas
            State Univeristy
          </li>
          <li className="py-2">
            <span className="font-bold text-tertiary dark:text-blue-light">Minor in Vocal Performance</span> from Kansas
            State Univeristy
          </li>
        </ul>
      </div>
    </div>
  );
};
