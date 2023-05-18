export const background = {
  primary: '#fff',
  secondary: '#f5f5f5',
  accent: '#db4444',
  black: '#000'
};
export type Background = keyof typeof background;

export const text = {
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

export const container = {
  maxWidth: '1170px',
  margin: 'auto'
};
export type Container = keyof typeof container;

export const icon = {
  size: {
    small: {
      circle: '34px',
      icon: '16px'
    },
    medium: {
      circle: '46px',
      icon: '16px'
    },
    big: {
      circle: '58px',
      icon: '46px'
    }
  }
};

export type IconSize = keyof typeof icon.size;
