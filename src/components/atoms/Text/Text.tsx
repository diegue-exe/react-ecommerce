import styled, { css } from 'styled-components';
import { text } from '../../theme';

const variantStyles = (color: string, fontSize: string, fontWeight: string) =>
  ({
    styles: css`
      font-family: ${text.families.poppins};
      font-size: ${fontSize};
      color: ${color};
      font-weight: ${fontWeight};
      line-height: 24px;
    `
  }['styles']);

export const Text = styled.p<{
  color: string;
  fontSize: string;
  fontWeight: string;
}>`
  ${({ color, fontSize, fontWeight }) =>
    variantStyles(color, fontSize, fontWeight)}
`;

// export const SectionTitle = styled.h2`
// font-family: ${text.families.inter};
// font-size: ${text.sizes.heading};
// color: ${text.colors.primary};
// font-weight: 600;
// line-height: 48px;
// `

// export const CategoryTitle = styled.h3`
//     font-family: ${text.families.poppins};
//     font-size: ${text.sizes.normal};
//     color: ${text.colors.accent};
//     font-weight: 600;
//     line-height: 20px;
// `

// export const NavTitle = styled.h3`
// font-family: ${text.families.inter};
// font-size: ${text.sizes.big};
// color: ${text.colors.primary};
// font-weight: 700;
// line-height: 24px;
// `

// export const Text = styled.p<{variant: string}>`
//     font-family: ${text.families.poppins};
//     font-size: ${text.sizes.normal};
//     color: ${text.colors.primary};
//     ${({ variant }) => variantStyles(variant)}
//     line-height: 24px;
// `
