import React from 'react';
import Image from 'next/image';

import { SectionTitle, SectionTitleProps } from './SectionTitle';

interface ArticleSectionProps {
  align: 'left' | 'right';
  imageIllustration: any;
  sectionTitle: SectionTitleProps;
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({ align, imageIllustration, sectionTitle }) => {
  return (
    <div className="flex flex-wrap py-10 lg:flex-nowrap lg:gap-10 lg:py-20">
      {align === 'left' ? (
        <>
          <div className="relative mb-10 flex w-full items-center justify-center lg:mb-0 lg:w-1/2">
            <div>
              <Image
                src={imageIllustration}
                width="640"
                height="480"
                alt="image-illustration-section"
                className="max-w-md rounded-3xl object-cover"
              />
            </div>
          </div>

          <SectionTitle {...sectionTitle} />
        </>
      ) : (
        <>
          <SectionTitle {...sectionTitle} />

          <div className="relative mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
            <div>
              <Image
                src={imageIllustration}
                width="640"
                height="480"
                alt="image-illustration-section"
                className="max-w-md rounded-3xl object-cover"
                // className="h-auto w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
