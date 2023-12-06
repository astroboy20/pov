import styled, { css } from "styled-components";
export const HType = styled.p`
  ${({ variant }) =>
    variant === "h1"
      ? css`
          font-size: 28px;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
        `
      : variant === "h1-b"
      ? css`
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        `
      : variant === "h2"
      ? css`
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        `
      : variant === "h2-b"
      ? css`
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        `
      : variant === "h3"
      ? css`
          font-size: 19.2px;
          color:#1D1465 ;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
        `
      : variant === "h3-b"
      ? css`
          font-size: 19.2px;
          color:#1D1465 ;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        `
      : variant === "h3-c"
      ? css`
          font-size: 17px;
          color:#1D1465 ;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        `
      : variant === "h4"
      ? css`
          font-size: 13.3px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        `
      : variant === "h5"
      ? css`
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        `
      : variant === "h6"
      ? css`
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        `
      : variant === "p"
      ? css`
          font-size: 24px;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
        `
      : css`
          width: 10px;
        `}
`;
