import React from "react";
import styled from "styled-components";
import ImageFour from "../../../images/section-4.png";

const StyledAwardText = styled.div`
  background: url(${ImageFour});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100vh;
  > * {
    padding-left: 82px;
  }
  h3 {
    margin-top: 20vh;
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
    h3,
    p {
      display: none;
    }
  }
`;

const AwardText = props => {
  return (
    <StyledAwardText>
      <h3>{props.content ? props.content.title : "Awards"}</h3>
      <p>
        {props.content
          ? props.content.description
          : "We’re humbeled and grateful that our work has receieved recognition from these instances"}
      </p>
    </StyledAwardText>
  );
};

export default AwardText;
