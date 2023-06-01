import React, { FC } from 'react';
import { Carousel } from './ItemCarousel.styled';
import { ItemDisplay } from '../../../../molecules/ItemGrid/components/ItemDisplay';

type Props = {
  products: {
    description: string;
    price: number;
    hasPreviousPrice: boolean;
    previousPrice?: number;
    image: string;
    score: number;
    amountOfRatings: number;
  }[];
};

export const ItemCarousel: FC<Props> = ({ products }) => {
  return (
    <Carousel>
      {products.map(
        ({
          description,
          price,
          hasPreviousPrice,
          previousPrice,
          image,
          score,
          amountOfRatings
        }) => (
          <ItemDisplay
            name={image}
            description={description}
            price={price}
            hasPreviousPrice={hasPreviousPrice}
            previousPrice={previousPrice}
            score={score}
            amountOfRatings={amountOfRatings}
          />
        )
      )}
    </Carousel>
  );
};
