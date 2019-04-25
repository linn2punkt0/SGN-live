import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80vh;
  width: 100vw;
  align-items: center;
  /* padding-top: 0%; */

  @media (min-width: 320px) and (max-width: 767px) {
    width: 95%;
    height: 531px;
    right: 0;
    // background: #ECDCCE;
    align-self: center;
    margin-bottom: 10%;
  }
`;
/* Wanna help out? */
const TitleContact = styled.div`
  height: 60%;
  > h2 {
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: normal;
    text-align: center;
    color: #1f1f1f;
  }
  > p {
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: normal;
    text-align: center;
    color: rgba(31, 31, 31, 0.45);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    /* width: 303px;
height: 47px;
left: 34px;
top: 2749px; */

    > h2 {
      font-family: Heebo;
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 47px;
      text-align: center;
      color: #1f1f1f;
    }
    > p {
      width: 327px;
      height: 103px;
      left: 24px;
      top: 2823px;
      font-family: Heebo;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: normal;
      text-align: center;
      color: rgba(31, 31, 31, 0.45);
    }
  }
`;
/* Låna ut lokal? Donera pengar? Material? */
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: normal;
  text-align: center;

  > a {
    display: block;
    color: #ffffff;
    background-color: #0021b8;
    margin-top: 2%;
    height: 43%;
    text-decoration-line: underline !important;
    color: #1f1f1f;
  }
  > .contactus-mobile {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    height: 30%;
    > .contactus-mobile {
      font-size: 16px;
      display: block;
      color: #1f1f1f;
      background: none;
    }
    > a {
      display: none;
    }
    > p {
      margin: 0;
    }
  }
`;

const Contact = props => {
  return (
    <ContactContainer>
      <TitleContact>
        <Reveal top>
          <h2>{props.title}</h2>
          <p>{props.textContact}</p>
        </Reveal>
      </TitleContact>

      <ContactInfo>
        <Reveal top>
          <a href="/" className="contactus-mobile">
            {props.contactUs}
          </a>
          <p>{props.swishNr}</p>
          <a href="/">{props.contactUs}</a>
          <p>{props.bGiro}</p>
        </Reveal>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
