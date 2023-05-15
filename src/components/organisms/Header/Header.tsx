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
import Cart from '../../atoms/Icons/Cart';
import Heart from '../../atoms/Icons/Heart';
import { text } from '../../../theme/theme';

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
          <Text
            tag="h1"
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
