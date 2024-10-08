import Image from 'next/image';
import React from 'react';

const ListContent = (props: { title: string; desc: React.ReactNode; icon?: any }) => {
  return (
    <div className="mt-5 flex items-start space-x-3">
      {props.icon && (
        <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-[#EA2A4F]">
          {React.cloneElement(props.icon, { className: 'w-7 h-7 text-indigo-50' })}
        </div>
      )}
      <div>
        <h4 className="mb-5 text-xl font-semibold text-[#0F172A]">{props.title}</h4>
        <p className="text-lg font-normal text-[#0F172A]">{props.desc}</p>
      </div>
    </div>
  );
};

interface ArticleSectionWithIconProps {
  imgPos?: 'left' | 'right';
  data: {
    imgPos?: 'left' | 'right';
    title?: string;
    desc?: string;
    image: any;
    bullets: {
      title: string;
      desc: React.ReactNode;
      icon?: any;
    }[];
  };
  isBgGray?: boolean;
}

export const ArticleSectionWithIcon: React.FC<ArticleSectionWithIconProps> = ({ data, imgPos, isBgGray }) => {
  return (
    <div className={`${isBgGray ? 'dark:bg-trueGray-800 bg-gray-100' : ''}`}>
      <div className="flex flex-wrap py-10 lg:flex-nowrap lg:gap-10 lg:py-20">
        <div className={`flex w-full items-center justify-center lg:w-1/2 ${imgPos === 'right' ? 'lg:order-1' : ''}`}>
          <div>
            <Image
              src={data.image}
              width={600}
              height={600}
              alt="Benefits"
              className={'max-w-md rounded-3xl object-cover'}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div className={`flex w-full flex-wrap items-center lg:w-1/2 ${data.imgPos === 'right' ? 'lg:justify-end' : ''}`}>
          <div>
            {data.title && data.desc && (
              <div className="mt-4 flex w-full flex-col lg:mt-0">
                <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight dark:text-white">
                  {data.title}
                </h3>

                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                  {data.desc}
                </p>
              </div>
            )}

            <div className="w-full">
              {data.bullets.map((item, index) => (
                <ListContent key={index} title={item.title} icon={item.icon} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
