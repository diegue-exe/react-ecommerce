import React from 'react';
import { IconSize, TextSize } from '../../../theme/theme';
import { CategoryList } from './components/CategoryList';
import { SectionTitle } from '../../molecules/SectionTitle';
import { CategoriesSection } from './Categories.styled';
import { Text } from '../../atoms/Text';

export type CategoriesData = {
  text: {
    categoryName: string;
    size: TextSize;
  };
  icon: {
    size: IconSize;
    name: string;
  };
}[];

const categories: CategoriesData = [
  {
    text: {
      categoryName: 'Phones',
      size: 'normal'
    },
    icon: {
      size: 'big',
      name: 'mobile'
    }
  },
  {
    text: {
      categoryName: 'Computers',
      size: 'normal'
    },
    icon: {
      size: 'big',
      name: 'desktop'
    }
  },
  {
    text: {
      categoryName: 'Smartwatch',
      size: 'normal'
    },
    icon: {
      size: 'big',
      name: 'watch'
    }
  },
  {
    text: {
      categoryName: 'Camera',
      size: 'normal'
    },
    icon: {
      size: 'big',
      name: 'camera'
    }
  },
  {
    text: {
      categoryName: 'HeadPhones',
      size: 'normal'
    },
    icon: {
      size: 'big',
      name: 'headphones'
    }
  },
  {
    text: {
      categoryName: 'Gaming',
      size: 'normal'
    },
    icon: {
      size: 'big',
      name: 'gaming'
    }
  }
];

export const Categories = () => {
  return (
    <CategoriesSection>
      <SectionTitle sectionName="Categories"></SectionTitle>
      <Text
        title="Browse By Category"
        color="primary"
        textSize="heading"
        bold
      />
      <CategoryList data={categories} />
    </CategoriesSection>
  );
};
