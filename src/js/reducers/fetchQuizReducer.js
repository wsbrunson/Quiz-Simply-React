import { RECEIVE_QUIZ } from '../constants/actionTypes';

const initalState = {
	quizName: '',
	quizQuestions: [],
	quizLength: 0,
};

const fetchQuizReducer = (state = initalState, action) => {
	switch (action.type) {

	case RECEIVE_QUIZ:
		return {
			quizName: action.quizName,
			quizQuestions: action.quizQuestions,
			quizLength: action.quizQuestions ? action.quizQuestions.length : 0,
		};

	default:
		return state;
	}
};

export default fetchQuizReducer;
