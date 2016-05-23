import { RECEIVE_QUIZ } from '../constants/actionTypes';
import quizSerivce from '../services/quizService';

export const receiveQuiz = (quizName, quizQuestions) => {
	return {
		type: RECEIVE_QUIZ,
		quizName,
		quizQuestions,
	};
};

export const fetchQuiz = () => {
	return dispatch => {
		dispatch(receiveQuiz(
			quizSerivce.getQuizName(),
			quizSerivce.getQuizData()
		));

		return null;
	};
};

export default { fetchQuiz };
