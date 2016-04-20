import React from 'react';
import classNames from 'classnames';

const Choice = props => {
	const inputId = `${props.choiceNumber}-${props.questionNumber}`;

	const questionId = props.questionNumber - 1;
	const choiceId = props.choiceNumber - 1;

	return (
		<li>
			<input
				id={inputId}
				type="radio"
				name={`group-${props.questionNumber}`}
				onClick={props.selectAnswer.bind(this, questionId, choiceId)}
			/>
			<label htmlFor={inputId}>
				<span></span>
				<p className="choice-text">
					{ `${props.choiceNumber}. ${props.answer}`}
				</p>
			</label>
		</li>
	);
};

Choice.propTypes = {
	answer: React.PropTypes.string.isRequired,
	selectAnswer: React.PropTypes.func.isRequired,
	choiceNumber: React.PropTypes.number.isRequired,
	questionNumber: React.PropTypes.number.isRequired,
};

export default Choice;
