import { Router, Route, browserHistory } from "react-router";
import React from "react";

import LandingPage from "./LandingPage";
import NoMatch from "./NoMatch";
import QuizContainer from "../containers/QuizContainer";

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/quiz/:quizId" component={QuizContainer} />
    <Route path="*" component={NoMatch} />
  </Router>
);

export default Routes;
