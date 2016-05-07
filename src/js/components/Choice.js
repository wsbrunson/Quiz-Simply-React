import React from 'react';

const propTypes = {
	saveSelection: React.PropTypes.func.isRequired,
	choiceText: React.PropTypes.string.isRequired,
};

const Choice = ({ saveSelection, choiceText, isChecked, questionNumber, choiceNumber }) => {
	const buttonId = `${questionNumber}-${choiceNumber}`;
	return (
		<li className="choice">
			<input
				type="radio"
				id={buttonId}
				name={questionNumber}
				onClick={saveSelection}
				checked={isChecked}
			/>
			<label htmlFor={buttonId}>{choiceText}</label>
		</li>
	);
};

Choice.propTypes = propTypes;

export default Choice;
