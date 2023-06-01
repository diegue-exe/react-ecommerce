import React from 'react';
import { Text } from '../../atoms/Text/Text';
import {
  NavContainer,
  NavLinks,
  NavAnchor,
  HighlightedContainer,
  HighlightedMessage,
  NavSearch,
  SearchContainer,
  Nav
} from './Header.styled';
import { Icon } from '../../atoms/Icon/Icon';

type Props = {
  highlightedMessage: string;
  title: string;
  anchors: string[];
};

export const Header: React.FC<Props> = ({
  highlightedMessage,
  title,
  anchors
}) => {
  return (
    <>
      <HighlightedContainer>
        <HighlightedMessage>{highlightedMessage}</HighlightedMessage>
      </HighlightedContainer>
      <Nav>
        <NavContainer>
          <Text tag="h1" color="primary" textSize="big" title={title} bold />
          <NavLinks>
            {anchors.map((anchor) => {
              return <NavAnchor>{anchor}</NavAnchor>;
            })}
          </NavLinks>
          <SearchContainer>
            <NavSearch type="text" placeholder="What are you looking for?" />
            <Icon name="cart" />
            <Icon name="heart" />
          </SearchContainer>
        </NavContainer>
      </Nav>
    </>
  );
};
