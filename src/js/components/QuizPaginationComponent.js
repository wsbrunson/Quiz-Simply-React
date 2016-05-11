import React from 'react';

import Quiz from './Quiz';

const propTypes = {
	quizName: React.PropTypes.string.isRequired,
	quizData: React.PropTypes.array.isRequired,
};


const QuizPaginationComponent = (props) => {
	return (
		<Quiz
			quizName={props.quizName}
			quizData={props.quizData}
		/>
	);
};

QuizPaginationComponent.propTypes = propTypes;

export default QuizPaginationComponent;
