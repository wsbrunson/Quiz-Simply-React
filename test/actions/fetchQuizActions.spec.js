import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchQuiz, receiveQuiz } from '../../src/js/actions/fetchQuizActions';
import { RECEIVE_QUIZ } from '../../src/js/constants/actionTypes';
import quizSerivce from '../../src/js/services/quizService';
import { quizName, quizDATA } from '../../src/js/quizJSON';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('FetchQuiz Action', () => {
	beforeEach(() => {
		spyOn(quizSerivce, 'getQuizName').and.returnValue(quizName);
		spyOn(quizSerivce, 'getQuizData').and.returnValue(quizDATA);
	});

	it('should create a recieve quiz action with the correct quiz data', () => {
		const store = mockStore({});

		store.dispatch(fetchQuiz());

		expect(store.getActions()[0].quizName).toBe(quizName);
		expect(store.getActions()[0].quizQuestions).toBe(quizDATA);
	});
});

describe('ReceiveQuiz Action', () => {
	it('should return a recieve quiz action', () => {
		const expectedAction = receiveQuiz(quizName, quizDATA);

		expect(expectedAction.type).toBe(RECEIVE_QUIZ);
		expect(expectedAction.quizName).toBe(quizName);
		expect(expectedAction.quizQuestions).toBe(quizDATA);
	});
});
