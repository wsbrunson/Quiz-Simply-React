import { SUBMIT_QUIZ } from '../constants/actionTypes';

const submitQuiz = (hasBeenSubmitted) => {
	return {
		type: SUBMIT_QUIZ,
		hasBeenSubmitted,
	};
};

export default submitQuiz;
