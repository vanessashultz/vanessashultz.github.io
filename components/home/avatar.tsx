import React from 'react';
import Image from 'next/image';

export const Avatar: React.FC = () => {
  return (
    <div className="group relative mx-auto mt-10 h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-secondary text-4xl dark:bg-none">
      <Image src="/nessaAvatar.svg" alt="logo" layout="fill" objectFit="cover" />
      {/* shine box */}
      <div className="z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </div>
  );
};
