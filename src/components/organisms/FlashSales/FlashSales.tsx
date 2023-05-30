import React from 'react';
import { SectionTitle } from '../../molecules/SectionTitle';
import { ItemCarousel } from './components/ItemCarousel';
import products from '../../../api/products.json';

const getProducts = () => {
  return products.all;
};

export const FlashSales = () => {
  return (
    <>
      <SectionTitle sectionName="Today's" heading="Flash Sales" />
      <ItemCarousel products={getProducts()} />
    </>
  );
};
