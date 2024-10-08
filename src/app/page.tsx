/* eslint-disable prettier/prettier */
import React from 'react';

import heroImg from '/public/img/hero-img.png';
import cardImgIcon1 from '/public/img/Icon-1.png';
import cardImgIcon2 from '/public/img/Icon-2.png';
import cardImgIcon3 from '/public/img/Icon-3.png';
import articleSectionOneImg from '../../public/img/article-section-1-img.png';
import articleSectionTwoImg from '../../public/img/article-section-2-img.png';
import articleSectionThreeImg from '../../public/img/article-section-3-img.png';

import {
  ArticleSection,
  ArticleSectionWithIcon,
  CardSection,
  Container,
  Hero,
  SectionTitle,
  SuccessStoriesSlider,
} from '@/components';

const dataCardItem = [
  {
    title: 'Fermentum amet',
    content:
      'Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.',
    icon: cardImgIcon1,
  },
  {
    title: 'Dignissim quam',
    content:
      'Quam sed neque vitae viverra purus venenatis ac non. Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam, elit ut non.',
    icon: cardImgIcon2,
  },
  {
    title: 'Risus morbi',
    content:
      'Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est elit odio at augue consequat.',
    icon: cardImgIcon3,
  },
];

const dataArticleSectionOne = {
  image: articleSectionOneImg,
  bullets: [
    {
      title: 'Sem augue tempus',
      desc: 'Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.',
    },
    {
      title: 'Habitant integer interdum a',
      desc: '',
    },
    {
      title: 'Tempus natoque id',
      desc: '',
    },
  ],
};

const dataArticleSectionTwo = {
  image: articleSectionTwoImg,
  bullets: [
    {
      title: 'Bibendum gravida dolor egestas aliquam',
      desc: 'Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem.',
    },
    {
      title: 'Egestas lorem eget',
      desc: '',
    },
    {
      title: 'Tellus eget feugiat sit',
      desc: '',
    },
  ],
};

export default function Home() {
  return (
    <>
      <Hero
        title="Building apps just got easier"
        subtitle="Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in."
        heroImage={heroImg}
        buttonCta={{ link: '#', title: 'Get Started' }}
      />

      <Container>
        <CardSection cardItem={dataCardItem} iconPosition="top" outline />

        <SectionTitle
          align="center"
          title="All the essential tools"
          content="Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in."
        />
        <ArticleSectionWithIcon data={dataArticleSectionOne} imgPos="left" />

        <SectionTitle
          align="center"
          title="Focus on what matters"
          content="Eget at purus mauris euismod metus vitae eget. Diam massa venenatis pellentesque facilisis nunc, varius."
        />
        <ArticleSectionWithIcon data={dataArticleSectionTwo} imgPos="left" />

        <SuccessStoriesSlider />
        {/* <div className="flex min-h-screen items-center justify-center">
          <SuccessStoriesSlider />
        </div> */}

        <ArticleSection
          align="right"
          imageIllustration={articleSectionThreeImg}
          sectionTitle={{
            align: 'left',
            title: 'Start now and get the best services',
            content:
              'Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi dui ac consequat risus pharetra odio pulvinar. Id pellentesque in tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet sit risus elementum scelerisque.',
            buttonCta: { link: '#', title: 'Get Started' },
          }}
        />
      </Container>
    </>
  );
}
