import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import quizPaginationReducer from '../../src/js/reducers/quizPaginationReducer';
import fetchQuizReducer from '../../src/js/reducers/fetchQuizReducer';
import QuizContainer from '../../src/js/containers/QuizContainer';
import Quiz from '../../src/js/components/Quiz';
import QuizPaginationComponent from '../../src/js/components/QuizPaginationComponent';

import quizService from '../../src/js/services/quizService';
import { quizName, quizQuestions } from '../fakeData/quizFake';

describe('QuizContainer', () => {
	let QuizComponent;
	let QuizPagination;

	beforeEach(() => {
		spyOn(quizService, 'getQuizName').and.returnValue(quizName);
		spyOn(quizService, 'getQuizData').and.returnValue(quizQuestions);

		const store = createStore(
			combineReducers({ quizPaginationReducer, fetchQuizReducer }),
			{},
			applyMiddleware(thunkMiddleware)
		);
		const wrapper = mount(
			<Provider store={store}>
				<QuizContainer />
			</Provider>
		);
		QuizComponent = wrapper.find(Quiz);
		QuizPagination = wrapper.find(QuizPaginationComponent);
	});

	it('should fetch quiz when loaded', () => {
		expect(quizService.getQuizName).toHaveBeenCalled();
		expect(quizService.getQuizData).toHaveBeenCalled();
	});

	it('should render the quiz with a quiz name from the quiz data', () => {
		expect(QuizComponent.prop('quizName')).toBe(quizName);
	});

	it('should render a question', () => {
		expect(QuizComponent.find('h3').text()).toBe(quizQuestions[0].text);
	});

	it('should fetch quiz when loaded', () => {
		expect(quizService.getQuizName).toHaveBeenCalled();
		expect(quizService.getQuizData).toHaveBeenCalled();
	});

	describe('- QuizPagination Component', () => {
		let nextButton;
		let questionText;

		function getUpdatedText() {
			return QuizComponent.find('h3').text();
		}

		describe('when clicking the next button', () => {
			beforeEach(() => {
				nextButton = QuizPagination.find('.pagination-next-button');
				nextButton.simulate('click');
			});

			it('should navigate to the next question', () => {
				expect(getUpdatedText()).toBe(quizQuestions[1].text);
			});

			it('should not navigate to the next question when there are none left', () => {
				nextButton.simulate('click');

				expect(getUpdatedText()).toBe(quizQuestions[1].text);
			});
		});

		describe('when clicking the previous button', () => {
			it('should navigate to the previous question', () => {
				QuizPagination.find('.pagination-next-button').simulate('click');
				questionText = QuizComponent.find('h3').text();
				expect(questionText).toBe(quizQuestions[1].text);

				QuizPagination.find('.pagination-previous-button').simulate('click');
				questionText = QuizComponent.find('h3').text();
				expect(questionText).toBe(quizQuestions[0].text);
			});

			it('should not navigate to the previous question when on the first question', () => {
				QuizPagination.find('.pagination-previous-button').simulate('click');
				questionText = QuizComponent.find('h3').text();
				expect(questionText).toBe(quizQuestions[0].text);
			});
		});
	});
});
