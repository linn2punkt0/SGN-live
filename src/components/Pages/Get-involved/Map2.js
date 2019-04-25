import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Academic from "../../ikoner/academic-club.svg";
import Sport from "../../ikoner/sports-club.svg";
import Kids from "../../ikoner/kids-club.svg";
import Phone from "../../ikoner/phone.svg";
import Mail from "../../ikoner/email.svg";
import LocationLogo from "../../ikoner/location.svg";
import Woman from "../../ikoner/womens-club.svg";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import MapImage from "../../../images/map_template.png";

const StyledMap2 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;

  .map {
    width: 100%;
    height: 40%;
    background: url(${MapImage});
    background-size: cover;
    background-position: center;
  }

  > h1 {
    font-weight: 500;
    font-size: 3vh;
  }
  > img {
    width: 100%;
  }
  > p {
    font-weight: 300;
    font-size: 2vh;
  }
  .container {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .featured {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .activity-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .activity {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: solid 1px black;
    margin-right: 10px;
    img {
      max-width: 3vh;
      margin-right: 10px;
    }
  }
  .contact {
    width: 100%;
    margin: auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .contact-column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0;
    }
    .contact-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .image-column {
      justify-content: flex-start;
      width: 3vh;
      height: 100%;
      margin: 0;
    }
    img {
      width: 3vh;
      margin-right: 10px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 10px 0 10px;
      white-space: nowrap;
    }
    h6 {
      margin: 0 10px 0 0;
      font-weight: 500;
      font-size: 2vh;
    }
    p {
      margin: 0;
    }
}
@media (min-width: 320px) and (max-width: 767px) {
    .activity-row {
      width: 80vw;
      padding-bottom: 5vh;
      img {
        font-size: 10px;
      }
    }
    .contact-column, .contact-row {
      font-size: 12px;
      img {
        font-size: 12px;
      }
    }
}
`;

const Map2 = props => {
  // const [locations, setLocations] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/branches`)
      .then(response => response.json())
      .then(data => {
        // setLocations(data[0].acf.branches);
        setActivities(data[0].acf.branches.featured_activity_headline);
      })
      .catch(error => console.error(error));
  };
  return (
    <StyledMap2>
      <Reveal right>
        {/* <img src={MapImage} /> */}
        <div className="map" />
      </Reveal>
      <div className="container">
        <Fade right delay={300}>
          <h1>Vänersborg</h1>
          <p>
            Vänersborg is the head seat of our organisation and has a wide
            variety of activities and branches.
          </p>
        </Fade>
        <Fade right delay={400}>
          <div className="featured">
            <p>Feautured Activities:</p>

            <div className="activity-row">
              <div className="activity">
                <img src={Sport} alt="Sport Logo" />
                <p>
                  {activities.first_activity
                    ? activities.first_activity
                    : "Sports Club"}
                </p>
              </div>
              <div className="activity">
                <img src={Woman} alt="Woman Logo" />
                <p>
                  {activities.second_activity
                    ? activities.second_activity
                    : "Womens Club"}
                </p>
              </div>
            </div>

            <div className="activity-row">
              <div className="activity">
                <img src={Academic} alt="Book Logo" />
                <p>
                  {activities.third_activity
                    ? activities.third_activity
                    : "Academic Club"}
                </p>
              </div>
              <div className="activity">
                <img src={Kids} alt="Child Logo" />
                <p>
                  {activities.fourth_activity
                    ? activities.fourth_activity
                    : "Kids Club"}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Fade right delay={500}>
        <div className="contact">
          <div className="contact-column">
            <div>
              <img src={Phone} alt="Phone Logo" />
              <h6>Contact:</h6>
              <p>+46 722-89 10 18</p>
            </div>
            <div>
              <img src={Mail} alt="Mail Logo" />
              <p>name@nameson.se</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-column image-column">
              <img src={LocationLogo} alt="Locaton Logo" />
            </div>
            <div className="contact-column">
              <div>
                <p>Vägens väg 15</p>
              </div>
              <div>
                <p>433 98 Vänersborg</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </StyledMap2>
  );
};

export default Map2;
