import styled from 'styled-components';

export const StyledText = styled.p<{
  color: string;
  textSize: {
    fontSize: string;
    lineHeight: string;
  };
  fontWeight: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.textSize.fontSize};
  line-height: ${(props) => props.textSize.lineHeight};
  font-weight: ${(props) => props.fontWeight};
`;
