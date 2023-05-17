import React from 'react';
import { GlobalStyle } from '../../theme/GlobalStyle/GlobalStyle';
import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';

const links: string[] = ['Home', 'Contact', 'About', 'Sign Up'];
const title: string = 'Exclusive';
const highlightedMessage: string =
  'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!';
const columns = [
  {
    title: 'Support',
    content: [
      '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
      'exclusive@gmail.com',
      '+88015-88888-9999'
    ]
  },
  {
    title: 'Account',
    content: ['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop']
  },
  {
    title: 'Quick Link',
    content: ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact']
  }
];

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header
        highlightedMessage={highlightedMessage}
        title={title}
        anchors={links}
      />
      <Footer title={title} columns={columns}></Footer>
    </>
  );
};
