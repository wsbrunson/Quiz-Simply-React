import submitQuiz from '../../src/js/actions/submitQuiz';

describe('submitQuiz Action', () => {
	it('should return a submitQuiz action', () => {
		expect(submitQuiz(true)).toEqual({ type: 'SUBMIT_QUIZ', hasBeenSubmitted: true });
		expect(submitQuiz(false)).toEqual({ type: 'SUBMIT_QUIZ', hasBeenSubmitted: false });
	});
});
