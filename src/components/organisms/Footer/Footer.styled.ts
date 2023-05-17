import styled from 'styled-components';
import { background, container, text } from '../../../theme/theme';

export const StyledFooter = styled.footer`
  background-color: ${background.black};
  width: 100%;
  min-height: 440px;
  color: ${text.colors.white};
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${container.maxWidth};
  margin: ${container.margin};
  padding: 40px 0px 60px 0px;
`;

export const FooterColumn = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  gap: 24px;
`;

export const FooterColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterInput = styled.input`
  background-color: ${background.black};
  color: ${text.colors.secondary};
  font-size: ${text.size.normal.fontSize};
  line-height: ${text.size.normal.lineHeight};
  border: 1px solid white;
  border-radius: 8px;
  padding: 12px;
`;
