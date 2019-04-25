import React from "react";
import styled from "styled-components";

const StyledMobileLogo = styled.div`
  display: none;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 4vh;
    max-height: 60px;
    max-width: 150px;
  }
`;

const MobileLogo = props => {
  return (
    <StyledMobileLogo>
      <img
        className="contactLogo"
        src="https://i.ibb.co/ng82ZN0/contact-logo.png"
        alt="contact-logo"
      />
    </StyledMobileLogo>
  );
};

export default MobileLogo;
