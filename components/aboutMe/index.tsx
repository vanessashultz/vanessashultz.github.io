import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const AboutMe: React.FC = () => {
  return (
    <section>
      <h3 className="text-2xl py-2 text-secondary">About Nessa</h3>
      <p className="text-md leading-8 text-text-secondary py-2">
        I am a software engineer with a passion for creating and building{' '}
        <span className="text-tertiary">clean</span>
        {' '}and{' '}
        <span className="text-tertiary">innovative</span>
        {' '}web applications.
      </p>
      <p className="text-md leading-8 text-text-secondary py-2">
        I started in speech pathology where I was introduced to the transformative impact of Alternative Augmentative
        Communication (AAC) devices, which enabled individuals with communication challenges to express themselves. Motivated by this experience,
        I transitioned to software engineering, where I could make a broader difference while leveraging
        my problem-solving skills. By combining my passion for helping others, ability to quickly research and learn, and
        desire to innovate, I found a path to create meaningful and lasting impact in the lives of many.
      </p>
    </section>
  )
};
