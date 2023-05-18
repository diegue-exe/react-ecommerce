import React from 'react';
import { Categories } from '../../../pages/Home/Home';
import { CategoryCard } from '../CategoryCard';
import { CategoryContainer } from './CategoryList.styled';

type Props = {
  data: Categories;
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
