import React from 'react';
import { mount } from 'enzyme';

import App from '../src/js/app';
import Quiz from '../src/js/quiz';
import Choice from '../src/js/choice';

import { fakeQuiz } from './fakeData/fakeQuiz';

describe('App Component', () => {
	let Component;

	beforeEach(() => {
		Component = mount(<App quizData={fakeQuiz} />);
	});

	it('should render', () => {
		expect(Component).toBeTruthy();
	});

	it('should have a Quiz', () => {
		expect(Component.find(Quiz).length).toBeTruthy();
	});

	xdescribe('when selecting a choice', () => {
		let firstChoice;
		let componentState;

		beforeEach(() => {
			firstChoice = Component
				.find(Choice).at(0)
				.find('input').at(0);

			firstChoice.simulate('click');
		});

		it('should save the choice', () => {
			componentState = Component.state('selections');

			expect(componentState[0]).toBe(0);
			expect(componentState.length).toBe(1);
		});

		it('should overwrite old choice when new selection is made', () => {
			firstChoice.simulate('click');

			componentState = Component.state('selections');

			expect(componentState[0]).toBe(0);
			expect(componentState.length).toBe(1);
		});

		it('should save multiple selections', () => {
			// console.log(Component.find(Choice).at(2).find('input'));
			Component
				.find(Choice).at(2)
				.find('input').simulate('click');

			componentState = Component.state('selections');

			expect(componentState[0]).toBe(0);
			expect(componentState[1]).toBe(0);
			expect(componentState.length).toBe(2);
		});
	});
});
