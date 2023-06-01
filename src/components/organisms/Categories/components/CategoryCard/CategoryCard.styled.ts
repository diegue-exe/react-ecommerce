import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  width: 170px;
  height: 145px;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.background.accent};
    color: ${({ theme }) => theme.text.colors.white};
    border: 2px solid ${({ theme }) => theme.background.accent};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
