import React from 'react';
import { Container } from './Sections.styled';
import { Categories } from '../Categories';
import { MonthlyProducts } from '../MonthlyProducts';
import { FlashSales } from '../FlashSales';

export const Sections = () => {
  return (
    <Container>
      <FlashSales />
      <Categories />
      <MonthlyProducts />
    </Container>
  );
};
