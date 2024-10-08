'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import imgSliderOne from '/public/img/img-slider-1.png';
import imgSliderTwo from '/public/img/img-slider-2.jpg';

// Custom Next Arrow
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div className={`${className} text-blue-500`} style={{ ...style, display: 'block', right: '10px' }} onClick={onClick} />
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} text-blue-500`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

interface Story {
  image: any;
  quote: string;
  name: string;
  company: string;
}

export const SuccessStoriesSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const stories: Story[] = [
    {
      image: imgSliderOne,
      quote:
        'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut.',
      name: 'Marie Poirot',
      company: 'Bigapp',
    },
    {
      image: imgSliderTwo,
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      name: 'John Doe',
      company: 'SmallCo',
    },
    // {
    //   image: imgSliderThree,
    //   quote:
    //     'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut.',
    //   name: 'Naruto Uzumaki',
    //   company: 'Naruto Shippuden',
    // },
    // {
    //   image: imgSliderFour,
    //   quote:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    //   name: 'Monkey D Luffy',
    //   company: 'OnePiece',
    // },
  ];

  return (
    <div className="flex items-center justify-center rounded-xl bg-gray-100 p-10">
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col items-center md:flex-row">
              <div className="p-4 md:w-1/2">
                <Image src={story.image} alt={story.name} className="w-full rounded-lg object-cover shadow-md" />
              </div>

              <div className="p-4 md:w-1/2">
                <h3 className="mb-2 text-xs uppercase tracking-wider text-gray-600">SUCCESS STORIES</h3>
                <p className="mb-4 text-lg text-gray-800">“ {story.quote} ”</p>
                <p className="font-semibold text-gray-700">{story.name}</p>
                <p className="text-sm text-gray-500">{story.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
