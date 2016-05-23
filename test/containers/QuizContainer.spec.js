import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { mount } from 'enzyme';

import quizPaginationReducer from '../../src/js/reducers/quizPaginationReducer';
import fetchQuizReducer from '../../src/js/reducers/fetchQuizReducer';
import QuizContainer from '../../src/js/containers/QuizContainer';
import Quiz from '../../src/js/components/Quiz';
import QuizPaginationComponent from '../../src/js/components/QuizPaginationComponent';

import quizService from '../../src/js/services/quizService';
import { quizName, quizQuestions } from '../fakeData/quizFake';

describe('QuizContainer', () => {
	let Component;
	let QuizComponent;
	let QuizPagination;

	beforeEach(() => {
		spyOn(quizService, 'getQuizName').and.returnValue(quizName);
		spyOn(quizService, 'getQuizData').and.returnValue(quizQuestions);

		const reducers = combineReducers({ quizPaginationReducer, fetchQuizReducer });

		let store = createStore(
			reducers,
			applyMiddleware(thunkMiddleware)
		);

		const wrapper = mount(
			<Provider store={store}>
				<QuizContainer />
			</Provider>
		);

		Component = wrapper.find(QuizContainer);
		QuizComponent = Component.find(Quiz);
		QuizPagination = Component.find(QuizPaginationComponent);
	});

	it('should render', () => {
		expect(Component.length).toBe(1);
	});

	it('should render the quiz with a quiz name from the quiz data', () => {
		expect(QuizComponent.prop('quizName')).toBe(quizName);
	});

	it('should render QuizPagination with correct quiz data', () => {
		expect(QuizComponent.prop('quizQuestions').length).toBe(1);
	});
});
