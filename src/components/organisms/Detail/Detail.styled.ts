import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  gap: 70px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Underline = styled.aside`
  width: 100%;
  height: 1px;
  background-color: black;
`;
