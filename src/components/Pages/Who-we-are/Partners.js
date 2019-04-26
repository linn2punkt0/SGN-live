import React, { useState, useEffect } from "react";
import styled from "styled-components";
import almi from "../../../images/Partners/almi.png";
import arbetsformedlingen from "../../../images/Partners/arbetsformedlingen.png";
import chalmers from "../../../images/Partners/AvancezChalmers.png";
import ecodes from "../../../images/Partners/ecodes.png";
import equmenia from "../../../images/Partners/Equmeniakyrkan.png";
import folktandvarden from "../../../images/Partners/folktandvarden.png";
import folkuniversitetet from "../../../images/Partners/folkuniversitetet.png";
import friskis from "../../../images/Partners/Friskis.png";
import GU from "../../../images/Partners/goteborg-university.png";
import gotene from "../../../images/Partners/gotenekommun.png";
import goteborg from "../../../images/Partners/goteborgsstad.png";
import halmstad from "../../../images/Partners/halmstadkommun.jpg";
import HV from "../../../images/Partners/hogskolanvast.jpg";
import hehrne from "../../../images/Partners/hotellhehrne.png";
import hushallning from "../../../images/Partners/hushallningssallskapet.jpg";
import ifk from "../../../images/Partners/ifk.png";
import innerwheel from "../../../images/Partners/innerwheel.png";
import innovatum from "../../../images/Partners/innovatum.jpg";
import kultur from "../../../images/Partners/kulturivast.png";
import kvinnojour from "../../../images/Partners/kvinnojourenblenda.png";
import lansstyrelsen from "../../../images/Partners/lansstyrelsenvastragotaland.png";
import lidkoping from "../../../images/Partners/lidkopingskommun.png";
import medpro from "../../../images/Partners/medprotorpa.png";
import migration from "../../../images/Partners/migrationsverket.png";
import molndal from "../../../images/Partners/molndalsstad.png";
import raddabarnen from "../../../images/Partners/raddabarnen.png";
import restad from "../../../images/Partners/restadgard.jpg";
import rodakorset from "../../../images/Partners/rodakorset.png";
import rotary from "../../../images/Partners/Rotary.jpg";
import studieframjandet from "../../../images/Partners/studieframjandet.png";
import svenskakyrkan from "../../../images/Partners/svenskakyrkan.png";
import swedbank from "../../../images/Partners/Swedbank.png";
import trollhattan from "../../../images/Partners/trollhattansstad.png";
import vanersborg from "../../../images/Partners/vanersborgskommun.png";
import museerna from "../../../images/Partners/varldskulturmuseerna.jpg";
import vfk from "../../../images/Partners/vfk.png";
import vgr from "../../../images/Partners/vgr.png";
import flaggor from "../../../images/Partners/Transparent_logga_med_flaggor.png";

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
    }
  }
`;

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

      {!partners && (
        <ul>
          <li>
            <img src={almi} />
          </li>
          <li>
            <img src={arbetsformedlingen} />
          </li>
          <li>
            <img src={chalmers} />
          </li>
          <li>
            <img src={ecodes} />
          </li>
          <li>
            <img src={equmenia} />
          </li>
          <li>
            <img src={folktandvarden} />
          </li>
          <li>
            <img src={folkuniversitetet} />
          </li>
          <li>
            <img src={friskis} />
          </li>
          <li>
            <img src={GU} />
          </li>
          <li>
            <img src={goteborg} />
          </li>
          <li>
            <img src={gotene} />
          </li>
          <li>
            <img src={halmstad} />
          </li>
          <li>
            <img src={HV} />
          </li>
          <li>
            <img src={hehrne} />
          </li>
          <li>
            <img src={hushallning} />
          </li>
          <li>
            <img src={ifk} />
          </li>
          <li>
            <img src={innerwheel} />
          </li>
          <li>
            <img src={innovatum} />
          </li>
          <li>
            <img src={kultur} />
          </li>
          <li>
            <img src={kvinnojour} />
          </li>
          <li>
            <img src={lansstyrelsen} />
          </li>
          <li>
            <img src={lidkoping} />
          </li>
          <li>
            <img src={medpro} />
          </li>
          <li>
            <img src={migration} />
          </li>
          <li>
            <img src={molndal} />
          </li>
          <li>
            <img src={raddabarnen} />
          </li>
          <li>
            <img src={restad} />
          </li>
          <li>
            <img src={rodakorset} />
          </li>
          <li>
            <img src={rotary} />
          </li>
          <li>
            <img src={studieframjandet} />
          </li>
          <li>
            <img src={svenskakyrkan} />
          </li>
          <li>
            <img src={swedbank} />
          </li>
          <li>
            <img src={trollhattan} />
          </li>
          <li>
            <img src={vanersborg} />
          </li>
          <li>
            <img src={museerna} />
          </li>
          <li>
            <img src={vfk} />
          </li>
          <li>
            <img src={vgr} />
          </li>
          <li>
            <img src={flaggor} />
          </li>
        </ul>
      )}
    </StyledPartners>
  );
};

export default Partners;
