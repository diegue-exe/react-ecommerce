import styled from 'styled-components';
import { text } from '../../../theme/theme';

type Props = {
  color: string;
  textSize: 'heading' | 'big' | 'normal' | 'small' | 'xsmall';
  bold: boolean;
};

export const StyledText = styled.p<Props>`
  color: ${({ color }) => color};
  font-size: ${({ textSize }) => text.size[textSize].fontSize};
  line-height: ${(props) => props.textSize};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
`;
