import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';

export const nextQuestion = () => {
	return { type: NEXT_QUESTION };
};

export const previousQuestion = () => {
	return { type: PREVIOUS_QUESTION };
};

export default { nextQuestion, previousQuestion };
