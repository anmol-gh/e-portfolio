import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Data from "./components/livingConversation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <Navbar> </Navbar>
          </Route>
          <Route path="/users">
            <div>Hello World</div>
          </Route>
          <Route path="/home">
              <Navbar></Navbar>
              <AboutMe></AboutMe>
          </Route>
          <Route path="/living-conversation">
            <Navbar></Navbar>
            <Data></Data>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
