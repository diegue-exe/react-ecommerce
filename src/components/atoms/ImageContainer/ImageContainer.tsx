import React, { FC } from 'react';
import { ImgContainer, ItemButtonContainer } from './ImageContainer.styled';
import { Button } from '../Button';
import { Icon } from '../Icon';

type Props = {
  name: string;
};

export const ImageContainer: FC<Props> = ({ name }) => {
  return (
    <ImgContainer>
      <ItemButtonContainer>
        <Button content={<Icon name="heart" />} variant="roundedSmall"></Button>
        <Button
          content={<Icon name="list-plus" />}
          variant="roundedSmall"></Button>
      </ItemButtonContainer>
      <img src={`items/${name}.png`} alt="" />
    </ImgContainer>
  );
};
