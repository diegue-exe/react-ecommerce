import React from 'react';
import { FooterColumn, FooterContainer, StyledFooter } from './Footer.styled';
import { Text } from '../../atoms/Text';
import { text } from '../../../theme/theme';

type Props = {
  title: string;
};

export const Footer: React.FC<Props> = ({ title }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterColumn>
          <Text
            tag="h2"
            title={title}
            color={text.colors.white}
            textSize={text.size.big}
            fontWeight="700"
          />
          <Text
            title="Subscribe"
            color={text.colors.white}
            textSize={text.size.big}
            fontWeight="500"
          />
        </FooterColumn>
      </FooterContainer>
    </StyledFooter>
  );
};
