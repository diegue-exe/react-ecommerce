import styled from 'styled-components';
import { Color, text } from '../../../theme/theme';

type Props = {
  color: Color;
  textSize: 'heading' | 'big' | 'normal' | 'small' | 'xsmall';
  bold: boolean;
};

export const StyledText = styled.p<Props>`
  color: ${({ color }) => text.colors[color]};
  font-size: ${({ textSize }) => text.size[textSize].fontSize};
  line-height: ${(props) => props.textSize};
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
`;
