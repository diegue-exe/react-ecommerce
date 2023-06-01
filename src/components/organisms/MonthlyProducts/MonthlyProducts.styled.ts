import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  margin-bottom: 70px;
`;
