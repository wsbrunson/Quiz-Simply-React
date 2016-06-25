import { SUBMIT_QUIZ } from '../constants/actionTypes';

export const submitQuiz = (hasBeenSubmitted) => ({
	type: SUBMIT_QUIZ,
	hasBeenSubmitted,
});
