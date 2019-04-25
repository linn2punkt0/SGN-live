import React, { Component } from "react";
import styled from "styled-components";
import NavBox from "./Navbox";

const StyledNavbar = styled.div`
  z-index: 988;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;
const StyledHamburger = styled.div`
  pointer-events: all;
  position: fixed;
  z-index: 999;
  justify-content: center;
  flex-direction: column;
  margin: 6px;
  padding-right: 7%;
  margin-top: 4vh;
  > div {
    transition: 0.6s;
    border-radius: 25%;
    margin: 5px 1px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
  }
`;
const BarOne = styled.div`
  background-color: black;
  width: 1.5vw;
  height: 2px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 6vw;
  }
`;
const BarTwo = styled.div`
  width: 1.5vw;
  background-color: black;
  height: 2px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 6vw;
  }
`;
const BarThree = styled.div`
  width: 0.7vw;
  background-color: black;
  height: 2px;
  ${StyledHamburger}:hover & {
    transform: translatex(0.725vw);
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 3vw;
  }
`;
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      check: false,
      linksShown: false
    };
  }
  toggleHidden = e => {
    this.setState({
      isHidden: !this.state.isHidden,
      check: !this.state.check,
      linksShown: !this.state.linksShown
    });
  };

  render(props) {
    // const MakeNavbarSlide = styled.div``

    return (
      <StyledNavbar>
        <NavBox
          visible={this.state.check}
          close={this.toggleHidden}
          linksnothidden={this.state.linksShown}
        />
        <StyledHamburger onClick={this.toggleHidden}>
          <BarOne
            style={
              !this.state.isHidden
                ? { transform: "rotate(220deg) translate(-26%, -51.5%" }
                : null
            }
          />
          <BarTwo
            style={
              !this.state.isHidden
                ? { transform: "rotate(-45deg) translate(13%, 12%" }
                : null
            }
          />
          <BarThree style={!this.state.isHidden ? { opacity: "0" } : null} />
        </StyledHamburger>
      </StyledNavbar>
    );
  }
}

export default Nav;
