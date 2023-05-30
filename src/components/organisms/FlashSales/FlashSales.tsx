import React from 'react';
import { SectionTitle } from '../../molecules/SectionTitle';
import { ItemCarousel } from './components/ItemCarousel';
import products from '../../../api/products.json';
import { Product } from '../../../models/Product';

const getProducts = () => {
  const productArray: Product[] = products.all;
  return productArray;
};

export const FlashSales = () => {
  return (
    <>
      <SectionTitle sectionName="Today's" heading="Flash Sales" />
      <ItemCarousel products={getProducts()} />
    </>
  );
};
