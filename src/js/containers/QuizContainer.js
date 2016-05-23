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
	const quizData = state.fetchQuizReducer;
	const quizIndex = state.quizPaginationReducer.quizIndex;

	return {
		quizName: quizData.quizName,
		quizQuestions: getQuestionAtIndex(quizData.quizQuestions, quizIndex),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchQuiz: () => {
			dispatch(fetchQuiz());
		},
		nextQuestion: () => {
			dispatch(nextQuestion);
		},
		previousQuestion: () => {
			dispatch(previousQuestion);
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
)(Quiz);

export default QuizContainer;
