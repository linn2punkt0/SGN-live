import React from "react";
import styled from "styled-components";

const ContainerForContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  position: relative;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: ${props => props.flexDirection || 'column-reverse'};
    height: 200vh;
  }
`;




const LargeContainer = props => {
  return <ContainerForContent {...props} style={props.reverseRow}>{props.children}</ContainerForContent>;
};

export default LargeContainer;
