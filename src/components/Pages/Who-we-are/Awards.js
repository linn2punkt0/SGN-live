import React from "react";
import styled from "styled-components";
import FirstImage from "../../../images/lllawards_lllplatform.png";
import SecondImage from "../../../images/ttela.png";
import ThirdImage from "../../../images/vg-regionen.png";

const StyledAwards = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > div {
    max-width: 200px;
    margin: 0;
  }
  .first {
    height: 100px;
    width: 200px;
    background: url(${FirstImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .second {
    height: 100px;
    width: 200px;
    background: url(${SecondImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 25px;
  }
  .third {
    height: 100px;
    width: 200px;
    background: url(${ThirdImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  p {
    margin: 0;
  }
  > h3 {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
    height: 90vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      max-height: 25vh;
      margin: 0 10px;
    }
    > h3 {
      display: inline;
      font-weight: 300;
      font-size: 24px;
      align-self: flex-start;
      /* margin-left: 24px; */
    }
    p {
      text-align: center;
    }
  }
`;

const Awards = props => {
  return (
    <StyledAwards>
      <h3>Awards</h3>
      <div>
        <div className="first" />
        <p>Inspiring Practice</p>
      </div>
      <div>
        <div className="second" />
        <p>Integration Award</p>
      </div>
      <div>
        <div className="third" />
        <p>Human Rights Award</p>
      </div>
    </StyledAwards>
  );
};

export default Awards;
