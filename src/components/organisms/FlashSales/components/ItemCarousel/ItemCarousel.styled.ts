import styled from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 70px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
