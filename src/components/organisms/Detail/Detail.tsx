import React, { FC } from 'react';

import { Product } from '../../../models/Product';
import { Container, DetailsContainer, Underline } from './Detail.styled';
import { ImageGallery } from './components/ImageGallery';
import { Text } from '../../atoms/Text';
import { Rating } from '../../atoms/Rating';

type Props = {
  product: Product;
};

export const Detail: FC<Props> = ({ product }) => {
  return (
    <Container>
      <ImageGallery product={product} />
      <DetailsContainer>
        <Text title={product.description} textSize="big" bold />
        <Rating score={product.score} amount={product.amountOfRatings} />
        <Text title={`$${product.price.toFixed(2)}`} textSize="big" />
        <Text
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse aperiam voluptate exercitationem illum mollitia officiis facere sit voluptas harum"
          textSize="small"
        />
        <Underline></Underline>
      </DetailsContainer>
    </Container>
  );
};
