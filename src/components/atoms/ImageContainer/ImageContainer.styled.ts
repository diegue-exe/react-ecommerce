import styled from 'styled-components';

import { ImageContainerSize } from '../../../theme/theme';

type Props = {
  size: ImageContainerSize;
};

export const ImgContainer = styled.div<Props>`

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({ theme, size }) => theme.imageContainer[size].width};
  height: ${({ theme, size }) => theme.imageContainer[size].height};
  // TODO añadir scale
  background-color: ${({ theme }) => theme.background.secondary};

  border-radius: 4px;

  & > img {
    transform: scale(${({ theme, size }) => theme.imageContainer[size].scale});
  }
`;

export const ItemButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
