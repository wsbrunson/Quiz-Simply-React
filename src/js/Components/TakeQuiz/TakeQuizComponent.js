import React from 'react';

import TakeQuizService from 'services/TakeQuizService';

import Quiz from 'components/TakeQuiz/QuizComponent';
import Score from 'components/TakeQuiz/ScoreComponent';
// import UserAlert from 'components/UserAlertComponent';

const takeQuizService = new TakeQuizService();

export class TakeQuiz extends React.Component {
	constructor() {
		super();

		this.state = {
			answerSelections: {},
			questions: {},
			isSubmitted: false,
		};

		this.retakeQuiz = this.retakeQuiz.bind(this);
		this.selectAnswer = this.selectAnswer.bind(this);
		this.submitQuiz = this.submitQuiz.bind(this);
	}

	componentDidMount() {
		takeQuizService.syncState(`${this.props.params.quizId}/quiz`, {
			context: this,
			state: 'questions',
		});
	}

	selectAnswer(question, answer) {
		this.state.answerSelections[question] = answer;

		this.setState({ answerSelections: this.state.answerSelections });
	}

	retakeQuiz() {
		this.setState({
			isSubmitted: false,
			answerSelections: {},
		});
	}

	submitQuiz() {
		const lengthOfQuiz = Object.keys(this.state.questions).length;
		const lengthOfSelections = Object.keys(this.state.answerSelections).length;

		if (lengthOfQuiz === lengthOfSelections) {
			this.setState({ isSubmitted: true });
		}
	}

	render() {
		const scoreScreen = (<Score
			correctAnswers={this.state.questions.map(question => question.correctAnswer)}
			selections={Object.keys(this.state.answerSelections)}
			retakeQuiz={this.retakeQuiz}
		/>);

		const takeQuizScreen = (<div className="take-quiz">
			<div className="take-quiz-button-container">
				<button className="button" onClick={this.submitQuiz}>Submit</button>
				<button className="button" onClick={this.setAnswerSelections}>Set Answers</button>
			</div>
			<Quiz
				questions={this.state.questions}
				answerSelections={this.state.answerSelections}
				selectAnswer={this.selectAnswer}
			/>
		</div>);

		return this.state.isSubmitted ? scoreScreen : takeQuizScreen;
	}
}

TakeQuiz.propTypes = {
	hasBeenSubmitted: React.PropTypes.bool.isRequired,
	quizId: React.PropTypes.string.isRequired,
};
