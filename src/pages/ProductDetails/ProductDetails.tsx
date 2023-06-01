import React, { FC } from 'react';
import products from '../../api/products.json';
import { Detail } from '../../components/organisms/Detail';
import { Product } from '../../models/Product';
import { Layout } from '../../components/organisms/Layout/Layout';

const getProducts = () => {
  const productArray: Product[] = products.all;
  return productArray;
};

type Props = {
  id: string;
};

export const ProductDetails: FC<Props> = ({ id }) => {
  // TODO filter o find para encontrar el elemento, luego pintarlo o no según si lo encunetra o no
  return (
    <>
      <Layout>
        {/* TODO cambiar esta lógica */}
        {getProducts().map((product) => {
          const isTheClickedProduct = product.id === id;
          if (isTheClickedProduct) return <Detail product={product} />;
          return '';
        })}
      </Layout>
    </>
  );
};
