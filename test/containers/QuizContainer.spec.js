import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import QuizContainer from '../../src/js/containers/QuizContainer';
import Quiz from '../../src/js/components/Quiz';
import quizService from '../../src/js/services/quizService';

import { storeFake } from '../fakeData/storeFake';
import { quizFake } from '../fakeData/quizFake';

fdescribe('QuizContainer', () => {
	let Component;
	let QuizComponent;

	beforeEach(() => {
		console.log(quizService);
		QuizContainer.__Rewire__('quizService', () => {
			return {
				getQuizData: () => quizFake.quizData,
				getQuizName: () => quizFake.quizName,
			};
		});
		console.log(quizFake.quizData);
		console.log(quizService.getQuizData());

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
		const quizData = QuizComponent.prop('quizData');
		expect(quizData.length).toBe(2);
	});

	xit('should render the quiz with a quiz name from the quiz data', () => {
		expect(QuizComponent.prop('quizName')).toBe(quizFake.quizName);
	});
});
