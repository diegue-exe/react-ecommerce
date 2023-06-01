import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: auto;
  gap: 70px;
  margin-bottom: 70px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Underline = styled.span`
  height: 1px;
  background-color: ${({ theme }) => theme.background.black};
`;
