import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Reveal from "react-reveal/Reveal";

const StyledText = styled.div`
  margin-top: 22vh;
  h1,
  h2,
  p {
    font-weight: 300;
  }
  h1 {
    font-size: 64px;
    margin-top: 0;
  }
  p {
    font-size: 24px;
  }
  h2 {
    color: #9b9b9b;
    font-size: 24px;
    margin: 0;
  }
`;

const Text = props => {
  return (
    <StyledText>
      <Reveal top>
        <h2>We'd love to hear from you</h2>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <Form />
      </Reveal>
    </StyledText>
  );
};

export default Text;
