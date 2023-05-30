import styled from 'styled-components';

export const GalleryGrid = styled.div`
  // TODO cambiar los tamaños y espacios a algo más responsive
  display: grid;
  grid-template-columns: 170px 500px;
  grid-template-rows: 138px;
  grid-gap: 16px 30px;
`;

export const FullwidthImage = styled.div`
  grid-row: 1 / span 4;
  grid-column: 2;
`;
