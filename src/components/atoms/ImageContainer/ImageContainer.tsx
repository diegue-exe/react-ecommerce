import React, { FC } from 'react';
import { ImgContainer, ItemButtonContainer } from './ImageContainer.styled';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ImageContainerSize } from '../../../theme/theme';

type Props = {
  name: string;
  size: ImageContainerSize;
  hasButtons?: boolean;
};

export const ImageContainer: FC<Props> = ({
  name,
  size,
  hasButtons = true
}) => {
  return (
    <ImgContainer size={size}>
      {hasButtons && (
        <ItemButtonContainer>
          <Button
            content={<Icon name="heart" />}
            variant="roundedSmall"></Button>
          <Button
            content={<Icon name="list-plus" />}
            variant="roundedSmall"></Button>
        </ItemButtonContainer>
      )}
      <img src={`/items/${name}.png`} alt="" />
    </ImgContainer>
  );
};
