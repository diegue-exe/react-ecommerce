import React, { FC } from 'react';

import { Product } from '../../../models/Product';
import { Container, DetailsContainer, Underline } from './Detail.styled';
import { ImageGallery } from './components/ImageGallery';
import { Text } from '../../atoms/Text';
import { Rating } from '../../atoms/Rating';
import { Button } from '../../atoms/Button';

type Props = {
  product: Product;
};

export const Detail: FC<Props> = ({ product }) => {
  const { description, score, price, amountOfRatings, image } = product;
  return (
    <Container>
      <ImageGallery image={image} />
      <DetailsContainer>
        <Text title={description} textSize="big" bold />
        <Rating score={score} amount={amountOfRatings} />
        <Text title={`$${price.toFixed(2)}`} textSize="big" />
        <Text
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse aperiam voluptate exercitationem illum mollitia officiis facere sit voluptas harum"
          textSize="small"
        />
        <Underline></Underline>
        <Text title="Colours:" textSize="big" />
        {/* TODO un container que tenga los botones al lado */}
        <Text title="Size: " textSize="big" />
        {/* TODO un container que tenga los botones al lado */}
        <Button content="Buy now" />
      </DetailsContainer>
    </Container>
  );
};
