import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { Color, IconSize, icon, text } from '../../../theme/theme';

type Props = {
  color: Color;
  size: IconSize;
};

export const StyledIcon = styled(ReactSVG)<Props>`
  display: flex;
  align-items: center;
  fill: ${({ color }) => text.colors[color]};
  width: ${({ size }) => icon.size[size].icon};
  height: ${({ size }) => icon.size[size].icon};
`;
