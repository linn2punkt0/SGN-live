import React, { useState, useEffect } from "react";
import styled from "styled-components";
import locationImage from "../../ikoner/location.svg";

const StyledLocations = styled.div`
  /* Desktop styling done */
  height: 50vh;
  overflow-y: scroll;
  margin-right: 119px;
  margin-top: 11vh;

  ul {
    padding: 0;
  }

  li {
    height: 11vh;
    list-style: none;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 40px;
    }
    h5 {
      font-family: Heebo;
      font-style: normal;
      font-weight: normal;
      font-size: 2.7vh;
      line-height: normal;
      margin-left: 24px;
    }
  }
`;

const Locations = props => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/branches`)
      .then(response => response.json())
      .then(data => {
        setLocations(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledLocations>
      <ul>
        {locations.map(element => {
          return (
            <li key={element.id}>
              <img src={locationImage} alt="location-icon" />
              <h5>{element.acf.branches.city}</h5>
            </li>
          );
        })}
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
      </ul>
    </StyledLocations>
  );
};

export default Locations;
