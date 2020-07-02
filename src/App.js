import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { ReactComponent as Logo } from "./logo.svg";

import Home from "./components/Home";
import Episode from "./components/Episode";

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
            <Route path="/:episodeId" children={<Episode />} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
