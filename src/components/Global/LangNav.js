import React, { Component } from "react";
import styled from "styled-components";
import LangNavBox from "./LangNavBox";

const StyledNavbar = styled.div`
  z-index: 988;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;
const LangBar = styled.div`
  pointer-events: all;
  cursor: default;
  position: fixed;
  z-index: 999;
  justify-content: center;
  flex-direction: column;
  margin: 6px;
  padding-right: 10%;
  margin-top: 4vh;

  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: normal;
  @media (min-width: 320px) and (max-width: 767px) {
     padding-right: 15%;
     font-size: 20px;

  }
`
class LangNav extends Component {
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
        <LangNavBox
          visible={this.state.check}
          close={this.toggleHidden}
          linksnothidden={this.state.linksShown}
        />
        <LangBar onClick={this.toggleHidden}>
      EN
        </LangBar>
      </StyledNavbar>
    );
  }
}

export default LangNav;
