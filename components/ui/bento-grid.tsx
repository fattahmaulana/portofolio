"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { companies } from "@/data";
import { socialMedia } from "@/data";
import Link from "next/link";
import { links } from "@/config";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  title2,
  description2,
  img,
  description3,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  title2?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  img?: string;
  description3?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgba(17, 17, 17, 0.69)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt={img}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute left-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          
          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          <div className="z-10 font-sans text-sm font-semibold text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl mt-3">
            {title2}
          </div>

          <div className="z-10 font-sans text-sm font-semibold text-[#c1c2d3] md:text-xs lg:text-base whitespace-pre-line">
            {description2}
          </div>

          <div className="z-10 font-sans text-sm font-light text-[#c1c2d3] md:text-xs lg:text-base whitespace-pre-line ml-10">
            {description3}
          </div>
          
          <div className="flex items-center gap-6 md:gap-3 mt-6">
            {id !== 4 &&
              socialMedia.map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="saturate-120 flex size-7 items-center justify-center rounded-lg border border-black-200 bg-black-100 bg-opacity-75 backdrop-blur-lg backdrop-filter"
                  title={profile.name}
                >
                  <Image
                    src={profile.img}
                    alt={`profile-${profile.name}`}
                    width={5}
                    height={5}
                  />
                </Link>
              ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-3">
  {id === 4 &&
    companies.map(({ id, img, name }) => (
      <div key={id} className="flex justify-center">
        <Image
          height={29}
          width={43}
          src={img}
          alt={`${name}'s logo`}
          className="w-10 sm:w-12 md:w-14 invert"
        />
      </div>
    ))}
</div>



          {id === 6 && (
            <div className="group relative mt-5">
              <button
                tabIndex={-1}
                className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>

              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
