import React from 'react';

import { FlashSales } from '../../components/organisms/FlashSales';
import { Categories } from '../../components/organisms/Categories';
import { MonthlyProducts } from '../../components/organisms/MonthlyProducts';
import { Layout } from '../../components/organisms/Layout/Layout';

export const Home = () => {
  return (
    <>
      <Layout>
        <FlashSales />
        <Categories />
        <MonthlyProducts />
      </Layout>
    </>
  );
};
