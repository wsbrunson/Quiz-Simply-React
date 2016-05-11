import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import QuizContainer from '../../src/js/containers/QuizContainer';
import QuizPagination from '../../src/js/components/QuizPaginationComponent';
import quizService from '../../src/js/services/quizService';

import { storeFake } from '../fakeData/storeFake';
import { quizName, quizQuestions } from '../fakeData/quizFake';

xdescribe('QuizContainer', () => {
	let Component;
	let QuizPaginationComponent;

	beforeEach(() => {
		spyOn(quizService, 'getQuizName').and.returnValue(quizName);
		spyOn(quizService, 'getQuizData').and.returnValue(quizQuestions);

		const store = storeFake({ selections: [] });

		const wrapper = mount(
			<Provider store={store}>
				<QuizContainer />
			</Provider>
		);

		Component = wrapper.find(QuizContainer);
		QuizPaginationComponent = QuizContainer.find(QuizPagination);
	});

	it('should render', () => {
		expect(Component.length).toBe(1);
	});

	it('should render QuizPagination with quiz data', () => {
		expect(QuizPaginationComponent.prop('quizData').length).toBe(2);
	});

	it('should render the quiz with a quiz name from the quiz data', () => {
		expect(QuizPaginationComponent.prop('quizName')).toBe(quizName);
	});
});
