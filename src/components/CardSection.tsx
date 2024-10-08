import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { SectionTitle, SectionTitleProps } from './SectionTitle';

type CardItem = {
  title: string;
  icon: any;
  content: React.ReactNode;
};

interface CardSectionProps {
  sectionTitle?: SectionTitleProps;
  cardItem: CardItem[];
  iconPosition: 'top' | 'bottom';
  outline?: boolean;
  buttonCta?: { title: string; link: string };
}

export const CardSection: React.FC<CardSectionProps> = ({ sectionTitle, cardItem, iconPosition, outline, buttonCta }) => {
  return (
    <div className="pb-16 pt-2 lg:pb-20 lg:pt-12">
      {sectionTitle && <SectionTitle {...sectionTitle} />}

      <div
        className={`grid gap-6 lg:grid-cols-2 lg:gap-8 ${cardItem.length > 2 ? 'xl:grid-cols-3' : ''} mt-3 md:mt-4 lg:mt-6`}
      >
        {cardItem.map((item, index) => (
          <div className={`${cardItem.length > 2 && index === 0 ? 'lg:col-span-2 xl:col-auto' : ''}`} key={index}>
            <div
              className={`flex h-full w-full flex-col rounded-2xl p-4 md:p-6 lg:p-8 ${
                outline ? 'border-2 border-gray-200' : 'dark:bg-trueGray-800 bg-gray-100'
              }`}
            >
              <div className="mb-4 flex flex-col items-center">
                {iconPosition === 'top' ? (
                  <>
                    <Image src={item.icon} width="202" height="202" alt="image-illustration-section" className="h-20 w-20" />

                    <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-[#0F172A] xl:text-3xl dark:text-white">
                      {item.title}
                    </h2>
                  </>
                ) : (
                  <>
                    <h2 className="mb-2 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight dark:text-white">
                      {item.title}
                    </h2>

                    <Image src={item.icon} width="202" height="202" alt="image-illustration-section" className="h-20 w-20" />
                  </>
                )}
              </div>

              <p className="text-center text-lg text-[#0F172A]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {buttonCta && (
        <div className="mt-8 flex justify-center">
          <Link
            href={buttonCta.link}
            className="rounded-md bg-[#EA2A4F] px-2 py-1 text-center text-lg font-medium text-white lg:px-6 lg:py-2"
          >
            {buttonCta.title}
          </Link>
        </div>
      )}
    </div>
  );
};
