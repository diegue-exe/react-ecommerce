import styled from 'styled-components';
import { background, container, text } from '../../../theme/theme';
import { ReactComponent as FacebookIcon } from '../../atoms/Icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../atoms/Icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../atoms/Icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../atoms/Icons/linkedin.svg';

export const StyledFooter = styled.footer`
  background-color: ${background.black};
  width: 100%;
  min-height: 440px;
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
export const DownloadContainer = styled.div`
  display: flex;
  gap: 13px;
`;

export const AppStoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Facebook = styled(FacebookIcon)`
  fill: ${text.colors.white};
  width: 20px;
  height: 20px;
`;

export const Instagram = styled(InstagramIcon)`
  fill: ${text.colors.white};
  width: 20px;
  height: 20px;
`;

export const Twitter = styled(TwitterIcon)`
  fill: ${text.colors.white};
  width: 20px;
  height: 20px;
`;

export const Linkedin = styled(LinkedinIcon)`
  fill: ${text.colors.white};
  width: 20px;
  height: 20px;
`;
