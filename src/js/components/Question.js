import React from 'react';

import ChoiceContainer from '../containers/ChoiceContainer';

const propTypes = {
	questionText: React.PropTypes.string.isRequired,
	answers: React.PropTypes.array.isRequired,
};

const Question = ({ questionText, answers, questionNumber }) => {
	const renderAnswers = (choiceText, index) => {
		return (
			<ChoiceContainer
				key={index}
				choiceText={choiceText}
				questionNumber={questionNumber}
				choiceNumber={index}
			/>
		);
	};

	return (
		<li>
			<h3>{questionText}</h3>
			<ul className="answers">
				{answers.map(renderAnswers)}
			</ul>
		</li>
	);
};

Question.propTypes = propTypes;

export default Question;
