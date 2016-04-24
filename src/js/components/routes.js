import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { browserHistory } from 'react-router';

import TakeQuiz from 'components/TakeQuiz/TakeQuizComponent';
import CreateQuiz from 'components/CreateQuiz/CreateQuizComponent';
import Home from 'components/HomeComponent';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/take-quiz/:quizId" component={TakeQuiz} />
		<Route path="/create-quiz/:quizId" component={CreateQuiz} />
	</Router>
);

export default routes;
