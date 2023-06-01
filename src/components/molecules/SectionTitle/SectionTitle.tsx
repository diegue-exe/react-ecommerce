import React from 'react';
import { Background } from '../../../theme/theme';
import { Square } from './components/Square';
import { Text } from '../../atoms/Text';
import { Container, SectionContainer } from './SectionTitle.styled';


type Props = {
  sectionName: string;
  squareColor?: Background;
  heading: string;
};

export const SectionTitle: React.FC<Props> = ({
  sectionName,
  squareColor = 'accent',
  heading
}) => {
  return (
    <Container>
      <SectionContainer>
        <Square backgroundColor={squareColor} />
        <Text title={sectionName} textSize="normal" color="accent" bold />
      </SectionContainer>
      <Text title={heading} textSize="heading" bold />
    </Container>
  );
};
