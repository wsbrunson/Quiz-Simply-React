import React from 'react';
import reactMixin from 'react-mixin';
import { History } from 'react-router';
/* eslint-disable no-unused-vars */
import autobind from 'autobind-decorator';
/* eslint-enable no-unused-vars */

@autobind
class QuizNavigationBox extends React.Component {
	goToQuizState() {
		const quizId = this.refs.quizId.value;
		this.history.pushState(null, `${this.props.info.url}${quizId}`);
	}

	render() {
		return (
			<div className="quiz-navigation-box">
				<h4 className="quiz-navigation-box-title">{this.props.info.title}</h4>
				<label>Enter the ID of the quiz you would like to take</label>
				<input className="quiz-navigation-box-input" type="text" ref="quizId" required />
				<button onClick={this.goToQuizState}>{this.props.info.buttonText}</button>
			</div>
		);
	}
}

QuizNavigationBox.PropTypes = {
	text: React.PropTypes.object.isRequired,
};

reactMixin.onClass(QuizNavigationBox, History);

export default QuizNavigationBox;
