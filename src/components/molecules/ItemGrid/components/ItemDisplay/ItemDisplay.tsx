import React, { FC } from 'react';
import { ImageContainer } from '../../../../atoms/ImageContainer';
import { ItemContainer, PricesContainer } from './ItemDisplay.styled';
import { Text } from '../../../../atoms/Text';
import { Rating } from '../../../../atoms/Rating';

type Props = {
  name: string;
  price: number;
  description: string;
  hasPreviousPrice: boolean;
  previousPrice?: number;
  score: number;
  amountOfRatings: number;
};

export const ItemDisplay: FC<Props> = ({
  name,
  price,
  description,
  hasPreviousPrice = false,
  previousPrice,
  score,
  amountOfRatings
}) => {
  return (
    <ItemContainer>
      <ImageContainer name={name}></ImageContainer>
      <Text title={description} textSize="normal" bold />
      <PricesContainer>
        <Text title={`$${price}`} textSize="small" color="accent" bold />
        {hasPreviousPrice && (
          <Text
            title={`$${previousPrice}` || ''}
            textSize="small"
            color="secondary"
          />
        )}
      </PricesContainer>
      <Rating score={score} amount={amountOfRatings} />
    </ItemContainer>
  );
};
