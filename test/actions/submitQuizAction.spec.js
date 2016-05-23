import submitQuiz from '../../src/js/actions/submitQuizAction';
import { SUBMIT_QUIZ } from '../../src/js/constants/actionTypes';

describe('submitQuiz Action', () => {
	it('should return a submitQuiz action', () => {
		expect(submitQuiz(true)).toEqual({ type: SUBMIT_QUIZ, hasBeenSubmitted: true });
		expect(submitQuiz(false)).toEqual({ type: SUBMIT_QUIZ, hasBeenSubmitted: false });
	});
});
