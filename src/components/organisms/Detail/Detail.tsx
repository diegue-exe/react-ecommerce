import React, { FC } from 'react';

import { Product } from '../../../models/Product';
import { Container } from './Detail.styled';
import { ImageGallery } from './components/ImageGallery';

type Props = {
  product: Product;
};

export const Detail: FC<Props> = ({ product }) => {
  return (
    <Container>
      <ImageGallery product={product} />
    </Container>
  );
};
