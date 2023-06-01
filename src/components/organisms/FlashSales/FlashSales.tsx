import React from 'react';
import { SectionTitle } from '../../molecules/SectionTitle';
import { ItemCarousel } from './components/ItemCarousel';
import products from '../../../api/products.json';
import { Product } from '../../../models/Product';
import { Container } from './FlashSales.styled';

const getProducts = () => {
  const productArray: Product[] = products.all;
  return productArray;
};

export const FlashSales = () => {
  return (
    <Container>
      <SectionTitle sectionName="Today's" heading="Flash Sales" />
      <ItemCarousel products={getProducts()} />
    </Container>
  );
};
