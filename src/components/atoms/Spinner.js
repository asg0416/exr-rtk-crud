import React from "react";
import styled, { css, keyframes } from "styled-components";
import Div from "./Div";

export const Spinner = ({ type = "double", color, pointColor, scale, fullScreen=false }) => {
  const style = {
    scale,
    color,
    pointColor,
  };

  return (
    <Div fullScreen={fullScreen} width="100%" height="100%" flex>
      {type === "double" && <DoubleCircle {...style} />}
      {type === "loading" && <Loading {...style}>Load&nbsp;ng</Loading>}
    </Div>
  );
};

const scaleStyles = css`
  ${({ scale = "1" }) => {
    return css`
      scale: ${scale};
    `;
  }}
`;

const colorStyles = css`
  ${({ theme: { palette }, color = "gray60", pointColor = "orange" }) => {
    return css`
      color: ${palette[color]};
      &::after {
        background: ${palette[pointColor]};
      }
    `;
  }}
`;

const circleColorStyles = css`
  ${({ theme: { palette }, color = "gray20", pointColor = "orange" }) => {
    return css`
      border-top: 4px solid ${palette[color]};
      &::after {
        border-left: 4px solid ${palette[pointColor]};
      }
    `;
  }}
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const animloader = keyframes`
  0% {
    transform: translate(0px, 0px) scaleX(1);
  }
  14% {
    transform: translate(-12px, -16px) scaleX(1.05);
  }
  28% {
    transform: translate(-27px, -28px) scaleX(1.07);
  }
  42% {
    transform: translate(-46px, -35px) scaleX(1.1);
  }
  57% {
    transform: translate(-70px, -37px) scaleX(1.1);
  }
  71% {
    transform: translate(-94px, -32px) scaleX(1.07);
  }
  85% {
    transform: translate(-111px, -22px) scaleX(1.05);
  }
  100% {
    transform: translate(-125px, -9px) scaleX(1);
  }
`;
const animloader1 = keyframes`
0% {
    box-shadow: 0 -6px, -122.9px -8px;
  }
  25%, 75% {
    box-shadow: 0 0px, -122.9px -8px;
  }
  100% {
    box-shadow: 0 0px, -122.9px -16px;
  }
`;

const DoubleCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-bottom: 4px solid transparent;
    animation: ${rotation} 0.5s linear infinite reverse;
  }

  ${circleColorStyles}
  ${scaleStyles}
`;

const Loading = styled.span`
  color: #fff;
  position: relative;
  display: inline-block;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    right: 70.3px;
    bottom: 10px;
    height: 28px;
    width: 4.8px;
    background: currentColor;
    box-sizing: border-box;
    animation: ${animloader1} 1s linear infinite alternate;
  }
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    left: 125px;
    top: 2px;
    border-radius: 50%;
    background: red;
    box-sizing: border-box;
    animation: ${animloader} 1s linear infinite alternate;
  }

  ${colorStyles}
  ${scaleStyles}
`;
