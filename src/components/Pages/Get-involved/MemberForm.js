import React from "react";
import styled from "styled-components";

const StyledMemberForm = styled.div`
  grid-row: 4/6;
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    padding-left: 5vw;
    padding-right: 5vw;
    width: 90%;
    margin-top: 260px;
    margin-bottom: 160px;
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input.checkbox {
      height: 20px;
    }
    button {
      background: #fdfdfd;
    }

    h4 {
      text-align: center;
      font-weight: 300;
      font-size: 4vh;
      margin: 0;
    }
    .grey {
      margin: 0;
      color: rgba(31, 31, 31, 0.45);
      margin-bottom: 8vh;
    }
    p {
      text-align: center;
      font-weight: 300;
      font-size: 3vh;
      margin-bottom: 10vh;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: start;
    }
    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .wrapper {
      width: 100%;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    label {
      color: rgba(113, 113, 113, 0.7);
      font-size: 3vh;
    }
    input {
      width: 100%;
      height: 44px;
      border: none;
      border-bottom: 1px solid black;
      margin-bottom: 28px;
    }
  }
  button {
    height: 44px;
    border: none;
    border-bottom: 1px solid black;
    margin: 0 auto;
    color: #1f1f1f;
    font-size: 3vh;
    font-weight: 400;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    input.checkbox {
      display: flex;
      align-self: flex-start;
      width: 10%;
    }
  }
`;

const MemberForm = props => {
  return (
    <StyledMemberForm>
      <div className="container">
        <h4>{props.content.title ? props.content.title : "Become a Member"}</h4>
        <h4 className="grey">
          {props.content.title_2
            ? props.content.title_2
            : "Join our cause today!"}
        </h4>
        <p>
          {props.content.description
            ? props.content.description
            : "As a member of Support Group Network you will recieve regular updates on our work and projects. Everybody can register. Please specify what you can offer and let’s work together for a better future."}
        </p>
        <form>
          <div className="row">
            <div className="wrapper">
              <label htmlFor="name">Name</label>
              <input name="name" type="text" />
            </div>
            <div className="wrapper">
              <label htmlFor="surname">Surname</label>
              <input name="surname" type="text" />
            </div>
          </div>
          <label htmlFor="adress1">Adress 1</label>
          <input name="adress1" type="text" />
          <label htmlFor="adress2">Adress 2</label>
          <input name="adress2" type="text" />
          <div className="row">
            <div className="wrapper">
              <label htmlFor="city">City</label>
              <input name="city" type="text" />
            </div>
            <div className="wrapper">
              <label htmlFor="postal-code">Postal code</label>
              <input name="postal-code" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <label htmlFor="phone">Phone number</label>
              <input name="phone" type="text" />
            </div>
            <div className="wrapper">
              <label htmlFor="email">Email</label>
              <input name="email" type="text" />
            </div>
          </div>
          <label htmlFor="refugee">Refugee</label>
          <input name="refugee" type="checkbox" className="checkbox" />
          <label htmlFor="volunter">Volunter</label>
          <input name="volunter" type="checkbox" className="checkbox" />
          <label htmlFor="offer">
            This is what i can offer (knowledge, materials, locales etc.)
          </label>
          <input name="offer" type="text" />
          <label htmlFor="background">Education and occupation</label>
          <input name="background" type="text" />
          <label htmlFor="match">
            Yes, I would like for you to match my competence with suitable
            available jobs
          </label>
          <input name="match" type="checkbox" className="checkbox" />
        </form>
        <button>Submit</button>
      </div>
    </StyledMemberForm>
  );
};

export default MemberForm;
