import React from 'react';
import {
  AppStoresContainer,
  DownloadContainer,
  Facebook,
  FooterColumn,
  FooterColumnContent,
  FooterContainer,
  FooterInput,
  Instagram,
  Linkedin,
  SocialMediaContainer,
  StyledFooter,
  Twitter
} from './Footer.styled';
import { Text } from '../../atoms/Text';
import qrcode from '../../../assets/qrcode.png';
import appstore from '../../../assets/appstore.png';
import playstore from '../../../assets/playstore.png';

type Props = {
  title: string;
  columns: {
    title: string;
    content: string[];
  }[];
};

export const Footer: React.FC<Props> = ({ title, columns }) => {
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
        {columns.map((column) => {
          return (
            <FooterColumn>
              <Text title={column.title} color="white" textSize="big" />
              <FooterColumnContent>
                {column.content.map((contentRow) => {
                  return (
                    <Text title={contentRow} color="white" textSize="normal" />
                  );
                })}
              </FooterColumnContent>
            </FooterColumn>
          );
        })}
        <FooterColumn>
          <Text title="Download app" color="white" textSize="big" />
          <FooterColumnContent>
            <Text
              title="Save $3 with App New User Only"
              color="secondary"
              textSize="xsmall"
            />
            <DownloadContainer>
              <img src={qrcode} alt="" />
              <AppStoresContainer>
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
              </AppStoresContainer>
            </DownloadContainer>
            <SocialMediaContainer>
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </SocialMediaContainer>
          </FooterColumnContent>
        </FooterColumn>
      </FooterContainer>
    </StyledFooter>
  );
};
