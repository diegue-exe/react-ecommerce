import React from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { Route } from 'wouter';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route path="/home" component={Home} />
        <Route path="/details/:id">
          {({ id }) => <ProductDetails id={id} />}
        </Route>
      </ThemeProvider>
    </>
  );
};

export default App;
