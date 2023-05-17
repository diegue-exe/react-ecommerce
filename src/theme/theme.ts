const background = {
  primary: '#fff',
  secondary: '#f5f5f5',
  accent: '#db4444',
  black: '#000'
};
export type Background = keyof typeof background;

const text = {
  colors: {
    primary: '#000',
    secondary: '#7d8184',
    accent: '#db4444',
    white: '#fff'
  },
  size: {
    heading: {
      fontSize: '36px',
      lineHeight: '48px'
    },
    big: {
      fontSize: '24px',
      lineHeight: '24px'
    },
    normal: {
      fontSize: '16px',
      lineHeight: '20px'
    },
    small: {
      fontSize: '14px',
      lineHeight: '21px'
    },
    xsmall: {
      fontSize: '12px',
      lineHeight: '18px'
    }
  }
};
export type Color = keyof typeof text.colors;

const container = {
  maxWidth: '1170px',
  margin: 'auto'
};
export type Container = keyof typeof container;
