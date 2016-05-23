import { RECEIVE_QUIZ } from '../constants/actionTypes';

const initalState = {
	quizName: '',
	quizQuestions: [],
};

const fetchQuizReducer = (state = initalState, action) => {
	switch (action.type) {

	case RECEIVE_QUIZ:
		return {
			quizName: action.quizName,
			quizQuestions: action.quizQuestions,
		};

	default:
		return state;
	}
};

export default fetchQuizReducer;
