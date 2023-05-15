import styled from 'styled-components';
import { text } from '../../../theme/theme';

type Props = {
  color: string;
  textSize: 'heading' | 'big' | 'normal' | 'small' | 'xsmall';
  fontWeight: string;
};

export const StyledText = styled.p<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => text.size[props.textSize].fontSize};
  line-height: ${(props) => props.textSize};
  font-weight: ${(props) => props.fontWeight};
`;
