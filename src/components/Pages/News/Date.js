import React, { Component } from "react";
import styled from "styled-components";
import TitleForNews from "./TitleForNews";

const NewsCol = styled.div`
/* position: absolute; */
width: 100vw;
height: 10vh;
display: flex;
margin: 1% 4.5% 0 0;
justify-content: flex-end;
/* right: 110px; */

`

const DateNews = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 6%;
background-color: #C4C4C4;
margin: 0 0.5% 0 3%;
text-align: center;
& p{
    font-family: Heebo;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: normal;
text-align: center;
text-transform: uppercase;
background: #616161;
border-radius: 5px;
color: #FFFFFF;
height: 70%;

}
`

const Month = (props) => {
    // const widthForTitle = {
    //     width: `${props => props.width}`
    // }
    console.log(props)
    return (
<NewsCol>
<DateNews>
<p>{props.dateNews}</p>
</DateNews>
<TitleForNews  widthNews={props.widthTitle}/>
</NewsCol>


    )
}
export default Month