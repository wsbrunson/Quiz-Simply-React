import React from 'react';
import classNames from 'classnames';

const Choice = props => {
	const inputId = `${props.choiceNumber}-${props.questionNumber}`;

	if (props.isSubmitted) {
		// const highlightChoice = isCorrect ? 'isCorrect' : 'isIncorrect';
	}

	const choiceClasses = classNames({
		'choice-text': true
		// 'isCorrect': isCorrect,
		// 'isIncorrect': isIncorrect
	});

	return (
		<li>
			<input
				id={inputId}
				type='radio'
				name={`group-${props.questionNumber}`}
				onClick={props.selectAnswer.bind(this, props.questionNumber - 1, props.choiceNumber - 1)}
			/>
			<label htmlFor={inputId}>
				<span></span>
				<p
					className={choiceClasses}>
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
	questionNumber: React.PropTypes.number.isRequired
};

export default Choice;
