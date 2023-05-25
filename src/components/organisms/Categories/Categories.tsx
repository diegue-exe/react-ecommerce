import React from 'react';
import { CategoryList } from './components/CategoryList';
import { SectionTitle } from '../../molecules/SectionTitle';
import { CategoriesSection } from './Categories.styled';

export type CategoriesData = {
  text: string;
  icon: string;
}[];

const categories: CategoriesData = [
  {
    text: 'Phones',
    icon: 'mobile'
  },
  {
    text: 'Computers',
    icon: 'desktop'
  },
  {
    text: 'Smartwatch',
    icon: 'watch'
  },
  {
    text: 'Camera',
    icon: 'camera'
  },
  {
    text: 'HeadPhones',
    icon: 'headphones'
  },
  {
    text: 'Gaming',
    icon: 'gaming'
  }
];

export const Categories = () => {
  return (
    <CategoriesSection>
      <SectionTitle sectionName="Categories" heading="Browse By Category" />
      <CategoryList data={categories} />
    </CategoriesSection>
  );
};
