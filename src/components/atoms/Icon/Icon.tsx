import React from 'react';
import { Color, IconSize } from '../../../theme/theme';
import { StyledIcon } from './Icon.styled';

type Props = {
  name: string;
  color?: Color;
  size?: IconSize;
  circle?: boolean;
};

export const Icon: React.FC<Props> = ({
  name,
  color = 'primary',
  size = 'medium'
}) => {
  return <StyledIcon src={`icons/${name}.svg`} color={color} size={size} />;
};
