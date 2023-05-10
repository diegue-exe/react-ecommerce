import React from 'react';
import './App.css';
import { GlobalStyle } from './components/ui/GlobalStyle/GlobalStyle';
import { Header } from './components/Header';

const links: string[] = ['Home', 'Contact', 'About', 'Sign Up'];
const title: string = "Exclusive";
const highlightedMessage: string = "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header highlightedMessage={highlightedMessage} title={title} anchors={links} />
    </>
  );
}

export default App;
