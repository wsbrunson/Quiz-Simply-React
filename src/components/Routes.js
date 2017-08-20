// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoMatch from './NoMatch';
import QuizContainer from '../quiz/containers/QuizContainer';

const Routes = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={QuizContainer} />
      <Route component={NoMatch} />
    </Switch>
  </Router>;

export default Routes;
