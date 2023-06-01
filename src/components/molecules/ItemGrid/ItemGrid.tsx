import React, { FC } from 'react';
import { GridContainer } from './ItemGrid.styled';
import { ItemDisplay } from './components/ItemDisplay';
import { Product } from '../../../models/Product';

type Props = {
  products: Product[];
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
