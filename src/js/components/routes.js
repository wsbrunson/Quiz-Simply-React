import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { browserHistory } from 'react-router';

import TakeQuiz from './Components/TakeQuiz/TakeQuiz';
import CreateQuiz from './Components/CreateQuiz/CreateQuiz';
import Home from './Components/HomeComponent';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/take-quiz/:quizId" component={TakeQuiz} />
		<Route path="/create-quiz/:quizId" component={CreateQuiz} />
	</Router>
);

export default routes;
