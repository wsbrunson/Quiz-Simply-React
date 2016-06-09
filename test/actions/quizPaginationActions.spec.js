import { nextQuestion, previousQuestion } from '../../src/js/actions/quizPaginationActions';
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../../src/js/constants/actionTypes';

describe('nextQuestion Action', () => {
	it('should return a nextQuestion action', () => {
		expect(nextQuestion()).toEqual({ type: NEXT_QUESTION, quizLength: 0 });
	});

	it('should return a nextQuestion action with a lenght when given', () => {
		expect(nextQuestion(2)).toEqual({ type: NEXT_QUESTION, quizLength: 2 });
	});
});

describe('previousQuestion Action', () => {
	it('should return a previousQuestion action', () => {
		expect(previousQuestion()).toEqual({ type: PREVIOUS_QUESTION });
	});
});
