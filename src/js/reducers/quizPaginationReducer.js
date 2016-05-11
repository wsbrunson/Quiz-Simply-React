import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';


const quizPaginationReducer = (state = 0, actions) => {
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
