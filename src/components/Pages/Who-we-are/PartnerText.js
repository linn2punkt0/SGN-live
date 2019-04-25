import React from "react";
import styled from "styled-components";
import ImageThree from "../../../images/section-3.png";

const StyledPartnerText = styled.div`
  background: url(${ImageThree});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100vh;
  > * {
    padding-left: 82px;
  }
  h3 {
    margin-top: 40vh;
    font-weight: 300;
    font-size: 4vh;
    color: #ffffff;
  }
  p {
    max-width: 474px;
    font-weight: 300;
    font-size: 4vh;
    color: rgba(255, 255, 255, 0.72);
  }
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
    background: none;
    height: 0;
    div {
      display: none;
    }
  }
`;

const PartnerText = props => {
  return (
    <StyledPartnerText>
      <h3>{props.content ? props.content.title : "Partners"}</h3>
      <p>
        {props.content
          ? props.content.description
          : "We are a non profit organization and would’nt be able to do what we do without the help of these partners"}
      </p>
    </StyledPartnerText>
  );
};

export default PartnerText;
