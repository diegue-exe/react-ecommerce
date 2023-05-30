import React, { FC } from 'react';
import { GridContainer } from './ItemGrid.styled';
import { ItemDisplay } from './components/ItemDisplay';

type Props = {
  products: {
    id: string;
    description: string;
    price: number;
    hasPreviousPrice: boolean;
    previousPrice?: number;
    image: string;
    score: number;
    amountOfRatings: number;
  }[];
};

export const ItemGrid: FC<Props> = ({ products }) => {
  return (
    <GridContainer>
      {products.map(
        ({
          id,
          description,
          price,
          hasPreviousPrice,
          previousPrice,
          image,
          score,
          amountOfRatings
        }) => (
          <ItemDisplay
            id={id}
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
    </GridContainer>
  );
};
