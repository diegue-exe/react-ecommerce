
export const theme = {
  background: {
    primary: '#fff',
    secondary: '#f5f5f5',
    accent: '#db4444',
    black: '#000',
    green: '#00ff66'
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
      small: '16px',
      medium: '20px',
      big: '46px'
    }
  },
  button: {
    rounded: {
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      backgroundColor: 'secondary'
    },
    roundedSmall: {
      width: '34px',
      height: '34px',
      borderRadius: '50%',
      backgroundColor: 'primary'
    },
    accent: {
      width: '100%',
      height: '56px',
      borderRadius: '4px',
      backgroundColor: 'accent'
    },
    green: {
      width: '100%',
      height: '56px',
      borderRadius: '4px',
      backgroundColor: 'green'
    }
  }
};
export type Color = keyof typeof text.colors;
export type Background = keyof typeof theme.background;
export type Color = keyof typeof theme.text.colors;
export type TextSize = keyof typeof theme.text.size;
export type Container = keyof typeof theme.container;
export type IconSize = keyof typeof theme.icon.size;
export type ButtonVariant = keyof typeof theme.button;
