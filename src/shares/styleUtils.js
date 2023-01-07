import { lighten } from "polished";
import { css } from "styled-components";

export const media = {
  desktop: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 600px) {
      ${css(...args)}
    }
  `,
};

/**
 * 
 * @param {Boolean} flex flex 여부
 * @param {String} align align-items 종류
 * @param {String} justify justify-content 종류
 * @param {String} direction flex-direction 종류
 */
export const flexConfig = css`
  ${({ flex, align = "center", justify = "center", direction = "column", gap="unset" }) => {
    if (flex) {
      return css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
        gap: ${gap};
      `;
    }
  }}
`;

/**
 * 
 * @param {Boolean} border border 여부
 * @param {String} bgColor background color
 * @param {String} bdColor border color
 * @param {Number} radius border radius
 */
export const borderConfig = css`
  ${({
    theme: { palette },
    border = false,
    bgColor = "white",
    bdColor = "lightGray",
    radius = 1,
  }) => {
    if (border) {
      return css`
        background-color: ${lighten(0.56, palette[bgColor])};
        border: 1px solid ${palette[bdColor]};
        border-radius: ${radius}rem;
      `;
    }
  }}
`;

export const fullScreenConfig = css`
  ${({
    theme: { palette },
    fullScreen = false,
  }) => {
    if (fullScreen) {
      return css`
        position: absolute;
        top: 0;
        left: 0;
        background: ${palette.gray40}30;
      `;
    }
  }}
`;

