import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Data from "./components/livingConversation";
import DataLhtl from "./components/lhtl";
// import Test from "./components/test";
import dataTest from "./components/lstl-data.js";
import Test2 from "./components/test2";
import Picture from "./components/liv-con/liv-con-week2";
import TeamMembers from "./components/teamPage";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/team">
          <Navbar />
          <TeamMembers />
          <Footer />
        </Route>
        <Route exact path="/">
          <Navbar />
          <AboutMe />
          <Footer />
        </Route>
        <Route exact path="/living-conversation">
          <Navbar />
          <Data />
          <Footer />
        </Route>
        <Route exact path="/lhtl">
          <Navbar />
          <DataLhtl />
          <Footer />
        </Route>
        <Route exact path="/liv-con-week-2">
          <Navbar />
          <Picture />
          <Footer />
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
