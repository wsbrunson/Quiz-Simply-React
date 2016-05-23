import React from 'react';

const propTypes = {
	saveSelection: React.PropTypes.func.isRequired,
	choiceText: React.PropTypes.string.isRequired,
	questionNumber: React.PropTypes.number,
	choiceNumber: React.PropTypes.number,
};

const Choice = ({ saveSelection, choiceText, questionNumber, choiceNumber }) => {
	const buttonId = `${questionNumber}-${choiceNumber}`;
	return (
		<li className="choice">
			<input
				type="radio"
				id={buttonId}
				name={questionNumber}
				onClick={saveSelection}
			/>
			<label
				htmlFor={buttonId}
				className="choice-text"
			>{choiceText}
			</label>
		</li>
	);
};

Choice.propTypes = propTypes;

export default Choice;
