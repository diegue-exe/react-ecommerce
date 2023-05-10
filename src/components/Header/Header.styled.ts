import styled from "styled-components";
import {text, container, background} from '../ui/theme';

export const HighlightedContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${background.black};
    height: 48px;
`;

export const HighlightedMessage = styled.span`
    font-size: ${text.sizes.small};
    color: ${text.colors.white};
    max-width: 1170px;
    margin: auto;
`;

export const Nav = styled.nav`
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: ${container.margin};
    max-width: ${container.maxWidth};
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 48px;
`;

export const NavAnchor = styled.a`
    font-size: ${text.sizes.normal};
    color: ${text.colors.primary};
    line-height: 24px;

    display: inline-block;
    padding-bottom:1px;
    background-image: linear-gradient(#000 0 0);
    background-position: 0 100%;
    background-size: 0% 1px;
    background-repeat: no-repeat;
    transition:
        background-size 0.3s,
        background-position 0s 0.3s;

    &:hover {
        background-position: 100% 100%;
        background-size: 100% 1px;
    }
`;

export const NavSearch = styled.input`
    background-color: ${background.secondary};
    padding: 10px 70px 10px 20px;
    border: none;
    color: #000;
    text-overflow: ellipsis;
    opacity: 0.5;
    font-size: ${text.sizes.xsmall};
    line-height: 18px;
    max-width: 248px;
`;

export const SearchContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`;