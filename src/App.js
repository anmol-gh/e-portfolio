import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import LivCon from "./components/livingConversation";
import LHTL from "./components/lhtl";
import TeamMembers from "./components/teamPage";
import Footer from "./components/footer";

//Importing Weeks of Living Conversation

import LivConWeek1 from "./components/liv-con/liv-con-week1";
import LivConWeek2 from "./components/liv-con/liv-con-week2";
import LivConWeek3 from "./components/liv-con/liv-con-week3";
import LivConWeek4 from "./components/liv-con/liv-con-week4";
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
          <LivCon />
          <Footer />
        </Route>
        <Route exact path="/lhtl">
          <Navbar />
          <LHTL />
          <Footer />
        </Route>
        <Route exact path="/liv-con-week-1">
          <Navbar />
          <LivConWeek1 />
          <Footer />
        </Route>
        <Route exact path="/liv-con-week-2">
          <Navbar />
          <LivConWeek2 />
          <Footer />
        </Route>
        <Route exact path="/liv-con-week-3">
          <Navbar />
          <LivConWeek3 />
          <Footer />
        </Route>
        <Route exact path="/liv-con-week-4">
          <Navbar />
          <LivConWeek4 />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
