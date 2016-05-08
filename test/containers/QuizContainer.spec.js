import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import QuizContainer from '../../src/js/containers/QuizContainer';
import Quiz from '../../src/js/components/Quiz';
import quizService from '../../src/js/services/quizService';

import { storeFake } from '../fakeData/storeFake';
import { quizFake } from '../fakeData/quizFake';

describe('QuizContainer', () => {
	let Component;
	let QuizComponent;

	beforeEach(() => {
		spyOn(quizService, 'getQuizName').and.returnValue(quizFake.quizName);
		spyOn(quizService, 'getQuizData').and.returnValue(quizFake.quizData);

		const store = storeFake({ selections: [] });

		const wrapper = mount(
			<Provider store={store}>
				<QuizContainer />
			</Provider>
		);

		Component = wrapper.find(QuizContainer);
		QuizComponent = Component.find(Quiz);
	});

	it('should render', () => {
		expect(Component.length).toBe(1);
	});

	it('should render Quiz with quiz data', () => {
		expect(QuizComponent.prop('quizData').length).toBe(2);
	});

	it('should render the quiz with a quiz name from the quiz data', () => {
		expect(QuizComponent.prop('quizName')).toBe(quizFake.quizName);
	});
});
