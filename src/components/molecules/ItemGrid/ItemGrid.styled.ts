import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: ${({ theme }) => theme.container.maxWidth};
  grid-row-gap: 60px;
  grid-column-gap: 30px;
`;
