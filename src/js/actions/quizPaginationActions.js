import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';

export const nextQuestion = () => ({
	type: NEXT_QUESTION,
});

export const previousQuestion = () => ({
	type: PREVIOUS_QUESTION,
});
