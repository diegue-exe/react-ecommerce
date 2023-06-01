import styled from 'styled-components';
import { ButtonVariant } from '../../../theme/theme';

type Props = {
  variant: ButtonVariant;
};

export const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ variant, theme }) => theme.button[variant].width};
  height: ${({ variant, theme }) => theme.button[variant].height};
  background-color: ${({ variant, theme }) =>
    theme.background[theme.button[variant].backgroundColor]};
  color: ${({ variant, theme }) => theme.button[variant].color};
  font-size: 16px;
  border: none;
  border-radius: ${({ variant, theme }) => theme.button[variant].borderRadius};
`;
