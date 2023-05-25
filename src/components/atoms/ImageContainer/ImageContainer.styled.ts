import styled from 'styled-components';

export const ImgContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 250px;

  background-color: ${({ theme }) => theme.background.secondary};

  border-radius: 4px;
`;

export const ItemButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
