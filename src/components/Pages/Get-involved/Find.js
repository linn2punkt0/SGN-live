import React from "react";
import styled from "styled-components";
import Locations from "./Locations";
import Activities from "./Activities";

const StyledFind = styled.div`
  width: 50%;
  position: relative;

  > * {
    padding-left: 82px;
  }
  h4 {
    font-weight: 300;
    font-size: 4vh;
    margin: 4vh 0 2px 0;
  }
  .grey {
    margin: 0;
    color: rgba(31, 31, 31, 0.45);
  }
  .startYourOwn {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 4vh;
    h5 {
      font-weight: 300;
      font-size: 3vh;
      color: rgba(113, 113, 113, 0.7);
      margin: 0;
    }
    a h5 {
      color: #1f1f1f;
      text-decoration: underline;
      margin-left: 10px;
      font-weight: 400;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    > * {
      padding-left: 0px;
    }
    h4 {
      padding-left: 5vw;
    }
    .startYourOwn {
      position: relative;
      padding-top: 5vh;
      padding-left: 5vw;
    }
  }
`;

const Find = props => {
  return (
    <StyledFind>
      <h4>{props.content.title ? props.content.title : "Title"}</h4>
      <h4 className="grey">
        {props.content.title_2 ? props.content.title_2 : "Incentive Title"}
      </h4>
      {props.content.title === "Our Locations" && <Locations />}
      {props.content.title === "Activities" && <Activities />}
      {props.content === "" && <Locations />}
      <div className="startYourOwn">
        <h5>
          {props.content.question
            ? props.content.question
            : "Question lorem ipsum"}
        </h5>
        <a href="/">
          <h5>
            {props.content.start_one ? props.content.start_one : "Start one!"}
          </h5>
        </a>
      </div>
    </StyledFind>
  );
};

export default Find;
