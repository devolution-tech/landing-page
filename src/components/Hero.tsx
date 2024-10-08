import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  heroImage: any;
  buttonCta?: { title: string; link: string; isTargetBlank?: boolean };
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, heroImage, buttonCta }) => {
  return (
    <div className="dark:bg-trueGray-800 bg-gray-100">
      <div className="container mx-auto flex flex-wrap px-6 py-10 lg:py-20">
        <div className="mr-0 flex w-full items-center lg:w-1/2">
          <div className="mb-6 max-w-2xl lg:mb-8">
            <h1
              className={`text-3xl font-bold leading-normal text-gray-900 lg:text-5xl xl:text-7xl xl:font-extrabold dark:text-white`}
            >
              {title}
            </h1>

            <p
              className={`pt-2 text-justify text-lg leading-normal text-gray-900 md:pt-5 lg:text-xl xl:text-2xl dark:text-gray-300`}
            >
              {subtitle}
            </p>

            {buttonCta && (
              <div className="mt-3 flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 lg:mt-5">
                <Link
                  href={buttonCta.link}
                  target={buttonCta.isTargetBlank ? '_blank' : undefined}
                  className="rounded-md bg-[#070f74] px-2 py-1 text-center text-base font-medium text-white md:text-lg lg:px-6 lg:py-2"
                >
                  {buttonCta.title}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:w-1/2">
          <Image
            src={heroImage}
            width="800"
            height="600"
            className="h-auto w-full rounded-3xl object-cover"
            alt="Hero Illustration"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
