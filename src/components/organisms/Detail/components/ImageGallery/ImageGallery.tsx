import React, { FC } from 'react';
import { FullwidthImage, GalleryGrid } from './ImageGallery.styled';
import { ImageContainer } from '../../../../atoms/ImageContainer';
import { Product } from '../../../../../models/Product';

type Props = {
  product: Product;
};

export const ImageGallery: FC<Props> = ({ product }) => {
  return (
    <GalleryGrid>
      <ImageContainer
        name={product.image}
        size="detailSmall"
        hasButtons={false}
      />
      <ImageContainer
        name={product.image}
        size="detailSmall"
        hasButtons={false}
      />
      <ImageContainer
        name={product.image}
        size="detailSmall"
        hasButtons={false}
      />
      <ImageContainer
        name={product.image}
        size="detailSmall"
        hasButtons={false}
      />
      <FullwidthImage>
        <ImageContainer
          name={product.image}
          size="detailBig"
          hasButtons={false}
        />
      </FullwidthImage>
    </GalleryGrid>
  );
};
