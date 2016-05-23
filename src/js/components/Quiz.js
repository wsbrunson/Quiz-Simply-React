import React from 'react';

import Question from './Question';

const propTypes = {
	quizName: React.PropTypes.string.isRequired,
	quizQuestions: React.PropTypes.array.isRequired,
};

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.renderQuestions = this.renderQuestions.bind(this);
	}

	componentDidMount() {
		this.props.fetchQuiz();
	}

	renderQuestions(question, index) {
		return (
			<Question
				key={index}
				questionText={question.text}
				answers={question.answers}
			/>
		);
	}

	render() {
		if (!this.props.quizQuestions.length || this.props.quizQuestions[0] === undefined) {
			return <p>No Questions Found</p>;
		}

		return (
			<div className="quiz">
				<h2 className="quiz-name">{this.props.quizName}</h2>
				<ul>
					{this.props.quizQuestions.map(this.renderQuestions)}
				</ul>
			</div>
		);
	}
}

Quiz.propTypes = propTypes;

export default Quiz;
