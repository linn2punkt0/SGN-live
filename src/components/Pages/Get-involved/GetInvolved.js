import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Find from "./Find";
import PageHeaderText from "../../Global/PageHeaderText";
import MemberForm from "./MemberForm";
import Gathering from "./Gathering";
import Footer from "../../Global/Footer";
import Container from "../../Global/Container";
import Container2 from "./Container2";
import Map2 from "./Map2.js";
import HeaderImage from "../../../images/get-involved_hero.png";

const StyledGetInvolved = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  .header-image {
    height: 100vh;
    width: 50%;
    max-height: 449px;
    margin-top: 10vh;
    background: url(${HeaderImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    .header-image {
      display: flex;
      width: 100%;
    }
    div {
      width: 100%;
    }
  }
`;

const GetInvolved = props => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, []);

  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=get-involved`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };
  // When fetch isn't available use this texts as backup
  const headerText = {
    tagline: "Let’s work together",
    title: "Get Involved",
    description:
      "Join our action against hopelessness by empowering and encouraging asylum seekers, refugees, immigrants, migrants and new countrymen. ",
    scroll: "Scroll to continue"
  };

  const locationsText = {
    title: "Our Locations",
    title_2: "Find a branch near you",
    question: "No branch near your location?",
    start_one: "Start one!"
  };
  const activityText = {
    title: "Activities",
    title_2: "Browse our collection of activites",
    question: "Got an idea for a new activity in your area?",
    start_one: "Start one!"
  };
  return (
    <StyledGetInvolved>
      <Container>
        <PageHeaderText content={content ? content.header : headerText} />
        <div className="header-image" />
      </Container>
      <Container2>
        <Find content={content ? content.locations : locationsText} />
        <Map2 content={content ? content.locations : ""} />
      </Container2>
      <Container2>
        <Find content={content ? content.activities : activityText} />
        <Gathering />
      </Container2>
      <MemberForm content={content ? content.membership : ""} />
      <Footer className="last" />
    </StyledGetInvolved>
  );
};

export default GetInvolved;
