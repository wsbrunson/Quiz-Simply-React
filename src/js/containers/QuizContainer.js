import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/fetchQuizActions';
import { nextQuestion, previousQuestion } from '../actions/quizPaginationActions';
import { getQuestionAtIndex } from '../reducers/quizPaginationReducer';

import QuizPaginationComponent from '../components/QuizPaginationComponent';
import Quiz from '../components/Quiz';

class QuizContainer extends Component {
	componentDidMount() {
		this.props.fetchQuiz();
	}

	render() {
		return (
			<div>
				<Quiz
					quizName={this.props.quizName}
					quizQuestions={this.props.quizQuestions}
					fetchQuiz={this.props.fetchQuiz}
				/>
				<QuizPaginationComponent
					nextQuestion={this.props.nextQuestion}
					previousQuestion={this.props.previousQuestion}
				/>
			</div>
		);
	}
}

QuizContainer.propTypes = {
	fetchQuiz: PropTypes.func.isRequired,
	nextQuestion: PropTypes.func.isRequired,
	previousQuestion: PropTypes.func.isRequired,
	quizName: PropTypes.string.isRequired,
	quizQuestions: PropTypes.array.isRequired,
};

	quizName: fetchQuizReducer.quizName,
	quizQuestions: getQuestionAtIndex(
		fetchQuizReducer.quizQuestions,
		quizPaginationReducer.quizIndex
	),
});

QuizContainer = connect(
	mapStateToProps,
	{
		fetchQuiz,
		nextQuestion,
		previousQuestion,
	}
)(QuizContainer);

export default QuizContainer;
