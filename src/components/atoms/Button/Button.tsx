import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonVariant } from '../../../theme/theme';

type Props = {
  content: string | JSX.Element;
  variant?: ButtonVariant;
};

export const Button: React.FC<Props> = ({ content, variant = 'accent' }) => {
  return <StyledButton variant={variant}>{content}</StyledButton>;
};
