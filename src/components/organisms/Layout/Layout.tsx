import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container } from './Layout.styled';

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

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header
        highlightedMessage={highlightedMessage}
        title={title}
        anchors={links}
      />
      <Container>{children}</Container>
      <Footer title={title} columns={columns} />
    </>
  );
};
