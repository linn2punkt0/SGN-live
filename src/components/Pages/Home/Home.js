import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import TextContainer from "./TextContainer.js";
import ContactContainer from "./Contact.js";
import TextHeader from "./TextHeader.js";
import Footer from "../../Global/Footer.js";
import Container from "../../Global/Container";
import Logo from "./Logo.svg";
import GetInvolved from "../../Global/images/landing/get-involved_landing-page_illustration.png";
import WhoWeAre from "../../Global/images/landing/who-we-arelanding-page_illustration.png";
import WhatWeDo from "../../Global/images/landing/what-we-do_landing-page_illustration.png";
import Zoom from "react-reveal/Zoom";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  height: 100vh;
  width: 50%;
  img {
    height: 350px;
    transition: 1s;
  }
  img:hover {
    transform: scale3d(1.2, 1.2, 1.2) skew(10deg, -4deg);
    transition: all 0.7s ease-in-out;
  }
  div {
    background: #ebdccd;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    transition: 1s;
  }

  div:hover {
    transform: translate3d(10px, 0px, 0px) skew(-10deg, 4deg);
    transition: all 0.7s ease;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 95%;
    > div {
      background: none;
      width: 100%;
      border-radius: 0;
      display: flex;
      justify-content: flex-end;

      img {
        margin-top: 5%;
        width: 55%;
        height: 95%;
      }
    }
  }
`;

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  a {
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    text-decoration: none;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
  }
`;

const Home = props => {
  // Fetch home-page from api and set custom-field-content to content-hook.
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, []);

  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=home`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };
  // When fetch isn't available use this texts as backup
  const headerText = {
    tagline: "Fighting hopelessness, alienation and apathy",
    title: "Together",
    description:
      "We’ve taken action against hopelessness by empowering and encouraging asylum seekers, refugees, immigrants, migrants and new countrymen. ",
    scroll: "Discover"
  };
  const getInvolvedText = {
    title: "Get Involved",
    description:
      "We are the bridge into a life changed by unfortunate circumstances. Our strategy is to educate, learn and adapt together.",
    small_text: "That way everybody counts. That way you count."
  };
  const whoWeAreText = {
    title: "Who We Are",
    description:
      "Flight can truly defeat a person. When we saw our closest family members lose their purpose we  immidiatly took action out of responsibility.",
    small_text: "Now our working model ignites smothered flames."
  };
  const whatWeDoText = {
    title: "What We Do",
    description:
      "The same actionable people who has initiated a life changing escape paradoxically face large risks of depression.",
    small_text: "We just can’t sit by and watch."
  };

  return (
    <StyledHome>
      <Container flexDirection="column">
        <TextHeader content={content ? content.header : headerText} />
        <StyledLogo>
          <Zoom>
            <div>
              <img src={Logo} alt="Logo" />
            </div>
          </Zoom>
        </StyledLogo>
      </Container>

      <Container>
        <TextContainer
          content={content ? content.get_involved : getInvolvedText}
          backgroundButton="#0021B8"
        />
        <ImageContainer background="#F9DC0E" img={GetInvolved} />
      </Container>

      <Container>
        <TextContainer
          content={content ? content.who_we_are : whoWeAreText}
          backgroundButton="#F9DC0E"
        />
        <ImageContainer img={WhoWeAre} />
      </Container>

      <Container>
        <TextContainer
          content={content ? content.what_we_do : whatWeDoText}
          backgroundButton="#F43F2A"
        />
        <ImageContainer img={WhatWeDo} />
      </Container>

      <ContactContainer
        title="Wanna help out?"
        textContact="Got a local or materials to lend? Send us a message!"
        swishNr="Swish: 123 223 37 32"
        contactUs="Contact Us"
        bGiro="Bankgiro: 5138-5854"
      />
      <Footer />
    </StyledHome>
  );
};

export default Home;
