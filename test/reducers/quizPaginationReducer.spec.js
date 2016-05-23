import quizPaginationReducer from '../../src/js/reducers/quizPaginationReducer';
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../../src/js/constants/actionTypes';

const returnQuizIndexObject = (index) => {
	return { quizIndex: index };
};

describe('Quiz Pagination Reducer', () => {
	const nextQuestionAction = { type: NEXT_QUESTION };
	const previousQuestionAction = { type: PREVIOUS_QUESTION };

	it('should advance the quiz index by one on a next action', () => {
		expect(quizPaginationReducer(undefined, nextQuestionAction))
			.toEqual(returnQuizIndexObject(1));
		expect(quizPaginationReducer(returnQuizIndexObject(1), nextQuestionAction))
			.toEqual(returnQuizIndexObject(2));
		expect(quizPaginationReducer(returnQuizIndexObject(2), nextQuestionAction))
			.toEqual(returnQuizIndexObject(3));
	});

	it('should subtract the quiz index by one on a previous action', () => {
		expect(quizPaginationReducer(returnQuizIndexObject(3), previousQuestionAction))
			.toEqual(returnQuizIndexObject(2));
		expect(quizPaginationReducer(returnQuizIndexObject(2), previousQuestionAction))
			.toEqual(returnQuizIndexObject(1));
		expect(quizPaginationReducer(returnQuizIndexObject(1), previousQuestionAction))
			.toEqual(returnQuizIndexObject(0));
	});
});
