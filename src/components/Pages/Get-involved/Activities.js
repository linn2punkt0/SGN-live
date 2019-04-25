import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledActivities = styled.div`
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

const Activities = props => {
  // const [activities, setActivities] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // fetchActivities();
    fetchProjects();
  }, []);

  // const fetchActivities = () => {
  //   fetch(`http://wordplate.test/wp-json/wp/v2/activities`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setActivities(data);
  //     })
  //     .catch(error => console.error(error));
  // };
  const fetchProjects = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/projects`)
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error(error));
  };
  return (
    <StyledActivities>
      <ul>
        {projects.map(element => {
          return (
            <li key={element.id}>
              <h5>{element.title.rendered}</h5>
            </li>
          );
        })}
        <li>
          <h5>activity</h5>
        </li>
        <li>
          <h5>activity</h5>
        </li>
        <li>
          <h5>activity</h5>
        </li>
        <li>
          <h5>activity</h5>
        </li>
        <li>
          <h5>activity</h5>
        </li>
        <li>
          <h5>activity</h5>
        </li>
      </ul>
    </StyledActivities>
  );
};

export default Activities;
