import React, { Component } from "react";
import styled from "styled-components";
import Date from "./Date"
// import TitleForNew from "./TitleForNews"


const MonthNews = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-end;
height: 100vh;
width: 100vw;
background-color: white;



`

const Month = () => {
    return (
    <MonthNews>

    <Date dateNews="30/2" widthTitle="85vw"/>
    <Date dateNews="22/2" widthTitle="80vw"/>
    <Date dateNews="18/2" widthTitle="75vw"/>
    <Date dateNews="13/2" widthTitle="70vw"/>
    <Date dateNews="1/2" widthTitle="65vw"/>

</MonthNews>
    )
}
export default Month