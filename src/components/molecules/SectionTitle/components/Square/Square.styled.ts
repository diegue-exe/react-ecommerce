import styled from 'styled-components';
import { Background } from '../../../../../theme/theme';

type Props = {
  backgroundColor: Background;
};

export const StyledSquare = styled.div<Props>`
  width: 20px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ backgroundColor, theme }) =>
    theme.background[backgroundColor]};
`;
