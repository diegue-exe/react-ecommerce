import React, { FC } from 'react';
import { RatingContainer, StarContainer } from './Rating.styled';
import { Text } from '../Text';
import { Icon } from '../Icon';

type Props = {
  score: number;
  amount: number;
};

export const Rating: FC<Props> = ({ score, amount }) => {
  const MAX_STARS = 5;

  const hasHalfStar = score % 1 !== 0;
  const exceedsMaxStars = Math.trunc(score) >= MAX_STARS;

  const fullStars = exceedsMaxStars ? 5 : Math.trunc(score);
  const usedStars = fullStars + (hasHalfStar ? 1 : 0);
  const emptyStars = MAX_STARS - usedStars;

  return (
    <RatingContainer>
      <StarContainer>
        {[...Array(fullStars)].map((element, index) => (
          <Icon name="star" key={index} size="small"></Icon>
        ))}
        {hasHalfStar ? <Icon name="star-half" size="small"></Icon> : null}
        {[...Array(emptyStars)].map((element, index) => (
          <Icon name="star-empty" key={index} size="small"></Icon>
        ))}
      </StarContainer>
      <Text
        title={'(' + amount + ')'}
        textSize="small"
        color="secondary"></Text>
    </RatingContainer>
  );
};
