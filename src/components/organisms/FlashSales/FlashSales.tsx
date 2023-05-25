import React from 'react';
import { SectionTitle } from '../../molecules/SectionTitle';
import { ItemCarousel } from './components/ItemCarousel';

export const products = [
  {
    description: 'The north coat',
    price: 260,
    hasPreviousPrice: true,
    previousPrice: 360,
    image: 'north-coat',
    score: 5,
    amountOfRatings: 65
  },
  {
    description: 'Gucci duffle bag',
    price: 960,
    hasPreviousPrice: true,
    previousPrice: 1190,
    image: 'gucci-bag',
    score: 4.5,
    amountOfRatings: 65
  },
  {
    description: 'RGB liquid CPU Cooler',
    price: 160,
    hasPreviousPrice: true,
    previousPrice: 170,
    image: 'rgb-cooler',
    score: 4.5,
    amountOfRatings: 65
  },
  {
    description: 'Small BookShelf',
    price: 360,
    hasPreviousPrice: false,
    image: 'bookshelf',
    score: 5,
    amountOfRatings: 65
  },
  {
    description: 'The north coat',
    price: 260,
    hasPreviousPrice: true,
    previousPrice: 360,
    image: 'north-coat',
    score: 5,
    amountOfRatings: 65
  },
  {
    description: 'Gucci duffle bag',
    price: 960,
    hasPreviousPrice: true,
    previousPrice: 1190,
    image: 'gucci-bag',
    score: 4.5,
    amountOfRatings: 65
  },
  {
    description: 'RGB liquid CPU Cooler',
    price: 160,
    hasPreviousPrice: true,
    previousPrice: 170,
    image: 'rgb-cooler',
    score: 4.5,
    amountOfRatings: 65
  },
  {
    description: 'Small BookShelf',
    price: 360,
    hasPreviousPrice: false,
    image: 'bookshelf',
    score: 5,
    amountOfRatings: 65
  }
];

export const FlashSales = () => {
  return (
    <>
      <SectionTitle sectionName="Today's" heading="Flash Sales" />
      <ItemCarousel products={products} />
    </>
  );
};
