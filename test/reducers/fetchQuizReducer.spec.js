import fetchQuizReducer from '../../src/js/reducers/fetchQuizReducer';
import { RECEIVE_QUIZ } from '../../src/js/constants/actionTypes';
import { quizName, quizDATA } from '../../src/js/quizJSON';

describe('Fetch Quiz Reducer', () => {
	describe('when receiving a quiz', () => {
		it('should return a state with a quiz', () => {
			const receiveQuizAction = {
				type: RECEIVE_QUIZ,
				quizName,
				quizQuestions: quizDATA,
			};

			expect(fetchQuizReducer(undefined, receiveQuizAction)).toEqual({
				quizName,
				quizQuestions: quizDATA,
			});
		});
	});
});
