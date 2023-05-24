import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { Color, IconSize } from '../../../theme/theme';

type Props = {
  color: Color;
  size: IconSize;
};

export const StyledIcon = styled(ReactSVG)<Props>`
  display: flex;
  align-items: center;
  fill: ${({ color, theme }) => theme.text.colors[color]};

  & > div > svg {
    width: ${({ size, theme }) => theme.icon.size[size].icon};
    height: ${({ size, theme }) => theme.icon.size[size].icon};
  }
`;
