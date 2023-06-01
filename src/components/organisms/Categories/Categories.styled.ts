import styled from 'styled-components';

export const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
`;
