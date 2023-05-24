import styled from 'styled-components';
import { background, text } from '../../../../../theme/theme';

export const Card = styled.article`
  display: flex;
  width: 170px;
  height: 145px;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  &:hover {
    background-color: ${background.accent};
    color: ${text.colors.white};
    border: 2px solid ${background.accent};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
