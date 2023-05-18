import React from 'react';
import { StyledSquare } from './Square.styled';
import { Background } from '../../../theme/theme';

type Props = {
  backgroundColor?: Background;
};

export const Square: React.FC<Props> = ({ backgroundColor = 'accent' }) => {
  return <StyledSquare backgroundColor={backgroundColor} />;
};
