import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import Episode from './components/Episode';

const App = () => {
  return (
    <>
      <Router>
        <div>
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
