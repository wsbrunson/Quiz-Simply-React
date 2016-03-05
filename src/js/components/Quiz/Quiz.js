import React from 'react';

import Question from './Question';

const Quiz = props => {
	function renderQuestions(key) {
		console.log(props);
		const question = props.questions[key];
		// const selection = props.selections[key];

		return (
			<Question
				key={key}
				questionNumber={parseInt(key, 10) + 1}
				questionTitle={question.question}
				choices={question.choices}
				selectAnswer={props.selectAnswer}
				/>
		);
	}

	return (
		<div>
			{Object.keys(props.questions).map(renderQuestions)}
		</div>
	);
};

export default Quiz;
