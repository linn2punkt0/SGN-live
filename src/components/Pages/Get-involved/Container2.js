import React from "react";
import styled from "styled-components";

const ContainerForContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: ${props => props.flexDirection || 'column-reverse'}
    height: 200vh;
  }
`;

const Container2 = props => {
  return (
    <ContainerForContent {...props} style={props.reverseRow}>
      {props.children}
    </ContainerForContent>
  );
};

export default Container2;
