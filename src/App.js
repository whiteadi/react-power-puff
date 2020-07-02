import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import { ReactComponent as Logo } from "./logo.svg";
import Forofor from "./404-error.png";

import Home from "./components/Home";
import Episode from "./components/Episode";

const NoMatchPage = () => {
  return (
    <img src={Forofor} alt="404" />
  );
};

const App = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:episodeId" children={<Episode />} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
