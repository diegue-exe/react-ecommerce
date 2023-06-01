import React from 'react';
import { CategoryCard } from '../CategoryCard';
import { CategoryContainer } from './CategoryList.styled';
import { CategoriesData } from '../..';

type Props = {
  data: CategoriesData;
};

export const CategoryList: React.FC<Props> = ({ data }) => {
  return (
    <CategoryContainer>
      {data.map((category) => (
        <CategoryCard text={category.text} icon={category.icon} />
      ))}
    </CategoryContainer>
  );
};
