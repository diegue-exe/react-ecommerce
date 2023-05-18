import React from 'react';
import { Card, CardContainer } from './CategoryCard.styled';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { IconSize, TextSize } from '../../../theme/theme';

type Props = {
  text: {
    categoryName: string;
    size: TextSize;
  };
  icon: {
    size: IconSize;
    name: string;
  };
};

export const CategoryCard: React.FC<Props> = ({ text, icon }) => {
  // TODO selected variant with boolean attribute
  return (
    <Card>
      <CardContainer>
        <Icon name={icon.name} size={icon.size}></Icon>
        <Text title={text.categoryName} textSize={text.size} />
      </CardContainer>
    </Card>
  );
};
