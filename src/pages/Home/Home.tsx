import React from "react";
import { GlobalStyle } from "../../components/atoms/GlobalStyle/GlobalStyle";
import { Header } from "../../components/organisms/Header";

const links: string[] = ['Home', 'Contact', 'About', 'Sign Up'];
const title: string = "Exclusive";
const highlightedMessage: string = "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!";

export const Home = () => {
    return (
        <>
            <GlobalStyle />
            <Header highlightedMessage={highlightedMessage} title={title} anchors={links} />
        </>
    );
}