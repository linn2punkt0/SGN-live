import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  background-color: ${props => props.background};

  &.gradient::after {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    content: "";
  }
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 50%;

  img {
    z-index: -1;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    height: 50vh;
    width: 100%;
  }
`;

const ImageContainer = props => {
  return (
    <StyledImageContainer
      className="gradient"
      background={props.background}
      img={props.img}
    />
  );
};
export default ImageContainer;
