import React from 'react';
import { Background } from '../../../theme/theme';
import { Square } from './components/Square';
import { Text } from '../../atoms/Text';
import { SectionContainer } from './SectionTitle.styled';

type Props = {
  sectionName: string;
  squareColor?: Background;
};

export const SectionTitle: React.FC<Props> = ({
  // TODO rename SectionTitle
  sectionName,
  squareColor = 'accent'
}) => {
  return (
    <SectionContainer>
      <Square backgroundColor={squareColor} />
      <Text title={sectionName} textSize="normal" color="accent" bold />
    </SectionContainer>
  );
};
