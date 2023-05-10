import React from "react";
import { NavTitle } from "../ui/StyledText/StyledText";
import { NavContainer, NavLinks, NavAnchor, HighlightedContainer, HighlightedMessage, NavSearch, SearchContainer, Nav } from './Header.styled';
import Cart from "../ui/Icons/Cart";
import Heart from "../ui/Icons/Heart";


export const Header = ({ highlightedMessage, title, anchors }:{ highlightedMessage: string, title: string, anchors: string[] }) => {
  return (
    <>
      <HighlightedContainer>
        <HighlightedMessage>{highlightedMessage}</HighlightedMessage>
      </HighlightedContainer>
      <Nav>
        <NavContainer>
          <NavTitle>{title}</NavTitle>
          <NavLinks>
            {
              anchors.map(anchor => {
                return <NavAnchor>{anchor}</NavAnchor>
              })
            }
          </NavLinks>
          <SearchContainer>
            <NavSearch type="text" placeholder="What are you looking for?"></NavSearch>
            <Cart />
            <Heart />
          </SearchContainer>
        </NavContainer>
      </Nav>
    </>
  );
}