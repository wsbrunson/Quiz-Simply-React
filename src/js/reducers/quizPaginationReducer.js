import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';

const initalState = {
	quizIndex: 0,
};

const quizPaginationReducer = (state = initalState, actions) => {
	switch (actions.type) {
	case NEXT_QUESTION:
		return (
			Object.assign({}, state, {
				quizIndex: actions.quizLength === state.quizIndex ?
					actions.quizLength :
					state.quizIndex + 1,
			})
		);
	case PREVIOUS_QUESTION:
		return (
			Object.assign({}, state, {
				quizIndex: state.quizIndex ? state.quizIndex - 1 : 0,
			})
		);

	default:
		return state;
	}
};

export default quizPaginationReducer;

export const getQuestionAtIndex = (questions, index) => (
	questions ? [questions[index]] : []
);
