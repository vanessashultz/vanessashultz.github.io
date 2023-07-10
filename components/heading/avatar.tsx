import React from "react";
import Image from "next/image";

export const Avatar: React.FC = () => {
  return (
    <div
    className="rotate-12 border-1 border-white hover:rotate-0 transition-transform flex relative mx-auto
      bg-gradient-to-b from-secondary rounded-full w-80 h-80 mt-20 overflow-hidden"
    >
          <Image src="/nessaAvatar.svg" alt="logo" layout="fill" objectFit="cover" />
        </div>
  )
};
