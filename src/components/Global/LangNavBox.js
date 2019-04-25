import React from "react";
import styled from "styled-components";
import LangNavLink from "./LangNavLink";

const StyledNavLang = styled.div`
  pointer-events: all;
  background-color: white;
  transform: translate(100%);
  transition: all 0.5s ease-in-out;
  width: 15vw;
  height: 95vh;
  padding-right: 5vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
  text-align: right;
  top: -10px;
  line-height: normal;
  background-color: white;
  justify-content: space-between;
  color: #1f1f1f;
  ${props =>
    props.transformMenu &&
    `
    transform: translate(0%);
    `}

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    transform: translate(100%);
    ${props =>
      props.transformMenu &&
      `
    transform: translate(0%);
    `}
  }
`;

const LangNavBox = props => {
  return (
    <StyledNavLang transformMenu={props.visible}>
      <LangNavLink
        transforlinks={props.linksnothidden}
        closeMenu={props.close}
      />
    </StyledNavLang>
  );
};
export default LangNavBox;
