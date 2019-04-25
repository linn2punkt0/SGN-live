import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  .line {
    border-bottom: 1px solid black;
    margin-top: 5px;
    width: 120px;
  }
  .transform {
    width: 30%;
  }
  .transform:hover {
    button,
    .line {
      cursor: pointer;
      color: white;
      background-color: black;
      transition: all 0.2s ease-in;
    }
    .line {
      border-bottom: 0;
    }
  }

  input,
  select {
    margin-bottom: 10vh;
    border: none;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    font-size: 24px;
    font-weight: 100;
  }
  input:focus,
  select:focus {
    outline: none;
  }
  form {
    margin-top: 10vh;
  }

  .inline {
    display: inline-flex;
    width: 100%;
  }

  button {
    border: none;
    font-size: 24px;
    font-weight: 500;
    padding-left: 0px;
    background: #fdfdfd;
  }
  select {
    background-color: #fdfdfd;
  }
`;

const Form = props => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/activities`)
      .then(response => response.json())
      .then(data => {
        setActivities(data);
      })
      .catch(error => console.error(error));
  };
  return (
    <StyledForm>
      <form action="#">
        <select>
          <option>I'm interested in..</option>
          {activities.map((element, i) => {
            return <option key={i}>{element.title.rendered}</option>;
          })}
        </select>
        <div className="inline">
          <input type="text" name="name" placeholder="Your name.." />
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <input type="text" name="subject" placeholder="Message" />
        <div className="transform">
          <button className="" type="submit">
            Contact Us
          </button>
          <div className="line" />
        </div>
      </form>
    </StyledForm>
  );
};

export default Form;
