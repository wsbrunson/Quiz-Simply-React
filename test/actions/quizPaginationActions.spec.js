import { nextQuestion, previousQuestion } from '../../src/js/actions/quizPaginationActions';
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../../src/js/constants/actionTypes';

describe('nextQuestion Action', () => {
	it('should return a nextQuestion action', () => {
		expect(nextQuestion()).toEqual({ type: NEXT_QUESTION });
	});
});

describe('previousQuestion Action', () => {
	it('should return a previousQuestion action', () => {
		expect(previousQuestion()).toEqual({ type: PREVIOUS_QUESTION });
	});
});
