import React, { FC } from 'react';
import { ImageContainer } from '../../../../atoms/ImageContainer';
import { ItemContainer, PricesContainer } from './ItemDisplay.styled';
import { Text } from '../../../../atoms/Text';
import { Rating } from '../../../../atoms/Rating';

import { Link } from 'wouter';

type Props = {
  id: string;
  name: string;
  price: number;
  description: string;
  hasPreviousPrice: boolean;
  previousPrice?: number;
  score: number;
  amountOfRatings: number;
};

export const ItemDisplay: FC<Props> = (product) => {
  return (
    <Link to={`/details/${product.id}`}>
      <ItemContainer>
        <ImageContainer name={product.name} size="default"></ImageContainer>
        <Text title={product.description} textSize="normal" bold />
        <PricesContainer>
          <Text
            title={`$${product.price}`}
            textSize="small"
            color="accent"
            bold
          />
          {product.hasPreviousPrice && (
            <Text
              title={`$${product.previousPrice}` || ''}
              textSize="small"
              color="secondary"
            />
          )}
        </PricesContainer>
        <Rating score={product.score} amount={product.amountOfRatings} />
      </ItemContainer>
    </Link>
  );
};
