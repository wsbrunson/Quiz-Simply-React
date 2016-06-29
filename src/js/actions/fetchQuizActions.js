import { RECEIVE_QUIZ } from '../constants/actionTypes';
import quizSerivce from '../services/quizService';

const receiveQuiz = (quizName, quizQuestions) => ({
	type: RECEIVE_QUIZ,
	quizName,
	quizQuestions,
	quizLength: quizQuestions.length,
});

export const fetchQuiz = () => (dispatch) => {
	dispatch(receiveQuiz(
		quizSerivce.getQuizName(),
		quizSerivce.getQuizData()
	));

	return null;
};
