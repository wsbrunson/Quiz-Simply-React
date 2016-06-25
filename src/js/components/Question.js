import React, { PropTypes } from 'react';

import ChoiceContainer from '../containers/ChoiceContainer';

const propTypes = {
	questionText: PropTypes.string.isRequired,
	answers: PropTypes.array.isRequired,
};

const renderAnswers = ({ text, id, questionId }, index) => (
	<ChoiceContainer
		key={index}
		choiceText={text}
		questionNumber={questionId}
		choiceNumber={id}
	/>
);

const Question = ({ questionText, answers = [] }) => (
	<li className="question">
		<h3 className="question-text">{questionText}</h3>
		<ul className="answers">
			{answers.map(renderAnswers)}
		</ul>
	</li>
);

Question.PropTypes = propTypes;

export default Question;
