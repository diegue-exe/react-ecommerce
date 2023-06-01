import React, { FC } from 'react';
import { FullwidthImage, GalleryGrid } from './ImageGallery.styled';
import { ImageContainer } from '../../../../atoms/ImageContainer';

type Props = {
  image: string;
};

export const ImageGallery: FC<Props> = ({ image }) => {
  return (
    <GalleryGrid>
      <ImageContainer name={image} size="detailSmall" hasButtons={false} />
      <ImageContainer name={image} size="detailSmall" hasButtons={false} />
      <ImageContainer name={image} size="detailSmall" hasButtons={false} />
      <ImageContainer name={image} size="detailSmall" hasButtons={false} />
      <FullwidthImage>
        <ImageContainer name={image} size="detailBig" hasButtons={false} />
      </FullwidthImage>
    </GalleryGrid>
  );
};
