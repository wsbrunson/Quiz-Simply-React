import React from 'react';

import ChoiceContainer from '../containers/ChoiceContainer';

const propTypes = {
	questionText: React.PropTypes.string.isRequired,
	answers: React.PropTypes.array.isRequired,
};

const Question = ({ questionText, answers }) => {
	const renderAnswers = ({ text, id, questionId }, index) => {
		return (
			<ChoiceContainer
				key={index}
				choiceText={text}
				questionNumber={questionId}
				choiceNumber={id}
			/>
		);
	};

	return (
		<li className="question">
			<h3 className="question-text">{questionText}</h3>
			<ul className="answers">
				{answers.map(renderAnswers)}
			</ul>
		</li>
	);
};

Question.propTypes = propTypes;

export default Question;
