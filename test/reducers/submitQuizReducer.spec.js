import submitQuizReducer from '../../src/js/reducers/submitQuizReducer';

describe('SubmitQuiz Reducer', () => {
	let validSubmission;
	let validSubmitState;

	let invalidSubmission;
	let invalidSubmitState;

	beforeEach(() => {
		validSubmission = { hasBeenSubmitted: true };
		invalidSubmission = { hasBeenSubmitted: false };

		validSubmitState = submitQuizReducer(undefined, validSubmission);
		invalidSubmitState = submitQuizReducer(validSubmission, invalidSubmission);
	});

	it('should set the quiz to submitted if true', () => {
		expect(validSubmitState).toEqual(validSubmission);
	});

	it('should set the quiz to unsubmitted if false', () => {
		expect(invalidSubmitState).toEqual(invalidSubmission);
	});
});
