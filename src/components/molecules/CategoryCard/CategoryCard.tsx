import React from 'react';
import { Card, CardContainer } from './CategoryCard.styled';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';

export const CategoryCard = () => {
  // TODO selected variant with boolean attribute
  return (
    <Card>
      <CardContainer>
        <Icon name="cart" size="big"></Icon>
        <Text title="Cart" textSize="normal" />
      </CardContainer>
    </Card>
  );
};
