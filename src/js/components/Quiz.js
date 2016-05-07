import React from 'react';

import Question from './Question';

const propTypes = {
	quizName: React.PropTypes.string.isRequired,
	quizData: React.PropTypes.array.isRequired,
};

const Quiz = ({ quizData, quizName, saveSelection }) => {
	const renderQuestions = ({ text, answers }, index) => {
		return (
			<Question
				key={index}
				questionText={text}
				questionNumber={index}
				saveSelection={saveSelection}
				answers={answers}
			/>
		);
	};

	return (
		<div>
			<h1 className="heading">{quizName}</h1>
			<ul>
				{quizData.map(renderQuestions)}
			</ul>
		</div>
	);
};

Quiz.propTypes = propTypes;

export default Quiz;
