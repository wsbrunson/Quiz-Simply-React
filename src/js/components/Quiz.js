import React, { PropTypes } from 'react';

import Question from './Question';

const propTypes = {
	quizName: PropTypes.string.isRequired,
	quizQuestions: PropTypes.array.isRequired,
};

const renderQuestions = (question = {}, index) => (
	<Question
		key={index}
		questionText={question.text}
		answers={question.answers}
	/>
);

const Quiz = ({ quizName, quizQuestions = [] }) => (
	<div className="quiz">
		<h2 className="quiz-name">{quizName}</h2>
		<ul>
			{quizQuestions.map(renderQuestions)}
		</ul>
	</div>
);

Quiz.PropTypes = propTypes;

export default Quiz;
