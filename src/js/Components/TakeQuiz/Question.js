import React from 'react';

import Choice from './ChoiceComponent';

const Question = props => {
	function renderChoices() {
		let elements = [];

		props.choices.forEach((choice, key) => {
			elements.push(
				<Choice
					key={`${key} + ${props.questionNumber}`}
					choiceNumber={parseInt(key, 10) + 1}
					questionNumber={props.questionNumber}
					answer={choice.answer}
					selectAnswer={props.selectAnswer}
				/>
			);
		});

		return elements;
	}

	if (props.selection) {
		console.log(true);
	}
	return (
		<div className='question'>
			<h3 className='question-title'>{`Question ${props.questionNumber}`}</h3>
				<p className='question-copy'>{`${props.questionTitle}:`}</p>
				<ul>
					{renderChoices()}
				</ul>
		</div>
	);
};

Question.PropTypes = {
	questionTitle: React.PropTypes.string.isRequired,
	choices: React.PropTypes.array.isRequired,
	selectAnswer: React.PropTypes.func.isRequired,
	key: React.PropTypes.number.isRequired
};

export default Question;
