import React from 'react';
import { SectionTitle } from '../../molecules/SectionTitle';
import { Container } from './MonthlyProducts.styled';
import { ItemGrid } from '../../molecules/ItemGrid';
import products from '../../../api/products.json';

const getProducts = () => {
  return products.trending;
};

export const MonthlyProducts = () => {
  return (
    <Container>
      <SectionTitle sectionName="This Month" heading="Best Selling Products" />
      <ItemGrid products={getProducts()}></ItemGrid>
    </Container>
  );
};
