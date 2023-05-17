import React from 'react';
import {
  FooterColumn,
  FooterColumnContent,
  FooterContainer,
  FooterInput,
  StyledFooter
} from './Footer.styled';
import { Text } from '../../atoms/Text';

type Props = {
  title: string;
};

export const Footer: React.FC<Props> = ({ title }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterColumn>
          <Text tag="h2" title={title} color="white" textSize="big" bold />
          <Text title="Subscribe" color="white" textSize="big" />
          <FooterColumnContent>
            <Text
              title="Get 10% off your first order"
              color="white"
              textSize="normal"
            />
            <FooterInput placeholder="Enter your email" />
          </FooterColumnContent>
        </FooterColumn>
        <FooterColumn>
          <Text title="Support" color="white" textSize="big" />
          <FooterColumnContent>
            <Text
              title="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."
              color="white"
              textSize="normal"
            />
            <Text title="exclusive@gmail.com" color="white" textSize="normal" />
            <Text title="+88015-88888-9999" color="white" textSize="normal" />
          </FooterColumnContent>
        </FooterColumn>
        <FooterColumn>
          <Text title="Account" color="white" textSize="big" />
        </FooterColumn>
        <FooterColumn>
          <Text title="Quick link" color="white" textSize="big" />
        </FooterColumn>
        <FooterColumn>
          <Text title="Download app" color="white" textSize="big" />
        </FooterColumn>
      </FooterContainer>
    </StyledFooter>
  );
};
