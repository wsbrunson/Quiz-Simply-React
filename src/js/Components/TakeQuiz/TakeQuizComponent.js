import React from 'react';
import Rebase from 're-base';
const base = Rebase.createClass('https://quiz-simply.firebaseio.com/');

import Quiz from '../Quiz/Quiz';
import Score from './Score';

class TakeQuiz extends React.Component {

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
		base.syncState(`${this.props.params.quizId}/quiz`, {
			context: this,
			state: 'questions',
		});
			// var localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

			// if (localStorageRef) {
			//	 this.setState({
			//		 order: JSON.parse(localStorageRef)
			//	 });
			// }
	}

	setAnswerSelections() {
		const answerSelections = {
			0: 1,
			1: 1,
			2: 3,
			3: 0,
			4: 0,
			5: 3,
			6: 2,
		};

		this.setState({ answerSelections });
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
		} else {
			alert('Please answer all questions before continuing');
		}
	}

	render() {
		if (this.state.isSubmitted) {
			return (
				<Score
					correctAnswers={this.state.questions.map(question => question.correctAnswer)}
					selections={Object.keys(this.state.answerSelections)}
					retakeQuiz={this.retakeQuiz}
				/>
			);
		} else {
			return (
				<div className="take-quiz">
					<div className="take-quiz-button-container">
						<button className="button" onClick={this.submitQuiz}>Submit</button>
						<button className="button" onClick={this.setAnswerSelections}>Set Answers</button>
					</div>
					<Quiz
						questions={this.state.questions}
						answerSelections={this.state.answerSelections}
						selectAnswer={this.selectAnswer}
					/>
				</div>
			);
		}
	}
}

export default TakeQuiz;
