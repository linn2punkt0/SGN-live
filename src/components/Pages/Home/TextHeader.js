import React from "react";
import styled from "styled-components";
import Header from "../../../components/Pages/Contact/Header";
import Fade from "react-reveal/Fade";

const StyledPageHeaderText = styled.div`
  width: 50%;
  height: 100vh;
  margin-bottom: 53px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > * {
    padding-left: 82px;
  }
  h5 {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 3vh;
    color: rgba(113, 113, 113, 0.7);
  }
  h1 {
    max-width: 634px;
    margin: 0 0 1.5vh 0;
    font-weight: 300;
    font-size: 8vh;
  }
  p {
    font-weight: 300;
    max-width: 634px;
    font-style: normal;
    font-size: 24px;
  }
  a {
    font-weight: 500;
    font-size: 24px;
    color: #1f1f1f;
    text-decoration: none;
    font-size: 3vh;
    max-width: 634px;
    margin: 0 0 1vh 0;
  }
  h4 {
    font-weight: 500;
    font-size: 3vh;
    color: #1f1f1f;
    text-decoration: underline;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    height: 50vh;
    width: 100%;
    margin-bottom: 53px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-start;
    > * {
      padding-left: 24px;
    }
    h5 {
      font-size: 16px;
    }
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
      max-width: 90%;
    }
  }
`;

const PageHeaderText = props => {
  return (
    <StyledPageHeaderText>
      <Header />
      <div>
        <Fade delay={500}>
          <h5>{props.content ? props.content.tagline : "Tagline"}</h5>
        </Fade>
        <Fade delay={600}>
          <h1>{props.content ? props.content.title : "Page Title"}</h1>
        </Fade>
        <Fade delay={700}>
          <p>
            {props.content
              ? props.content.description
              : "Description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac."}
          </p>
        </Fade>
        <Fade delay={800}>
          <h4>{props.content ? props.content.scroll : "Scroll down"}</h4>
        </Fade>
      </div>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
