import styled from 'styled-components';

type Props = {
  color: string;
  textSize: {
    fontSize: string;
    lineHeight: string;
  };
  fontWeight: string;
};

export const StyledText = styled.p<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.textSize.fontSize};
  line-height: ${(props) => props.textSize.lineHeight};
  font-weight: ${(props) => props.fontWeight};
`;
