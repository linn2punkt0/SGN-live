import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const StyledText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    padding-left: 82px;
  }
  h1 {
    font-weight: 300;
    font-size: 36px;
    line-height: normal;

    color: rgba(31, 31, 31, 0.45);
  }
  p {
    max-width: 474px;
    font-size: 24px;
    font-weight: 300;
    font-size: 24px;
    color: #1f1f1f;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    > * {
      padding-left: 24px;
      padding-right: 24px;
    }
    p {
      height: 50vh;
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
  }
`;

const Text = props => {
  return (
    <StyledText>
      <Fade delay={300}>
        <h1>{props.content ? props.content.title : "Section Title"}</h1>
      </Fade>
      <Fade delay={400}>
        <p>
          {props.content
            ? props.content.description
            : "Paragraph Heebo Sans Light Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Light Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl."}
        </p>
      </Fade>
    </StyledText>
  );
};

export default Text;
