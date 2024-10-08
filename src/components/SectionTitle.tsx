import React from 'react';
import Link from 'next/link';

export interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: 'left' | 'center';
  // children?: React.ReactNode;
  content?: any;
  buttonCta?: { title: string; link: string };
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ preTitle, title, align, content, buttonCta }) => {
  return (
    <div
      className={`flex w-full flex-wrap items-center lg:w-1/2 ${align === 'left' ? '' : 'mx-auto justify-center text-center'}`}
    >
      <div className="w-full lg:mx-4">
        {preTitle && <div className="text-sm font-bold uppercase tracking-wider text-[#070f74]">{preTitle}</div>}

        {title && (
          <h2 className="mt-1 text-2xl font-bold leading-snug tracking-tight text-gray-800 md:text-3xl lg:mt-3 lg:text-4xl lg:leading-tight xl:text-5xl xl:font-extrabold dark:text-white">
            {title}
          </h2>
        )}

        {content && <div className="mt-5 text-lg">{content}</div>}

        {buttonCta && (
          <div className="mt-5 flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <Link
              href={buttonCta.link}
              className="rounded-md bg-[#070f74] px-2 py-1 text-center text-lg font-medium text-white lg:px-6 lg:py-2"
            >
              {buttonCta.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
