import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import LivCon from "./components/livingConversation";
import LHTL from "./components/lhtl";
import TeamMembers from "./components/teamPage";
import Footer from "./components/footer";

//Importing Weeks of LHTL

import LhtlWeek1 from "./components/lhtl/lhtl-week1";
import LhtlWeek2 from "./components/lhtl/lhtl-week2";
import LhtlWeek3 from "./components/lhtl/lhtl-week3";

//Importing Weeks of Living Conversation

import LivConWeek1 from "./components/liv-con/liv-con-week1";
import LivConWeek2 from "./components/liv-con/liv-con-week2";
import LivConWeek3 from "./components/liv-con/liv-con-week3";
import LivConWeek4 from "./components/liv-con/liv-con-week4";
import LivConWeek6 from "./components/liv-con/liv-con-week6";
import GuestTalks from "./components/liv-con/guest-talks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <AboutMe />
          <Footer />
        </Route>
        <Route exact path="/lhtl">
          <Navbar />
          <LHTL />
          <Footer />
        </Route>
        <Route exact path="/team">
          <Navbar />
          <TeamMembers />
          <Footer />
        </Route>
        <Route exact path="/lhtl-fortnightly">
          <Navbar />
          <TeamMembers />
          <Footer />
        </Route>
        <Route exact path="/living-conversation">
          <Navbar />
          <LivCon />
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
        <Route exact path="/liv-con-week-6">
          <Navbar />
          <LivConWeek6 />
          <Footer />
        </Route>
        <Route exact path="/lhtl-week1">
          <Navbar />
          <LhtlWeek1 />
          <Footer />
        </Route>
        <Route exact path="/lhtl-week2">
          <Navbar />
          <LhtlWeek2 />
          <Footer />
        </Route>
        <Route exact path="/lhtl-week3">
          <Navbar />
          <LhtlWeek3 />
          <Footer />
        </Route>
        <Route exact path="/coursera">
          <Navbar />
          <LhtlWeek2 />
          <Footer />
        </Route>
        <Route exact path="/living-conversation/guest-talk">
          <Navbar />
          <GuestTalks />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
