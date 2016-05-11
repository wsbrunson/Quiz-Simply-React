import quizPaginationReducer from '../../src/js/reducers/quizPaginationReducer';
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../../src/js/constants/actionTypes';


describe('quizPaginationReducer Reducer', () => {
	const nextQuestionAction = { type: NEXT_QUESTION };
	const previousQuestionAction = { type: PREVIOUS_QUESTION };

	it('should advance the quiz index by one on a next action', () => {
		expect(quizPaginationReducer(undefined, nextQuestionAction)).toEqual(1);
		expect(quizPaginationReducer(1, nextQuestionAction)).toEqual(2);
		expect(quizPaginationReducer(2, nextQuestionAction)).toEqual(3);
	});

	it('should subtract the quiz index by one on a previous action', () => {
		expect(quizPaginationReducer(3, previousQuestionAction)).toEqual(2);
		expect(quizPaginationReducer(2, previousQuestionAction)).toEqual(1);
		expect(quizPaginationReducer(1, previousQuestionAction)).toEqual(0);
	});
});
