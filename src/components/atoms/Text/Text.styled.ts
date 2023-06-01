import styled from 'styled-components';
import { Color } from '../../../theme/theme';

type Props = {
  color: Color;
  textSize: 'heading' | 'big' | 'normal' | 'small' | 'xsmall';
  bold: boolean;
};

export const StyledText = styled.p<Props>`
  color: ${({ color, theme }) => theme.text.colors[color]};
  font-size: ${({ textSize, theme }) => theme.text.size[textSize].fontSize};
  line-height: ${({ textSize, theme }) => theme.text.size[textSize].lineHeight};
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
`;
