import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledPartners = styled.div`
  width: 50%;
  height: 100vh;
  z-index: 0;
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    padding: 0;
    overflow-y: scroll;
    height: 90%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      padding: 20px;
      font-size: 24px;
      color: blue;
    }

    img {
      margin: 5px;
      padding: 0;
      max-width: 200px;
      max-height: 150px;
    }
  }
  .mobile {
    display: none;
    color: white;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
    margin: auto;
    height: 80vh;
    padding-bottom: 20px;
    img {
      max-width: 150px;
    }
    .mobile {
      display: inline;
      font-weight: 300;
      font-size: 24px;
      align-self: flex-start;
      /* margin-left: 24px; */
    }
  }
`;

const Pictures = [];
const Partners = props => {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/partners?per_page=40`)
      .then(response => response.json())
      .then(data => {
        setPartners(data);
      })
      .catch(error => console.error(error));
  };
  return (
    <StyledPartners>
      <h6 className="mobile">Partners</h6>
      {partners && (
        <ul>
          {partners.map(partner => {
            return (
              <li key={partner.id}>
                <a
                  href={
                    partner.acf ? partner.acf.partners_information.link : ""
                  }
                >
                  <img
                    src={
                      partner.acf.partners_information
                        ? partner.acf.partners_information.logo.sizes.medium
                        : ""
                    }
                    alt="partner-logo"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <ul>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
        <li>Partner Logo</li>
      </ul>
    </StyledPartners>
  );
};

export default Partners;
