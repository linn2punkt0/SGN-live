import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Nav from "./components/Global/Nav";
import LangNav from "./components/Global/LangNav";
import Home from "./components/Pages/Home/Home";
import GetInvolved from "./components/Pages/Get-involved/GetInvolved";
import WhoWeAre from "./components/Pages/Who-we-are/WhoWeAre";
import WhatWeDo from "./components/Pages/What-we-do/WhatWeDo";
import Contact from "./components/Pages/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LangNav />
        <Nav />
        <Router>
          <Home path="/" />
          <GetInvolved path="/get-involved" />
          <WhoWeAre path="/who-we-are" />
          <WhatWeDo path="/what-we-do" />
          <Contact path="/contact" />
        </Router>
      </div>
    );
  }
}

export default App;
