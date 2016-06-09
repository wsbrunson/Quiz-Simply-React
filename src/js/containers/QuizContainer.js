import React from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/fetchQuizActions';
import { nextQuestion, previousQuestion } from '../actions/quizPaginationActions';

import QuizPaginationComponent from '../components/QuizPaginationComponent';
import Quiz from '../components/Quiz';

const getQuestionAtIndex = (questions, index) => {
	return questions ? [questions[index]] : [];
};

const mapStateToProps = (state) => {
	const { fetchQuizReducer, quizPaginationReducer } = state;

	return {
		quizName: fetchQuizReducer.quizName,
		quizQuestions: getQuestionAtIndex(
			fetchQuizReducer.quizQuestions,
			quizPaginationReducer.quizIndex
		),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchQuiz: () => {
			dispatch(fetchQuiz());
		},
		nextQuestion: () => {
			dispatch(nextQuestion());
		},
		previousQuestion: () => {
			dispatch(previousQuestion());
		},
	};
};

const QuizWrapperComponent = (props) => {
	return (
		<div>
			<Quiz
				quizName={props.quizName}
				quizQuestions={props.quizQuestions}
				fetchQuiz={props.fetchQuiz}
			/>
			<QuizPaginationComponent
				nextQuestion={props.nextQuestion}
				previousQuestion={props.previousQuestion}
			/>
		</div>
	);
};

const QuizContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(QuizWrapperComponent);

export default QuizContainer;
