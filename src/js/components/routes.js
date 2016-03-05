import React from 'react';
import { Router } from'react-router';
import { Route } from'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import TakeQuiz from './TakeQuiz/TakeQuiz';
import CreateQuiz from './CreateQuiz/CreateQuiz';
import Home from './Home/Home/Home';

var routes = (
	<Router history={createBrowserHistory()}>
		<Route path='/' component={Home} />
		<Route path='/take-quiz/:quizId' component={TakeQuiz} />
		<Route path='/create-quiz/:quizId' component={CreateQuiz} />
	</Router>
);

export default routes;
