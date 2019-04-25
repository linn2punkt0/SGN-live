import React, { Component } from "react";
import styled from "styled-components";

//sätt props på width!
const TitleNews = styled.div`
/* position: absolute; */
/* right: 0; */
height: 100%;
/* width: 20%; */
width: ${props => props.width}; 
 background-color: #C4C4C4;
`

const TitleForNews = (props) => {
    return (


<TitleNews width={props.widthNews}>
</TitleNews>




    )
}
export default TitleForNews


