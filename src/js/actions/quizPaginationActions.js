import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';

export const nextQuestion = (quizLength = 0) => ({
	type: NEXT_QUESTION,
	quizLength,
});

export const previousQuestion = () => ({
	type: PREVIOUS_QUESTION,
});
