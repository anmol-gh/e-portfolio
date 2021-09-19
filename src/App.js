import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Data from "./components/livingConversation";
import DataLhtl from "./components/lhtl";
// import Test from "./components/test";
import dataTest from "./components/lstl-data.js";
import Test2 from "./components/test2";
import Picture from "./components/liv-con/liv-con-week2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/team">
          <h1>Under Construction 🚧</h1>
        </Route>
        <Route exact path="/">
          <Navbar></Navbar>
          <AboutMe></AboutMe>
        </Route>
        <Route exact path="/living-conversation">
          <Navbar></Navbar>
          <Data></Data>
        </Route>
        <Route exact path="/lhtl">
          <Navbar></Navbar>
          <DataLhtl></DataLhtl>
        </Route>
        <Route exact path="/liv-con-week-2">
          <Navbar></Navbar>
          <Picture></Picture>
        </Route>
        {/* <Route exact path="/test">
          <Navbar></Navbar>
          <Test></Test>
        </Route> */}
        {/* <Route exact path="/test2">
          <Navbar></Navbar>
          <Test2 week="Week 1"></Test2>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
