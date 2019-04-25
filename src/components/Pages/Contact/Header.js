import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  .contactLogo {
    padding-top: 4vh;
    max-height: 60px;
    max-width: 150px;
  
    @media (min-width: 320px) and (max-width: 767px) {
        /*display: none;*/
        top: 0;
        position: absolute;
    }
  }
    `


const Header = props => {
  return (
    <StyledHeader>
      <img
        className="contactLogo"
        src="https://i.ibb.co/ng82ZN0/contact-logo.png"
        alt="contact-logo"
      />
    </StyledHeader>
  );
};

export default Header;
