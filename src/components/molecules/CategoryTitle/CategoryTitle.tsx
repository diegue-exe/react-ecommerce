import React from 'react';
import { Background } from '../../../theme/theme';
import { Square } from '../../atoms/Square';
import { Text } from '../../atoms/Text';
import { CategoryContainer } from './CategoryTitle.styled';

type Props = {
  categoryName: string;
  squareColor?: Background;
};

export const CategoryTitle: React.FC<Props> = ({
  categoryName,
  squareColor = 'accent'
}) => {
  return (
    <CategoryContainer>
      <Square backgroundColor={squareColor} />
      <Text title={categoryName} textSize="normal" color="accent" bold />
    </CategoryContainer>
  );
};
