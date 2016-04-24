import React from 'react';

export class Score extends React.Component {
	constructor() {
		super();

		this.calculateScore = this.calculateScore.bind(this);
	}

	calculateScore() {
		const correctAnswers = this.props.correctAnswers;
		const selections = this.props.selections;

		let score = 0;

		for (var i = 0; i < correctAnswers.length; i++) {
			if (correctAnswers[i] === parseInt(selections[i], 10)) {
				score++;
			} else {}
		}

		return score;
	}

	render() {
		return (
			<div className='score'>
				<h2 className='score-title'>Quiz Complete!</h2>
					<p className='score-total'>Your total score is: <span className='score-number'>{this.calculateScore()}</span></p>

				<div className='score-button-container'>
					<button
						className='button'
						onClick={this.props.retakeQuiz}>Retake Quiz</button>
					<button className='button'>Show Answers</button>
				</div>
			</div>
		);
	}
}

Score.PropTypes = {
	correctAnswers: React.PropTypes.string.isRequired,
	selections: React.PropTypes.array.isRequired,
	retakeQuiz: React.PropTypes.func.isRequired,
	showAnswers: React.PropTypes.number.isRequired
};
