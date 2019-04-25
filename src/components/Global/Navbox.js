import React from "react";
import styled from "styled-components";
import NavLink from "./Link";

const StyledNav = styled.div`
  pointer-events: all;
  background-color: white;
  transform: translate(100%);
  transition: all 0.3s ease-in-out;
  width: 45vw;
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
  }
`;

const NavBox = props => {
  return (
    <StyledNav transformMenu={props.visible}>
      <NavLink transforlinks={props.linksnothidden} closeMenu={props.close} />
    </StyledNav>
  );
};
export default NavBox;
