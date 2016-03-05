import React from 'react';
import autobind from 'autobind-decorator';

import Rebase from 're-base';
const base = Rebase.createClass('https://quiz-simply.firebaseio.com/');

import Quiz from '../Quiz/Quiz';
import Score from './Score';

@autobind
class TakeQuiz extends React.Component {

	constructor() {
		super();

		this.state = {
			answerSelections: {},
			questions: {},
			isSubmitted: false
		};
	}

	retakeQuiz() {
		this.setState({
			isSubmitted: false,
			answerSelections: {}
		});
	}

	selectAnswer(question, answer) {
		this.state.answerSelections[question] = answer;

		this.setState({
			answerSelections: this.state.answerSelections
		});
	}

	setAnswerSelections() {
		const answerSelections = {
			0: 1,
			1: 1,
			2: 3,
			3: 0,
			4: 0,
			5: 3,
			6: 2
		};

		this.setState({
			answerSelections: answerSelections
		});
	}

	submitQuiz() {
		const lengthOfQuiz = Object.keys(this.state.questions).length;
		const lengthOfSelections = Object.keys(this.state.answerSelections).length;

		if (lengthOfQuiz === lengthOfSelections) {
			this.setState({
				isSubmitted: true
			});
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
				<div className='take-quiz'>
					<div className='take-quiz-button-container'>
						<button className='button' onClick={this.submitQuiz}>Submit</button>
						<button className='button' onClick={this.setAnswerSelections}>Set Answers</button>
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

	componentDidMount() {
		base.syncState(`${this.props.params.quizId}/quiz`, {
			context: this,
			state: 'questions'
		});

		// var localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

		// if (localStorageRef) {
		//	 this.setState({
		//		 order: JSON.parse(localStorageRef)
		//	 });
		// }
	}
}

export default TakeQuiz;
