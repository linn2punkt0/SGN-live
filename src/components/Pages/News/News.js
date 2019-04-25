import React, { Component } from "react";
import styled from "styled-components";
// import ImageContainer from "../../Global/ImageContainer";
import PageHeaderText from "../../Global/PageHeaderText";
// import * as Scroll from 'react-scroll';
// import WhenInView from "./WhenInView"
// import ImageHeader from "../../Global/ImageHeader"
// import Footer from "../../Global/Footer.js"
import Month from "./Month"



const StyledNews = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 100vh 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;

`;


const News = props => {
  return (
    <StyledNews>
      {/* <ImageHeader /> */}
      <PageHeaderText title="News"/>
      <Month />

    </StyledNews>
  );
};

export default News;
