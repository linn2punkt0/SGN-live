import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const StyledTextContainer = styled.div`
  width: 50%;
  height: 100vh;
  top: 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 300;
  font-size: 36px;
  position: relative;
  left: 5%;
  color: #959595;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 100vh;
    top: 0;
    padding-bottom: 10%;
    justify-content: space-between;
  }
`;

const StyledForText = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-weight: 300;
  font-size: 36px;
  line-height: normal;
  margin: 0 0 10% 0;
  > p {
    width: 70%;
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 0;
  }
  > h6 {
    margin: 1% 0 0 0;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    color: rgba(113, 113, 113, 0.7);
  }
  > .mobile-smalltext {
    display: none;
    margin-bottom: 3%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    > h6 {
      display: none;
    }
    > .mobile-smalltext {
      display: block;
      font-weight: 500;
      font-size: 14px;
    }
    > p {
      width: 90%;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
    }
  }
`;

const HeaderProject = styled.h4`
  margin: 0;
  font-weight: normal;
  font-size: 24px;
  color: ${props => props.colorLink};

  @media (min-width: 320px) and (max-width: 767px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: ${props => props.colorLink};
    margin: 20% 0 3% 0;
  }
`;
const Headerh4 = styled.h4`
  margin: 3% 0 0 0;
  font-weight: 300;
  font-size: 36px;
  color: rgba(31, 31, 31, 0.45);

  @media (min-width: 320px) and (max-width: 767px) {
    font-weight: 300;
    font-size: 24px;
  }
`;

const LinkReadMore = styled.a`
  background-color: ${props => props.colorButton};
  text-decoration-line: underline !important;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  align-self: flex-start;
  margin: 0;
  color: white;
  padding: 0 2px;
  &:hover {
    transition: ease-in;
    transition-delay: 0.2s;
    background-color: white;
    color: black;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-weight: 500;
    font-size: 16px !important;
    line-height: 30px;
  }
`;

const TextWhatWe = props => {
  return (
    <StyledTextContainer>
      <StyledForText>
        <Reveal top>
          <HeaderProject className="project-link" colorLink={props.link}>
            {props.content ? props.content.type : "Type"}
          </HeaderProject>

          <Headerh4>{props.content ? props.content.title : "Title"}</Headerh4>

          <h6 className="mobile-smalltext">
            {props.content
              ? props.content.small_text
              : "Small text with project start-date"}
          </h6>
          <p>
            {props.content
              ? props.content.description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac."}
          </p>
          <h6>
            {props.content
              ? props.content.small_text
              : "Small text with project start-date"}
          </h6>
        </Reveal>
      </StyledForText>

      <LinkReadMore
        colorButton={props.color}
        href={props.content ? props.content.button_link : "/"}
      >
        {props.content ? props.content.button_text : "Button text"}
      </LinkReadMore>
    </StyledTextContainer>
  );
};

export default TextWhatWe;
