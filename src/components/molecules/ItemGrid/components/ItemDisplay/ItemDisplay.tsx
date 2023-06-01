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

export const ItemDisplay: FC<Props> = ({
  id,
  amountOfRatings,
  description,
  hasPreviousPrice,
  name,
  price,
  score,
  previousPrice
}) => {
  return (
    <Link to={`/details/${id}`}>
      <ItemContainer>
        <ImageContainer name={name} size="default" />
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
    </Link>
  );
};
