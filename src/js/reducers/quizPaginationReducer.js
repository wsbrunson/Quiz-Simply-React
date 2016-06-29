import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';

const initalIndex = 0;

const quizPaginationReducer = (state = initalIndex, actions) => {
	switch (actions.type) {
	case NEXT_QUESTION:
		return state + 1;
	case PREVIOUS_QUESTION:
		return state - 1;
	default:
		return state;
	}
};

export default quizPaginationReducer;

export const getQuestionAtIndex = (questions, index) => {
	const question = [];
	if (questions) {
		if (questions.length <= index) {
			question.push(questions[questions.length - 1]);
		} else if (index <= -1) {
			question.push(questions[0]);
		} else {
			question.push(questions[index]);
		}
	}

	return question;
};
