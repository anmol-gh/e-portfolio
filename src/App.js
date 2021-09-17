import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Data from "./components/livingConversation";
import DataLhtl from "./components/lhtl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <Navbar> </Navbar>
          <AboutMe></AboutMe>
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
      </Switch>
    </Router>
  );
}

export default App;
