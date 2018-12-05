import { css } from "styled-components";

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`;

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`;

export const large = inner => css`
  @media (min-width: ${1000 / 16}em) {
    ${inner};
  }
`;

export const medium = inner => css`
  @media (min-width: ${600 / 16}em) {
    ${inner};
  }
`;
