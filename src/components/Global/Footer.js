import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FbLogo from "../ikoner/facebook.svg";
import InstagramLogo from "../ikoner/instagram.svg";
import TwitterLogo from "../ikoner/twitter.svg";
import WhatsAppLogo from "../ikoner/whatsapp.svg";
import EmailLogo from "../ikoner/email.svg";
import PhoneLogo from "../ikoner/phone.svg";

const StyledFooter = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    height: 20vh;
    width: 100%;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .hide {
      justify-content: flex-start;
      :first-child {
        padding-left: 80px;
      }
    }
    p {
      margin: 10px;
    }
    a {
      color: #1f1f1f;
      text-decoration: none;
      margin: 10px;
    }
    img {
      height: 24px;
    }
    .social-icons {
      margin-left: -80px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    display: flex;
    a {
    }
    p {
      padding-right: 2vw;
    }
    div {
      width: 100%;

      .social-icons {
        display: flex;
        justify-content: space-around;
        padding-bottom: 5vh;
      }
      .contact-info {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        height: 32px;
        padding-right: 2vw;
      }
      .hide {
        display: none;
      }
    }
  }
`;

const Footer = props => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/footers`)
      .then(response => response.json())
      .then(data => {
        setFooterData(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledFooter>
      <div className="flex-container">
        <div className="hide">
          <p>Language</p>
          <p>GDPR</p>
        </div>
        <div className="social-icons">
          <a href={footerData ? footerData.facebook : ""}>
            <img className="icons" src={FbLogo} alt="Facebook Logo" />
          </a>
          <a href={footerData ? footerData.twitter : ""}>
            <img className="icons" src={TwitterLogo} alt="Twitter Logo" />
          </a>
          <a href={footerData ? footerData.whatsapp : ""}>
            <img className="icons" src={WhatsAppLogo} alt="Whats App Logo" />
          </a>
          <a href={footerData ? footerData.Instagram : ""}>
            <img className="icons" src={InstagramLogo} alt="Instagram Logo" />
          </a>
        </div>
        <div className="contact-info">
          <img src={EmailLogo} alt="Email Logo" />
          <p>{footerData ? footerData.email : "email@mail.com"}</p>
          <img src={PhoneLogo} alt="Phone Logo" />
          <p>{footerData ? footerData.phone : "070-1234567"}</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
