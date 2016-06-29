import React, { PropTypes } from 'react';

const propTypes = {
	saveSelection: PropTypes.func.isRequired,
	choiceText: PropTypes.string.isRequired,
	questionNumber: PropTypes.number,
	choiceNumber: PropTypes.number,
};

const Choice = ({ saveSelection, choiceText, questionNumber, choiceNumber }) => (
	<li className="choice">
		<input
			type="radio"
			id={`${questionNumber}-${choiceNumber}`}
			name={questionNumber}
			onClick={saveSelection}
		/>
		<label
			htmlFor={`${questionNumber}-${choiceNumber}`}
			className="choice-text"
		>{choiceText}
		</label>
	</li>
);


Choice.propTypes = propTypes;

export default Choice;
