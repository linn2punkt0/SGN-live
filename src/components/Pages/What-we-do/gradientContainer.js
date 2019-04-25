import React from "react";
import styled from "styled-components";

const StyledGradientContainer = styled.div`
  width: 50%;
  height: 100vh;

  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 50%;
  z-index: 99;
  position: relative;
  &.gradient::after {
    background: ${props =>
      `linear-gradient(180deg, rgba(0,0,0,0), ${props.color} 100%)`};
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    content: "";
  }
  > img {
    z-index: 1;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    /* height: 100vh; */
    height: ${props => props.height};
    width: 100%;
    position: relative;
  }
`;

const GradientContainer = props => {
  return (
    <StyledGradientContainer
      className="gradient"
      background={props.background}
      color={props.color}
      img={props.image}
      height={props.height}
    />
  );
};
export default GradientContainer;
