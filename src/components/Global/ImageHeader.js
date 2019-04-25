import React from "react";
import styled from "styled-components";
import headerImg from "./images/matisse hero illustration.png";

const StyledImageHeader = styled.div`
  display: flex;
  background-color: ${props => props.background};
  justify-content: flex-end;
  margin: 5vh 5vw 0 0;

  > img {
    height: 50%;
    width: 60%;
    @media (min-width: 320px) and (max-width: 767px) {
      margin: none;
    }
  }
`;

const ImageHeader = props => {
  return (
    <StyledImageHeader background={props.background}>
      <img src={headerImg} alt="" />
    </StyledImageHeader>
  );
};

export default ImageHeader;
