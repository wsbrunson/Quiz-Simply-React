import React from 'react';

import QuizNavigationBox from '../QuizNavigationBox/QuizNavigationBox';

const quizNavigationInformation = {
	createQuiz: {
		title: 'Create a Quiz!',
		buttonText: 'Create!',
		url: '/create-quiz/'
	},
	takeQuiz: {
		title: 'Take a Quiz!',
		buttonText: 'Start Quiz!',
		url: '/take-quiz/example-quiz'
	}
};

const App = props => {
	return (
		<div className='home'>
			<h1 className='home-title'>Quiz Simply</h1>
			<p className='home-description'>Create simple quizzes. Take simply quizzes. Continue living simply.</p>
			<div className='home-navigation'>
				<QuizNavigationBox info={quizNavigationInformation.takeQuiz} />
				<QuizNavigationBox info={quizNavigationInformation.createQuiz} />
			</div>
		</div>
	);
};

export default App;
