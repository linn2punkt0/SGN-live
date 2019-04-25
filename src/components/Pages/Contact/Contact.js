import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Person from "./Person";
import Text from "./Text";
import Header from "./Header";
import Footer from "../../Global/Footer";

const StyledContact = styled.div`
  overflow-x: hidden;
  .contactLogo {
    padding-left: 5vw;
  }
  .wrapper {
    padding-right: 5vw;
    padding-left: 5vw;
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 10vh;
    .inline {
      display: block;
      max-width: 100%;
    }
    img {
      position: relative;
      left: 35vw;
      max-width: 60%;
      margin-top: 10vh;
    }
  }
  .personContainerBig,
  .personContainerSmall {
    margin-top: 30vh;

    h1,
    h4,
    p {
      margin-left: 5vw;
    }
    h1 {
      margin-bottom: 0;
      width: 100%;
    }
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;

    h6 {
      font-size: 3vh;
      font-weight: 300;
    }
  }

  @media (min-width: 769px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1.7fr 1.7fr;
      grid-template-rows: repeat(1, 100vh);
      margin-top: 20vh;
      margin-bottom: 10vh;
      img {
        position: unset;
        margin-top: 0;
      }
    }
    .personContainerBig {
      margin-left: 4vw;
      margin-right: 4vw;
      display: grid;
      grid-template-columns: 1.7fr 1.7fr;
      h1,
      h4,
      p {
        margin-right: 1vw;
        margin-left: 1vw;
        margin-bottom: 1vw;
      }
    }
    .personContainerSmall {
      margin-top: 5vh;
      margin-left: 2vw;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      h1,
      h4,
      p {
        margin-right: 1vw;
        margin-left: 1vw;
        margin-bottom: 1vw;
      }
      img {
        margin-left: 1vw;
        margin-right: 1vw;
        justify-self: center;
        position: unset;
      }
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      h6 {
        font-size: 64px;
        font-weight: 300;
      }
    }
    img {
      justify-self: flex-end;
      max-height: 449px;
    }
  }
`;

const Contact = props => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
    window.scrollTo(0, 0);
  }, []);

  const fetchContacts = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/contacts`)
      .then(response => response.json())
      .then(data => {
        setContacts(data);
      })
      .catch(error => console.error(error));
  };

  const Persons = [1, 2, 3, 4, 5];
  return (
    <StyledContact>
      <div>
        <Header />
      </div>
      <div className="wrapper">
        <Text />
        <img src="https://i.ibb.co/dc55VRx/logo.png" alt="logo" />
      </div>
      <div className="personContainerBig">
        {Persons.slice(0, 2).map(person => {
          return (
            <Person
              key={person.id ? person.id : ""}
              contactName={
                person.title ? person.title.rendered : "Name Namesson"
              }
              contactImage={
                person.acf ? person.acf.information.image.sizes.large : ""
              }
              contactDescription={
                person.acf ? person.acf.information.description : "Description"
              }
              contactEmail={
                person.acf ? person.acf.information.email : "email@mail.com"
              }
              contactPhone={
                person.acf ? person.acf.information.phone : "070-1234567"
              }
            />
          );
        })}
      </div>
      <div className="personContainerSmall">
        {Persons.slice(2).map(person => {
          return (
            <Person
              key={person.id ? person.id : ""}
              contactName={
                person.title ? person.title.rendered : "Name Namesson"
              }
              contactImage={
                person.acf ? person.acf.information.image.sizes.large : ""
              }
              contactDescription={
                person.acf ? person.acf.information.description : ""
              }
              contactEmail={
                person.acf ? person.acf.information.email : "email@mail.com"
              }
              contactPhone={
                person.acf ? person.acf.information.phone : "070-1234567"
              }
            />
          );
        })}
      </div>
      {/* <div className="personContainerBig">
        {contacts.slice(0, 2).map(person => {
          return (
            <Person
              key={person.id ? person.id : ""}
              contactName={
                person.title.rendered ? person.title.rendered : "Name Namesson"
              }
              contactImage={
                person.acf.information.image
                  ? person.acf.information.image.sizes.large
                  : ""
              }
              contactDescription={
                person.acf.information.description
                  ? person.acf.information.description
                  : "Description"
              }
              contactEmail={
                person.acf.information.email
                  ? person.acf.information.email
                  : "email@mail.com"
              }
              contactPhone={
                person.acf.information.phone
                  ? person.acf.information.phone
                  : "070-1234567"
              }
            />
          );
        })}
      </div>
      <div className="personContainerSmall">
        {contacts.slice(2).map(person => {
          return (
            <Person
              key={person.id ? person.id : ""}
              contactName={
                person.title.rendered ? person.title.rendered : "Name Namesson"
              }
              contactImage={
                person.acf.information.image
                  ? person.acf.information.image.sizes.large
                  : ""
              }
              contactDescription={
                person.acf.information.description
                  ? person.acf.information.description
                  : ""
              }
              contactEmail={
                person.acf.information.email
                  ? person.acf.information.email
                  : "email@mail.com"
              }
              contactPhone={
                person.acf.information.phone
                  ? person.acf.information.phone
                  : "070-1234567"
              }
            />
          );
        })}
      </div> */}
      <div className="row">
        <h6>info@supportgroup.com</h6>
      </div>
      <div>
        <Footer />
      </div>
    </StyledContact>
  );
};

export default Contact;
