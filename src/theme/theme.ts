export const theme = {
  background: {
    primary: '#fff',
    secondary: '#f5f5f5',
    accent: '#db4444',
    black: '#000'
  },
  text: {
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
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto'
  },
  icon: {
    size: {
      small: {
        circle: '34px',
        icon: '16px'
      },
      medium: {
        circle: '46px',
        icon: '20px'
      },
      big: {
        circle: '58px',
        icon: '46px'
      }
    }
  }
};

export type Background = keyof typeof theme.background;
export type Color = keyof typeof theme.text.colors;
export type TextSize = keyof typeof theme.text.size;
export type Container = keyof typeof theme.container;
export type IconSize = keyof typeof theme.icon.size;
