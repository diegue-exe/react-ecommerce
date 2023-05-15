import React from 'react';
// import { NavTitle } from "../../atoms/Text/Text";
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
import Cart from '../../atoms/Icons/Cart';
import Heart from '../../atoms/Icons/Heart';
import { text } from '../../theme';

export const Header = ({
  highlightedMessage,
  title,
  anchors
}: {
  highlightedMessage: string;
  title: string;
  anchors: string[];
}) => {
  return (
    <>
      <HighlightedContainer>
        <HighlightedMessage>{highlightedMessage}</HighlightedMessage>
      </HighlightedContainer>
      <Nav>
        <NavContainer>
          <Text
            as="h1"
            color={text.colors.primary}
            fontSize={text.sizes.big}
            fontWeight="700">
            {title}
          </Text>
          <NavLinks>
            {anchors.map((anchor) => {
              return <NavAnchor>{anchor}</NavAnchor>;
            })}
          </NavLinks>
          <SearchContainer>
            <NavSearch
              type="text"
              placeholder="What are you looking for?"></NavSearch>
            <Cart />
            <Heart />
          </SearchContainer>
        </NavContainer>
      </Nav>
    </>
  );
};
