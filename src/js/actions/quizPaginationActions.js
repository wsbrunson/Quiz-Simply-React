import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants/actionTypes';

export const nextQuestion = (quizLength = 0) => {
	return {
		type: NEXT_QUESTION,
		quizLength,
	};
};

export const previousQuestion = () => {
	return { type: PREVIOUS_QUESTION };
};

export default { nextQuestion, previousQuestion };
