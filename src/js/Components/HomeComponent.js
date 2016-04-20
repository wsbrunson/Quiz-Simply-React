import React from 'react';
import navigationHelper from '../Helpers/NavigationHelper';

import QuizNavigationBox from './QuizNavigationBoxComponent';

const App = () => {
	return (
		<div className="home">
			<h1 className="home-title">Quiz Simply</h1>
			<p className="home-description">
				Create simple quizzes. Take simply quizzes. Continue living simply.
			</p>
			<div className="home-navigation">
				<QuizNavigationBox info={navigationHelper().takeQuiz} />
				<QuizNavigationBox info={navigationHelper().createQuiz} />
			</div>
		</div>
	);
};

export default App;
