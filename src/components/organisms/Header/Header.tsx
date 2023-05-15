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
import { text } from '../../../theme/theme';

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
            color={text.colors.primary}
            textSize={text.size.big}
            fontWeight="700"
            title={title}
          />
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
