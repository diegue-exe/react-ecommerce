import React from 'react';
import { SectionTitle } from '../../molecules/SectionTitle';
import { Container } from './MonthlyProducts.styled';
import { ItemGrid } from '../../molecules/ItemGrid';
import products from '../../../api/products.json';
import { Product } from '../../../models/Product';

const getProducts = () => {
  const productArray: Product[] = products.trending;
  return productArray;
};

export const MonthlyProducts = () => {
  return (
    <Container>
      <SectionTitle sectionName="This Month" heading="Best Selling Products" />
      <ItemGrid products={getProducts()} />
    </Container>
  );
};
