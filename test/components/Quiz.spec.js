import React from 'react';
import { shallow } from 'enzyme';

import Quiz from '../../src/js/components/Quiz';
import Question from '../../src/js/components/Question';

import { quizQuestions } from '../fakeData/quizFake';

describe('Quiz Component', () => {
	let Component1;
	let Component2;
	let quizName1;
	let quizName2;

	beforeEach(() => {
		const saveSelection = jasmine.createSpy('save');
		quizName1 = 'Test Quiz 1';
		quizName2 = 'Test Quiz 2';

		const createComponent = (quizName) => {
			return shallow(
				<Quiz
					quizName={quizName}
					quizData={quizQuestions}
					saveSelection={saveSelection}
				/>
			);
		};

		Component1 = createComponent(quizName1);
		Component2 = createComponent(quizName2);
	});

	it('should render', () => {
		expect(Component1.length).toBeTruthy();
		expect(Component2.length).toBeTruthy();
	});

	it('should have a heading', () => {
		const heading1 = Component1.find('.heading');
		const heading2 = Component2.find('.heading');

		expect(heading1.length).toBeTruthy();
		expect(heading1.text()).toBe(quizName1);

		expect(heading2.length).toBeTruthy();
		expect(heading2.text()).toBe(quizName2);
	});

	it('should have Questions', () => {
		expect(Component1.find(Question).length).toBe(2);
	});
});
